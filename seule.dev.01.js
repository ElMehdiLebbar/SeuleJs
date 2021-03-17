/* Copyright & all rights reserved to El Mehdi LABBAR*/
class Seule{
    constructor(selector) {
        this.el = selector;
        if (selector === 'window') this.element = [window];
        else if (typeof selector === 'object') this.element = selector;
        else this.element = document.querySelectorAll(selector);
        this.tags = this.element;
        if(this.tags.length) this.tags = this.element[0];
        this.selector = selector;
        this.check = true;
        this.cont = true
    }
    find(selector){
        if (typeof selector === 'object') return new Seule(selector);
        return new Seule(this.el+ ' '+ selector);
    }
    children(index){
        let children = this.tags.children;
        if(index){
            if(index.toString().toLowerCase() === 'last') return new Seule(children[children.length-1]);
            if(index.toString().toLowerCase() === 'first') return new Seule(children[0]);
            return new Seule(children[index-1])
        }
        return new Seule(children)
    }
    parent(){
        return new Seule(this.tags.parentElement)
    }

    each(callback){
        if(this.element.length == null) callback.call(this.element);
        else for (const element of this.element) callback.call(element);
        return this
    }

    on(event, handler){
        return this.each(function() {
            this.addEventListener(event,  ()=> handler(new Seule(this), this), false)
        });
    }
    click(handler){
        return this.on('click',  (el) => handler(el))
    }
    focus(handler){
        if(handler) {
           return this.on('focus',  (el) => handler(el))
        }
        this.tags.focus();
        return this.tags
    }
    blur(handler){
        if(handler) {
            return this.on('blur',  (el) => handler(el))
        }
        this.tags.blur();
        return this.tags
    }
    hold(handler){

        let timer = null,
            isTouch = (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)),
            mouseDown = isTouch ? 'touchstart' : 'mousedown',
            mouseUp = isTouch ? 'touchend' : 'mouseup',
            mouseMove = isTouch ? 'touchmove' : 'mousemove',
            startX = 0,
            startY = 0,
            maxDiffX = 10,
            maxDiffY = 10;

        if (typeof window.CustomEvent !== 'function') {
            window.CustomEvent = function(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                let evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
            window.CustomEvent.prototype = window.Event.prototype;
        }
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();


        function requestTimeout(fn, delay) {

            if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame &&
                !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
                !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setTimeout(fn, delay);

            let start = new Date().getTime(),
                handle = {},
                loop = function() {
                    let current = new Date().getTime(),
                        delta = current - start;
                    if (delta >= delay) {
                        fn.call();
                    }
                    else {
                        handle.value = requestAnimFrame(loop);
                    }
                };
            handle.value = requestAnimFrame(loop);
            return handle;
        }
        function clearRequestTimeout(handle) {
            if (handle) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
                    window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
                        window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
                            window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
                                window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
                                    window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
                                        clearTimeout(handle);
            }
        }
        function fireLongPressEvent(originalEvent) {

            clearLongPressTimer();

            let clientX = isTouch ? originalEvent.touches[0].clientX : originalEvent.clientX,
                clientY = isTouch ? originalEvent.touches[0].clientY : originalEvent.clientY,
                suppressClickEvent = this.dispatchEvent(new CustomEvent('long-press', { bubbles: true, cancelable: true, detail: { clientX: clientX, clientY: clientY } }));

            if (suppressClickEvent) {

                // temporarily intercept and clear the next click
                document.addEventListener(mouseUp, function clearMouseUp(e) {
                    document.removeEventListener(mouseUp, clearMouseUp, true);
                    cancelEvent(e);
                }, true);
            }
        }
        function startLongPressTimer(e) {
            clearLongPressTimer(e);
            let el = e.target,
                longPressDelayInMs = parseInt(el.getAttribute('data-long-press-delay') || '1500', 10);
            timer = requestTimeout(fireLongPressEvent.bind(el, e), longPressDelayInMs);
        }
        function clearLongPressTimer(e) {
            clearRequestTimeout(timer);
            timer = null;
        }
        function cancelEvent(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
        }
        function mouseDownHandler(e) {
            startX = e.clientX;
            startY = e.clientY;
            startLongPressTimer(e);
        }
        function mouseMoveHandler(e) {
            let diffX = Math.abs(startX - e.clientX),
                diffY = Math.abs(startY - e.clientY);
            if (diffX >= maxDiffX || diffY >= maxDiffY) {
                clearLongPressTimer(e);
            }
        }

