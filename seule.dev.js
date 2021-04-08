"use strict";

class Seule {
  constructor(app) {
    this.el = document.querySelectorAll(app.el);
    this.child = false;
    this.data = app.data || {};
    let old;

    this.shadow = () => {
      let el = this.el[0],
        child;

      class Root extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({
            mode: "closed"
          });
          let linkElement = document.createElement("link");
          linkElement.setAttribute("rel", "stylesheet");
          if (app.style) linkElement.setAttribute("href", app.style + ".css");
          shadow.appendChild(linkElement);
          let cl = el.cloneNode(true);
          el.innerHTML = "";
          shadow.appendChild(cl);
          child = shadow.children[1];
        }
      }

      customElements.define("seule-" + app.el.replace("#", ""), Root);
      let seule = document.createElement("seule-" + app.el.replace("#", ""));
      el.appendChild(seule);
      this.child = child;
    };

    this.ren = (con) => {
      let keys = Object.keys(this.data),
        content = con || this.child.innerHTML;

      for (let item of keys) {
        while (content.includes("{{" + item + "}}"))
          content = content.replace("{{" + item + "}}", this.data[item]);
      }

      this.child.innerHTML = content;
    };

    this.shadow();
    old = this.child.innerHTML;
    this.old = old;
    this.ren();
    if (app.root) this.Root();
    if (app.handler) app.handler(this, (s) => this.Find(s));
    if (app.htmlMethods) this.HtmlMethods();
  }

  Find(selector) {
    let parent = this.child,
      sup = this;

    class el {
      constructor(select) {
        try {
          this.el = parent.querySelectorAll(select);
        } catch (e) {
          if (select.length) this.el = select;
          else this.el = [select];
        }
      }

      Each(callback) {
        for (const element of this.el) callback.call(element);

        return this;
      }

      On(event, handler) {
        if (event === "hold") this.Hold(handler);
        else
          return this.Each(function () {
            this.addEventListener(
              event,
              () => handler(new el(this), this),
              false
            );
          });
      }

      Click(handler) {
        this.On("click", (el) => handler(el));
        return this;
      }

      Hold(handler, time) {
        time = time || "1.5s";
        return this.Each(function () {
          let mouseIsDown = false,
            isTouch =
              "ontouchstart" in window ||
              navigator.MaxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0,
            mouseDown = isTouch ? "touchstart" : "mousedown",
            mouseUp = isTouch ? "touchend" : "mouseup";
          this.addEventListener(mouseDown, function (e) {
            mouseIsDown = true;
            setTimeout(function () {
              if (mouseIsDown) {
                handler(new el(e), e);
              }
            }, parseFloat(time.replace(/s/g, "")) * 1000);
          });
          this.addEventListener(mouseUp, function () {
            mouseIsDown = false;
          });
        });
      }

      Focus(handler) {
        if (handler) this.On("focus", (el) => handler(el));
        else this.el[0].focus();
        return this;
      }

      Blur(handler) {
        if (handler) this.On("blur", (el) => handler(el));
        else this.el[0].blur();
        return this;
      }

      Swipe(on, handler) {
        let elem = this.el,
          xDown,
          yDown;

        for (let e of elem) {
          e.addEventListener("touchstart", handleTouchStart, false);
          e.addEventListener("touchmove", handleTouchMove, false);
        }

        function handleTouchStart(evt) {
          xDown = evt.touches[0].clientX;
          yDown = evt.touches[0].clientY;
        }

        function handleTouchMove(evt) {
          if (!xDown || !yDown) {
            return;
          }

          let xUp = evt.touches[0].clientX,
            yUp = evt.touches[0].clientY,
            xDiff = xDown - xUp,
            yDiff = yDown - yUp;

          if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
              if (on === "left") handler(new el(this), this);
              else return false;
            } else if (xDiff < 0) {
              if (on === "right") handler(new el(this), this);
              else return false;
            }
          } else {
            if (yDiff > 0) {
              if (on === "top") handler(new el(this), this);
              else return false;
            } else if (yDiff < 0) {
              if (on === "bottom") handler(new el(this), this);
              else return false;
            }
          }
          /* reset values */

          xDown = null;
          yDown = null;
        }

        return this;
      }

      HotKey(query, handler) {
        let key = "",
          start,
          mapObj = {
            Arrow: "",
            Control: "ctrl"
          },
          querys = query.replace(/\s/g, "");
        return this.Each(function () {
          this.addEventListener(
            "keydown",
            function (event) {
              key += event.key;
              key = key.replace(/Arrow|Control/gi, function (matched) {
                return mapObj[matched];
              });
              start = key.toLowerCase().indexOf(querys.toLowerCase());

              if (start > -1) {
                handler(new el(this), this);
                key = "";
              }

              setInterval(() => (key = ""), 5000);
            },
            true
          );
        });
      }

      Copy(target, options) {
        let tar = parent.querySelector(target),
          ons = options.split(":");

        for (let on of ons) {
          this.On(on.trimStart().trimEnd(), function () {
            let eventFired = new MouseEvent(on.trimStart().trimEnd(), {
              view: window,
              bubbles: true,
              cancelable: true
            });
            tar.dispatchEvent(eventFired);
          });
        }

        return this;
      }

      Toggle(event, options) {
        let check = true;
        this.On(event, function (el) {
          if (check === true) {
            options.handler(el);
            check = false;
            return;
          }

          options.callback(el);
          check = true;
        });
        return this;
      }

      Classes(className) {
        let result = {},
          handler = (action) => {
            for (const e of this.el) e.classList[action](className);
          },
          list = ["add", "remove", "toggle"];

        result.list = [];

        for (const element of this.el[0].classList) result.list.push(element);

        result.contains = () => this.el[0].classList.contains(className);

        for (let a of list)
          result[a] = () => {
            handler(a);
            return this;
          };

        return result;
      }

      Css(cssProperties, value) {
        if (typeof cssProperties === "object") {
          return this.Each(function () {
            this.style.cssText = el.objectToStyle(cssProperties);
          });
        }

        if (value)
          return this.Each(function () {
            this.style[cssProperties] = value;
          });
        return getComputedStyle(this.el[0])[cssProperties];
      }

      Visible() {
        let options = {};

        options.showing = () => {
          for (let el of this.el) el.style.visibility = "visible";

          return this;
        };

        options.hidden = () => {
          for (let el of this.el) el.style.visibility = "hidden";

          return this;
        };

        options.status = () => this.el[0].style.visibility !== "hidden";

        return options;
      }

      Show() {
        return this.Each(function () {
          let state = getComputedStyle(this).display;
          if (state === "none") this.style.display = "inherit";
        });
      }

      Hide() {
        return this.Each(function () {
          this.style.display = "none";
        });
      }

      Opacity(value) {
        if (value)
          return this.Each(function () {
            this.style.opacity = value;
          });
        return this.el[0].style.opacity;
      }

      Anime(options) {
        if (options) {
          let keys = Object.keys(options),
            arr = {},
            newCss = {},
            max = {},
            ancient = {},
            origin = {};

          for (const element of keys) {
            let forbidden = "duration property direction loop time delay text";

            if (
              typeof options[element] !== "object" &&
              !forbidden.includes(element)
            ) {
              options[element] = {
                value: options[element]
              };
            }

            let delay = options[element].delay || "0s",
              duration =
                options[element].duration || options.duration || "0.7s";

            if (!forbidden.includes(element)) {
              let style = getComputedStyle(this.el[0]);
              arr[element] = duration + " " + delay;
              newCss[element] = options[element].value || "inherit";
              if (ancient === origin)
                ancient[element] = style[element] || "inherit";
              max[element] =
                parseFloat(delay.replace(/s/g, "")) +
                parseFloat(duration.replace(/s/g, ""));
            }
          }

          newCss.transition = el
            .objectToStyle(arr)
            .replace(/:/g, " ")
            .replace(/;/g, ", ");
          newCss["transition-timing-function"] = options.type || "ease";
          if (options.property)
            newCss["transition-property"] = options.property;

          if (!options.loop && !options.direction) {
            if (options.duration)
              newCss["transition-duration"] = options.duration;
            if (options.delay) newCss["transition-delay"] = options.delay;
          }

          ancient.transition = newCss.transition;
          ancient["transition-timing-function"] =
            newCss["transition-timing-function"];
          if (options.property)
            ancient["transition-property"] = newCss["transition-property"];
          if (options.duration)
            ancient["transition-duration"] = newCss["transition-duration"];
          if (options.delay)
            ancient["transition-delay"] = newCss["transition-delay"];
          if (ancient === origin) origin = ancient;
          let array = Object.values(max);
          max = Math.max(...array) * 1000;
          return this.Each(function () {
            let element = this,
              times = 1,
              boucle,
              delay = 100;
            if (options.loop || options.direction)
              if (options.delay)
                delay = parseFloat(options.delay.replace(/s/g, "")) * 1000;
            let interval = parseInt(max + delay) * 2 + 100;

            if (options.direction || options.loop) {
              action(max + delay);
              boucle = setInterval(function () {
                if (options.time) action(max + delay, options.time);
                else action(max + delay);
              }, interval);
              if (options.direction) clearInterval(boucle);
            } else {
              element.setAttribute("style", el.objectToStyle(newCss));
            }

            function action(delay, time) {
              element.setAttribute("style", el.objectToStyle(newCss));
              setTimeout(() => {
                element.setAttribute("style", el.objectToStyle(ancient));
              }, parseInt(delay));

              if (time) {
                times++;
                if (time <= times) clearInterval(boucle);
              }
            }
          });
        }

        return this.Each(function () {
          this.style.transition = "all ease 0.7s";
        });
      }

      Width(value) {
        if (value)
          return this.Each(function () {
            this.style.width = value;
          });
        return getComputedStyle(this.el[0]).width;
      }

      Height(value) {
        if (value)
          return this.Each(function () {
            this.style.height = value;
          });
        return getComputedStyle(this.el[0]).height;
      }

      Attr(attribute) {
        let options = {};

        options.set = (value) => {
          for (const el of this.el) el.setAttribute(attribute, value);

          return this;
        };

        options.remove = () => {
          for (const el of this.el) el.removeAttribute(attribute);

          return this;
        };

        options.get = () => this.el[0].getAttribute(attribute);

        options.has = () => this.el[0].hasAttribute(attribute);

        return options;
      }

      Text(str) {
        return el.CONTENT("Text", str, this);
      }

      Html(html) {
        return el.CONTENT("HTML", html, this);
      }

      Val(value) {
        let options = {};

        options.set = () => {
          for (const e of this.el) e.value = value;

          return this;
        };

        options.get = () => this.el[0].value;

        return options;
      }

      ScrollPosition(axe) {
        if (axe) return this.el[0].pageXOffset || this.el[0].scrollLeft;
        return this.el[0].pageYOffset || this.el[0].scrollTop;
      }

      Scroll() {
        const scrollToItemId = (containerId, srollToId) => {
          const scrollContainer = containerId;
          const item = srollToId;
          const from = scrollContainer.scrollTop;
          let by = item.offsetTop - scrollContainer.scrollTop;

          if (from < item.offsetTop) {
            if (
              item.offsetTop >
              scrollContainer.scrollHeight - scrollContainer.clientHeight
            ) {
              by =
                scrollContainer.scrollHeight -
                scrollContainer.clientHeight -
                scrollContainer.scrollTop;
            }
          }

          let currentIteration = 0;
          const animIterations = Math.round(60 * 0.5);

          (function scroll() {
            scrollContainer.scrollTop = easeOutCubic(
              currentIteration,
              from,
              by,
              animIterations
            );
            currentIteration++;

            if (currentIteration < animIterations) {
              requestAnimationFrame(scroll);
            }
          })();
        };

        const easeOutCubic = (
          currentIteration,
          startValue,
          changeInValue,
          totalIterations
        ) => {
          return (
            changeInValue *
              (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
            startValue
          );
        };

        if (getComputedStyle(this.el[0].parentElement).position === "fixed")
          scrollToItemId(this.el[0].parentNode, this.el[0]);
        else {
          const c = document.documentElement || document.body;
          scrollToItemId(c, this.el[0]);
        }
        return this;
      }

      Delay(handler, timeOut) {
        return this.Each(function (e) {
          setTimeout(() => {
            handler(new el(this));
          }, timeOut || 1000);
        });
      }

      static CONTENT(fun, content, element) {
        let options = {};

        options.get = () => element.el[0]["inner" + fun];

        options.set = () => {
          for (let el of element.el) el["inner" + fun] = content;

          return this;
        };

        options.append = (position) => {
          let pos = position || "beforeend";

          for (let el of element.el) el["insertAdjacent" + fun](pos, content);

          return this;
        };

        return options;
      }

      static objectToStyle(cssProperties) {
        let s = Object.keys(cssProperties)
          .map((key) => key + ": " + cssProperties[key])
          .join(";");
        return ("'" + s + "'").slice(1).slice(0, -1);
      }
    }

    return new el(selector);
  }

  HtmlMethods() {
    let elmns = this.child.querySelectorAll("*");

    for (const e of elmns) {
      let el = this.Find(e),
        na = e.getAttributeNames(),
        newEl = el;
      if (na.includes("@find")) newEl = this.Find(e.getAttribute("@find"));

      if (na.includes("@copy")) {
        let a = e.getAttribute("@copy").split(/:(.+)/);
        newEl.Copy(a[0], a[1]);
      }

      for (const a of na) {
        if (a.includes("@")) {
          let val = e.getAttribute(a),
            v = val.split(";"),
            ev = a.replace("@", ""),
            cont = "Text, Classes, Attr, Val",
            an = "Anime, Css, Show, Hide, Width, Height, Visible, Opacity",
            att = "Attr";

          if (ev === "ready") {
            ev = "load";
            el = this.Find(window);
          }

          el.On(ev, (e) => {
            for (const act of v) {
              let o = act,
                val = act.split("("),
                neVal = o.substring(o.indexOf("(") + 1),
                v = neVal.slice(0, -1).split(/:(.+)/),
                method = val[0].trim().replace(/\w/, (c) => c.toUpperCase()),
                n = neVal
                  .slice(0, -1)
                  .replace(/[~']/g, '"')
                  .replace(/[~`]/g, '"');
              if (n.includes("{")) n = JSON.parse(n);

              if (att.includes(method) && v[0].includes("set")) {
                let nw = v[1].split("="),
                  n = nw[1].trim().replace(/[~']/g, "").replace(/[~`]/g, "");
                newEl[method](nw[0].trim())[v[0].trim()](n);
              }

              if (cont.includes(method))
                newEl[method](v[1].trim())[v[0].trim()]();

              if (an.includes(method)) {
                if (method === "Visible") {
                  if (n === "true") newEl.Visible().showing();
                  else newEl.Visible().hidden();
                } else newEl[method](n);
              }
            }
          });
          e.removeAttribute(a);
        }
      }
    }
  }

  Root(params) {
    let parameters = decodeURI(window.location.href).split("?");
    parameters = parameters[1].split("&");
    if (params) params = params.split("&");

    for (let element of parameters) {
      if (params)
        for (let param of params) {
          let nParam = param.split("=");
          let nElement = element.split("=");
          if (nParam[0] === nElement[0]) element = param;
        }
      let e = element.split("=");
      this.data[e[0]] = String(e[1]);
    }

    this.ren(this.old);
    return this;
  }

  async Get(url, options) {
    if (!options) options = {};
    let parent = this.child,
      formData = new FormData();
    options.param = {
      method: options.method || "get"
    };

    if (options.form) {
      let newForm = parent.querySelector(options.form);
      formData = new FormData(newForm);

      newForm.onsubmit = async (e) => e.preventDefault();
    }

    if (options.file) {
      if (typeof options.file === "object") {
        for (const item of options.file) {
          let file;
          if (typeof item === "object") file = item;
          else file = parent.querySelector(item);
          formData.append(file.name, file.files[0]);
        }
      } else {
        options.file = parent.querySelector(options.file);
        formData.append(options.file.name, options.file.files[0]);
      }
    }

    if (options.data)
      Object.keys(options.data).forEach((k) =>
        formData.append(k, options.data[k])
      );
    if (options.method === "post") options.param.body = formData;
    let response = await fetch(url, options.param);

    if (response.ok) {
      if (options.blob) return await response.blob();
      if (options.json) return await response.json();
      return await response.text();
    } else return "HTTP-Error: " + response.status;
  }

  async Post(url, options) {
    options.method = "post";
    return await this.Get(url, options);
  }

  static Store(name) {
    let options = {};

    options.set = (data) => {
      window.localStorage.setItem(name, JSON.stringify(data));
      return this;
    };

    options.get = () => JSON.parse(window.localStorage.getItem(name));

    options.remove = () => {
      window.localStorage.removeItem(name);
      return this;
    };

    options.reset = () => {
      window.localStorage.clear();
      return this;
    };

    return options;
  }

  static Audio(src) {
    let audio = {};
    audio.Delay = 0;
    audio.Element = new Audio(src);
    audio.Src = src;

    audio.Play = function (delay) {
      audio.Delay = delay * 1000;
      setTimeout(function () {
        audio.Element.pause();
        audio.Element.play();
      }, audio.Delay);
      return this;
    };

    audio.Stop = function (timeOut) {
      setTimeout(function () {
        audio.Element.pause();
        audio.Element.currentTime = 0;
      }, timeOut * 1000);
      return this;
    };

    audio.Pause = function (timeOut) {
      setTimeout(function () {
        audio.Element.pause();
      }, timeOut * 1000);
      return this;
    };

    return audio;
  }

  static Date(date) {
    let dt = {};

    dt.Increase = function (prefix, step) {
      let tomorrow = new Date(date),
        newDate = new Date(
          tomorrow.setMonth(tomorrow.getMonth() + parseInt(step))
        ),
        dateMonth = newDate.getMonth() + 1;

      if (prefix) {
        if (prefix.toLowerCase() === "day") {
          let tomorrow = new Date(date);
          tomorrow.setDate(tomorrow.getDate() + parseInt(step));
          dt.current =
            tomorrow.getFullYear() +
            "-" +
            ("0" + (tomorrow.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + tomorrow.getDate()).slice(-2);
        } else {
          dateMonth = tomorrow.getFullYear() + 1;
          dt.current =
            dateMonth +
            "-" +
            ("0" + tomorrow.getMonth()).slice(-2) +
            "-" +
            ("0" + tomorrow.getDate()).slice(-2);
        }
      } else {
        dt.current =
          newDate.getFullYear() +
          "-" +
          ("0" + dateMonth).slice(-2) +
          "-" +
          ("0" + newDate.getDate()).slice(-2);
      }

      dt.res = dt.current;
      return this;
    };

    dt.BetWeen = function (options) {
      let nwd = dt.current || dt.Increase("day", 0).current,
        d1 = options.from.split(options.character || "-"),
        d2 = options.to.split(options.character || "-"),
        c = nwd.split(options.character || "-");
      options.from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]);
      options.to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);
      nwd = new Date(c[0], parseInt(c[1]) - 1, c[2]);

      if (nwd > options.from && nwd < options.to) {
        if (options.handler) options.handler();
        dt.res = true;
        return this;
      }

      if (options.callback) options.callback();
      dt.res = false;
      return this;
    };

    return dt;
  }

  static Scroll() {
    let sc = {};

    sc.top = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;

      if (c > 0) {
        window.requestAnimationFrame(sc.top);
        window.scrollTo(0, c - c / 8);
      }

      return this;
    };

    sc.bottom = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop,
        h = document.body.scrollHeight;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo(0, c + h / 40);
        return;
      }

      window.requestAnimationFrame(sc.bottom);
      window.scrollTo(0, c + h / 40);
      return this;
    };

    return sc;
  }

  static Orientation() {
    if (screen.orientation.angle == "90") return "Horizontally";
    return "Vertically";
  }

  static Screen(query, options) {
    let x = window.matchMedia(query),
      resultMatch = myFunction(x); // Call listener function at run time

    x.addEventListener("change", myFunction); // Attach listener function on state changes

    function myFunction(x) {
      if (x.matches) {
        if (options.handler) options.handler();
      } else {
        if (options.callback) options.callback();
      }

      return x;
    }

    return resultMatch;
  }

  static Print(options) {
    let title = options.title || "",
      body = new Seule("body");
    body.Append(
      '<iframe class="seule--frame" name="sframe" style="position: fixed; bottom: -100%"></iframe>'
    );
    let iframeEl = document.getElementsByClassName("seule--frame")[0];
    let frameDoc = iframeEl.contentWindow
      ? iframeEl.contentWindow
      : iframeEl.contentDocument.document
      ? iframeEl.contentDocument.document
      : iframeEl.contentDocument;
    frameDoc.document.open(); //Create a new HTML document.

    frameDoc.document.write("<html><head><title>" + title + "</title>");
    frameDoc.document.write("</head><body>"); //Append the external CSS file.

    if (options.style)
      frameDoc.document.write(
        '<link href="' +
          options.style +
          '.css" rel="stylesheet" type="text/css" />'
      ); //Append the DIV contents.

    frameDoc.document.write(options.template);
    frameDoc.document.write("</body></html>");
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["sframe"].focus();
      window.frames["sframe"].print();
    }, 500);
  }

  SceneHandler(options) {
    let parent = this.child;
    window.addEventListener(
      "scroll",
      function () {
        elementFromTop(options);
      },
      false
    );

    function elementFromTop(options) {
      let elem;

      try {
        elem = parent.querySelector(options.selector);
      } catch (e) {
        elem = options.selector;
      }

      let unit = options.unit || "percent",
        distanceFromTop = options.distance,
        winY = window.innerHeight || document.documentElement.clientHeight,
        distTop = elem.getBoundingClientRect().top,
        distPercent = Math.round((distTop / winY) * 100),
        distPixels = Math.round(distTop),
        distUnit;
      distUnit = unit == "percent" ? distPercent : distPixels;
      if (distUnit <= distanceFromTop) options.handler();
      else if (options.callback) options.callback();
    }

    return this;
  }

  Scene(options) {
    let i = 0;
    this.SceneHandler({
      selector: options.selector,
      distance: options.distance || 0,
      unit: options.unit || "percent",
      handler: () => {
        if (i === 0) {
          options.handler();
          i = 1;
        }
      },
      callback: () => {
        if (i === 1) {
          if (options.callback) {
            options.callback();
            i = 0;
          }
        }
      }
    });
    return this;
  }

  static PDO(data, options) {
    if (options) {
      if (!options.query) options.query = (item) => item;
    }

    let obj = [...data],
      child = [],
      nest = [],
      result = {},
      select = () => {
        if (options) {
          let filter = obj.filter((el, index) => {
            if (options.execute !== "remove duplicates" && !options.columns)
              el.index = index;
            if (
              (options.child && options.execute !== "insert") ||
              (options.execute === "insert" && options.nest)
            )
              return el[options.child].some((e, i) => options.query(e, i));
            return options.query(el, index);
          });

          if (options.child) {
            for (const el of obj) {
              for (const e of el[options.child]) {
                if (options.execute !== "remove duplicates")
                  e.parent = el.index;
                child.push(e);
              }
            }

            nest = child;
            child = child.filter((el, index) => options.query(el, index));
          }

          return filter;
        }
      };

    result.alter = (action, column, obj) => {
      obj = obj || data;
      obj.map(function (o) {
        let c = o;

        if (typeof column === "object" && action.toLowerCase() === "replace") {
          c[column[1]] = c[column[0]];
          delete c[column[0]];
        }

        if (action.toLowerCase() === "drop")
          for (const element of column) delete c[element];
        if (action.toLowerCase() === "add")
          for (const element of column)
            if (!c.hasOwnProperty(element)) c[element] = "";
        return c;
      });
      return result;
    };

    result.group = (column, obj) => {
      obj = obj || data;
      let da = [];
      let group = [...new Set(obj.reduce((r, a) => r.concat(a[column]), []))];

      for (const g of group) {
        let e = '{"' + column + '":"' + g + '"}';
        da.push(JSON.parse(e));
      }

      result.res = da;
      return result;
    };

    result.removeDpl = (column, obj) => {
      obj = obj || data;

      for (let ob of obj) delete ob.index;

      if (column) {
        let lookup = new Set();
        return obj.filter(
          (data) => !lookup.has(data[column]) && lookup.add(data[column])
        );
      }

      let uniqueSet = new Set(obj.map(JSON.stringify));
      result.res = Array.from(uniqueSet).map(JSON.parse);
      return result;
    };

    result.sum = (obj) => {
      obj = obj || data;
      result.res = obj.reduce(
        (sums, obj) =>
          Object.keys(obj).reduce((s, k) => {
            s[k] = (s[k] || 0) + +obj[k];
            return s;
          }, sums),
        {}
      );
      return result;
    };

    result.sort = (column, obj) => {
      let sortBy = () => (a, b) => {
        if (a[column] > b[column]) return 1;
        else if (a[column] < b[column]) return -1;
        return 0;
      };

      obj = obj || data;
      result.res = obj.sort(sortBy(column));
      return result;
    };

    result.res = select();
    result.child = child;

    if (options) {
      switch (options.execute) {
        case "update":
          let items = Object.keys(options.item) || {};
          result.res.forEach((f) =>
            data.findIndex((e) => {
              if (e === f)
                for (const element of items) {
                  if (options.nest)
                    for (const i of result.child)
                      i[element] = options.item[element];
                  else e[element] = options.item[element];
                }
            })
          );
          break;

        case "delete":
          result.child.forEach((f) =>
            nest.splice(
              nest.findIndex((e) => e === f),
              1
            )
          );

          if (options.nest) {
            result.res.forEach((f) =>
              f[options.child].findIndex((e) => {
                for (const element of result.child)
                  if (e === element)
                    f[options.child].splice(
                      f[options.child].findIndex((e) => e === element),
                      1
                    );
              })
            );
            result.res = data;
            break;
          }

          result.res.forEach((f) =>
            data.splice(
              data.findIndex((e) => e === f),
              1
            )
          );
          break;

        case "insert":
          if (options.child)
            for (const element of result.res) {
              if (typeof element[options.child] !== "object")
                element[options.child] = [];
              options.item.parent = element.index;
              data[element.index][options.child].push(options.item);
              nest.push(options.item);
            }
          else data.push(options.item);
          break;
      }

      if (options.execute !== "select") {
        result.res = data;
        result.child = nest;
      }

      if (options.template) {
        let obj = result.res,
          els = {};
        if (!result.res) obj = result;
        if (options.nest) obj = result.child;

        if (options.component) {
          let sha = (done, shadow, attr, handler) => {
            done = done || obj;
            shadow.innerHTML = "";

            for (const item of obj) {
              let element = document.createElement("s-bind");
              element.innerHTML = options.template(item);
              shadow.appendChild(element);

              if (options.style.length === 1) {
                let linkElement = document.createElement("link");
                linkElement.setAttribute("rel", "stylesheet");
                linkElement.setAttribute("href", options.style[0] + ".css");
                shadow.appendChild(linkElement);
              } else {
                let style = document.createElement("style");
                style.textContent = options.style;
                shadow.appendChild(style);
              }
            }
          };

          class Example extends HTMLElement {
            constructor() {
              super();
              const shadow = this.attachShadow({
                mode: options.mode || "open"
              });
              sha(obj, shadow);

              let init = (done, attr, handler) => {
                done = done || obj;
                sha(done, shadow, attr, handler);
              };

              if (options.mode !== "closed") {
                els = options.element;

                els.Select = (selector) =>
                  options.find(shadow.querySelectorAll(selector));
              } else
                els.Select = () =>
                  console.log(
                    "mode is closed! to use Select method, Switch to the open Mode!"
                  );

              if (options.handler) options.handler(els, obj, init);
            }
          }

          customElements.define(options.selector, Example);
        }
      }
    }

    return result;
  }

  Component(name, options) {
    let el = this.Find(name),
      find = (s) => this.Find(s);

    if (options.data)
      if (!options.data.length) {
        options.obj = [];
        options.obj.push(options.data);
        options.data = options.obj;
      }
    Seule.PDO(options.data || [{}], {
      find: (s) => find(s),
      element: el,
      component: true,
      mode: options.mode,
      style: options.style || "",
      execute: options.execute || false,
      child: options.child || false,
      columns: options.columns || false,
      nest: options.nest || false,
      item: options.item || false,
      action: options.action || false,
      selector: name,

      query(item) {
        if (options.query) return options.query(item);
        return item;
      },

      template(item) {
        return options.template(item) || "";
      },

      handler(el, data, init) {
        if (options.handler) options.handler(el, data, init);
      }
    });
    return this;
  }
}
