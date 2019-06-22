class Seule{
    constructor (application){
        this.application = application;
        this.fs = require('fs');
        this.gui = require('nw.gui');
        this.win = this.gui.Window.get();
        this.simpleJSONFilter = require("./js/filter.min");
        this.sjf = new this.simpleJSONFilter();
        this.path = function () {
            let path = require('path');
            let nwPath = process.execPath;
            return path.dirname(nwPath);
        };
        this.mSelect = function (selecteur) {
            return document.querySelectorAll(selecteur);
        };

    }

    //attribute module
    html(){
        let i;

        //style
        //texte
        this.selecteur('s-couleur', 'color');
        this.selecteur('s-police','fontFamily');
        this.selecteur('s-taille-police','fontSize');
        this.selecteur('s-style-police','fontStyle');
        this.selecteur('s-effet-texte','textDecoration');
        this.selecteur('s-couleur-effet-texte','textDecorationColor');
        this.selecteur('s-ligne-effet-texte','textDecorationLine');
        this.selecteur('s-style-effet-texte','textDecorationStyle');
        this.selecteur('s-alignement-texte','textAlign');

        //background
        this.selecteur('s-arriere-plan','background');
        this.selecteur('s-couleur-arriere-plan','backgroundColor');
        this.selecteur('s-image-arriere-plan','backgroundImage');
        this.selecteur('s-position-arriere-plan','backgroundPosition');
        this.selecteur('s-repeat-arriere-plan','backgroundRepeat');
        this.selecteur('s-taille-arriere-plan','backgroundSize');

        //border
        this.selecteur('s-bordure','border');
        this.selecteur('s-bordure-inferieure','borderBottom');
        this.selecteur('s-bordure-superieure','borderTop');
        this.selecteur('s-bordure-gauche','borderLeft');
        this.selecteur('s-bordure-droite','borderRight');

        //création
        this.selecteur('s-flotte','float');
        this.selecteur('s-position','position');
        this.selecteur('s-calque','zIndex');
        this.selecteur('s-afficher','display');
        this.selecteur('s-opacite','opacity');
        this.selecteur('s-visibile','visibility');
        this.selecteur('s-remplissage','padding');
        this.selecteur('s-marge','margin');
        this.selecteur('s-largeur','width');
        this.selecteur('s-hauteur','height');

        //transition
        this.selecteur('s-transition','transition');

        //text
        this.changeMe('s-texte', 'innerText');
        //boite
        let boite = this.mSelect("[s-dialogue]");
        for ( i = 0; i < boite.length; i++) {
            boite[i].addEventListener("click", function(){
                alert(this.getAttribute('s-dialogue'));
            });
        }

        //main window
        let win = this.win;
        let mir = this.mSelect("[s-fermer]");
        for ( i = 0; i < mir.length; i++) {
            let event = mir[i].getAttribute('s-fermer');
            mir[i].addEventListener(event, function(){
                win.close();
            });
        }

        //animation
        let animation = this.mSelect(" [s-animer]");
        for ( i = 0; i < animation.length; i++) {
            let valeur = animation[i].getAttribute('s-animer');
            let option = valeur.split("'");

            let event = option[0];
            let type = option[1];

            animation[i].addEventListener(event, function(){
                window.animer[type](this);
            });
        }

    }

    //event handel
    cliquer(selecteur, fonction){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].addEventListener("click", function(){
                fonction();
            });
        }
    }
    evenement(evenement ,selecteur, fonction){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].addEventListener(evenement, function(){
                fonction();
            });
        }
    }

    //animationHandel
    annimer(selecteur ,type , option){
        window.animer[type](selecteur, option);
    }

    //http request
    requeteHttp(lien, methode, params, objet) {

        if(methode == 'POST'){
            if (params == ''){
                console.log('Paramètres non définis');
            }
        }
        function x() {
            var promise = new Promise(function(resolve, reject) {
                let donne = '';
                var xhttp = new XMLHttpRequest();
                xhttp.open(methode, lien, true);
                xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhttp.send(params);
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        if(objet === 'oui'){
                            donne = JSON.parse(this.responseText);
                            resolve(donne);
                        }else{
                            donne = this.responseText;
                            resolve(donne);
                        }
                    }
                };
                xhttp.onerror = () => reject(xhttp.statusText);
            });
            return promise;
        }
        return x().then();
    }

    //object Manupilation
    obtenirTexte(id){
        let mir = this.mSelect(id);
        return mir[0].innerText;
    }
    obtenirHtml(id){
        let mir = this.mSelect(id);
        return mir[0].innerHTML;
    }
    obtenirValeur(id){
        let mir = this.mSelect(id);
        return mir[0].value;
    }
    obtenirValeurAttribut(id, attribut){
        let mir = this.mSelect(id);
        return mir[0].getAttribute(attribut);
    }
    changerTexte(selecteur, valeur){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].innerText = valeur;
        }
    }
    changerAttribut(selecteur, attribut, valeur){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].setAttribute(attribut, valeur);
        }
    }
    changerHtml(selecteur, valeur){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].innerHTML = valeur;
        }
    }
    ajouterHtml(selecteur, valeur){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].appendChild(valeur);
        }
    }
    creerElement(cible ,element){
        let mir = this.mSelect( this.application + " " + cible);
        for (var i = 0; i < mir.length; i++) {
            let node = document.createElement(element);
            mir[i].appendChild(node);
        }
    }
    changerValeur(selecteur, valeur){
        let mir = this.mSelect( this.application + " " + selecteur);
        for (var i = 0; i < mir.length; i++) {
            mir[i].value = valeur;
        }
    }

    //json
    filtrer(valeur, objets){
        if(typeof(valeur) === 'object'){
            return this.sjf.exec(valeur, objets);
        }else{
            return objets.filter(function(x) {
                for (let i in x) {
                    if (x[i].toLowerCase().indexOf(valeur.toLowerCase()) > -1) return x;
                }
            })
        }

    }

    //json localStorage
    stockageLocal(nom, objet){
        function x() {
            var promise = new Promise(function(resolve, reject) {
                store.set(nom, objet);
                resolve(nom + ' a été créé avec succès!');
                reject('Impossible de créer '+ nom)
            });
            return promise;
        }
        return x().then();
    }

    obtenirStockageLocal(nom){
       return store.get(nom);
    }
    supprimerStockageLocal(nom){
        function x() {
            var promise = new Promise(function(resolve, reject) {
                store.remove(nom);
                resolve(nom + ' est supprimé avec succès!');
                reject('Impossible de supprimer'+ nom)
            });
            return promise;
        }
        return x().then();
    }

    reinitialiserStockageLocal(){
        function x() {
            var promise = new Promise(function(resolve, reject) {
                store.clear();
                resolve('réinitialisation complète du Stocakge Local');
                reject('Impossible de reinitialiser le Stocakge Local')
            });
            return promise;
        }
        return x().then();
    }

    //json file manupilation
    lireJson(lienLocal){
        let rawdata = this.fs.readFileSync(lienLocal);
        function x() {
            let promise = new Promise(function(resolve, reject) {
                resolve(JSON.parse(rawdata));
                reject('opération annulée');
            });
            return promise;
        }
        return x().then();
    }

    ecrireJson(objetJson, destination){
        let data = JSON.stringify(objetJson);
        this.fs.writeFileSync(destination, data);
    }

    ajouterElememnt(objetJson, element){
        function x() {
            let promise = new Promise(function(resolve, reject) {
                objetJson.push(element);
                resolve(objetJson);
                reject('opération annulée');
            });
            return promise;
        }
        return x().then();
    }

    //style
    style(selecteur, propriete, valeur){
        let mir = this.mSelect(this.application + " " + selecteur);

        for (var i = 0; i < mir.length; i++) {
            mir[i].style[propriete] = valeur;
        }
    }
    class(selecteur, nom, action){
        let mir = this.mSelect(this.application + " " + selecteur);

        for (var i = 0; i < mir.length; i++) {
            if(action == 'supprimer'){
                mir[i].classList.remove(nom);
            }else{
                mir[i].classList.add(nom);
            }

        }
    }

    //innerMethode
    selecteur(attrib, css) {
        let i;
        let attribut = this.mSelect(" ["+attrib+"]");
        for ( i = 0; i < attribut.length; i++) {
            let valeur = attribut[i].getAttribute(attrib);
            let option = valeur.split("'");

            let event = option[0];
            let type = option[1];

            if(event === ""){
                attribut[i].style[css] = type;
                return false;
            }
            attribut[i].addEventListener(event, function(){
                this.style[css] = type;
            });
        }
    }
    changeMe(attrib, value){
        let i;
        let attribut = this.mSelect(" ["+attrib+"]");
        for (i = 0; i < attribut.length; i++) {

            let valeur = attribut[i].getAttribute(attrib);
            let option = valeur.split("'");

            let event = option[0];
            let type = option[1];
            if(event === ""){
                attribut[i][value] = type;
                return false;
            }
            attribut[i].addEventListener(event, function(){
                this[value] = type;
            });
        }


    }
}


