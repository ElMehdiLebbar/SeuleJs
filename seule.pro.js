class Seule{constructor(a){this.element="window"===a?[window]:"object"==typeof a?a:document.querySelectorAll(a),this.tags=this.element,this.tags.length&&(this.tags=this.element[0]),this.selector=a,this.check=!0,this.cont=!0}find(a){return"object"==typeof a?new Seule(a):new Seule(this.selector+" "+a)}children(a){let b=this.tags.children;return a?"last"===a.toString().toLowerCase()?new Seule(b[b.length-1]):"first"===a.toString().toLowerCase()?new Seule(b[0]):new Seule(b[a-1]):new Seule(b)}parent(){return new Seule(this.tags.parentElement)}each(a){if(null==this.element.length)a.call(this.element);else for(const b of this.element)a.call(b);return this}on(a,b){return this.each(function(){this.addEventListener(a,()=>b(new Seule(this),this),!1)})}click(a){return this.on("click",b=>a(b))}focus(a){return a?this.on("focus",b=>a(b)):(this.tags.focus(),this.tags)}blur(a){return a?this.on("blur",b=>a(b)):(this.tags.blur(),this.tags)}hold(a){function b(a,b){if(!window.requestAnimationFrame&&!window.webkitRequestAnimationFrame&&!(window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame)&&!window.oRequestAnimationFrame&&!window.msRequestAnimationFrame)return window.setTimeout(a,b);let c=new Date().getTime(),d={},e=function(){let f=new Date().getTime();f-c>=b?a.call():d.value=requestAnimFrame(e)};return d.value=requestAnimFrame(e),d}function c(a){a&&(window.cancelAnimationFrame?window.cancelAnimationFrame(a.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(a.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(a.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(a.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(a.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(a.value):clearTimeout(a))}function d(a){g();let b=k?a.touches[0].clientX:a.clientX,c=k?a.touches[0].clientY:a.clientY,d=this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:b,clientY:c}}));d&&document.addEventListener(m,function a(b){document.removeEventListener(m,a,!0),h(b)},!0)}function f(a){g(a);let c=a.target,e=parseInt(c.getAttribute("data-long-press-delay")||"1500",10);j=b(d.bind(c,a),e)}function g(){c(j),j=null}function h(a){a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation()}function i(a){let b=Math.abs(o-a.clientX),c=Math.abs(p-a.clientY);(b>=q||c>=r)&&g(a)}let j=null,k="ontouchstart"in window||0<navigator.MaxTouchPoints||0<navigator.msMaxTouchPoints,l=k?"touchstart":"mousedown",m=k?"touchend":"mouseup",n=k?"touchmove":"mousemove",o=0,p=0,q=10,r=10;return"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};let c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c},window.CustomEvent.prototype=window.Event.prototype),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),document.addEventListener(m,g,!0),document.addEventListener(n,i,!0),document.addEventListener("wheel",g,!0),document.addEventListener("scroll",g,!0),document.addEventListener(l,function(a){o=a.clientX,p=a.clientY,f(a)},!0),this.on("long-press",b=>a(b)),this}swipe(a,b){function c(c){if(d&&e){let f=c.touches[0].clientX,g=c.touches[0].clientY,h=d-f,i=e-g;if(Math.abs(h)>Math.abs(i)){if(0<h){if("left"===a)b(new Seule(this),this);else return!1;}else if(0>h)if("right"===a)b(new Seule(this),this);else return!1;}else if(0<i){if("top"===a)b(new Seule(this),this);else return!1;}else if(0>i)if("bottom"===a)b(new Seule(this),this);else return!1;d=null,e=null}}let d,e,f=this.element;return f[0].addEventListener("touchstart",function(a){d=a.touches[0].clientX,e=a.touches[0].clientY},!1),f[0].addEventListener("touchmove",c,!1),this}hotKey(a,b){let c,d="",e={Arrow:"",Control:"ctrl"},f=a.replace(/\s/g,"");return this.each(function(){this.addEventListener("keydown",function(a){d+=a.key,d=d.replace(/Arrow|Control/gi,function(a){return e[a]}),c=d.toLowerCase().indexOf(f.toLowerCase()),-1<c&&(b(new Seule(this),this),d=""),setInterval(()=>d="",5e3)},!0)})}emit(a){let b=document.querySelector(a.target);return this.on(a.on,function(){let c=new MouseEvent(a.event,{view:window,bubbles:!0,cancelable:!0});b.dispatchEvent(c)})}toggle(a){let b=!0;return this.on(a.event,function(c){return!0===b?(a.handler(c),void(b=!1)):void(a.callback(c),b=!0)})}scroll(a){let b=new Seule(this.parent().selector);return a&&(b=new Seule(a)),"fixed"===b.getStyle("position").toLowerCase()?b.element[0].scrollTop=this.tags.offsetTop-10:window.scrollTo({top:this.tags.offsetTop}),this.tags}scrollPosition(a){return a?this.tags.pageXOffset||this.tags.scrollLeft:this.tags.pageYOffset||this.tags.scrollTop}width(a){return a?this.each(function(){this.style.width=a}):getComputedStyle(this.tags).width}height(a){return a?this.each(function(){this.style.height=a}):getComputedStyle(this.tags).height}addClass(a){return this.each(function(){this.classList.add(a)})}removeClass(a){return this.each(function(){this.classList.remove(a)})}toggleClass(a){return this.each(function(){this.classList.toggle(a)})}hasClass(a){if(this.tags.className.match("(?:^|\\s)"+a+"(?!\\S)"))return!0}style(a,b){return this.each(function(){this.style[a]=b})}css(a){return this.each(function(){this.setAttribute("style",Seule.objectToStyle(a))})}getStyle(a){let b=getComputedStyle(this.tags);return b[a]}classList(){let a=[];for(const b of this.tags.classList)a.push(b);return a}classListContains(a){return this[0].classList.contains(a)}show(){return this.each(function(){this.style.display=this.getAttribute("style").includes("display: none")?"":"inherit"})}hide(){return this.each(function(){this.style.display="none"})}visible(a){return this.each(function(){this.style.visibility=a?"hidden":"visible"})}isVisible(){return"hidden"!==this.tags.style.visibility}opacity(a){return this.each(function(){this.style.opacity=a})}anime(a){let b=Object.keys(a),c=this.tags,d={},e={},f={},g={},h={};for(const i of b){let b=a[i].delay||"0s",j=a[i].duration||"0.3s";if("type"!=i&&"direction"!=i){let k=getComputedStyle(c);d[i]=j+" "+b,e[i]=a[i].value||"inherit",g===h&&(g[i]=k[i]||"inherit"),f[i]=parseFloat(b.replace(/s/g,""))+parseFloat(j.replace(/s/g,""))}}e.transition=Seule.objectToStyle(d).replace(/:/g," ").replace(/;/g,", "),e["transition-timing-function"]=a.type||"ease",g.transition=e.transition,g["transition-timing-function"]=e["transition-timing-function"],g===h&&(h=g);let i=Object.values(f);return f=1e3*Math.max(...i),this.each(function(){function b(a,b){d.setAttribute("style",Seule.objectToStyle(e)),setTimeout(()=>d.setAttribute("style",Seule.objectToStyle(g)),parseInt(a)),b&&(h++,b<=h&&clearInterval(c))}let c,d=this,h=1,i=a.timeOut||100,j=2*parseInt(f+i)+100;a.direction||a.loop?(b(f+i),c=setInterval(function(){a.time?b(f+i,a.time):b(f+i)},j),a.direction&&clearInterval(c)):d.setAttribute("style",Seule.objectToStyle(e))})}text(a){return"undefined"==typeof a?this.tags.innerText:this.each(function(){this.innerText=a})}val(a){return"undefined"==typeof a?this.tags.value:this.each(function(){this.value=a})}attr(a,b){return b?this.each(function(){this.setAttribute(a,b)}):this.tags.getAttribute(a)}attrRemove(a){return this.each(function(){this.removeAttribute(a)})}html(a){return"undefined"==typeof a?this.tags.innerHTML:this.each(function(){this.innerHTML=a})}append(a,b){return this.each(function(){this.insertAdjacentHTML(Seule.hTmlplace("beforeend",b),a)})}insertHtml(a,b){return this.each(function(){this.insertAdjacentHTML(Seule.hTmlplace("afterend",b),a)})}params(a){let b=decodeURI(window.location.href).split("?"),c={},d=new Seule(this.tags),e=d.html(),f=[];b=b[1].split("&"),a&&(a=a.split("&"));for(let c of b){if(a)for(let b of a){let a=b.split("="),d=c.split("=");a[0]===d[0]&&(c=b)}f.push(c+"")}e.search("}}");for(let b of f)if(b.includes("=")){let a=b.split("=");for(c[a[0]]=a[1];e.includes("{{"+a[0]+"}}");)e=e.replace("{{"+a[0]+"}}","<seules class='str202109876"+a[0]+"'>"+a[1]+"</seules>")}d.html(e);for(let b of f)if(b.includes("=")){let a=b.split("="),c=new Seule(".str202109876"+a[0]);c.text(a[1])}return this.cont=!1,c}static async get(a){let b=new FormData;if(a.param={method:a.method||"get"},"post"===a.method&&(a.param.body=b),a.form){let c=document.querySelector(a.form);b=new FormData(c),c.onsubmit=async a=>a.preventDefault()}a.file&&("object"==typeof a.file?Seule.loop({obj:a.file,handler:function(a){let c;c="object"==typeof a?a:document.querySelector(a),b.append(c.name,c.files[0])}}):(a.file=document.querySelector(a.file),b.append(a.file.name,a.file.files[0]))),a.data&&Object.keys(a.data).forEach(c=>b.append(c,a.data[c]));let c=await fetch(a.url,a.param);return c.ok?a.blob?await c.blob():a.json?await c.json():await c.text():"HTTP-Error: "+c.status}static async post(a){return a.urls=a.url||"",a.datas=a.data||"",a.result=[],a.method="post","object"==typeof a.url?(Seule.loop({obj:a.urls,handler(b){a.url=b,Seule.get(a).then(function(b){a.result.push(b)})}}),a.result):"object"==typeof a.data?(Seule.loop({obj:a.datas,handler(b){a.data=b,Seule.get(a).then(function(b){a.result.push(b)})}}),a.result):await Seule.get(a)}static store(a){if(a.obj)window.localStorage.setItem(a.name,JSON.stringify(a.obj));else{if("get"===a.Execute)return JSON.parse(window.localStorage.getItem(name));"delete"===a.Execute&&window.localStorage.removeItem(name),"delete All"===a.Execute&&window.localStorage.clear()}return this}static loop(a){return"object"==typeof a.obj?[].forEach.call(a.obj,a.handler):Seule.get({url:a.obj,json:!0,method:"get"}).then(function(b){a.obj=b,[].forEach.call(a.obj,a.handler)}),a}static hTmlplace(a,b){switch(!0){case"top"===b:a="afterbegin";break;case"before"===b:a="beforebegin";break;case null==b&&"afterend"===a:a="afterend";break;default:a="beforeend";}return a}static objectToUrlQuery(a){let b=Object.keys(a).map(b=>b+"="+a[b]).join("&");return("'"+b+"'").slice(1).slice(0,-1)}static objectToStyle(a){return Seule.objectToUrlQuery(a).replace(/&/g,";").replace(/=/g,":")}static audioPlay(a,b){let c=new Audio(a);return this.delay=b,setTimeout(function(){c.pause(),c.play()},b),c}static audioPauseIn(a,b){return setTimeout(function(){a.pause(),a.currentTime=0},b+this.delay),this}static increaseDate(a){let b=new Date(a.date),c=new Date(b.setMonth(b.getMonth()+parseInt(a.step))),d=c.getMonth()+1;if(a.prefix){if("day"===a.prefix.toLowerCase()){let b=new Date(a.date);return b.setDate(b.getDate()+parseInt(a.step)),b.getFullYear()+"-"+("0"+(b.getMonth()+1)).slice(-2)+"-"+("0"+b.getDate()).slice(-2)}return d=b.getFullYear()+1,d+"-"+("0"+b.getMonth()).slice(-2)+"-"+("0"+b.getDate()).slice(-2)}return c.getFullYear()+"-"+("0"+d).slice(-2)+"-"+("0"+c.getDate()).slice(-2)}static ifDateBetween(a){let b=a.from.split(a.character||"/"),d=a.to.split(a.character||"/"),e=a.value.split(a.character||"/");return(a.from=new Date(b[2],parseInt(b[1])-1,b[0]),a.to=new Date(d[2],parseInt(d[1])-1,d[0]),a.value=new Date(e[2],parseInt(e[1])-1,e[0]),a.value>a.from&&a.value<a.to)?(a.handler&&a.handler(),!0):(a.callback&&a.callback(),!1)}static load(a){let b=document.querySelectorAll(a.selector);return Seule.get({url:a.url}).then(function(c){for(const a of b)a.innerHTML=c;a.handler(new Seule(a.selector),b)}),this}static setHtmlMethod(a){let b=document.querySelectorAll(a.selector+" *");return Seule.loop({obj:b,handler(b){if(b.getAttribute("@"+a.attr)){let c=b.getAttribute("@"+a.attr),d=c.split("{"),e="{"+d[1].slice(0,-1)+"}";e=e.replace(/[~']/g,"\"").replace(/[~`]/g,"\""),e=JSON.parse(e),d[0]?b.addEventListener(d[0],()=>a.handler(e,new Seule(b),b),!1):a.handler(e,new Seule(b),b)}}}),a.element=new Seule(a.selector),a.e=b,this}static scrollTop(){return window.scrollTo({top:0,behavior:"smooth"}),this}static scrollBottom(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),this}static orientation(){return"90"===screen.orientation.angle?"Horizontally":"Vertically"}static screen(a){function b(b){return b.matches&&("function"==typeof a.handler?a.handler():"function"==typeof a.callback&&a.callback()),b}let c=window.matchMedia(a.query),d=b(c);return c.addEventListener("change",b),d}static sceneHandler(a){function b(a){let b,c=document.querySelector(a.selector),d=a.unit||"percent",e=a.distance,f=window.innerHeight||document.documentElement.clientHeight,g=c.getBoundingClientRect().top,h=Math.round(100*(g/f)),i=Math.round(g);b="percent"==d?h:i,b<=e?a.handler():a.callback&&a.callback()}return window.addEventListener("scroll",function(){b(a)},!1),this}static scene(a){let b=0;return Seule.sceneHandler({selector:a.selector||"body",distance:a.distance||0,unit:a.unit||"percent",handler:()=>{0===b&&(a.handler(),b=1)},callback:()=>{1===b&&a.callback&&(a.callback(),b=0)}}),this}static print(a){let b=new Seule("body");b.append("<iframe class=\"seule--frame\" name=\"sframe\" style=\"position: fixed; bottom: -100%\"></iframe>");let c=document.getElementsByClassName("seule--frame")[0],d=c.contentWindow?c.contentWindow:c.contentDocument.document?c.contentDocument.document:c.contentDocument;d.document.open(),d.document.write("<html><head><title>DIV Contents</title>"),d.document.write("</head><body>"),d.document.write("<link href=\""+a.css+"\" rel=\"stylesheet\" type=\"text/css\" />"),d.document.write(a.html),d.document.write("</body></html>"),d.document.close(),setTimeout(function(){window.frames.sframe.focus(),window.frames.sframe.print()},500)}static PDO(d){let e=[...d.obj],f=[],g=[],h={},i=()=>{let a=e.filter((a,b)=>("remove duplicates"===d.Execute||d.columns||(a.index=b),d.child&&"insert"!==d.Execute||"insert"===d.Execute&&d.nest?a[d.child].some((a,b)=>d.query(a,b)):d.query(a,b)));if(d.child){for(const a of e)for(const b of a[d.child])"remove duplicates"!==d.Execute&&(b.parent=a.index),f.push(b);g=f,f=f.filter((a,b)=>d.query(a,b))}return a},j=a=>{a.map(function(a){let b=a;if("object"==typeof d.columns&&"replace"===d.action.toLowerCase()&&(b[d.columns[1]]=b[d.columns[0]],delete b[d.columns[0]]),"drop"===d.action.toLowerCase())for(const a of d.columns)delete b[a];if("add"===d.action.toLowerCase())for(const a of d.columns)b.hasOwnProperty(a)||(b[a]="");return b})},k=a=>{let b=[];return d.group=[...new Set(a.reduce((b,c)=>b.concat(c[d.columns]),[]))],Seule.loop({obj:d.group,handler(a){let c="{\""+d.columns+"\":\""+a+"\"}";b.push(JSON.parse(c))}}),b},l=a=>{if(d.columns){let b=new Set;return a.filter(a=>!b.has(a[d.columns])&&b.add(a[d.columns]))}let b=new Set(a.map(JSON.stringify));return Array.from(b).map(JSON.parse)},m=a=>a.reduce((a,b)=>Object.keys(b).reduce((a,c)=>(a[c]=(a[c]||0)+ +b[c],a),a),{}),n=a=>{return a.sort((()=>(c,a)=>c[d.columns]>a[d.columns]?1:c[d.columns]<a[d.columns]?-1:0)(d.columns))};switch(h.res=i(),h.child=f,d.Execute){case"update":let a=Object.keys(d.item)||{};h.res.forEach(b=>d.obj.findIndex(c=>{if(c===b)for(const b of a)if(d.nest)for(const a of h.child)a[b]=d.item[b];else c[b]=d.item[b]}));break;case"delete":if(h.child.forEach(a=>g.splice(g.findIndex(b=>b===a),1)),d.nest){h.res.forEach(a=>a[d.child].findIndex(b=>{for(const c of h.child)b===c&&a[d.child].splice(a[d.child].findIndex(a=>a===c),1)})),h.res=d.obj;break}h.res.forEach(a=>d.obj.splice(d.obj.findIndex(b=>b===a),1));break;case"insert":if(d.child)for(const a of h.res)"object"!=typeof a[d.child]&&(a[d.child]=[]),d.item.parent=a.index,d.obj[a.index][d.child].push(d.item),g.push(d.item);else d.obj.push(d.item);break;case"alter":d.nest?j(h.child):j(h.res);break;case"group by":h=d.nest?k(h.child):k(h.res);break;case"sum":h=d.nest?m(h.child):m(h.res);break;case"remove duplicates":h=d.nest?l(h.child):l(h.res);break;case"order by":h=d.nest?n(h.child):n(h.res);}if("select"!==d.Execute&&(h.res=d.obj,h.child=g),("order by"===d.Execute||"sum"===d.Execute||"group by"===d.Execute||"remove duplicates"===d.Execute)&&(delete h.child,delete h.res),d.handler&&d.handler(new Seule(d.selector),h),d.fetch){let a=new Seule(d.selector),b=h.res,c="";h.res||(b=h),d.nest&&(b=h.child);for(const a of b)c+=d.fetch(a);a.html(c)}return h}}