        document.addEventListener(mouseUp, clearLongPressTimer, true);
        document.addEventListener(mouseMove, mouseMoveHandler, true);
        document.addEventListener('wheel', clearLongPressTimer, true);
        document.addEventListener('scroll', clearLongPressTimer, true);
        document.addEventListener(mouseDown, mouseDownHandler, true);

        this.on("long-press",  (el)=> handler(el))

        return this;

    }
    swipe(on, handler){
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
    hotKey(query, handler){
        let key = '',
            start,
            mapObj = {
                Arrow:"",
                Control:"ctrl"
            },
            querys = query.replace(/\s/g, '');
        return this.each(function() {
            this.addEventListener("keydown", function(event) {
                key += event.key;

                key = key.replace(/Arrow|Control/gi, function(matched){
                    return mapObj[matched];
                });


                start = key.toLowerCase().indexOf(querys.toLowerCase());

                if(start > -1){
                    handler(new Seule(this), this);
                    key = '';
                }

                setInterval( ()=> key = '', 5000);
            }, true);
        });
    }
    copy(options){
        let target = document.querySelector(options.target);
        return this.on(options.on, function() {
            let eventFired = new MouseEvent(options.event, {
                view: window,
                bubbles: true,
                cancelable: true
            });
            target.dispatchEvent(eventFired);
        });
    }
    toggle(options){
        let check = true;
        return this.on(options.event, function(el) {
            if (check === true) {
                options.handler(el);
                check = false;
                return
            }
            options.callback(el);
            check = true;
        })
    }

    scroll(content){
        let parent = new Seule(this.parent().selector)

        if(content) parent = new Seule(content)

        if(parent.getStyle('position').toLowerCase() === 'fixed') parent.element[0].scrollTop =  this.tags.offsetTop-10;
        else window.scrollTo({ top: this.tags.offsetTop });

        return this.tags
    }
    scrollPosition(axe){
        if(axe) return this.tags.pageXOffset || this.tags.scrollLeft;
        return this.tags.pageYOffset || this.tags.scrollTop
    }

    width (value) {
        if (value) return this.each(function() {
            this.style.width = value;
        });
        return getComputedStyle(this.tags).width;
    };
    height (value) {
        if (value) return this.each(function() {
            this.style.height = value;
        });

        return getComputedStyle(this.tags).height;
    };

    addClass (classes) {
        return this.each(function() {
            this.classList.add(classes);
        });
    }
    removeClass(className){
        return this.each(function() {
            this.classList.remove(className);
        });
    }
    toggleClass(className){
        return this.each(function() {
            this.classList.toggle(className);
        });
    }
    hasClass(className) {
        if (this.tags.className.match('(?:^|\\s)'+className+'(?!\\S)')) return true
    }
    style(cssProperty, value) {
        return this.each(function() {
            this.style[cssProperty] = value;
        });
    }
    css(obj) {
        return this.each(function() {
            this.setAttribute("style", Seule.objectToStyle(obj));
        })
    }
    getStyle(cssProperty){
        let style = getComputedStyle(this.tags);
        return style[cssProperty];
    }
    classList(){
        let result = [];
        for (const element of this.tags.classList) result.push(element);
        return result;
    }
    classListContains(className){
        return this[0].classList.contains(className);
    }
    show(){
        return this.each(function() {
            if(this.getAttribute("style").includes('display: none')) this.style.display = "";
            else this.style.display = "inherit";
        });
    }
    hide(){
        return this.each(function() {
            this.style.display = "none";
        });
    }
    visible(isTrue) {
        return this.each(function() {
            if (isTrue) this.style.visibility = "hidden";
            else this.style.visibility = "visible";
        });
    }
    isVisible() {
        return this.tags.style.visibility !== "hidden";
    }
    opacity(value) {
        return this.each(function() {
            this.style["opacity"] = value;
        });
    }

    anime(obj) {
        if(obj) {
            let keys = Object.keys(obj),
                selector = this.tags,
                arr = {},
                newCss = {},
                max = {},
                ancient = {},
                origin = {};

            for (const element of keys) {
                let delay = obj[element].delay || '0s',
                    duration = obj[element].duration || '0.3s';

                if(element != 'type' && element != 'direction'){
                    let style = getComputedStyle(selector);
                    arr[element] = duration + ' ' + delay;
                    newCss[element] = obj[element].value || 'inherit';
                    if(ancient === origin) ancient[element] = style[element] || 'inherit';
                    max[element] = parseFloat(delay.replace(/s/g, "")) + parseFloat(duration.replace(/s/g, ""));
                }
            }

            newCss.transition  = Seule.objectToStyle(arr).replace(/:/g, " ").replace(/;/g, ", ");
            newCss['transition-timing-function'] = obj.type || 'ease';

            ancient.transition = newCss.transition;
            ancient['transition-timing-function'] = newCss['transition-timing-function'];

            if(ancient === origin) origin = ancient;

            let array = Object.values(max);
            max = Math.max(...array)*1000;

            return this.each(function() {
                let element = this,
                    times = 1,
                    boucle,
                    delay = obj.timeOut || 100,
                    interval = (parseInt(max + delay)*2) + 100;

                if(obj.direction || obj.loop){
                    action(max + delay);
                    boucle = setInterval(function () {
                        if(obj.time) action(max + delay, obj.time);
                        else action(max + delay);
                    }, interval);

                    if(obj.direction) clearInterval(boucle);
                }
                else element.setAttribute("style", Seule.objectToStyle(newCss));

                function action(delay, time) {
                    element.setAttribute("style", Seule.objectToStyle(newCss));
                    setTimeout( ()=> element.setAttribute("style", Seule.objectToStyle(ancient)), parseInt(delay))

                    if(time){
                        times++
                        if(time <= times) clearInterval(boucle);
                    }
                }
            })
        }
        return this.each(function() {
            this.style.transition = 'all ease 0.7s';
        })
    }

    text(str) {
        if (typeof str === 'undefined') return this.tags["innerText"];
        return this.each(function() {
            this["innerText"] = str;
        });

    }
    val(value){
        if(typeof value === 'undefined') return this.tags.value;
        return this.each(function() {
            this.value = value;
        });
    }
    attr(attribute, value){
        if (value) return this.each(function() {
            this.setAttribute(attribute, value);
        });
        return this.tags.getAttribute(attribute);
    }
    attrRemove(attribute){
        return this.each(function() {
            this.removeAttribute(attribute);
        });
    }
    html(html){
        if (typeof html === 'undefined') return this.tags.innerHTML;
        return this.each(function() {
            this.innerHTML = html;
        });
    }
    /*
    append (html, position) {
        return this.each(function() {
            this.insertAdjacentHTML(Seule.hTmlplace("beforeend", position), html);
        });
    };
    insertHtml(html, position) {
        return this.each(function() {
            this.insertAdjacentHTML(Seule.hTmlplace("afterend", position), html);
        });
    };*/
    /*static hTmlplace(pos, position){
      switch (true) {
          case position === 'top':
              pos = 'afterbegin';
              break;
          case position === 'before':
              pos = 'beforebegin';
              break;
          case position == null && pos ==="afterend":
              pos = 'afterend';
              break;
          default:
              pos ="beforeend";
      }
      return pos;
  }*/

    root(params){
        let parameters = decodeURI(window.location.href).split("?"),
            obj = {},
            el = new Seule(this.tags),
            content = el.html(),
            newPara = []

        parameters = parameters[1].split("&")
        if(params) params = params.split('&')



        for (let element of parameters){

            if(params) for (let param of params){
                let nParam = param.split('=')
                let nElement = element.split('=')
                if(nParam[0] === nElement[0]) element = param
            }

            newPara.push(String(element))
        }

        let ind = content.search("}}")

        for(let element of newPara)
            if(element.includes("=")) {
                let item = element.split("=")
                obj[item[0]] = item[1]
                while (content.includes("{{"+item[0]+"}}")) content = content.replace("{{"+item[0]+"}}", "<seules class='str202109876"+item[0]+"'>"+item[1]+"</seules>")
            }

        el.html(content)

        for (let element of newPara)
            if(element.includes("=")){
                let item = element.split("=")
                let it = new Seule(".str202109876"+item[0])
                it.text(item[1])
            }

        this.cont = false
        return obj
    }

    component(name, options){
        Seule.PDO({
            mode: options.mode,
            style: options.style || '',
            Execute: false,
            obj: options.data || [{}],
            child: options.child || false,
            columns: options.columns || false,
            nest: options.nest || false,
            item: options.item || false,
            action: options.action || false,
            selector:name,
            query(item){
                if(options.query) return options.query(item)
                return item
            },
            fetch(item){
                return options.template(item) || ''
            },
            handler(el, data){
                if(options.handler) options.handler(el, data)
            }
        });
        return this
    }


    static async get(options) {

        let formData = new FormData();

        options.param = {
            method: options.method || 'get'
        }

        if (options.method === 'post') options.param.body = formData

        if(options.form){
            let newForm = document.querySelector(options.form);
            formData = new FormData(newForm);
            newForm.onsubmit = async (e) => e.preventDefault();
        }

        if(options.file){
            if(typeof options.file === "object"){
                Seule.loop({
                    obj : options.file,
                    handler: function (item) {
                        let file;
                        if(typeof item === 'object') file = item;
                        else file = document.querySelector(item);
                        formData.append(file.name, file.files[0])
                    }
                })
            }
            else{
                options.file = document.querySelector(options.file);
                formData.append(options.file.name, options.file.files[0])
            }
        }

        if(options.data) Object.keys(options.data).forEach((k)=>formData.append(k, options.data[k]));

        let response = await fetch(options.url, options.param)

        if (response.ok) {
            if(options.blob) return await response.blob();
            if(options.json) return await response.json();
            return await response.text();
        }
        else return ("HTTP-Error: " + response.status);
    }
    static async post(options){
        options.urls = options.url || '';
        options.datas = options.data || '';
        options.result = [];
        options.method = 'post'

       if (typeof options.url === "object"){
           Seule.loop({
               obj : options.urls,
               handler(item){
                   options.url = item;
                   Seule.get(options).then(function (done) {
                        options.result.push(done);
                   });
               }
           })
           return options.result;
       }
       if (typeof options.data === "object"){
            Seule.loop({
                obj : options.datas,
                handler(item){
                    options.data = item;
                    Seule.get(options).then(function (done) {
                        options.result.push(done);
                    });
                }
            })
            return options.result;
        }
       return await Seule.get(options)
    }

    static store(options){
        if(options.obj) window.localStorage.setItem(options.name, JSON.stringify(options.obj))
        else{
            if(options.Execute === 'get') return JSON.parse(window.localStorage.getItem(name))
            if(options.Execute === 'delete') window.localStorage.removeItem(name);
            if(options.Execute === 'delete All') window.localStorage.clear();
        }
        return this
    }

    static loop(options){
        if(typeof options.obj !== "object"){
            Seule.get({
                url: options.obj,
                json: true,
                method: 'get',
            }).then(function (done) {
                options.obj = done;
                [].forEach.call(options.obj, options.handler);
            })
        }
        else [].forEach.call(options.obj, options.handler);
        return options
    }


    static objectToUrlQuery(obj){
        let s = Object.keys(obj)
            .map((key)=> key + "=" + obj[key])
            .join("&");
        return ("'" + s + "'").slice(1).slice(0, -1);
    }
    static objectToStyle(obj){
        return Seule.objectToUrlQuery(obj).replace(/&/g, ";").replace(/=/g, ":");
    }

    static audioPlay (src, delay){
        let audio = new Audio(src);
        this.delay = delay;
        setTimeout(function () {
            audio.pause();
            audio.play();
        }, delay);
        return audio;
    };
    static audioPauseIn (audioElement, timeOut){
        setTimeout(function(){
            audioElement.pause();
            audioElement.currentTime = 0;
        }, timeOut + this.delay);

        return this;
    };

    static increaseDate(options) {
        let tomorrow = new Date(options.date),
            newDate = new Date(tomorrow.setMonth(tomorrow.getMonth()+parseInt(options.step))),
            dateMonth = newDate.getMonth()+1;

        if(options.prefix){
            if(options.prefix.toLowerCase() === 'day'){

                let tomorrow = new Date(options.date);
                tomorrow.setDate(tomorrow.getDate() + parseInt(options.step));
                return tomorrow.getFullYear() + '-'+ ('0' + (tomorrow.getMonth()+1)).slice(-2) + '-' +('0' + tomorrow.getDate()).slice(-2);

            }else{
                dateMonth = tomorrow.getFullYear()+1;
                return dateMonth + '-'+ ('0' + tomorrow.getMonth()).slice(-2) + '-' +('0' + tomorrow.getDate()).slice(-2);
            }
        }else{
            return newDate.getFullYear() + '-'+ ('0' + dateMonth).slice(-2) + '-' +('0' + newDate.getDate()).slice(-2);
        }
    }
    static ifDateBetween(options){

        let d1 = options.from.split(options.character || "/"),
            d2 = options.to.split(options.character || "/"),
            c = options.value.split(options.character || "/");

        options.from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
        options.to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
        options.value = new Date(c[2], parseInt(c[1])-1, c[0]);

        if(options.value > options.from && options.value < options.to){
            if(options.handler) options.handler()
            return true
        }
        if(options.callback) options.callback()
        return false
    }

    static load(options){
        let elements = document.querySelectorAll(options.selector);
        Seule.get({
            url: options.url
        }).then(function (data) {
            for (const element of elements) element.innerHTML = data;
            options.handler(new Seule(options.selector), elements);
        });
        return this
    }

    emit(options){
        let element = document.querySelectorAll(this.selector+" *");
        Seule.loop({
            obj: element,
            handler(item){
                if(item.getAttribute('@'+ options.attr)){
                    let val = item.getAttribute('@'+ options.attr),
                        option = val.split("{"),
                        obj = '{'+option[1].slice(0, -1)+'}'

                    obj = obj.replace(/[~']/g, '"').replace(/[~`]/g, '"');
                    obj = JSON.parse(obj);
                    if(option[0]) item.addEventListener(option[0], ()=> options.handler(obj, new Seule(item), item), false)
                    else options.handler(obj, new Seule(item), item);
                }
            }
        });
        options.app = new Seule(this.selector);
        options.e = element;
        return this;
    }
    static scrollTop (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return this;
    }
    static scrollBottom(){
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return this;
    }

    static orientation (){
        if(screen.orientation.angle === '90') return 'Horizontally'
        return 'Vertically'
    };
    static screen (options){
        let x = window.matchMedia(options.query),
            resultMatch = myFunction(x); // Call listener function at run time

        x.addEventListener('change', myFunction); // Attach listener function on state changes

        function myFunction(x) {
            if (x.matches)  if(typeof options.handler == "function") options.handler()
            else if(typeof options.callback == "function") options.callback()
            return x;
        }
        return resultMatch
    };

    static sceneHandler(options) {
        window.addEventListener('scroll', function() {
            elementFromTop(options);
        }, false);
        function elementFromTop(options) {
            let elem = document.querySelector(options.selector),
                unit = options.unit || 'percent',
                distanceFromTop = options.distance,
                winY = window.innerHeight || document.documentElement.clientHeight,
                distTop = elem.getBoundingClientRect().top,
                distPercent = Math.round((distTop / winY) * 100),
                distPixels = Math.round(distTop),
                distUnit;
            distUnit = unit == 'percent' ? distPercent : distPixels;
            if (distUnit <= distanceFromTop)  options.handler()
            else if(options.callback) options.callback()
        }
        return this
    }
    static scene(options){
        let i = 0;
        Seule.sceneHandler({
            selector : options.selector || 'body',
            distance : options.distance || 0,
            unit : options.unit || 'percent',
            handler: ()=>{
                if(i === 0){
                    options.handler();
                    i = 1;
                }
            },
            callback : ()=> {
                if(i === 1){
                    if(options.callback){
                        options.callback();
                        i = 0
                    }
                }
            }
        });
        return this;
    }

    static print(options) {
       let body = new Seule('body')
        body.append('<iframe class="seule--frame" name="sframe" style="position: fixed; bottom: -100%"></iframe>')
        let iframeEl = document.getElementsByClassName('seule--frame')[0]

        let frameDoc = iframeEl.contentWindow ? iframeEl.contentWindow : iframeEl.contentDocument.document ? iframeEl.contentDocument.document : iframeEl.contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.
        frameDoc.document.write('<html><head><title>DIV Contents</title>');
        frameDoc.document.write('</head><body>');
        //Append the external CSS file.
        frameDoc.document.write('<link href="'+options.css+'" rel="stylesheet" type="text/css" />');
        //Append the DIV contents.
        frameDoc.document.write(options.html);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();

        setTimeout(function () {
            window.frames["sframe"].focus();
            window.frames["sframe"].print();
        }, 500);
    }

    static PDO(options){

        let obj = [...options.obj],
            child = [],
            nest = [],
            result = {},
            select = ()=> {
                let filter = obj.filter((el, index) => {
                    if(options.Execute !== 'remove duplicates' && !options.columns) el.index = index
                    if((options.child && options.Execute !== 'insert') || (options.Execute === 'insert' && options.nest)) return el[options.child].some((e, i) => options.query(e, i));
                    return options.query(el, index)
                });

                if(options.child) {
                    for (const el of obj){
                        for (const e of el[options.child]){
                            if(options.Execute !== 'remove duplicates') e.parent = el.index
                            child.push(e)
                        }
                    }
                    nest = child
                    child = child.filter((el, index)=> options.query(el, index))
                }
                return filter
            },
            map = (obj) =>{
                obj.map(function (o) {
                    let c =  o;
                    if(typeof options.columns === 'object' && options.action.toLowerCase() === 'replace'){
                        c[options.columns[1]] = c[options.columns[0]];
                        delete c[options.columns[0]];
                    }
                    if(options.action.toLowerCase() === 'drop') for (const element of options.columns) delete c[element];
                    if(options.action.toLowerCase() === 'add') for (const element of options.columns) if(!c.hasOwnProperty(element)) c[element] = "";
                    return c;
                });
            },
            group = (obj)=>{
                let data = []
                options.group =  [...new Set(obj.reduce((r, a) => r.concat(a[options.columns]), []))];
                Seule.loop({
                    obj : options.group,
                    handler(el, index){
                        let e = '{"'+options.columns+'":"'+el+'"}'
                        data.push(JSON.parse(e))
                    }
                })
                return data;
            },
            removeDpl = (obj)=>{
                if(options.columns){
                    let lookup = new Set();
                    return obj.filter(data => !lookup.has(data[options.columns]) && lookup.add(data[options.columns]));
                }
                let uniqueSet = new Set(obj.map(JSON.stringify));
                return Array.from(uniqueSet).map(JSON.parse);
            },
            sum = (obj)=>{
                return obj.reduce((sums, obj) => Object.keys(obj).reduce((s, k) => {
                    (s[k] = (s[k] || 0) + +obj[k]);
                    return s;
                }, sums), {});
            },
            sort = (obj)=>{
                let sortBy = ()=> (a,b)=> {
                        if(a[options.columns] > b[options.columns]) return 1;
                        else if(a[options.columns] < b[options.columns]) return -1;
                        return 0;
                    }
                return obj.sort(sortBy(options.columns))
            }


        result.res = select()
        result.child = child

        switch (options.Execute) {
            case 'update':
                let items = Object.keys(options.item) || {};
                result.res.forEach( (f) => options.obj.findIndex((e) => {
                        if(e === f) for (const element of items){
                            if(options.nest) for (const i of result.child) i[element] = options.item[element]
                            else e[element] = options.item[element]
                        }
                    }))
                break
            case 'delete':
                result.child.forEach((f) => nest.splice(nest.findIndex((e)=> e === f), 1))
                if(options.nest){
                    result.res.forEach((f) => f[options.child].findIndex((e) => {
                           for (const element of result.child) if(e === element) f[options.child].splice(f[options.child].findIndex((e)=> e === element), 1)
                    }))
                    result.res = options.obj
                    break
                }
                result.res.forEach((f) => options.obj.splice(options.obj.findIndex((e)=> e === f), 1))
                break
            case 'insert':
                if(options.child) for(const element of result.res){
                    if(typeof element[options.child] !== 'object') element[options.child] = []
                    options.item.parent = element.index
                    options.obj[element.index][options.child].push(options.item)
                    nest.push(options.item)
                }
                else options.obj.push(options.item)
                break
            case 'alter':
                if(options.nest) map(result.child)
                else map(result.res)
                break
            case 'group by':
                if(options.nest) result = group(result.child)
                else result = group(result.res)
                break
            case 'sum':
                if(options.nest) result = sum(result.child)
                else result = sum(result.res)
                break
            case 'remove duplicates':
                if(options.nest) result = removeDpl(result.child)
                else result = removeDpl(result.res)
                break
            case 'order by':
                if(options.nest) result = sort(result.child)
                else result = sort(result.res)
                break
        }

        if(options.Execute !== 'select') {
            result.res = options.obj
            result.child = nest
        }
        if(options.Execute === 'order by' || options.Execute === 'sum' || options.Execute === 'group by' || options.Execute === 'remove duplicates'){
            delete result.child
            delete result.res
        }

        if(options.fetch){
            let obj = result.res,
                html = '',
                els = {};

            if(!result.res) obj = result
            if(options.nest) obj = result.child

            for (const item of obj) html += options.fetch(item)

            class Example extends HTMLElement {
                constructor() {
                    super();
                    const shadow = this.attachShadow({ mode: options.mode || 'open' });
                    shadow.innerHTML = html

                    if(options.style.length === 1){
                        let linkElement = document.createElement('link')
                        linkElement.setAttribute('rel', 'stylesheet')
                        linkElement.setAttribute('href', options.style[0])
                        shadow.appendChild(linkElement)
                    }
                    else{
                        let style = document.createElement('style')
                        style.textContent = options.style
                        shadow.appendChild(style)
                    }

                }
            }
            customElements.define(options.selector, Example);

            if(options.mode !== 'closed') {
                els = new Seule(options.selector)
                els.find = function (selector) {

                let el =  document
                    .querySelectorAll(options.selector),
                    es=[]

                for(let e of el)
                   es.push(new Seule(e.shadowRoot.querySelectorAll(selector))) ;

                if(es.length === 1) es = es[0]
                return es
            }
            }
            else els.find = () => console.log('mode is closed! to use find method, Switch to the open Mode!')

            if (options.handler) options.handler(els)

        }

        return result

    }

}
