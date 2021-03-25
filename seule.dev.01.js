"use strict";
/* Copyright & all rights reserved to El Mehdi LABBAR*/

class Seule {
  constructor(selector, root, style) {
    this.el = selector;
    if (selector === "window") this.element = [window];
    else if (typeof selector === "object") this.element = selector;
    else this.element = document.querySelectorAll(selector);
    this.tags = this.element;
    if (this.tags.length) this.tags = this.element[0];
    this.selector = selector;
    this.check = true;
    this.cont = true;
    this.root = root;
    if (typeof root === "object") this.parrent = root;
    this.children = false;
    let child = this.children;

    this.render = function () {
      let el = this.tags;

      class Example extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({
            mode: "closed"
          });

          if (typeof style === "object") {
            let linkElement = document.createElement("link");
            linkElement.setAttribute("rel", "stylesheet");
            linkElement.setAttribute("href", style[0] + ".css");
            shadow.appendChild(linkElement);
          } else {
            let styles = document.createElement("style");
            styles.textContent = style;
            shadow.appendChild(styles);
          }

          let cl = el.cloneNode(true);
          el.innerHTML = "";
          shadow.appendChild(cl);
          child = new Seule(shadow.children);
        }
      }

      customElements.define("seule-" + selector.replace("#", ""), Example);
      let seule = document.createElement("seule-" + selector.replace("#", ""));
      el.appendChild(seule);
    };

    if (root && typeof root !== "object") {
      this.render();
      this.children = child;
      console.log(
        "%cDon't try anything cute,\n" + "%cDom is Protected! 😡",
        "color: gray; font-size:15px;",
        "color: red; font-size:38px;"
      );
    }
  }

  Find(selector) {
    if (this.root) {
      this.tags = this.children.element[1].querySelectorAll(selector);
      this.el = selector;
      return new Seule(this.tags, this.children.element[1]);
    }

    if (typeof selector === "object") return new Seule(selector);
    return new Seule(this.el + " " + selector);
  }

  Children(index) {
    let children = this.tags.children;

    if (index) {
      if (index.toString().toLowerCase() === "last")
        return new Seule(children[children.length - 1]);
      if (index.toString().toLowerCase() === "first")
        return new Seule(children[0]);
      return new Seule(children[index - 1]);
    }

    return new Seule(children);
  }

  Parent() {
    return new Seule(this.tags.parentElement);
  }

  Each(callback) {
    if (this.element.length == null) callback.call(this.element);
    else for (const element of this.element) callback.call(element);
    return this;
  }

  On(event, handler) {
    return this.Each(function () {
      this.addEventListener(event, () => handler(new Seule(this), this), false);
    });
  }

  Click(handler) {
     this.On("click", (el) => handler(el));
     return this
  }

  Focus(handler) {
    if (handler) this.On("focus", (el) => handler(el));
    else this.tags.focus();
    return this;
  }

  Blur(handler) {
    if (handler) this.On("blur", (el) => handler(el));
    else this.tags.blur();
    return this;
  }

  Hold(handler) {
    return this.Each(function() {
      
    let mouseIsDown = false,
    isTouch = "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0,
    mouseDown = isTouch ? "touchstart" : "mousedown",
    mouseUp = isTouch ? "touchend" : "mouseup"

this.addEventListener(mouseDown, function(e) {
  mouseIsDown = true;
  setTimeout(function() {
    if (mouseIsDown) {
      handler(new Seule(e)) 
    }
  }, time || 1000);
});

this.addEventListener(mouseUp, function() {
  mouseIsDown = false;
});
 });

  }

  Swipe(on, handler) {
    let el = this.element,
      xDown,
      yDown;
    el[0].addEventListener("touchstart", handleTouchStart, false);
    el[0].addEventListener("touchmove", handleTouchMove, false);

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
          if (on === "left") {
            handler(new Seule(this), this);
          } else {
            return false;
          }
        } else if (xDiff < 0) {
          if (on === "right") {
            handler(new Seule(this), this);
          } else {
            return false;
          }
        }
      } else {
        if (yDiff > 0) {
          if (on === "top") {
            handler(new Seule(this), this);
          } else {
            return false;
          }
        } else if (yDiff < 0) {
          if (on === "bottom") {
            handler(new Seule(this), this);
          } else {
            return false;
          }
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
            handler(new Seule(this), this);
            key = "";
          }

          setInterval(() => (key = ""), 5000);
        },
        true
      );
    });
  }

  KeyLogger() {
    let key = "",
      el = this.el,
      mapObj = {
        Arrow: "",
        Control: "ctrl"
      };
    return this.Each(function () {
      this.addEventListener(
        "keydown",
        function (event) {
          key += event.key;
          key = key.replace(/Arrow|Control/gi, function (matched) {
            return mapObj[matched];
          });
          setInterval(() => (key = ""), 10000);
          Seule[el] = key;
        },
        true
      );
    });
  }

  Copy(target, options) {
    let tar = this.parrent.querySelector(target);
    this.On(options.on, function () {
      let eventFired = new MouseEvent(options.event, {
        view: window,
        bubbles: true,
        cancelable: true
      });
      tar.dispatchEvent(eventFired);
    });
    return this 
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
    return this 
  }

  Scroll(content) {
    let parent = new Seule(this.Parent().selector);
    if (content) parent = new Seule(content);
    if (parent.getStyle("position").toLowerCase() === "fixed")
      parent.element[0].scrollTop = this.tags.offsetTop - 10;
    else
      window.scrollTo({
        top: this.tags.offsetTop
      });
    return this;
  }

  ScrollPosition(axe) {
    if (axe) return this.tags.pageXOffset || this.tags.scrollLeft;
    return this.tags.pageYOffset || this.tags.scrollTop;
  }

  Delay(handler, timeOut) {
    return this.Each(function () {
      setTimeout(handler, timeOut || 1000);
    });
  }

  Loop(handler, timeOut) {
    return this.Each(function () {
      let int = setInterval(() => {
        let b = () => clearInterval(int);

        handler(b);
      }, timeOut || 1000);
    });
  }

  AddClass(classes) {
    return this.Each(function () {
      this.classList.add(classes);
    });
  }

  RemoveClass(className) {
    return this.Each(function () {
      this.classList.remove(className);
    });
  }

  ToggleClass(className) {
    return this.Each(function () {
      this.classList.toggle(className);
    });
  }

  HasClass(className) {
    return !!this.tags.className.match("(?:^|\\s)" + className + "(?!\\S)");
  }

  Classes(action, className) {
    if (action === "add") this.AddClass(className);
    if (action === "remove") this.RemoveClass(className);
    if (action === "toggle") this.ToggleClass(className);
    return this;
  }

  ClassList() {
    let result = [];

    for (const element of this.tags.classList) result.push(element);

    return result;
  }

  ClassListContains(className) {
    return this.tags.classList.contains(className);
  }

  Style(cssProperty, value) {
    return this.Each(function () {
      this.style[cssProperty] = value;
    });
  }

  Css(options) {
    return this.Each(function () {
      this.setAttribute("style", Seule.objectToStyle(options));
    });
  }

  GetStyle(cssProperty) {
    return getComputedStyle(this.tags)[cssProperty];
  }

  Show() {
    return this.Each(function () {
      let state = getComputedStyle(this)["display"];
      if (state === "none") this.style.display = "inherit";
    });
  }

  Hide() {
    return this.Each(function () {
      this.style.display = "none";
    });
  }

  Visible(isTrue) {
    return this.Each(function () {
      if (isTrue) this.style.visibility = "hidden";
      else this.style.visibility = "visible";
    });
  }

  IsVisible() {
    return this.tags.style.visibility !== "hidden";
  }

  Opacity(value) {
    return this.Each(function () {
      this.style["opacity"] = value;
    });
  }

  Anime(options) {
    if (options) {
      let keys = Object.keys(options),
        arr = {},
        newCss = {},
        max = {},
        ancient = {},
        origin = {};
      let old = "",
        nw = options.text;

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
          duration = options[element].duration || options.duration || "0.7s";

        if (!forbidden.includes(element)) {
          let style = getComputedStyle(this.tags);
          arr[element] = duration + " " + delay;
          newCss[element] = options[element].value || "inherit";
          if (ancient === origin)
            ancient[element] = style[element] || "inherit";
          max[element] =
            parseFloat(delay.replace(/s/g, "")) +
            parseFloat(duration.replace(/s/g, ""));
        }
      }

      newCss.transition = Seule.objectToStyle(arr)
        .replace(/:/g, " ")
        .replace(/;/g, ", ");
      newCss["transition-timing-function"] = options.type || "ease";
      if (options.property) newCss["transition-property"] = options.property;
      if (options.duration) newCss["transition-duration"] = options.duration;
      if (options.delay) newCss["transition-delay"] = options.delay;
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
        old = this.innerText;

        if (options.text) {
          let del = 0,
            value = "";
          if (options.text.delay)
            del = parseFloat(options.text.delay.replace(/s/g, "")) * 1000;
          if (options.text.value) value = nw = options.text.value;
          else value = options.text;
          setTimeout(function () {
            this.innerText = value;
          }, del);
        }

        let element = this,
          times = 1,
          boucle,
          delay = options.timeOut || 100,
          interval = parseInt(max + delay) * 2 + 100;

        if (options.direction || options.loop) {
          action(max + delay);
          boucle = setInterval(function () {
            if (options.time) action(max + delay, options.time);
            else action(max + delay);
          }, interval);
          if (options.direction) clearInterval(boucle);
        } else {
          element.setAttribute("style", Seule.objectToStyle(newCss));
          if (options.text) element.innerText = nw;
        }

        function action(delay, time) {
          element.setAttribute("style", Seule.objectToStyle(newCss));
          if (options.text) element.innerText = nw;
          setTimeout(() => {
            element.setAttribute("style", Seule.objectToStyle(ancient));
            if (options.text) element.innerText = old;
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
    return getComputedStyle(this.tags).width;
  }

  Height(value) {
    if (value)
      return this.Each(function () {
        this.style.height = value;
      });
    return getComputedStyle(this.tags).height;
  }

  Text(str) {
    if (typeof str === "undefined") return this.tags["innerText"];
    return this.Each(function () {
      this["innerText"] = str;
    });
  }

  Val(value) {
    if (typeof value === "undefined") return this.tags.value;
    return this.Each(function () {
      this.value = value;
    });
  }

  Attr(attribute, value) {
    if (value)
      return this.Each(function () {
        this.setAttribute(attribute, value);
      });
    return this.tags.getAttribute(attribute);
  }

  AttrRemove(attribute) {
    return this.Each(function () {
      this.removeAttribute(attribute);
    });
  }

  Html(html) {
    if (typeof html === "undefined") return this.tags.innerHTML;
    return this.Each(function () {
      this.innerHTML = html;
    });
  }

  Append(html, position) {
    return this.Each(function () {
      this.insertAdjacentHTML(Seule.HTMLPLACE("beforeend", position), html);
    });
  }

  InsertHtml(html, position) {
    return this.Each(function () {
      this.insertAdjacentHTML(Seule.HTMLPLACE("afterend", position), html);
    });
  }

  Root(params) {
    let parameters = decodeURI(window.location.href).split("?"),
      obj = {},
      el = new Seule(this.tags),
      content = el.Html(),
      newPara = [];
    parameters = parameters[1].split("&");
    if (params) params = params.split("&");

    for (let element of parameters) {
      if (params)
        for (let param of params) {
          let nParam = param.split("=");
          let nElement = element.split("=");
          if (nParam[0] === nElement[0]) element = param;
        }
      newPara.push(String(element));
    }

    let ind = content.search("}}");

    for (let element of newPara)
      if (element.includes("=")) {
        let item = element.split("=");
        obj[item[0]] = item[1];

        while (content.includes("{{" + item[0] + "}}"))
          content = content.replace(
            "{{" + item[0] + "}}",
            "<seules class='str202109876" +
              item[0] +
              "'>" +
              item[1] +
              "</seules>"
          );
      }

    el.Html(content);

    for (let element of newPara)
      if (element.includes("=")) {
        let item = element.split("=");
        let it = new Seule(".str202109876" + item[0]);
        it.text(item[1]);
      }

    this.cont = false;
    return obj;
  }

  Component(name, options) {
    let el = this.Find(name);
    if (options.data)
      if (!options.data.length) {
        options.obj = [];
        options.obj.push(options.data);
        options.data = options.obj;
      }
    Seule.PDO(options.data || [{}], {
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

  Emit(attr, handler) {
    let element;
    if (this.root) element = this.children.el[1];
    else element = this.tags;
    Seule.SELECTALL(element, attr, handler);
    return this;
  }

  HtmlMethod() {
    let element;
    if (this.root) element = this.children.el[1];
    else element = this.tags;
    Seule.SELECTALL(element);
    return this;
  }

  static async GET(options) {
    let formData = new FormData();
    options.param = {
      method: options.method || "get"
    };
    if (options.method === "post") options.param.body = formData;

    if (options.form) {
      let newForm = document.querySelector(options.form);
      formData = new FormData(newForm);

      newForm.onsubmit = async (e) => e.preventDefault();
    }

    if (options.file) {
      if (typeof options.file === "object") {
        Seule.LOOP({
          data: options.file,
          handler: function (item) {
            let file;
            if (typeof item === "object") file = item;
            else file = document.querySelector(item);
            formData.append(file.name, file.files[0]);
          }
        });
      } else {
        options.file = document.querySelector(options.file);
        formData.append(options.file.name, options.file.files[0]);
      }
    }

    if (options.data)
      Object.keys(options.data).forEach((k) =>
        formData.append(k, options.data[k])
      );
    let response = await fetch(options.url, options.param);

    if (response.ok) {
      if (options.blob) return await response.blob();
      if (options.json) return await response.json();
      return await response.text();
    } else return "HTTP-Error: " + response.status;
  }

  static async POST(options) {
    options.urls = options.url || "";
    options.datas = options.data || "";
    options.result = [];
    options.method = "post";

    if (typeof options.url === "object") {
      Seule.LOOP({
        data: options.urls,

        handler(item) {
          options.url = item;
          Seule.GET(options).then(function (done) {
            options.result.push(done);
          });
        }
      });
      return options.result;
    }

    if (typeof options.data === "object") {
      Seule.LOOP({
        data: options.datas,

        handler(item) {
          options.data = item;
          Seule.GET(options).then(function (done) {
            options.result.push(done);
          });
        }
      });
      return options.result;
    }

    return await Seule.GET(options);
  }

  static STORE(name, options) {
    if (options.data)
      window.localStorage.setItem(name, JSON.stringify(options.data));
    else {
      if (options.execute === "get")
        return JSON.parse(window.localStorage.getItem(name));
      if (options.execute === "delete") window.localStorage.removeItem(name);
      if (options.execute === "delete All") window.localStorage.clear();
    }
    return this;
  }

  static LOOP(options) {
    if (typeof options.data !== "object") {
      Seule.GET({
        url: options.data,
        json: true,
        method: "get"
      }).then(function (done) {
        options.data = done;
        [].forEach.call(options.data, options.handler);
      });
    } else [].forEach.call(options.data, options.handler);

    return options;
  }

  static HTMLPLACE(pos, position) {
    switch (true) {
      case position === "top":
        pos = "afterbegin";
        break;

      case position === "before":
        pos = "beforebegin";
        break;

      case position == null && pos === "afterend":
        pos = "afterend";
        break;

      default:
        pos = "beforeend";
    }

    return pos;
  }

  static objectToUrlQuery(obj) {
    let s = Object.keys(obj)
      .map((key) => key + "=" + obj[key])
      .join("&");
    return ("'" + s + "'").slice(1).slice(0, -1);
  }

  static objectToStyle(obj) {
    return Seule.objectToUrlQuery(obj).replace(/&/g, ";").replace(/=/g, ":");
  }

  static AUDIO(src) {
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

  static DATE(date) {
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

  static SCROLL() {
    let sc = {};

    sc.Top = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return this;
    };

    sc.Bottom = function () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
      return this;
    };

    return sc;
  }

  static ORIENTATION() {
    if (screen.orientation.angle == "90") return "Horizontally";
    return "Vertically";
  }

  static SCREEN(query, options) {
    let x = window.matchMedia(query),
      resultMatch = myFunction(x); // Call listener function at run time

    x.addEventListener("change", myFunction); // Attach listener function on state changes

    function myFunction(x) {
      if (x.matches)
        if (typeof options.handler == "function") options.handler();
        else if (typeof options.callback == "function") options.callback();
      return x;
    }

    return resultMatch;
  }

  static SCENEHANDLER(options) {
    window.addEventListener(
      "scroll",
      function () {
        elementFromTop(options);
      },
      false
    );

    function elementFromTop(options) {
      let elem = document.querySelector(options.selector),
        unit = options.unit || "percent",
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

  static SCENE(options) {
    let i = 0;
    Seule.SCENEHANDLER({
      selector: options.selector || "body",
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

  static PRINT(options) {
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

    (result.alter = (action, column, obj) => {
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
    }),
      (result.group = (column, obj) => {
        obj = obj || data;
        let da = [];
        let group = [...new Set(obj.reduce((r, a) => r.concat(a[column]), []))];
        Seule.LOOP({
          data: group,

          handler(el, index) {
            let e = '{"' + column + '":"' + el + '"}';
            da.push(JSON.parse(e));
          }
        });
        result.res = da;
        return result;
      }),
      (result.removeDpl = (column, obj) => {
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
      }),
      (result.sum = (obj) => {
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
      }),
      (result.sort = (column, obj) => {
        let sortBy = () => (a, b) => {
          if (a[column] > b[column]) return 1;
          else if (a[column] < b[column]) return -1;
          return 0;
        };

        obj = obj || data;
        result.res = obj.sort(sortBy(column));
        return result;
      });
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

        case "alter":
          if (options.nest)
            result.alter(options.action, options.columns, result.child);
          else result.alter(options.action, options.columns, result.res);
          break;

        case "group by":
          if (options.nest)
            result = result.group(options.columns, result.child);
          else result = result.group(options.columns, result.res);
          break;

        case "sum":
          if (options.nest) result = result.sum(result.child);
          else result = result.sum(result.res);
          break;

        case "remove duplicates":
          if (options.nest)
            result = result.removeDpl(options.columns || false, result.child);
          else result = result.removeDpl(options.columns || false, result.res);
          break;

        case "order by":
          if (options.nest)
            result = result.sort(options.columns || false, result.child);
          else result = result.sort(options.columns || false, result.res);
          break;
      }

      if (options.execute !== "select") {
        result.res = data;
        result.child = nest;
      }

      if (
        options.execute === "order by" ||
        options.execute === "sum" ||
        options.execute === "group by" ||
        options.execute === "remove duplicates"
      ) {
        delete result.child;
        delete result.res;
      }

      if (options.template) {
        let obj = result.res,
          som = [],
          html = "",
          els = {};
        if (!result.res) obj = result;
        if (options.nest) obj = result.child;

        if (options.execute === "sum") {
          som.push(obj);
          obj = som;
        }

        if (options.component) {
          let sha = (done, shadow, attr, handler) => {
            done = done || obj;
            shadow.innerHTML = "";

            for (const item of obj) {
              let element = document.createElement("s-bind");
              element.innerHTML = options.template(item);
              Seule.SELECTALL(element, attr, handler);
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
              sha(shadow);

              let init = (done, attr, handler) => {
                done = done || obj;
                sha(done, shadow, attr, handler);
              };

              if (options.mode !== "closed") {
                els = options.element;

                els.Select = (selector) =>
                  new Seule(shadow.querySelectorAll(selector));
              } else
                els.Select = () =>
                  console.log(
                    "mode is closed! to use find method, Switch to the open Mode!"
                  );

              if (options.handler) options.handler(els, obj, init);
            }
          }

          customElements.define(options.selector, Example);
        } else {
          let element = new Seule(options.selector);

          let sha = (data) => {
            data = data || obj;
            html = "";

            for (const item of data) html += options.template(item);

            element.Html(html);
          };

          sha(obj);
          if (options.handler)
            options.handler(new Seule(options.selector), obj, sha);
        }
      }
    }

    return result;
  }

  static SELECTALL(element, attr, handler) {
    let attrs = element.querySelectorAll("*"),
      i = 0,
      elements = {},
      action = {},
      obj,
      extra =
        "text val show hide visible opacity width height attr style classes anime css",
      allowd = "text val show hide visible opacity width height",
      special = "Attr Style Classes";

    for (let e of attrs) {
      elements = {};

      let el = new Seule(e),
        ex = (da, str) => {
          if (!extra.includes(str.toLowerCase())) {
            if (attr && handler) {
              handler(da, el);
            }
          } else {
            if (special.includes(str)) {
              let keys = Object.keys(da);
              el[str](keys[0], da[keys[0]]);
            } else el[str](da);
          }
        };

      if (e.getAttributeNames().includes("@find")) {
        el = element.querySelectorAll(e.getAttribute("@find"));
        el = new Seule(el);
      }

      for (let a of e.getAttributeNames()) {
        if (a.includes("@")) {
          let val = e.getAttribute(a),
            capitalStr = a
              .replace("@", "")
              .replace(/\w/, (c) => c.toUpperCase());

          if (val.includes("{")) {
            val = val.split("{");
            obj = "{" + val[1].slice(0, -1) + "}";
            obj = obj.replace(/[~']/g, '"').replace(/[~`]/g, '"');
            if (allowd.includes(capitalStr.toLowerCase()))
              obj = val[1].slice(0, -1);
            else obj = JSON.parse(obj);

            if (val[0]) {
              action[i] = ["; " + capitalStr + "$" + JSON.stringify(obj)];
              elements[val[0]] += action[i];
              i++;
            } else if (a !== "@find") ex(obj, capitalStr);
          } else if (capitalStr !== "Find") ex(val, capitalStr);
        }
      }

      let keys = Object.keys(elements);

      for (let key of keys) {
        let actions = elements[key].replace("undefined;", "").split(";");
        e.addEventListener(key, function () {
          for (let act of actions) {
            let a = act.split("$");
            if (a[0].trimStart() !== "Find")
              ex(JSON.parse(a[1]), a[0].trimStart());
          }
        });
      }
    }
  }
}
