"use strict";class Seule{constructor(a,b,c){this.el=a,this.element="window"===a?[window]:"object"==typeof a?a:document.querySelectorAll(a),this.tags=this.element,this.tags.length&&(this.tags=this.element[0]),this.selector=a,this.check=!0,this.cont=!0,this.root=b,"object"==typeof b&&(this.parrent=b),this.children=!1;let d=this.children;this.render=function(){let b=this.tags;class e extends HTMLElement{constructor(){super();const a=this.attachShadow({mode:"closed"});if("object"==typeof c){let b=document.createElement("link");b.setAttribute("rel","stylesheet"),b.setAttribute("href",c[0]+".css"),a.appendChild(b)}else{let b=document.createElement("style");b.textContent=c,a.appendChild(b)}let e=b.cloneNode(!0);b.innerHTML="",a.appendChild(e),d=new Seule(a.children)}}customElements.define("seule-"+a.replace("#",""),e);let f=document.createElement("seule-"+a.replace("#",""));b.appendChild(f)},b&&"object"!=typeof b&&(this.render(),this.children=d,console.log("%cDon't try anything cute,\n%cDom is Protected! \uD83D\uDE21","color: gray; font-size:15px;","color: red; font-size:38px;"))}Find(a){return this.root?(this.tags=this.children.element[1].querySelectorAll(a),this.el=a,new Seule(this.tags,this.children.element[1])):"object"==typeof a?new Seule(a):new Seule(this.el+" "+a)}Children(a){let b=this.tags.children;return a?"last"===a.toString().toLowerCase()?new Seule(b[b.length-1]):"first"===a.toString().toLowerCase()?new Seule(b[0]):new Seule(b[a-1]):new Seule(b)}Parent(){return new Seule(this.tags.parentElement)}Each(a){if(null==this.element.length)a.call(this.element);else for(const b of this.element)a.call(b);return this}On(a,b){return this.Each(function(){this.addEventListener(a,()=>b(new Seule(this),this),!1)})}Click(a){return this.On("click",b=>a(b))}Focus(a){return a?this.On("focus",b=>a(b)):(this.tags.focus(),this.tags)}Blur(a){return a?this.On("blur",b=>a(b)):(this.tags.blur(),this.tags)}Hold(a){function b(a,b){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&!(window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(a,b);let c=new Date().getTime(),d={},e=function(){let f=new Date().getTime();f-c>=b?a.call():d.value=requestAnimFrame(e)};return d.value=requestAnimFrame(e),d}function c(a){a&&(window.cancelAnimationFrame?window.cancelAnimationFrame(a.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(a.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(a.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(a.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(a.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(a.value):clearTimeout(a))}function d(a){g();let b=k?a.touches[0].clientX:a.clientX,c=k?a.touches[0].clientY:a.clientY,d=this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:b,clientY:c}}));d&&document.addEventListener(m,function a(b){document.removeEventListener(m,a,!0),h(b)},!0)}function f(a){g(a);let c=a.target,e=parseInt(c.getAttribute("data-long-press-delay")||"1500",10);j=b(d.bind(c,a),e)}function g(){c(j),j=null}function h(a){a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation()}function i(a){let b=Math.abs(o-a.clientX),c=Math.abs(p-a.clientY);(b>=q||c>=r)&&g(a)}let j=null,k="ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints,l=k?"touchstart":"mousedown",m=k?"touchend":"mouseup",n=k?"touchmove":"mousemove",o=0,p=0,q=10,r=10;return"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};let c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c},window.CustomEvent.prototype=window.Event.prototype),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),document.addEventListener(m,g,!0),document.addEventListener(n,i,!0),document.addEventListener("wheel",g,!0),document.addEventListener("scroll",g,!0),document.addEventListener(l,function(a){o=a.clientX,p=a.clientY,f(a)},!0),this.On("long-press",b=>a(b)),this}Swipe(a,b){function c(c){if(d&&e){let f=c.touches[0].clientX,g=c.touches[0].clientY,h=d-f,i=e-g;if(Math.abs(h)>Math.abs(i)){if(0<h){if("left"===a)b(new Seule(this),this);else return!1;}else if(0>h)if("right"===a)b(new Seule(this),this);else return!1;}else if(0<i){if("top"===a)b(new Seule(this),this);else return!1;}else if(0>i)if("bottom"===a)b(new Seule(this),this);else return!1;d=null,e=null}}let d,e,f=this.element;return f[0].addEventListener("touchstart",function(a){d=a.touches[0].clientX,e=a.touches[0].clientY},!1),f[0].addEventListener("touchmove",c,!1),this}HotKey(a,b){let c,d="",e={Arrow:"",Control:"ctrl"},f=a.replace(/\s/g,"");return this.Each(function(){this.addEventListener("keydown",function(a){d+=a.key,d=d.replace(/Arrow|Control/gi,function(a){return e[a]}),c=d.toLowerCase().indexOf(f.toLowerCase()),-1<c&&(b(new Seule(this),this),d=""),setInterval(()=>d="",5e3)},!0)})}KeyLogger(){let a="",b=this.el,c={Arrow:"",Control:"ctrl"};return this.Each(function(){this.addEventListener("keydown",function(d){a+=d.key,a=a.replace(/Arrow|Control/gi,function(a){return c[a]}),setInterval(()=>a="",1e4),Seule[b]=a},!0)})}Copy(a,b){let c=this.parrent.querySelector(a);return this.On(b.on,function(){let a=new MouseEvent(b.event,{view:window,bubbles:!0,cancelable:!0});c.dispatchEvent(a)})}Toggle(a,b){let c=!0;return this.On(a,function(a){return!0===c?(b.handler(a),void(c=!1)):void(b.callback(a),c=!0)})}Scroll(a){let b=new Seule(this.Parent().selector);return a&&(b=new Seule(a)),"fixed"===b.getStyle("position").toLowerCase()?b.element[0].scrollTop=this.tags.offsetTop-10:window.scrollTo({top:this.tags.offsetTop}),this.tags}ScrollPosition(a){return a?this.tags.pageXOffset||this.tags.scrollLeft:this.tags.pageYOffset||this.tags.scrollTop}Delay(a,b){return this.Each(function(){setTimeout(a,b||1e3)})}Loop(a,b){return this.Each(function(){let c=setInterval(()=>{a(()=>clearInterval(c))},b||1e3)})}AddClass(a){return this.Each(function(){this.classList.add(a)})}RemoveClass(a){return this.Each(function(){this.classList.remove(a)})}ToggleClass(a){return this.Each(function(){this.classList.toggle(a)})}HasClass(a){return!!this.tags.className.match("(?:^|\\s)"+a+"(?!\\S)")}Classes(a,b){return"add"===a&&this.AddClass(b),"remove"===a&&this.RemoveClass(b),"toggle"===a&&this.ToggleClass(b),this}ClassList(){let a=[];for(const b of this.tags.classList)a.push(b);return a}ClassListContains(a){return this.tags.classList.contains(a)}Style(a,b){return this.Each(function(){this.style[a]=b})}Css(a){return this.Each(function(){this.setAttribute("style",Seule.objectToStyle(a))})}GetStyle(a){return getComputedStyle(this.tags)[a]}Show(){return this.Each(function(){let a=getComputedStyle(this).display;"none"===a&&(this.style.display="inherit")})}Hide(){return this.Each(function(){this.style.display="none"})}Visible(a){return this.Each(function(){this.style.visibility=a?"hidden":"visible"})}IsVisible(){return"hidden"!==this.tags.style.visibility}Opacity(a){return this.Each(function(){this.style.opacity=a})}Anime(a){if(a){let b=Object.keys(a),c={},d={},e={},f={},g={},h="",i=a.text;for(const h of b){"object"==typeof a[h]||"duration property direction loop time delay text".includes(h)||(a[h]={value:a[h]});let b=a[h].delay||"0s",i=a[h].duration||a.duration||"0.7s";if(!"duration property direction loop time delay text".includes(h)){let j=getComputedStyle(this.tags);c[h]=i+" "+b,d[h]=a[h].value||"inherit",f===g&&(f[h]=j[h]||"inherit"),e[h]=parseFloat(b.replace(/s/g,""))+parseFloat(i.replace(/s/g,""))}}d.transition=Seule.objectToStyle(c).replace(/:/g," ").replace(/;/g,", "),d["transition-timing-function"]=a.type||"ease",a.property&&(d["transition-property"]=a.property),a.duration&&(d["transition-duration"]=a.duration),a.delay&&(d["transition-delay"]=a.delay),f.transition=d.transition,f["transition-timing-function"]=d["transition-timing-function"],a.property&&(f["transition-property"]=d["transition-property"]),a.duration&&(f["transition-duration"]=d["transition-duration"]),a.delay&&(f["transition-delay"]=d["transition-delay"]),f===g&&(g=f);let j=Object.values(e);return e=1e3*Math.max(...j),this.Each(function(){function b(b,e){g.setAttribute("style",Seule.objectToStyle(d)),a.text&&(g.innerText=i),setTimeout(()=>{g.setAttribute("style",Seule.objectToStyle(f)),a.text&&(g.innerText=h)},parseInt(b)),e&&(j++,e<=j&&clearInterval(c))}if(h=this.innerText,a.text){let b=0,c="";a.text.delay&&(b=1e3*parseFloat(a.text.delay.replace(/s/g,""))),c=a.text.value?i=a.text.value:a.text,setTimeout(function(){this.innerText=c},b)}let c,g=this,j=1,k=a.timeOut||100,l=2*parseInt(e+k)+100;a.direction||a.loop?(b(e+k),c=setInterval(function(){a.time?b(e+k,a.time):b(e+k)},l),a.direction&&clearInterval(c)):(g.setAttribute("style",Seule.objectToStyle(d)),a.text&&(g.innerText=i))})}return this.Each(function(){this.style.transition="all ease 0.7s"})}Width(a){return a?this.Each(function(){this.style.width=a}):getComputedStyle(this.tags).width}Height(a){return a?this.Each(function(){this.style.height=a}):getComputedStyle(this.tags).height}Text(a){return"undefined"==typeof a?this.tags.innerText:this.Each(function(){this.innerText=a})}Val(a){return"undefined"==typeof a?this.tags.value:this.Each(function(){this.value=a})}Attr(a,b){return b?this.Each(function(){this.setAttribute(a,b)}):this.tags.getAttribute(a)}AttrRemove(a){return this.Each(function(){this.removeAttribute(a)})}Html(a){return"undefined"==typeof a?this.tags.innerHTML:this.Each(function(){this.innerHTML=a})}Append(a,b){return this.Each(function(){this.insertAdjacentHTML(Seule.HTMLPLACE("beforeend",b),a)})}InsertHtml(a,b){return this.Each(function(){this.insertAdjacentHTML(Seule.HTMLPLACE("afterend",b),a)})}Root(a){let b=decodeURI(window.location.href).split("?"),c={},d=new Seule(this.tags),e=d.Html(),f=[];b=b[1].split("&"),a&&(a=a.split("&"));for(let c of b){if(a)for(let b of a){let a=b.split("="),d=c.split("=");a[0]===d[0]&&(c=b)}f.push(c+"")}e.search("}}");for(let b of f)if(b.includes("=")){let a=b.split("=");for(c[a[0]]=a[1];e.includes("{{"+a[0]+"}}");)e=e.replace("{{"+a[0]+"}}","<seules class='str202109876"+a[0]+"'>"+a[1]+"</seules>")}d.Html(e);for(let b of f)if(b.includes("=")){let a=b.split("="),c=new Seule(".str202109876"+a[0]);c.text(a[1])}return this.cont=!1,c}Component(a,b){let c=this.Find(a);return b.data&&!b.data.length&&(b.obj=[],b.obj.push(b.data),b.data=b.obj),Seule.PDO({element:c,component:!0,mode:b.mode,style:b.style||"",execute:b.execute||!1,data:b.data||[{}],child:b.child||!1,columns:b.columns||!1,nest:b.nest||!1,item:b.item||!1,action:b.action||!1,selector:a,query(a){return b.query?b.query(a):a},template(a){return b.template(a)||""},handler(a,c,d){b.handler&&b.handler(a,c,d)}}),this}Emit(a,b){let c;return c=this.root?this.children.el[1]:this.tags,Seule.SELECTALL(c,a,b),this}HtmlMethod(){let a;return a=this.root?this.children.el[1]:this.tags,Seule.SELECTALL(a),this}static async GET(a){let b=new FormData;if(a.param={method:a.method||"get"},"post"===a.method&&(a.param.body=b),a.form){let c=document.querySelector(a.form);b=new FormData(c),c.onsubmit=async a=>a.preventDefault()}a.file&&("object"==typeof a.file?Seule.LOOP({data:a.file,handler:function(a){let c;c="object"==typeof a?a:document.querySelector(a),b.append(c.name,c.files[0])}}):(a.file=document.querySelector(a.file),b.append(a.file.name,a.file.files[0]))),a.data&&Object.keys(a.data).forEach(c=>b.append(c,a.data[c]));let c=await fetch(a.url,a.param);return c.ok?a.blob?await c.blob():a.json?await c.json():await c.text():"HTTP-Error: "+c.status}static async POST(a){return a.urls=a.url||"",a.datas=a.data||"",a.result=[],a.method="post","object"==typeof a.url?(Seule.LOOP({data:a.urls,handler(b){a.url=b,Seule.GET(a).then(function(b){a.result.push(b)})}}),a.result):"object"==typeof a.data?(Seule.LOOP({data:a.datas,handler(b){a.data=b,Seule.GET(a).then(function(b){a.result.push(b)})}}),a.result):await Seule.GET(a)}static STORE(a,b){if(b.data)window.localStorage.setItem(a,JSON.stringify(b.data));else{if("get"===b.execute)return JSON.parse(window.localStorage.getItem(a));"delete"===b.execute&&window.localStorage.removeItem(a),"delete All"===b.execute&&window.localStorage.clear()}return this}static LOOP(a){return"object"==typeof a.data?[].forEach.call(a.data,a.handler):Seule.GET({url:a.data,json:!0,method:"get"}).then(function(b){a.data=b,[].forEach.call(a.data,a.handler)}),a}static HTMLPLACE(a,b){switch(!0){case"top"===b:a="afterbegin";break;case"before"===b:a="beforebegin";break;case null==b&&"afterend"===a:a="afterend";break;default:a="beforeend";}return a}static objectToUrlQuery(a){let b=Object.keys(a).map(b=>b+"="+a[b]).join("&");return("'"+b+"'").slice(1).slice(0,-1)}static objectToStyle(a){return Seule.objectToUrlQuery(a).replace(/&/g,";").replace(/=/g,":")}static AUDIO(a){let b={};return b.Delay=0,b.Element=new Audio(a),b.Src=a,b.Play=function(a){return b.Delay=1e3*a,setTimeout(function(){b.Element.pause(),b.Element.play()},b.Delay),this},b.Stop=function(a){return setTimeout(function(){b.Element.pause(),b.Element.currentTime=0},1e3*a),this},b.Pause=function(a){return setTimeout(function(){b.Element.pause()},1e3*a),this},b}static DATE(a){let b={};return b.Increase=function(c,d){let e=new Date(a),f=new Date(e.setMonth(e.getMonth()+parseInt(d))),g=f.getMonth()+1;if(!c)b.current=f.getFullYear()+"-"+("0"+g).slice(-2)+"-"+("0"+f.getDate()).slice(-2);else if("day"===c.toLowerCase()){let c=new Date(a);c.setDate(c.getDate()+parseInt(d)),b.current=c.getFullYear()+"-"+("0"+(c.getMonth()+1)).slice(-2)+"-"+("0"+c.getDate()).slice(-2)}else g=e.getFullYear()+1,b.current=g+"-"+("0"+e.getMonth()).slice(-2)+"-"+("0"+e.getDate()).slice(-2);return b.res=b.current,this},b.BetWeen=function(a){let d=b.current||b.Increase("day",0).current,e=a.from.split(a.character||"-"),f=a.to.split(a.character||"-"),g=d.split(a.character||"-");return(a.from=new Date(e[0],parseInt(e[1])-1,e[2]),a.to=new Date(f[0],parseInt(f[1])-1,f[2]),d=new Date(g[0],parseInt(g[1])-1,g[2]),d>a.from&&d<a.to)?(a.handler&&a.handler(),b.res=!0,this):(a.callback&&a.callback(),b.res=!1,this)},b}static SCROLL(){return{Top:function(){return window.scrollTo({top:0,behavior:"smooth"}),this},Bottom:function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),this}}}static ORIENTATION(){return"90"==screen.orientation.angle?"Horizontally":"Vertically"}static SCREEN(a,b){function c(a){return a.matches&&("function"==typeof b.handler?b.handler():"function"==typeof b.callback&&b.callback()),a}let d=window.matchMedia(a),e=c(d);return d.addEventListener("change",c),e}static SCENEHANDLER(a){function b(a){let b,c=document.querySelector(a.selector),d=a.unit||"percent",e=a.distance,f=window.innerHeight||document.documentElement.clientHeight,g=c.getBoundingClientRect().top,h=Math.round(100*(g/f)),i=Math.round(g);b="percent"==d?h:i,b<=e?a.handler():a.callback&&a.callback()}return window.addEventListener("scroll",function(){b(a)},!1),this}static SCENE(a){let b=0;return Seule.SCENEHANDLER({selector:a.selector||"body",distance:a.distance||0,unit:a.unit||"percent",handler:()=>{0===b&&(a.handler(),b=1)},callback:()=>{1===b&&a.callback&&(a.callback(),b=0)}}),this}static PRINT(a){let b=new Seule("body");b.Append("<iframe class=\"seule--frame\" name=\"sframe\" style=\"position: fixed; bottom: -100%\"></iframe>");let c=document.getElementsByClassName("seule--frame")[0],d=c.contentWindow?c.contentWindow:c.contentDocument.document?c.contentDocument.document:c.contentDocument;d.document.open(),d.document.write("<html><head><title>DIV Contents</title>"),d.document.write("</head><body>"),d.document.write("<link href=\""+a.css+"\" rel=\"stylesheet\" type=\"text/css\" />"),d.document.write(a.html),d.document.write("</body></html>"),d.document.close(),setTimeout(function(){window.frames.sframe.focus(),window.frames.sframe.print()},500)}static PDO(d){d.query||(d.query=a=>a);let e=[...d.data],f=[],g=[],h={},i=()=>{let a=e.filter((a,b)=>("remove duplicates"===d.execute||d.columns||(a.index=b),d.child&&"insert"!==d.execute||"insert"===d.execute&&d.nest?a[d.child].some((a,b)=>d.query(a,b)):d.query(a,b)));if(d.child){for(const a of e)for(const b of a[d.child])"remove duplicates"!==d.execute&&(b.parent=a.index),f.push(b);g=f,f=f.filter((a,b)=>d.query(a,b))}return a},j=a=>{a.map(function(a){let b=a;if("object"==typeof d.columns&&"replace"===d.action.toLowerCase()&&(b[d.columns[1]]=b[d.columns[0]],delete b[d.columns[0]]),"drop"===d.action.toLowerCase())for(const a of d.columns)delete b[a];if("add"===d.action.toLowerCase())for(const a of d.columns)b.hasOwnProperty(a)||(b[a]="");return b})},k=a=>{let b=[];return d.group=[...new Set(a.reduce((b,c)=>b.concat(c[d.columns]),[]))],Seule.LOOP({data:d.group,handler(a){let c="{\""+d.columns+"\":\""+a+"\"}";b.push(JSON.parse(c))}}),b},l=a=>{if(d.columns){let b=new Set;return a.filter(a=>!b.has(a[d.columns])&&b.add(a[d.columns]))}let b=new Set(a.map(JSON.stringify));return Array.from(b).map(JSON.parse)},m=a=>a.reduce((a,b)=>Object.keys(b).reduce((a,c)=>(a[c]=(a[c]||0)+ +b[c],a),a),{}),n=a=>{return a.sort((()=>(c,a)=>c[d.columns]>a[d.columns]?1:c[d.columns]<a[d.columns]?-1:0)(d.columns))};switch(h.res=i(),h.child=f,d.execute){case"update":let a=Object.keys(d.item)||{};h.res.forEach(b=>d.data.findIndex(c=>{if(c===b)for(const b of a)if(d.nest)for(const a of h.child)a[b]=d.item[b];else c[b]=d.item[b]}));break;case"delete":if(h.child.forEach(a=>g.splice(g.findIndex(b=>b===a),1)),d.nest){h.res.forEach(a=>a[d.child].findIndex(b=>{for(const c of h.child)b===c&&a[d.child].splice(a[d.child].findIndex(a=>a===c),1)})),h.res=d.data;break}h.res.forEach(a=>d.data.splice(d.data.findIndex(b=>b===a),1));break;case"insert":if(d.child)for(const a of h.res)"object"!=typeof a[d.child]&&(a[d.child]=[]),d.item.parent=a.index,d.data[a.index][d.child].push(d.item),g.push(d.item);else d.data.push(d.item);break;case"alter":d.nest?j(h.child):j(h.res);break;case"group by":h=d.nest?k(h.child):k(h.res);break;case"sum":h=d.nest?m(h.child):m(h.res);break;case"remove duplicates":h=d.nest?l(h.child):l(h.res);break;case"order by":h=d.nest?n(h.child):n(h.res);}if("select"!==d.execute&&(h.res=d.data,h.child=g),("order by"===d.execute||"sum"===d.execute||"group by"===d.execute||"remove duplicates"===d.execute)&&(delete h.child,delete h.res),d.template){let a=h.res,b=[],c="",e={};if(h.res||(a=h),d.nest&&(a=h.child),"sum"===d.execute&&(b.push(a),a=b),d.component){let b=(b,c,e)=>{b.innerHTML="";for(const f of a){let a=document.createElement("s-bind");if(a.innerHTML=d.template(f),Seule.SELECTALL(a,c,e),b.appendChild(a),1===d.style.length){let a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("href",d.style[0]+".css"),b.appendChild(a)}else{let a=document.createElement("style");a.textContent=d.style,b.appendChild(a)}}};class c extends HTMLElement{constructor(){super();const c=this.attachShadow({mode:d.mode||"open"});b(c);"closed"===d.mode?e.Select=()=>console.log("mode is closed! to use find method, Switch to the open Mode!"):(e=d.element,e.Select=a=>new Seule(c.querySelectorAll(a))),d.handler&&d.handler(e,a,(a,d)=>{b(c,a,d)})}}customElements.define(d.selector,c)}else{let b=new Seule(d.selector);b.Html(c);let e=()=>{c="";for(const b of a)c+=d.template(b);b.Html(c)};d.handler&&d.handler(new Seule(d.selector),a,e)}}return h}static SELECTALL(a,b,c){let d,f=a.querySelectorAll("*"),g=0,h={},j={};for(let i of f){h={};let e=new Seule(i),f=(a,d)=>{if(!"text val show hide visible opacity width height attr style classes anime css".includes(d.toLowerCase()))b&&c&&c(a,e);else if("Attr Style Classes".includes(d)){let b=Object.keys(a);e[d](b[0],a[b[0]])}else e[d](a)};i.getAttributeNames().includes("@find")&&(e=a.querySelectorAll(i.getAttribute("@find")),e=new Seule(e));for(let b of i.getAttributeNames())if(b.includes("@")){let a=i.getAttribute(b),c=b.replace("@","").replace(/\w/,a=>a.toUpperCase());a.includes("{")?(a=a.split("{"),d="{"+a[1].slice(0,-1)+"}",d=d.replace(/[~']/g,"\"").replace(/[~`]/g,"\""),d="text val show hide visible opacity width height".includes(c.toLowerCase())?a[1].slice(0,-1):JSON.parse(d),a[0]?(j[g]=["; "+c+"$"+JSON.stringify(d)],h[a[0]]+=j[g],g++):"@find"!==b&&f(d,c)):"Find"!==c&&f(a,c)}let k=Object.keys(h);for(let a of k){let b=h[a].replace("undefined;","").split(";");i.addEventListener(a,function(){for(let c of b){let b=c.split("$");"Find"!==b[0].trimStart()&&f(JSON.parse(b[1]),b[0].trimStart())}})}}}}
