"use strict";

class Seule {
    constructor(app) {
        this.child = false;
        this.data = app.data || {};
        this.RootElement = selectElement(app.el);

        let old = "",
            firstEl = selectElement(app.el),
            init = () => this.Init(),
            Shadow = () => {
                let el = firstEl.el,
                    seule = {},
                    e = firstEl.e,
                    child = "";

                class Root extends HTMLElement {
                    constructor() {
                        super();
                        const shadow = this.attachShadow({
                            mode: "closed"
                        });
                        let links = firstEl.context.querySelectorAll("head link");

                        if(app.style){
                            if(app.style === "root"){
                                for (const link of links)
                                    if(link.getAttribute("about"))
                                        if (link.getAttribute("about").includes(firstEl.e)) {
                                            const l = document.createElement("link");
                                            l.setAttribute("rel", "stylesheet");
                                            l.setAttribute("href", link.getAttribute("href"));
                                            shadow.appendChild(l);
                                        }
                            }
                            else {
                                const l = document.createElement("link");
                                l.setAttribute("rel", "stylesheet");
                                l.setAttribute("href", app.style);
                                shadow.appendChild(l);
                            }
                        }

                        let cl = el.cloneNode(true);
                        el.innerHTML = "";
                        shadow.appendChild(cl);
                        child = shadow.children[shadow.children.length - 1];

                        shadow.children[shadow.children.length - 1].removeAttribute("id");
                    }
                }

                customElements.define("seule-" + e, Root);
                seule = document.createElement("seule-" + e);

                el.appendChild(seule);
                this.child = child;
                old = child.innerHTML;
            },
            Find = (selector, dom) => {
                let parent = this.child;

                class el
                {
                    constructor(select) {
                        if(!select && dom) return new el(window);
                        if(!select) return new el(parent);

                        try {
                            dom ? this.el = firstEl.context.querySelectorAll(select) :
                                this.el = parent.querySelectorAll(select);
                        } catch (e) {
                            select.length ? this.el = select :
                                this.el = [select];
                        }
                    }

                    $() {
                        return new el(parent);
                    }

                    Select(selector) {
                        return new el(this.el[0].querySelectorAll(selector));
                    }

                    Element(index) {
                        return new el(this.el[index]);
                    }

                    Dom(index) {
                        if (index || index === 0) return this.el[index];
                        return this.el;
                    }

                    Parent(element) {
                        if(!element) return new el(this.el[0].parentElement);

                        const es = new el(element.el ? element.Dom(0): parent.querySelector(element));

                        es.Append(this)
                    }

                    Child(){
                        let obj = {};
                        obj.first = ()=> new el(this.el[0].children[0]);
                        obj.last = ()=> new el(this.el[0].children[this.el[0].children.length-1]);
                        obj.number = index=> new el(this.el[0].children[index]);
                        obj.all = ()=> new el(this.el[0].children);
                        return obj;
                    }

                    Move() {
                        let op = {};

                        op.after = (element) => {
                            const es = new el(element.el ? element.Dom(): element);
                            es.Parent().Dom(0).insertBefore(this.el[0], es.Dom(0).nextSibling);
                            return this;
                        };

                        op.before = (element) => {
                            const es = new el(element.el ? element.Dom(): element);
                            es.Parent().Dom(0).insertBefore(this.el[0], es.Dom(0));
                            return this;
                        };

                        return op;
                    }

                    Append(element){
                        const es = new el(element.el ? element.Dom(): element);

                        return this.Each(function () {
                            for(const e of es.Dom())
                                this.appendChild(e);
                        })
                    }

                    Remove(){
                        return this.Each(function () {
                            this.parentNode.removeChild(this);
                        })
                    }

                    Duplicate(){
                        let newEls = [],
                            element,
                            clone,
                            event;
                        this.Each(function () {
                            element = new el(this);
                            event = element.GetEvents();
                            clone = this.cloneNode(true);
                            for (const ev of event){
                                clone.addEventListener(ev.type, ev.listener)
                            }
                            newEls.push(clone)
                        });

                        return  new el(newEls)
                    }

                    Replace(element){
                        const es = new el(element.el ? element.Dom(): element);

                        for (const e of es.Dom()){
                            let el = this.el[0].cloneNode(true);
                            e.parentNode.replaceChild(el, e);
                        }

                        return this;
                    }

                    Create(tagName){
                        return new el(document.createElement(tagName));
                    }

                    Each(callback) {
                        for (const element of this.el) callback.call(element, new el(element));
                        return this;
                    }

                    Load(handler, timeOut = 0) {
                        return this.Each(function (e) {
                            setTimeout(() => {
                                handler(new el(this));
                            }, timeOut);
                        });
                    }

                    Loop(handler, timeOut = 1000) {
                        return this.Each(function (e) {
                            let loop = {
                                    stop: (handler) => stop(handler),
                                    counter: 0,
                                    el: new el(this)
                                },
                                repeat = setInterval(() => {
                                    handler(loop);
                                    loop.counter++;
                                }, timeOut);

                            function stop(handler) {
                                clearInterval(repeat);
                                handler && handler(loop.el);
                            }
                        });
                    }

                    On(event, handler, initial) {
                        if (event === "hold") this.Hold(handler);
                        else
                            return this.Each(function () {
                                handler && this.addEventListener(
                                    event,
                                    () => {
                                        handler(new el(this), this);
                                        initial && init();
                                    },
                                    false
                                );
                            });
                    }

                    Click(handler, initial) {
                        handler
                            ? this.On("click", (el) => handler(el), initial)
                            : this.Fire("click");
                        return this;
                    }

                    Hold(handler, time = 1500) {
                        return this.Each(function () {
                            let mouseIsDown = false,
                                isTouch =
                                    "ontouchstart" in window ||
                                    navigator.MaxTouchPoints > 0 ||
                                    navigator.msMaxTouchPoints > 0,
                                mouseDown = isTouch ? "touchstart" : "mousedown",
                                mouseUp = isTouch ? "touchend" : "mouseup";
                            this.addEventListener(mouseDown, (e) => {
                                mouseIsDown = true;
                                setTimeout(function () {
                                    mouseIsDown && handler(new el(e), e);
                                }, time);
                            });
                            this.addEventListener(mouseUp, () => (mouseIsDown = false));
                        });
                    }

                    Focus(handler, initial) {
                        handler
                            ? this.On("focus", (el) => handler(el), initial)
                            : this.Fire("focus");

                        return this;
                    }

                    Blur(handler, initial) {
                        handler
                            ? this.On("blur", (el) => handler(el), initial)
                            : this.Fire("blur");
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
                            if (!xDown || !yDown) return;
                            let xUp = evt.touches[0].clientX,
                                yUp = evt.touches[0].clientY,
                                xDiff = xDown - xUp,
                                yDiff = yDown - yUp;

                            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                                if (xDiff > 10 && on === "left") handler(new el(this));
                                if (xDiff < -10 && on === "right") handler(new el(this));
                            }
                            else {
                                if (yDiff > 10 && on === "top") handler(new el(this));
                                if (yDiff < -10 && on === "bottom") handler(new el(this));
                            }

                            xDown = null;
                            yDown = null;
                        }

                        return this;
                    }

                    HotKey(query, handler, prevent) {
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
                                    prevent && event.preventDefault();



                                    key += event.key;

                                    key = key.replace(/Arrow|Control/gi, function (matched) {
                                        return mapObj[matched];
                                    });

                                    key = key.replace(/ /g,"space");



                                    start = key.toLowerCase().indexOf(querys.toLowerCase());

                                    if (start > -1) {
                                        handler && handler(new el(this));
                                        this.focus();
                                        key = "";
                                    }
                                },
                                true
                            );
                        });
                    }

                    Fire(event){
                        return this.Each(function () {
                            event && this[event]()
                        });
                    }

                    Copy(target, events) {
                        let tar,
                            ons = events.split(":");

                        (typeof target === "string")
                            ? tar = parent.querySelector(target)
                            : tar = target;

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

                    Toggle(event, methods, initial) {
                        let check = true;
                        this.On(event, function (el) {
                            if (check) {
                                methods.handler && methods.handler(el);
                                check = false;
                                return;
                            }
                            methods.callback && methods.callback(el);
                            check = true;
                        }, initial);
                        return this;
                    }

                    GetEvents(event){
                        let events = [];
                        for (const ev of Object.values(this.el[0].getEventListeners(event)))
                            event ? events.push(ev) : events.push(ev[0]);
                        return events
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
                            let front = this.getAttribute("style");

                            if (front) {
                                if (front.replace(/\s/g, "").includes("display:none"))
                                    this.style.display = "";
                            }

                            if (getComputedStyle(this).display === "none")
                                this.style.display = "initial";
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

                    Classes(className) {
                        let result = {},
                            handler = (action) => {
                                for (const e of this.el) e.classList[action](className);
                            },
                            list = ["add", "remove", "toggle"];

                        result.list = [];

                        for (const element of this.el[0].classList)
                            result.list.push(element);

                        result.contains = () => this.el[0].classList.contains(className);

                        for (let a of list)
                            result[a] = () => {
                                handler(a);
                                return this;
                            };

                        return result;
                    }

                    Css(declarations) {
                        let actions = {};

                        actions.set = (val) => {
                            if (typeof declarations === "object") {
                                let keys = Object.keys(declarations),
                                    arr = {},
                                    newCss = {},
                                    max = {},
                                    ancient = {},
                                    origin = {};

                                for (const element of keys) {
                                    let forbidden =
                                        "duration property direction loop time delay text effect";

                                    if (
                                        typeof declarations[element] !== "object" &&
                                        !forbidden.includes(element)
                                    ) {
                                        declarations[element] = {
                                            value: declarations[element]
                                        };
                                    }

                                    let delay = declarations[element].delay,
                                        duration =
                                            declarations[element].duration ||
                                            declarations.duration ||
                                            0;
                                    if (!declarations[element].delay) delay = 0;

                                    if (!forbidden.includes(element)) {
                                        let style = getComputedStyle(this.el[0]);
                                        arr[element] = duration + "ms " + delay + "ms";
                                        newCss[element] = declarations[element].value || 0;
                                        if (ancient === origin)
                                            ancient[element] = style[element] || 0;
                                        max[element] = parseFloat(delay) + parseFloat(duration);
                                    }
                                }

                                newCss.transition = el
                                    .objectToStyle(arr)
                                    .replace(/:/g, " ")
                                    .replace(/;/g, ", ");
                                newCss["transition-timing-function"] =
                                    declarations.effect || "ease";
                                if (declarations.particularly)
                                    newCss["transition-property"] =
                                        declarations.particularly.value;

                                if (!declarations.loop && !declarations.direction) {
                                    if (declarations.duration)
                                        newCss["transition-duration"] =
                                            declarations.duration + "ms";
                                    if (declarations.delay)
                                        newCss["transition-delay"] = declarations.delay + "ms";
                                }

                                ancient.transition = newCss.transition;
                                ancient["transition-timing-function"] =
                                    newCss["transition-timing-function"];
                                if (declarations.property)
                                    ancient["transition-property"] =
                                        newCss["transition-property"];
                                if (declarations.duration)
                                    ancient["transition-duration"] =
                                        newCss["transition-duration"];
                                if (declarations.delay)
                                    ancient["transition-delay"] = newCss["transition-delay"];

                                if (ancient === origin) {
                                    origin = ancient;
                                }

                                let array = Object.values(max);
                                max = Math.max(...array);
                                return this.Each(function () {
                                    let element = this,
                                        times = 1,
                                        boucle,
                                        delay = 100;
                                    if (declarations.loop || declarations.direction)
                                        if (declarations.delay) delay = declarations.delay;
                                    let interval = parseInt(max + delay) * 2 + 100;

                                    if (declarations.direction || declarations.loop) {
                                        action(max + delay);
                                        boucle = setInterval(function () {
                                            if (declarations.time)
                                                action(max + delay, declarations.time);
                                            else action(max + delay);
                                        }, interval);
                                        declarations.direction && clearInterval(boucle);
                                    } else element.setAttribute("style", el.objectToStyle(newCss));

                                    function action(delay, time) {
                                        element.setAttribute("style", el.objectToStyle(newCss));
                                        setTimeout(
                                            () =>
                                                element.setAttribute(
                                                    "style",
                                                    el.objectToStyle(ancient)
                                                ),
                                            parseInt(delay)
                                        );

                                        if (time) {
                                            times++;
                                            if (time <= times) clearInterval(boucle);
                                        }
                                    }
                                });
                            }

                            return this.Each(function () {
                                this.style[declarations] = val;
                            });
                        };

                        actions.get = () => getComputedStyle(this.el[0])[declarations];

                        return actions;
                    }

                    Style(options) {
                        return this.Each(function () {
                            this.animate(options, {
                                duration: 0,
                                fill: "forwards"
                            });
                        });
                    }

                    Anime(options) {
                        let an = {};
                        this.Each(function () {
                            an.animation = this.animate(options.keyframes, {
                                delay: options.delay || 0,
                                duration: options.duration || 700,
                                fill: options.fill || "forwards",
                                easing: options.effect || "ease-in-out",
                                times: options.iterations || 1
                            });
                        });

                        an.start = () => {
                            an.animation.play();
                            return this;
                        };

                        an.freeze = () => {
                            an.animation.pause();
                            return this;
                        };

                        an.stop = () => {
                            an.animation.finish();
                            return this;
                        };

                        an.cancel = () => {
                            an.animation.cancel();
                            return this;
                        };

                        an.animation.addEventListener(
                            "finish",
                            () => options.onfinish && options.onfinish(this, an)
                        );
                        an.animation.addEventListener(
                            "cancel",
                            () => options.oncancel && options.oncancel(this, an)
                        );
                        return an;
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
                            const c = firstEl.context.documentElement || firstEl.context.body;
                            scrollToItemId(c, this.el[0]);
                        }
                        return this;
                    }

                    static CONTENT(fun, content, element) {
                        let options = {};

                        options.get = () => element.el[0]["inner" + fun];

                        options.set = () => {
                            for (let el of element.el) el["inner" + fun] = content;

                            return element;
                        };

                        options.clear = () => {
                            for (let el of element.el) el["inner" + fun] = "";

                            return element;
                        };

                        options.append = (position) => {
                            let pos = position || "beforeend";

                            for (let el of element.el)
                                el["insertAdjacent" + fun](pos, content);

                            return element;
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
            };

        this.Render = (old) => {
            let keys = Object.keys(this.data),
                content = old || this.child.innerHTML;

            for (let item of keys) {
                while (content.includes("{{" + item + "}}"))
                    content = content.replace(
                        "{{" + item + "}}",
                        this.data[item].replace(/<[^>]*>/g, "")
                    );
            }

            this.child.innerHTML = content;
        };

        Shadow();

        this.Component = (name, options) => {
            let el = Find(name),
                find = (s) => Find(s);

            if (options.data)
                if (!options.data.length) {
                    options.obj = [];
                    options.obj.push(options.data);
                    options.data = options.obj;
                }
            if (typeof options.style === "string")
                if (options.style.toLowerCase() === "parent")
                    options.style = [app.style];
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
                    options.handler && options.handler(el, data, init);
                }
            });
            return this;
        };

        app.root && this.Root();
        this.Render();
        app.handler &&
        app.handler(
            this,
            (s) => Find(s),
            (s) => Find(s, true)
        );

        this.Init = () => {
            this.Render(old);
            app.handler &&
            app.handler(
                this,
                (s) => Find(s),
                (s) => Find(s, true)
            );
        };

        function selectElement(el, context = document) {
            let element = {};

            element.context = context;

            try {
                element.el = context.querySelector(el);
                element.e = el.replace("#", "")
            } catch (e) {
                element.el = el;
                element.e = el.getAttribute("id").replace("#", "")
            }

            return element;
        }
    }

    Root() {
        const parameters = new URL(window.location).searchParams.entries();

        for (let element of parameters) {
            this.data[element[0]] = String(element[1]);
        }

        this.Render();
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
            let newForm =
                parent.querySelector(options.form) ||
                this.RootElement.querySelector(options.form);
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

        options.data &&
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

        dt.Ar = () => {
            let newDate = new Date(date),
                months = [
                    "يناير",
                    "فبراير",
                    "مارس",
                    "إبريل",
                    "مايو",
                    "يونيو",
                    "يوليو",
                    "أغسطس",
                    "سبتمبر",
                    "أكتوبر",
                    "نوفمبر",
                    "ديسمبر"
                ],
                days = [
                    "اﻷحد",
                    "اﻷثنين",
                    "الثلاثاء",
                    "اﻷربعاء",
                    "الخميس",
                    "الجمعة",
                    "السبت"
                ];
            return (
                days[newDate.getDay()] +
                " " +
                newDate.getDate() +
                " " +
                months[newDate.getMonth()] +
                " " +
                newDate.getFullYear()
            );
        };

        return dt;
    }

    static Scroll(context = document) {
        let sc = {}

        sc.top = () => {
            const c = context.documentElement.scrollTop || context.body.scrollTop;

            if (c > 0) {
                window.requestAnimationFrame(sc.top);
                window.scrollTo(0, c - c / 8);
            }

            return this;
        };

        sc.bottom = () => {
            const c = context.documentElement.scrollTop || context.body.scrollTop,
                h = context.body.scrollHeight;

            if (window.innerHeight + window.scrollY >= context.body.offsetHeight) {
                window.scrollTo(0, c + h / 40);
                return;
            }

            window.requestAnimationFrame(sc.bottom);
            window.scrollTo(0, c + h / 40);
            return this;
        };

        sc.onBottom = (handler, before = 0) => {
            window.onscroll = (ev) => {
                if (
                    window.innerHeight + window.scrollY >=
                    context.body.offsetHeight - before
                )
                    handler(this);
            };

            return this;
        };

        sc.onTop = (handler) => {
            window.onscroll = (ev) => {
                if (window.scrollY <= 0) handler(this);
            };

            return this;
        };

        sc.position = () => window.screenTop;

        return sc;
    }

    static Orientation() {
        if (screen.orientation.angle === 90) return "Horizontally";
        return "Vertically";
    }

    static Screen(query, options) {
        if (!query.includes("(")) query = "(" + query + ")";

        let x = window.matchMedia(query),
            myFunction = (x) => {
                if (x.matches) options.handler && options.handler();
                else options.callback && options.callback();
                return x;
            },
            resultMatch = myFunction(x); // Call listener function at run time

        x.addEventListener("change", myFunction); // Attach listener function on state changes

        return resultMatch;
    }

    static Print(options, context = document) {
        let title = options.title || "",
            body = context.querySelector("body");
        body.insertAdjacentHTML(
            "beforeend",
            '<iframe class="seule--frame" name="sframe" style="position: fixed; bottom: -100%"></iframe>'
        );
        let iframeEl = context.getElementsByClassName("seule--frame")[0];
        let frameDoc = iframeEl.contentWindow
            ? iframeEl.contentWindow
            : iframeEl.contentDocument.document
                ? iframeEl.contentDocument.document
                : iframeEl.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write("<html><head><title>" + title + "</title>");
        frameDoc.document.write("</head><body>");
        options.style &&
        frameDoc.document.write(
            '<link href="' +
            options.style +
            '" rel="stylesheet" type="text/css" />'
        );
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
                winY = window.innerHeight || this.RootElement.documentElement.clientHeight,
                distTop = elem.getBoundingClientRect().top,
                distPercent = Math.round((distTop / winY) * 100),
                distPixels = Math.round(distTop),
                distUnit;
            distUnit = unit === "percent" ? distPercent : distPixels;
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
                    let sha = (done, shadow) => {
                        done = done || obj;
                        shadow.innerHTML = "";
                        let parentElement = document.createElement("section");
                        parentElement.classList.add("s-parent");

                        if (options.style.length === 1) {
                            let linkElement = document.createElement("link");
                            linkElement.setAttribute("rel", "stylesheet");
                            linkElement.setAttribute("href", options.style[0]);
                            shadow.appendChild(linkElement);
                        } else {
                            let style = document.createElement("style");
                            style.textContent = options.style;
                            shadow.appendChild(style);
                        }

                        for (const item of done) {
                            let element = document.createElement("article");
                            element.classList.add("s-article");
                            element.innerHTML = options.template(item);
                            parentElement.appendChild(element);
                        }

                        shadow.appendChild(parentElement);
                        return shadow;
                    };

                    class common extends HTMLElement {
                        constructor() {
                            super();
                            const shadow = this.attachShadow({
                                mode: options.mode || "open"
                            });
                            sha(obj, shadow);

                            let initial = (done, handler) => {
                                sha(done, shadow);
                                handler && handler(shadow);
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

                            options.handler && options.handler(els, obj, initial);
                        }
                    }

                    customElements.define(options.selector, common);
                } else {
                    options.element.Html("").set();

                    for (const item of obj) {
                        options.element.Html(options.template(item)).append();
                    }
                }
            }
        }

        options.callback && options.callback(options.element, result);
        return result;
    }

    static HtmlEscape(str) {
        const tagsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&#34;",
                "'": "&#39;",
                "`": "&#180;"
            },
            replaceTag = (tag) => tagsToReplace[tag] || tag,
            safe_tags_replace = (s) => s.replace(/[&<>"']/g, replaceTag);

        return safe_tags_replace(str);
    }

    static BytesToSize(bytes) {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes.toString() === "0") return "0 Byte";
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    }
}