//localStorageFramework
(function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=window,n=t.document,r="localStorage",i="__storejs__",s;e.disabled=!1,e.set=function(e,t){},e.get=function(e){},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){var i=e.get(t);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),e.set(t,i)},e.getAll=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t){return e.deserialize(s.getItem(t))},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};for(var n=0;n<s.length;++n){var r=s.key(n);t[r]=e.get(r)}return t};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}function l(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}}var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(c,"___")}e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n){return n=h(n),e.deserialize(t.getAttribute(n))}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),e.getAll=l(function(t){var n=t.XMLDocument.documentElement.attributes,r={};for(var i=0,s;s=n[i];++i){var o=h(s.name);r[s.name]=e.deserialize(t.getAttribute(o))}return r})}try{e.set(i,i),e.get(i)!=i&&(e.disabled=!0),e.remove(i)}catch(f){e.disabled=!0}e.enabled=!e.disabled,typeof module!="undefined"&&typeof module!="function"?module.exports=e:typeof define=="function"&&define.amd?define(e):this.store=e})()

//animation framework
!function(t){"use strict";t.version="1.0.1";var n=1e3,i=0,e=1,o="normal",r="both",a=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===n?i:3&i|8).toString(16)})};t._animate=function(t,f,s){var m={duration:s&&"duration"in s?s.duration:n,delay:s&&"delay"in s?s.delay:i,iterations:s&&"iterations"in s?s.iterations:e,direction:s&&"direction"in s?s.direction:o,fill:s&&"fill"in s?s.fill:r,id:s&&"id"in s?s.id:a()},c=!!(s&&"id"in s),d=function(t){var n,i=t instanceof NodeList,e=t instanceof Node,o=t instanceof HTMLCollection;if(i)n=t;else if(e)n=[t];else if(o)n=t;else{if("string"!=typeof t)throw"selector is invaid";n=document.querySelectorAll(t)}return n}(t),u=[],w=[].slice.call(d);return function(t){var n=["normal","reverse","alternate","alternate-reverse","initial"];if("number"!=typeof t.duration)throw"parameter duration is invalid";if("number"!=typeof t.delay)throw"parameter delay is invalid";if("number"!=typeof t.iterations)throw"parameter iterations is invalid";if("string"!=typeof t.direction||-1===n.indexOf(t.direction))throw"parameter direction is invalid";if("string"!=typeof t.fill||-1===n.indexOf(t.direction))throw"parameter fill is invalid"}(m),w.forEach(function(t,n){var i=t.animate(f,m);i.id=c?m.id+"-"+n:a(),u.push(i)}),u}}(window.animer=window.animer||{}),function(t){"use strict";t.bounce=function(n,i){return t._animate(n,[{animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:0},{animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.2},{animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -30px, 0)",offset:.4},{animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -30px, 0)",offset:.43},{animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.53},{animationTimingFunction:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",transform:"translate3d(0, -15px, 0)",offset:.7},{animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:.8},{transform:"translate3d(0,-4px,0)",offset:.9},{animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:"translate3d(0,0,0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flash=function(n,i){return t._animate(n,[{opacity:1,offset:0},{opacity:0,offset:.25},{opacity:1,offset:.5},{opacity:0,offset:.75},{opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.headShake=function(n,i){return t._animate(n,[{transform:"translateX(0)",offset:0},{transform:"translateX(-6px) rotateY(-9deg)",offset:.065},{transform:"translateX(5px) rotateY(7deg)",offset:.185},{transform:"translateX(-3px) rotateY(-5deg)",offset:.315},{transform:"translateX(2px) rotateY(3deg)",offset:.435},{transform:"translateX(0)",offset:.5},{transform:"translateX(0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.jello=function(n,i){return t._animate(n,[{transform:"none",offset:0},{transform:"none",offset:.111},{transform:"skewX(-12.5deg) skewY(-12.5deg)",offset:.222},{transform:"skewX(6.25deg) skewY(6.25deg)",offset:.332},{transform:"skewX(-3.125deg) skewY(-3.125deg)",offset:.444},{transform:"skewX(1.5625deg) skewY(1.5625deg)",offset:.555},{transform:"skewX(-0.78125deg) skewY(-0.78125deg)",offset:.665},{transform:"skewX(0.390625deg) skewY(0.390625deg)",offset:.777},{transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)",offset:.888},{transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.pulse=function(n,i){return t._animate(n,[{transform:"scale3d(1, 1, 1)",offset:0},{transform:"scale3d(1.05, 1.05, 1.05)",offset:.5},{transform:"scale3d(1, 1, 1)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rubberBand=function(n,i){return t._animate(n,[{transform:"scale3d(1, 1, 1)",offset:0},{transform:"scale3d(1.25, 0.75, 1)",offset:.3},{transform:"scale3d(0.75, 1.25, 1)",offset:.4},{transform:"scale3d(1.15, 0.85, 1)",offset:.5},{transform:"scale3d(.95, 1.05, 1)",offset:.65},{transform:"scale3d(1.05, .95, 1)",offset:.75},{transform:"scale3d(1, 1, 1)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.shake=function(n,i){return t._animate(n,[{transform:"translate3d(0, 0, 0)",offset:0},{transform:"translate3d(-10px, 0, 0)",offset:.1},{transform:"translate3d(10px, 0, 0)",offset:.2},{transform:"translate3d(-10px, 0, 0)",offset:.3},{transform:"translate3d(10px, 0, 0)",offset:.4},{transform:"translate3d(-10px, 0, 0)",offset:.5},{transform:"translate3d(10px, 0, 0)",offset:.6},{transform:"translate3d(-10px, 0, 0)",offset:.7},{transform:"translate3d(10px, 0, 0)",offset:.8},{transform:"translate3d(-10px, 0, 0)",offset:.9},{transform:"translate3d(0, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.swing=function(n,i){return t._animate(n,[{transform:"rotate3d(0, 0, 1, 0deg)",offset:0},{transform:"rotate3d(0, 0, 1, 15deg)",offset:.2},{transform:"rotate3d(0, 0, 1, -10deg)",offset:.4},{transform:"rotate3d(0, 0, 1, 5deg)",offset:.6},{transform:"rotate3d(0, 0, 1, -5deg)",offset:.8},{transform:"rotate3d(0, 0, 1, 0deg)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.tada=function(n,i){return t._animate(n,[{transform:"scale3d(1, 1, 1)",offset:0},{transform:"scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",offset:.1},{transform:"scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",offset:.2},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.3},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.4},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.5},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.6},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.7},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",offset:.8},{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",offset:.9},{transform:"scale3d(1, 1, 1)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.wobble=function(n,i){return t._animate(n,[{transform:"none",offset:0},{transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",offset:.15},{transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",offset:.3},{transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",offset:.45},{transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",offset:.6},{transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",offset:.75},{transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceIn=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.3, .3, .3)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:0},{transform:"scale3d(1.1, 1.1, 1.1)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.2},{transform:"scale3d(.9, .9, .9)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.4},{opacity:1,transform:"scale3d(1.03, 1.03, 1.03)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.6},{transform:"scale3d(.97, .97, .97)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.8},{opacity:1,transform:"scale3d(1, 1, 1)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceInDown=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0,-2000px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:0},{opacity:1,transform:"translate3d(0, 25px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.6},{transform:"translate3d(0, -10px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.75},{transform:"translate3d(0, 5px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.9},{opacity:1,transform:"none",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceInLeft=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(-2000px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:0},{opacity:1,transform:"translate3d(25px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.6},{transform:"translate3d(-10px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.75},{transform:"translate3d(5px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.9},{opacity:1,transform:"none",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceInRight=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(2000px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:0},{opacity:1,transform:"translate3d(-25px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.6},{transform:"translate3d(10px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.75},{transform:"translate3d(-5px, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.9},{opacity:1,transform:"none",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceInUp=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0, 2000px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:0},{opacity:1,transform:"translate3d(0, -20px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.6},{transform:"translate3d(0, 10px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.75},{transform:"translate3d(0, -5px, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:.9},{opacity:1,transform:"translate3d(0, 0, 0)",animationTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceOut=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{transform:"scale3d(.9, .9, .9)",offset:.2},{transform:"scale3d(1.1, 1.1, 1.1)",offset:.5},{opacity:1,transform:"scale3d(1.1, 1.1, 1.1)",offset:.55},{opacity:0,transform:"scale3d(.3, .3, .3)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceOutDown=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{transform:"translate3d(0, 10px, 0)",offset:.2},{transform:"translate3d(0, -20px, 0)",offset:.4},{opacity:1,transform:"translate3d(0, -20px, 0)",offset:.45},{opacity:0,transform:"translate3d(0, 2000px, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceOutLeft=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:1,transform:"translate3d(20px, 0, 0)",offset:.2},{opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceOutRight=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:1,transform:"translate3d(-20px, 0, 0)",offset:.2},{opacity:0,transform:"translate3d(2000px, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.bounceOutUp=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{transform:"translate3d(0, -10px, 0)",offset:.2},{opacity:1,transform:"translate3d(0, 20px, 0)",offset:.4},{opacity:1,transform:"translate3d(0, 20px, 0)",offset:.45},{opacity:0,transform:"translate3d(0, -2000px, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeIn=function(n,i){return t._animate(n,[{opacity:0,offset:0},{opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInDown=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0, -100%, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInDownBig=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0, -2000px, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInLeft=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(-100%, 0, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInLeftBig=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInRight=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(100%, 0, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInRightBig=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(2000px, 0, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInUp=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0, 100%, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeInUpBig=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(0, 2000px, 0)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOut=function(n,i){return t._animate(n,[{opacity:1,offset:0},{opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutDown=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(0, 100%, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutDownBig=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(0, 2000px, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutLeft=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(-100%, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutLeftBig=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(-2000px, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutRight=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(100%, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutRightBig=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(2000px, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutUp=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(0, -100%, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.fadeOutUpBig=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(0, -2000px, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flip=function(n,i){return t._animate(n,[{transform:"perspective(400px) rotate3d(0, 1, 0, -360deg)",animationTimingFunction:"ease-out",offset:0},{transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",animationTimingFunction:"ease-out",offset:.4},{transform:"perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",animationTimingFunction:"ease-in",offset:.5},{transform:"perspective(400px) scale3d(.95, .95, .95)",animationTimingFunction:"ease-in",offset:.8},{transform:"perspective(400px)",animationTimingFunction:"ease-in",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flipInX=function(n,i){return t._animate(n,[{transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",animationTimingFunction:"ease-in",opacity:0,offset:0},{transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",animationTimingFunction:"ease-in",offset:.4},{transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:1,offset:.6},{transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)",offset:.8},{transform:"perspective(400px)",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flipInY=function(n,i){return t._animate(n,[{transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",animationTimingFunction:"ease-in",opacity:0,offset:0},{transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",animationTimingFunction:"ease-in",offset:.4},{transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:1,offset:.6},{transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)",offset:.8},{transform:"perspective(400px)",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flipOutX=function(n,i){return t._animate(n,[{transform:"perspective(400px)",opacity:1,offset:0},{transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:1,offset:.3},{transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.flipOutY=function(n,i){return t._animate(n,[{transform:"perspective(400px)",opacity:1,offset:0},{transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:1,offset:.3},{transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.lightSpeedIn=function(n,i){return t._animate(n,[{transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:0,offset:0},{transform:"skewX(20deg)",opacity:1,offset:.6},{transform:"skewX(-5deg)",offset:.8},{transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.lightSpeedOut=function(n,i){return t._animate(n,[{transform:"none",opacity:1,offset:0},{transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateIn=function(n,i){return t._animate(n,[{transformOrigin:"center",transform:"rotate3d(0, 0, 1, -200deg)",opacity:0,offset:0},{transformOrigin:"center",transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateInDownLeft=function(n,i){return t._animate(n,[{transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,offset:0},{transformOrigin:"left bottom",transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateInDownRight=function(n,i){return t._animate(n,[{transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,offset:0},{transformOrigin:"right bottom",transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateInUpLeft=function(n,i){return t._animate(n,[{transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,offset:0},{transformOrigin:"left bottom",transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateInUpRight=function(n,i){return t._animate(n,[{transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -90deg)",opacity:0,offset:0},{transformOrigin:"right bottom",transform:"none",opacity:1,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateOut=function(n,i){return t._animate(n,[{transformOrigin:"center",transform:"none",opacity:1,offset:0},{transformOrigin:"center",transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateOutDownLeft=function(n,i){return t._animate(n,[{transformOrigin:"left bottom",transform:"none",opacity:1,offset:0},{transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, 45deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateOutDownRight=function(n,i){return t._animate(n,[{transformOrigin:"right bottom",transform:"none",opacity:1,offset:0},{transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateOutUpLeft=function(n,i){return t._animate(n,[{transformOrigin:"left bottom",transform:"none",opacity:1,offset:0},{transformOrigin:"left bottom",transform:"rotate3d(0, 0, 1, -45deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rotateOutUpRight=function(n,i){return t._animate(n,[{transformOrigin:"right bottom",transform:"none",opacity:1,offset:0},{transformOrigin:"right bottom",transform:"rotate3d(0, 0, 1, 90deg)",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideInDown=function(n,i){return t._animate(n,[{transform:"translate3d(0, -100%, 0)",visibility:"visible",offset:0},{transform:"translate3d(0, 0, 0)",visibility:"visible",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideInLeft=function(n,i){return t._animate(n,[{transform:"translate3d(-100%, 0, 0)",visibility:"visible",offset:0},{transform:"translate3d(0, 0, 0)",visibility:"visible",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideInRight=function(n,i){return t._animate(n,[{transform:"translate3d(100%, 0, 0)",visibility:"visible",offset:0},{transform:"translate3d(0, 0, 0)",visibility:"visible",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideInUp=function(n,i){return t._animate(n,[{transform:"translate3d(0, 100%, 0)",visibility:"visible",offset:0},{transform:"translate3d(0, 0, 0)",visibility:"visible",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideOutDown=function(n,i){return t._animate(n,[{visibility:"visible",transform:"translate3d(0, 0, 0)",offset:0},{visibility:"hidden",transform:"translate3d(0, 100%, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideOutLeft=function(n,i){return t._animate(n,[{visibility:"visible",transform:"translate3d(0, 0, 0)",offset:0},{visibility:"hidden",transform:"translate3d(-100%, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideOutRight=function(n,i){return t._animate(n,[{visibility:"visible",transform:"translate3d(0, 0, 0)",offset:0},{visibility:"hidden",transform:"translate3d(100%, 0, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.slideOutUp=function(n,i){return t._animate(n,[{visibility:"visible",transform:"translate3d(0, 0, 0)",offset:0},{visibility:"hidden",transform:"translate3d(0, -100%, 0)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.hinge=function(n,i){return t._animate(n,[{transform:"none",transformOrigin:"top left",animationTimingFunction:"ease-in-out",opacity:1,offset:0},{transform:"rotate3d(0, 0, 1, 80deg)",transformOrigin:"top left",animationTimingFunction:"ease-in-out",offset:.2},{transform:"rotate3d(0, 0, 1, 60deg)",transformOrigin:"top left",animationTimingFunction:"ease-in-out",opacity:1,offset:.4},{transform:"rotate3d(0, 0, 1, 80deg)",transformOrigin:"top left",animationTimingFunction:"ease-in-out",offset:.6},{transform:"rotate3d(0, 0, 1, 60deg)",transformOrigin:"top left",animationTimingFunction:"ease-in-out",opacity:1,offset:.8},{transform:"translate3d(0, 700px, 0)",transformOrigin:"top left",opacity:0,offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rollIn=function(n,i){return t._animate(n,[{opacity:0,transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",offset:0},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.rollOut=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomIn=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.3, .3, .3)",offset:0},{opacity:1,transform:"none",offset:.5},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomInDown=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, 60px, 0)",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:.6},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomInLeft=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(10px, 0, 0)",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:.6},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomInRight=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:.6},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomInUp=function(n,i){return t._animate(n,[{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:.6},{opacity:1,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomOut=function(n,i){return t._animate(n,[{opacity:1,transform:"none",offset:0},{opacity:0,transform:"scale3d(.3, .3, .3)",offset:.5},{opacity:0,transform:"none",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomOutDown=function(n,i){return t._animate(n,[{opacity:1,transform:"none",transformOrigin:"center center",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, -60px, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:.4},{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, 2000px, 0)",transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomOutLeft=function(n,i){return t._animate(n,[{opacity:1,transform:"none",transformOrigin:"center center",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(42px, 0, 0)",offset:.4},{opacity:0,transform:"scale(.1) translate3d(-2000px, 0, 0)",transformOrigin:"left center",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomOutRight=function(n,i){return t._animate(n,[{opacity:1,transform:"none",transformOrigin:"center center",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",offset:.4},{opacity:0,transform:"scale(.1) translate3d(2000px, 0, 0)",transformOrigin:"right center",offset:1}],i)}}(window.animer=window.animer||{}),function(t){"use strict";t.zoomOutUp=function(n,i){return t._animate(n,[{opacity:1,transform:"none",transformOrigin:"center center",offset:0},{opacity:1,transform:"scale3d(.475, .475, .475) translate3d(0, 60px, 0)",animationTimingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",offset:.4},{opacity:0,transform:"scale3d(.1, .1, .1) translate3d(0, -2000px, 0)",transformOrigin:"center bottom",animationTimingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)",offset:1}],i)}}(window.animer=window.animer||{});