(function(){
    Element.prototype._addEventListener = Element.prototype.addEventListener;
    Element.prototype._removeEventListener = Element.prototype.removeEventListener;

    Element.prototype.addEventListener = function(type,listener,useCapture=false) {
        this._addEventListener(type,listener,useCapture);
        if(!this.eventListenerList) this.eventListenerList = {};
        if(!this.eventListenerList[type]) this.eventListenerList[type] = [];
        this.eventListenerList[type].push( {type, listener, useCapture} );
    };
    Element.prototype.removeEventListener = function(type,listener,useCapture=false) {
        this._removeEventListener(type,listener,useCapture);
        if(!this.eventListenerList) this.eventListenerList = {};
        if(!this.eventListenerList[type]) this.eventListenerList[type] = [];
        for(let i=0; i<this.eventListenerList[type].length; i++){
            if( this.eventListenerList[type][i].listener===listener && this.eventListenerList[type][i].useCapture===useCapture){
                this.eventListenerList[type].splice(i, 1);
                break;
            }
        }
        if(this.eventListenerList[type].length===0) delete this.eventListenerList[type];
    };
    Element.prototype.getEventListeners = function(type){
        if(!this.eventListenerList) this.eventListenerList = {};
        if(type===undefined)  return this.eventListenerList;
        return this.eventListenerList[type];
    };
}())




