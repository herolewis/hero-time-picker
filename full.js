!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=oe.type(e);return"function"===n||oe.isWindow(e)?!1:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ge.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return Z.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return oe.each(e.match(we)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s),oe.ready()}function a(){this.expando=oe.expando+a.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(De,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Se.test(n)?oe.parseJSON(n):n}catch(i){}Ne.set(e,t,n)}else n=void 0;return n}function l(e,t,n,r){var i,o=1,s=20,a=r?function(){return r.cur()}:function(){return oe.css(e,t,"")},u=a(),l=n&&n[3]||(oe.cssNumber[t]?"":"px"),c=(oe.cssNumber[t]||"px"!==l&&+u)&&Ae.exec(oe.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,oe.style(e,t,c+l);while(o!==(o=a()/u)&&1!==o&&--s)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],n):n}function f(e,t){for(var n=0,r=e.length;r>n;n++)Ee.set(e[n],"globalEval",!t||Ee.get(t[n],"globalEval"))}function p(e,t,n,r,i){for(var o,s,a,u,l,p,d=t.createDocumentFragment(),h=[],g=0,v=e.length;v>g;g++)if(o=e[g],o||0===o)if("object"===oe.type(o))oe.merge(h,o.nodeType?[o]:o);else if(Re.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Oe.exec(o)||["",""])[1].toLowerCase(),u=Pe[a]||Pe._default,s.innerHTML=u[1]+oe.htmlPrefilter(o)+u[2],p=u[0];p--;)s=s.lastChild;oe.merge(h,s.childNodes),s=d.firstChild,s.textContent=""}else h.push(t.createTextNode(o));for(d.textContent="",g=0;o=h[g++];)if(r&&oe.inArray(o,r)>-1)i&&i.push(o);else if(l=oe.contains(o.ownerDocument,o),s=c(d.appendChild(o),"script"),l&&f(s),n)for(p=0;o=s[p++];)Fe.test(o.type||"")&&n.push(o);return d}function d(){return!0}function h(){return!1}function g(){try{return G.activeElement}catch(e){}}function v(e,t,n,r,i,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(a in t)v(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=h;else if(!i)return e;return 1===o&&(s=i,i=function(e){return oe().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=oe.guid++)),e.each(function(){oe.event.add(this,t,i,r,n)})}function m(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function x(e){var t=Xe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(Ee.hasData(e)&&(o=Ee.access(e),s=Ee.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)oe.event.add(t,i,l[i][n])}Ne.hasData(e)&&(a=Ne.access(e),u=oe.extend({},a),Ne.set(t,u))}}function w(e,t){var n=t.nodeName.toLowerCase();"input"===n&&He.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function T(e,t,n,r){t=J.apply([],t);var i,o,s,a,u,l,f=0,d=e.length,h=d-1,g=t[0],v=oe.isFunction(g);if(v||d>1&&"string"==typeof g&&!re.checkClone&&_e.test(g))return e.each(function(i){var o=e.eq(i);v&&(t[0]=g.call(this,i,o.html())),T(o,t,n,r)});if(d&&(i=p(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=oe.map(c(i,"script"),y),a=s.length;d>f;f++)u=i,f!==h&&(u=oe.clone(u,!0,!0),a&&oe.merge(s,c(u,"script"))),n.call(e[f],u,f);if(a)for(l=s[s.length-1].ownerDocument,oe.map(s,x),f=0;a>f;f++)u=s[f],Fe.test(u.type||"")&&!Ee.access(u,"globalEval")&&oe.contains(l,u)&&(u.src?oe._evalUrl&&oe._evalUrl(u.src):oe.globalEval(u.textContent.replace(ze,"")))}return e}function C(e,t,n){for(var r,i=t?oe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||oe.cleanData(c(r)),r.parentNode&&(n&&oe.contains(r.ownerDocument,r)&&f(c(r,"script")),r.parentNode.removeChild(r));return e}function k(e,t){var n=oe(t.createElement(e)).appendTo(t.body),r=oe.css(n[0],"display");return n.detach(),r}function E(e){var t=G,n=Ve[e];return n||(n=k(e,t),"none"!==n&&n||(Ue=(Ue||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ue[0].contentDocument,t.write(),t.close(),n=k(e,t),Ue.detach()),Ve[e]=n),n}function N(e,t,n){var r,i,o,s,a=e.style;return n=n||Qe(e),s=n?n.getPropertyValue(t)||n[t]:void 0,""!==s&&void 0!==s||oe.contains(e.ownerDocument,e)||(s=oe.style(e,t)),n&&!re.pixelMarginRight()&&Ge.test(s)&&Ye.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o),void 0!==s?s+"":s}function S(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in rt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in rt)return e}function j(e,t,n){var r=Ae.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function A(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=oe.css(e,n+Le[o],!0,i)),r?("content"===n&&(s-=oe.css(e,"padding"+Le[o],!0,i)),"margin"!==n&&(s-=oe.css(e,"border"+Le[o]+"Width",!0,i))):(s+=oe.css(e,"padding"+Le[o],!0,i),"padding"!==n&&(s+=oe.css(e,"border"+Le[o]+"Width",!0,i)));return s}function L(t,n,r){var i=!0,o="width"===n?t.offsetWidth:t.offsetHeight,s=Qe(t),a="border-box"===oe.css(t,"boxSizing",!1,s);if(G.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(o=Math.round(100*t.getBoundingClientRect()[n])),0>=o||null==o){if(o=N(t,n,s),(0>o||null==o)&&(o=t.style[n]),Ge.test(o))return o;i=a&&(re.boxSizingReliable()||o===t.style[n]),o=parseFloat(o)||0}return o+A(t,n,r||(a?"border":"content"),i,s)+"px"}function q(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=Ee.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&qe(r)&&(o[s]=Ee.access(r,"olddisplay",E(r.nodeName)))):(i=qe(r),"none"===n&&i||Ee.set(r,"olddisplay",i?n:oe.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function O(){return e.setTimeout(function(){it=void 0}),it=oe.now()}function F(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Le[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function P(e,t,n){for(var r,i=(W.tweeners[t]||[]).concat(W.tweeners["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function R(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&qe(e),g=Ee.get(e,"fxshow");n.queue||(a=oe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,oe.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=oe.css(e,"display"),c="none"===l?Ee.get(e,"olddisplay")||E(e.nodeName):l,"inline"===c&&"none"===oe.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],st.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||oe.style(e,r)}else l=void 0;if(oe.isEmptyObject(p))"inline"===("none"===l?E(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=Ee.access(e,"fxshow",{}),o&&(g.hidden=!h),h?oe(e).show():f.done(function(){oe(e).hide()}),f.done(function(){var t;Ee.remove(e,"fxshow");for(t in p)oe.style(e,t,p[t])});for(r in p)s=P(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function M(e,t){var n,r,i,o,s;for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=oe.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o=0,s=W.prefilters.length,a=oe.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=it||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{},easing:oe.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props;for(M(c,l.opts.specialEasing);s>o;o++)if(r=W.prefilters[o].call(l,e,c,l.opts))return oe.isFunction(r.stop)&&(oe._queueHooks(l.elem,l.opts.queue).stop=oe.proxy(r.stop,r)),r;return oe.map(c,P,l),oe.isFunction(l.opts.start)&&l.opts.start.call(e,l),oe.fx.timer(oe.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function I(e){return e.getAttribute&&e.getAttribute("class")||""}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(we)||[];if(oe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function B(e,t,n,r){function i(a){var u;return o[a]=!0,oe.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===Et;return i(t.dataTypes[0])||!o["*"]&&i("*")}function _(e,t){var n,r,i=oe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&oe.extend(!0,e,r),e}function X(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function z(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function U(e,t,n,r){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||jt.test(e)?r(e,i):U(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==oe.type(t))r(e,t);else for(i in t)U(e+"["+i+"]",t[i],n,r)}function V(e){return oe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var Y=[],G=e.document,Q=Y.slice,J=Y.concat,K=Y.push,Z=Y.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="2.2.1",oe=function(e,t){return new oe.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,ue=/-([\da-z])/gi,le=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return Q.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Q.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return oe.each(this,e)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:K,sort:Y.sort,splice:Y.splice},oe.extend=oe.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||oe.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(oe.isPlainObject(r)||(i=oe.isArray(r)))?(i?(i=!1,o=n&&oe.isArray(n)?n:[]):o=n&&oe.isPlainObject(n)?n:{},s[t]=oe.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!oe.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){return"object"!==oe.type(e)||e.nodeType||oe.isWindow(e)?!1:!e.constructor||ne.call(e.constructor.prototype,"isPrototypeOf")},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=oe.trim(e),e&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(ue,le)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;r>i&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):K.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:Z.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o,s=0,a=[];if(n(e))for(i=e.length;i>s;s++)o=t(e[s],s,r),null!=o&&a.push(o);else for(s in e)o=t(e[s],s,r),null!=o&&a.push(o);return J.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),oe.isFunction(e)?(r=Q.call(arguments,2),i=function(){return e.apply(t||this,r.concat(Q.call(arguments)))},i.guid=e.guid=e.guid||oe.guid++,i):void 0},now:Date.now,support:re}),"function"==typeof Symbol&&(oe.fn[Symbol.iterator]=Y[Symbol.iterator]),oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h=t&&t.ownerDocument,g=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;if(!r&&((t?t.ownerDocument||t:I)!==q&&L(t),t=t||q,O)){if(11!==g&&(l=me.exec(e)))if(i=l[1]){if(9===g){if(!(s=t.getElementById(i)))return n;if(s.id===i)return n.push(s),n}else if(h&&(s=h.getElementById(i))&&M(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!z[e+" "]&&(!F||!F.test(e))){if(1!==g)h=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(xe,"\\$&"):t.setAttribute("id",a=W),f=E(e),o=f.length,u=pe.test(a)?"#"+a:"[id='"+a+"']";o--;)f[o]=u+" "+p(f[o]);d=f.join(","),h=ye.test(e)&&c(t.parentNode)||t}if(d)try{return K.apply(n,h.querySelectorAll(d)),n}catch(v){}finally{a===W&&t.removeAttribute("id")}}}return S(e.replace(ae,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l,c=[$,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[W]||(t[W]={}),u=l[t.uniqueID]||(l[t.uniqueID]={}),(a=u[r])&&a[0]===$&&a[1]===o)return c[2]=a[2];if(u[r]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function v(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function m(e,t,n,i,o,s){return i&&!i[W]&&(i=m(i)),o&&!o[W]&&(o=m(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,m=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?m:v(m,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=v(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=v(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):K.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],m=[],y=D,x=r||o&&T.find.TAG("*",l),b=$+=null==y?1:Math.random()||.1,w=x.length;for(l&&(D=s===q||s||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,s||c.ownerDocument===q||(L(c),a=!O);p=e[f++];)if(p(c,s||q,a)){u.push(c);break}l&&($=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,s,a);if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=Q.call(u));m=v(m)}K.apply(u,m),l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&($=b,D=y),g};return i?r(s):s}var b,w,T,C,k,E,N,S,D,j,A,L,q,H,O,F,P,R,M,W="sizzle"+1*new Date,I=e.document,$=0,B=0,_=n(),X=n(),z=n(),U=function(e,t){return e===t&&(A=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Te=function(){L()};try{K.apply(G=Z.call(I.childNodes),I.childNodes),G[I.childNodes.length].nodeType}catch(Ce){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:I;return r!==q&&9===r.nodeType&&r.documentElement?(q=r,H=q.documentElement,O=!k(q),(n=q.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(q.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ve.test(q.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=W,!q.getElementsByName||!q.getElementsByName(W).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(be,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&O?t.getElementsByClassName(e):void 0},P=[],F=[],(w.qsa=ve.test(q.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+W+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=q.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ve.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",oe)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=ve.test(H.compareDocumentPosition),M=t||ve.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===q||e.ownerDocument===I&&M(I,e)?-1:t===q||t.ownerDocument===I&&M(I,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===q?-1:t===q?1:i?-1:o?1:j?ee(j,e)-ee(j,t):0;if(i===o)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?s(a[r],u[r]):a[r]===I?-1:u[r]===I?1:0},q):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==q&&L(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&O&&!z[n+" "]&&(!P||!P.test(n))&&(!F||!F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==q&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,j=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(p=v,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[$,d,x];break}}else if(y&&(p=t,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d),x===!1)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(y&&(f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[$,x]),p!==t)););return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=ee(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ae,"$1"));return i[W]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,we),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,we).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e;
}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,E=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=X[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){(!r||(i=ue.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=le.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ae," ")}),a=a.slice(r.length));for(s in T.filter)!(i=de[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):X(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=z(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&E(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(be,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(be,we),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,r),n;break}}return(l||N(e,f))(r,t,!O,n,!t||ye.test(e)&&c(t.parentNode)||t),n},w.sortStable=W.split("").sort(U).join("")===W,w.detectDuplicates=!!A,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(q.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);oe.find=ce,oe.expr=ce.selectors,oe.expr[":"]=oe.expr.pseudos,oe.uniqueSort=oe.unique=ce.uniqueSort,oe.text=ce.getText,oe.isXMLDoc=ce.isXML,oe.contains=ce.contains;var fe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&oe(e).is(n))break;r.push(e)}return r},pe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},de=oe.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,ge=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?oe.find.matchesSelector(r,e)?[r]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;n>t;t++)if(oe.contains(i[t],this))return!0}));for(t=0;n>t;t++)oe.find(e,i[t],r);return r=this.pushStack(n>1?oe.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&de.test(e)?oe(e):e||[],!1).length}});var ve,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ye=oe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||ve,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),he.test(r[1])&&oe.isPlainObject(t))for(r in t)oe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=G.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==n.ready?n.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))};ye.prototype=oe.fn,ve=oe(G);var xe=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};oe.fn.extend({has:function(e){var t=oe(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(oe.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=de.test(e)||"string"!=typeof e?oe(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?oe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?Z.call(oe(e),this[0]):Z.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.uniqueSort(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return fe(e,"parentNode")},parentsUntil:function(e,t,n){return fe(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return fe(e,"nextSibling")},prevAll:function(e){return fe(e,"previousSibling")},nextUntil:function(e,t,n){return fe(e,"nextSibling",n)},prevUntil:function(e,t,n){return fe(e,"previousSibling",n)},siblings:function(e){return pe((e.parentNode||{}).firstChild,e)},children:function(e){return pe(e.firstChild)},contents:function(e){return e.contentDocument||oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(be[e]||oe.uniqueSort(i),xe.test(e)&&i.reverse()),this.pushStack(i)}});var we=/\S+/g;oe.Callbacks=function(e){e="string"==typeof e?o(e):oe.extend({},e);var t,n,r,i,s=[],a=[],u=-1,l=function(){for(i=e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<s.length;)s[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(u=s.length-1,a.push(n)),function r(t){oe.each(t,function(t,n){oe.isFunction(n)?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==oe.type(n)&&r(n)})}(arguments),n&&!t&&l()),this},remove:function(){return oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,s,n))>-1;)s.splice(n,1),u>=n&&u--}),this},has:function(e){return e?oe.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=a=[],n||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var s=oe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={};return r.pipe=r.then,oe.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Q.call(arguments),s=o.length,a=1!==s||e&&oe.isFunction(e.promise)?s:0,u=1===a?e:oe.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Q.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--a;return a||u.resolveWith(r,o),u.promise()}});var Te;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){(e===!0?--oe.readyWait:oe.isReady)||(oe.isReady=!0,e!==!0&&--oe.readyWait>0||(Te.resolveWith(G,[oe]),oe.fn.triggerHandler&&(oe(G).triggerHandler("ready"),oe(G).off("ready"))))}}),oe.ready.promise=function(t){return Te||(Te=oe.Deferred(),"complete"===G.readyState||"loading"!==G.readyState&&!G.documentElement.doScroll?e.setTimeout(oe.ready):(G.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s))),Te.promise(t)},oe.ready.promise();var Ce=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===oe.type(n)){i=!0;for(a in n)Ce(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(oe(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},ke=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!ke(e))return{};var t=e[this.expando];return t||(t={},ke(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,oe.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{oe.isArray(t)?r=t.concat(t.map(oe.camelCase)):(i=oe.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(we)||[])),n=r.length;for(;n--;)delete o[r[n]]}(void 0===t||oe.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!oe.isEmptyObject(t)}};var Ee=new a,Ne=new a,Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,De=/[A-Z]/g;oe.extend({hasData:function(e){return Ne.hasData(e)||Ee.hasData(e)},data:function(e,t,n){return Ne.access(e,t,n)},removeData:function(e,t){Ne.remove(e,t)},_data:function(e,t,n){return Ee.access(e,t,n)},_removeData:function(e,t){Ee.remove(e,t)}}),oe.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=Ne.get(o),1===o.nodeType&&!Ee.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),u(o,r,i[r])));Ee.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Ne.set(this,e)}):Ce(this,function(t){var n,r;if(o&&void 0===t){if(n=Ne.get(o,e)||Ne.get(o,e.replace(De,"-$&").toLowerCase()),void 0!==n)return n;if(r=oe.camelCase(e),n=Ne.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else r=oe.camelCase(e),this.each(function(){var n=Ne.get(this,r);Ne.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&Ne.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ne.remove(this,e)})}}),oe.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=Ee.get(e,t),n&&(!r||oe.isArray(n)?r=Ee.access(e,t,oe.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t),s=function(){oe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ee.get(e,n)||Ee.access(e,n,{empty:oe.Callbacks("once memory").add(function(){Ee.remove(e,[t+"queue",n])})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=oe.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Ee.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var je=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ae=new RegExp("^(?:([+-])=|)("+je+")([a-z%]*)$","i"),Le=["Top","Right","Bottom","Left"],qe=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},He=/^(?:checkbox|radio)$/i,Oe=/<([\w:-]+)/,Fe=/^$|\/(?:java|ecma)script/i,Pe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pe.optgroup=Pe.option,Pe.tbody=Pe.tfoot=Pe.colgroup=Pe.caption=Pe.thead,Pe.th=Pe.td;var Re=/<|&#?\w+;/;!function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),n=G.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Me=/^key/,We=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ie=/^([^.]*)(?:\.(.+)|)/;oe.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Ee.get(e);if(v)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=oe.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return"undefined"!=typeof oe&&oe.event.triggered!==t.type?oe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(we)||[""],l=t.length;l--;)a=Ie.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=oe.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=oe.event.special[d]||{},c=oe.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),oe.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Ee.hasData(e)&&Ee.get(e);if(v&&(u=v.events)){for(t=(t||"").match(we)||[""],l=t.length;l--;)if(a=Ie.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=oe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||oe.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)oe.event.remove(e,d+t[l],n,r,!0);oe.isEmptyObject(u)&&Ee.remove(e,"handle events")}},dispatch:function(e){e=oe.event.fix(e);var t,n,r,i,o,s=[],a=Q.call(arguments),u=(Ee.get(this,"events")||{})[e.type]||[],l=oe.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=oe.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.rnamespace||e.rnamespace.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((oe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?oe(i,this).index(u)>-1:oe.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[oe.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=We.test(i)?this.mouseHooks:Me.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new oe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==g()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===g()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&oe.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},oe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?d:h):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={constructor:oe.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!oe.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.fn.extend({on:function(e,t,n,r){return v(this,e,t,n,r)},one:function(e,t,n,r){return v(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,oe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=h),this.each(function(){oe.event.remove(this,e,n,t)})}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Be=/<script|<style|<link/i,_e=/checked\s*(?:[^=]|=\s*.checked.)/i,Xe=/^true\/(.*)/,ze=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oe.extend({htmlPrefilter:function(e){return e.replace($e,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=oe.contains(e.ownerDocument,e);if(!(re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(s=c(a),o=c(e),r=0,i=o.length;i>r;r++)w(o[r],s[r]);if(t)if(n)for(o=o||c(e),s=s||c(a),r=0,i=o.length;i>r;r++)b(o[r],s[r]);else b(e,a);return s=c(a,"script"),s.length>0&&f(s,!u&&c(e,"script")),a},cleanData:function(e){for(var t,n,r,i=oe.event.special,o=0;void 0!==(n=e[o]);o++)if(ke(n)){if(t=n[Ee.expando]){if(t.events)for(r in t.events)i[r]?oe.event.remove(n,r):oe.removeEvent(n,r,t.handle);n[Ee.expando]=void 0}n[Ne.expando]&&(n[Ne.expando]=void 0)}}}),oe.fn.extend({domManip:T,detach:function(e){return C(this,e,!0)},remove:function(e){return C(this,e)},text:function(e){return Ce(this,function(e){return void 0===e?oe.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return T(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.appendChild(e)}})},prepend:function(){return T(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return T(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return T(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(oe.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return Ce(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Be.test(e)&&!Pe[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=oe.htmlPrefilter(e);try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return T(this,arguments,function(t){var n=this.parentNode;oe.inArray(this,e)<0&&(oe.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=[],i=oe(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),oe(i[s])[t](n),K.apply(r,n.get());return this.pushStack(r)}});var Ue,Ve={HTML:"block",BODY:"block"},Ye=/^margin/,Ge=new RegExp("^("+je+")(?!px)[a-z%]+$","i"),Qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Je=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i},Ke=G.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ke.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,a.style.marginRight="50%",i="4px"===t.marginRight,Ke.removeChild(s)}var n,r,i,o,s=G.createElement("div"),a=G.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),oe.extend(re,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),i},reliableMarginLeft:function(){return null==r&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(G.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Ke.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),Ke.removeChild(s),a.removeChild(n),t}}))}();var Ze=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],rt=G.createElement("div").style;oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=N(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=oe.camelCase(t),u=e.style;return t=oe.cssProps[a]||(oe.cssProps[a]=D(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ae.exec(n))&&i[1]&&(n=l(e,t,i),o="number"),void(null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(oe.cssNumber[a]?"":"px")),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=oe.camelCase(t);return t=oe.cssProps[a]||(oe.cssProps[a]=D(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=N(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){return n?Ze.test(oe.css(e,"display"))&&0===e.offsetWidth?Je(e,et,function(){return L(e,t,r)}):L(e,t,r):void 0},set:function(e,n,r){var i,o=r&&Qe(e),s=r&&A(e,t,r,"border-box"===oe.css(e,"boxSizing",!1,o),o);return s&&(i=Ae.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=oe.css(e,t)),j(e,n,s)}}}),oe.cssHooks.marginLeft=S(re.reliableMarginLeft,function(e,t){return t?(parseFloat(N(e,"marginLeft"))||e.getBoundingClientRect().left-Je(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),oe.cssHooks.marginRight=S(re.reliableMarginRight,function(e,t){return t?Je(e,{display:"inline-block"},N,[e,"marginRight"]):void 0}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Le[r]+t]=o[r]||o[r-2]||o[0];return i}},Ye.test(e)||(oe.cssHooks[e+t].set=j)}),oe.fn.extend({css:function(e,t){return Ce(this,function(e,t,n){var r,i,o={},s=0;if(oe.isArray(t)){for(r=Qe(e),i=t.length;i>s;s++)o[t[s]]=oe.css(e,t[s],!1,r);return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return q(this,!0)},hide:function(){return q(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){qe(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||oe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[oe.cssProps[e.prop]]&&!oe.cssHooks[e.prop]?e.elem[e.prop]=e.now:oe.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},oe.fx=H.prototype.init,oe.fx.step={};var it,ot,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;oe.Animation=oe.extend(W,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return l(n.elem,e,Ae.exec(t),n),n}]},tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.match(we);for(var n,r=0,i=e.length;i>r;r++)n=e[r],W.tweeners[n]=W.tweeners[n]||[],W.tweeners[n].unshift(t)},prefilters:[R],prefilter:function(e,t){t?W.prefilters.unshift(e):W.prefilters.push(e)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(qe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),s=function(){var t=W(this,oe.extend({},e),o);(i||Ee.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=oe.timers,s=Ee.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&at.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ee.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,s=r?r.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,r,i)}}),oe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.timers=[],oe.fx.tick=function(){var e,t=0,n=oe.timers;for(it=oe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||oe.fx.stop(),
	it=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ot||(ot=e.setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){e.clearInterval(ot),ot=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,n){return t=oe.fx?oe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"));e.type="checkbox",re.checkOn=""!==e.value,re.optSelected=n.selected,t.disabled=!0,re.optDisabled=!n.disabled,e=G.createElement("input"),e.value="t",e.type="radio",re.radioValue="t"===e.value}();var ut,lt=oe.expr.attrHandle;oe.fn.extend({attr:function(e,t){return Ce(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return 3!==o&&8!==o&&2!==o?"undefined"==typeof e.getAttribute?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),i=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void oe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=oe.find.attr(e,t),null==r?void 0:r)):void 0},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(we);if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),ut={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):e.setAttribute(n,n),n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=lt[t]||oe.find.attr;lt[t]=function(e,t,r){var i,o;return r||(o=lt[t],lt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,lt[t]=o),i}});var ct=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return Ce(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[oe.propFix[e]||e]})}}),oe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;return 3!==o&&8!==o&&2!==o?(1===o&&oe.isXMLDoc(e)||(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),re.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,u=0;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,I(this)))});if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=I(n),r=1===n.nodeType&&(" "+i+" ").replace(pt," ")){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,u=0;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,I(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=I(n),r=1===n.nodeType&&(" "+i+" ").replace(pt," ")){for(s=0;o=t[s++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,I(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=oe(this),o=e.match(we)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(void 0===e||"boolean"===n)&&(t=I(this),t&&Ee.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Ee.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+I(n)+" ").replace(pt," ").indexOf(t)>-1)return!0;return!1}});var dt=/\r/g;oe.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=oe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(dt,""):null==n?"":n)):void 0}}),oe.extend({valHooks:{option:{get:function(e){return oe.trim(e.value)}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],(n.selected||u===i)&&(re.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=oe.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=oe.inArray(oe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){return oe.isArray(t)?e.checked=oe.inArray(oe(e).val(),t)>-1:void 0}},re.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var ht=/^(?:focusinfocus|focusoutblur)$/;oe.extend(oe.event,{trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||G],d=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||G,3!==r.nodeType&&8!==r.nodeType&&!ht.test(d+oe.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[oe.expando]?t:new oe.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:oe.makeArray(n,[t]),f=oe.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!oe.isWindow(r)){for(u=f.delegateType||d,ht.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||G)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(Ee.get(s,"events")||{})[t.type]&&Ee.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&ke(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!ke(r)||l&&oe.isFunction(r[d])&&!oe.isWindow(r)&&(a=r[l],a&&(r[l]=null),oe.event.triggered=d,r[d](),oe.event.triggered=void 0,a&&(r[l]=a)),t.result}},simulate:function(e,t,n){var r=oe.extend(new oe.Event,n,{type:e,isSimulated:!0});oe.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}}),oe.fn.extend({trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?oe.event.trigger(e,t,n,!0):void 0}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),re.focusin="onfocusin"in e,re.focusin||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e))};oe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ee.access(r,t);i||r.addEventListener(e,n,!0),Ee.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ee.access(r,t)-1;i?Ee.access(r,t,i):(r.removeEventListener(e,n,!0),Ee.remove(r,t))}}});var gt=e.location,vt=oe.now(),mt=/\?/;oe.parseJSON=function(e){return JSON.parse(e+"")},oe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&oe.error("Invalid XML: "+t),n};var yt=/#.*$/,xt=/([?&])_=[^&]*/,bt=/^(.*?):[ \t]*([^\r\n]*)$/gm,wt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Tt=/^(?:GET|HEAD)$/,Ct=/^\/\//,kt={},Et={},Nt="*/".concat("*"),St=G.createElement("a");St.href=gt.href,oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gt.href,type:"GET",isLocal:wt.test(gt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Nt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_(_(e,oe.ajaxSettings),t):_(oe.ajaxSettings,e)},ajaxPrefilter:$(kt),ajaxTransport:$(Et),ajax:function(t,n){function r(t,n,r,a){var l,f,y,x,w,C=n;2!==b&&(b=2,u&&e.clearTimeout(u),i=void 0,s=a||"",T.readyState=t>0?4:0,l=t>=200&&300>t||304===t,r&&(x=X(p,T,r)),x=z(p,x,T,l),l?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(oe.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(oe.etag[o]=w)),204===t||"HEAD"===p.type?C="nocontent":304===t?C="notmodified":(C=x.state,f=x.data,y=x.error,l=!y)):(y=C,(t||!C)&&(C="error",0>t&&(t=0))),T.status=t,T.statusText=(n||C)+"",l?g.resolveWith(d,[f,C,T]):g.rejectWith(d,[T,C,y]),T.statusCode(m),m=void 0,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:y]),v.fireWith(d,[T,C]),c&&(h.trigger("ajaxComplete",[T,p]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,s,a,u,l,c,f,p=oe.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?oe(d):oe.event,g=oe.Deferred(),v=oe.Callbacks("once memory"),m=p.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=bt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=v.add,T.success=T.done,T.error=T.fail,p.url=((t||p.url||gt.href)+"").replace(yt,"").replace(Ct,gt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=oe.trim(p.dataType||"*").toLowerCase().match(we)||[""],null==p.crossDomain){l=G.createElement("a");try{l.href=p.url,l.href=l.href,p.crossDomain=St.protocol+"//"+St.host!=l.protocol+"//"+l.host}catch(C){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=oe.param(p.data,p.traditional)),B(kt,p,n,T),2===b)return T;c=oe.event&&p.global,c&&0===oe.active++&&oe.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Tt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(mt.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=xt.test(o)?o.replace(xt,"$1_="+vt++):o+(mt.test(o)?"&":"?")+"_="+vt++)),p.ifModified&&(oe.lastModified[o]&&T.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&T.setRequestHeader("If-None-Match",oe.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Nt+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=B(Et,p,n,T)){if(T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),2===b)return T;p.async&&p.timeout>0&&(u=e.setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(y,r)}catch(C){if(!(2>b))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax(oe.extend({url:e,type:t,dataType:i,data:n,success:r},oe.isPlainObject(e)&&e))}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){var t;return oe.isFunction(e)?this.each(function(t){oe(this).wrapAll(e.call(this,t))}):(this[0]&&(t=oe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return!oe.expr.filters.visible(e)},oe.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Dt=/%20/g,jt=/\[\]$/,At=/\r?\n/g,Lt=/^(?:submit|button|image|reset|file)$/i,qt=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,r=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)});else for(n in e)U(n,e[n],t,i);return r.join("&").replace(Dt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&qt.test(this.nodeName)&&!Lt.test(e)&&(this.checked||!He.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var Ht={0:200,1223:204},Ot=oe.ajaxSettings.xhr();re.cors=!!Ot&&"withCredentials"in Ot,re.ajax=Ot=!!Ot,oe.ajaxTransport(function(t){var n,r;return re.cors||Ot&&!t.crossDomain?{send:function(i,o){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(s in i)a.setRequestHeader(s,i[s]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Ht[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(u){if(n)throw u}},abort:function(){n&&n()}}:void 0}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=oe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Ft=[],Pt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ft.pop()||oe.expando+"_"+vt++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(Pt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Pt,"$1"+i):t.jsonp!==!1&&(t.url+=(mt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||oe.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){void 0===o?oe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ft.push(i)),s&&oe.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),re.createHTMLDocument=function(){var e=G.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||(re.createHTMLDocument?G.implementation.createHTMLDocument(""):G);var r=he.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=p([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))};var Rt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&Rt)return Rt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>-1&&(r=oe.trim(e.slice(a)),e=e.slice(0,a)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&oe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?oe("<div>").append(oe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){s.each(function(){n.apply(s,o||[e.responseText,t,e])})}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length},oe.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=oe.css(e,"position"),f=oe(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=oe.css(e,"top"),u=oe.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),oe.isFunction(t)&&(t=t.call(e,n,oe.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,oe.contains(t,r)?(i=r.getBoundingClientRect(),n=V(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===oe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(r=e.offset()),r.top+=oe.css(e[0],"borderTopWidth",!0),r.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-oe.css(n,"marginTop",!0),left:t.left-r.left-oe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||Ke})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;oe.fn[e]=function(r){return Ce(this,function(e,r,i){var o=V(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=S(re.pixelPosition,function(e,n){return n?(n=N(e,t),Ge.test(n)?oe(e).position()[t]+"px":n):void 0})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return Ce(this,function(t,n,r){var i;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?oe.css(t,n,s):oe.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),oe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var Mt=e.jQuery,Wt=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=Wt),t&&e.jQuery===oe&&(e.jQuery=Mt),oe},t||(e.jQuery=e.$=oe),oe});
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function () {
	function k(a, b) {
		return [].slice.call((b || document).querySelectorAll(a))
	}

	if (window.addEventListener) {
		var e = window.StyleFix = {
			link: function (a) {
				try {
					if ("stylesheet" !== a.rel || a.hasAttribute("data-noprefix"))return
				} catch (b) {
					return
				}
				var c = a.href || a.getAttribute("data-href"), d = c.replace(/[^\/]+$/, ""), h = (/^[a-z]{3,10}:/.exec(d) || [""])[0], l = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(d) || [""])[0], g = /^([^?]*)\??/.exec(c)[1], m = a.parentNode, f = new XMLHttpRequest, n;
				f.onreadystatechange = function () {
					4 === f.readyState &&
					n()
				};
				n = function () {
					var b = f.responseText;
					if (b && a.parentNode && (!f.status || 400 > f.status || 600 < f.status)) {
						b = e.fix(b, !0, a);
						if (d)var b = b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (b, a, c) {
							return /^([a-z]{3,10}:|#)/i.test(c) ? b : /^\/\//.test(c) ? 'url("' + h + c + '")' : /^\//.test(c) ? 'url("' + l + c + '")' : /^\?/.test(c) ? 'url("' + g + c + '")' : 'url("' + d + c + '")'
						}), c = d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1"), b = b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + c, "gi"), "$1");
						c = document.createElement("style");
						c.textContent =
							b;
						c.media = a.media;
						c.disabled = a.disabled;
						c.setAttribute("data-href", a.getAttribute("href"));
						m.insertBefore(c, a);
						m.removeChild(a);
						c.media = a.media
					}
				};
				try {
					f.open("GET", c), f.send(null)
				} catch (p) {
					"undefined" != typeof XDomainRequest && (f = new XDomainRequest, f.onerror = f.onprogress = function () {
					}, f.onload = n, f.open("GET", c), f.send(null))
				}
				a.setAttribute("data-inprogress", "")
			}, styleElement: function (a) {
				if (!a.hasAttribute("data-noprefix")) {
					var b = a.disabled;
					a.textContent = e.fix(a.textContent, !0, a);
					a.disabled = b
				}
			}, styleAttribute: function (a) {
				var b =
					a.getAttribute("style"), b = e.fix(b, !1, a);
				a.setAttribute("style", b)
			}, process: function () {
				k('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
				k("style").forEach(StyleFix.styleElement);
				k("[style]").forEach(StyleFix.styleAttribute)
			}, register: function (a, b) {
				(e.fixers = e.fixers || []).splice(void 0 === b ? e.fixers.length : b, 0, a)
			}, fix: function (a, b, c) {
				for (var d = 0; d < e.fixers.length; d++)a = e.fixers[d](a, b, c) || a;
				return a
			}, camelCase: function (a) {
				return a.replace(/-([a-z])/g, function (b, a) {
					return a.toUpperCase()
				}).replace("-",
					"")
			}, deCamelCase: function (a) {
				return a.replace(/[A-Z]/g, function (b) {
					return "-" + b.toLowerCase()
				})
			}
		};
		(function () {
			setTimeout(function () {
				k('link[rel="stylesheet"]').forEach(StyleFix.link)
			}, 10);
			document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
		})()
	}
})();
(function (k) {
	function e(b, c, d, h, l) {
		b = a[b];
		b.length && (b = RegExp(c + "(" + b.join("|") + ")" + d, "gi"), l = l.replace(b, h));
		return l
	}

	if (window.StyleFix && window.getComputedStyle) {
		var a = window.PrefixFree = {
			prefixCSS: function (b, c, d) {
				var h = a.prefix;
				-1 < a.functions.indexOf("linear-gradient") && (b = b.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function (b, a, c, d) {
					return a + (c || "") + "linear-gradient(" + (90 - d) + "deg"
				}));
				b = e("functions", "(\\s|:|,)", "\\s*\\(", "$1" + h + "$2(", b);
				b = e("keywords", "(\\s|:)", "(\\s|;|\\}|$)",
					"$1" + h + "$2$3", b);
				b = e("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + h + "$2:", b);
				if (a.properties.length) {
					var l = RegExp("\\b(" + a.properties.join("|") + ")(?!:)", "gi");
					b = e("valueProperties", "\\b", ":(.+?);", function (a) {
						return a.replace(l, h + "$1")
					}, b)
				}
				c && (b = e("selectors", "", "\\b", a.prefixSelector, b), b = e("atrules", "@", "\\b", "@" + h + "$1", b));
				b = b.replace(RegExp("-" + h, "g"), "-");
				return b = b.replace(/-\*-(?=[a-z]+)/gi, a.prefix)
			}, property: function (b) {
				return (0 <= a.properties.indexOf(b) ? a.prefix : "") + b
			}, value: function (b, c) {
				b =
					e("functions", "(^|\\s|,)", "\\s*\\(", "$1" + a.prefix + "$2(", b);
				b = e("keywords", "(^|\\s)", "(\\s|$)", "$1" + a.prefix + "$2$3", b);
				0 <= a.valueProperties.indexOf(c) && (b = e("properties", "(^|\\s|,)", "($|\\s|,)", "$1" + a.prefix + "$2$3", b));
				return b
			}, prefixSelector: function (b) {
				return b.replace(/^:{1,2}/, function (b) {
					return b + a.prefix
				})
			}, prefixProperty: function (b, c) {
				var d = a.prefix + b;
				return c ? StyleFix.camelCase(d) : d
			}
		};
		(function () {
			var b = {}, c = [], d = getComputedStyle(document.documentElement, null), h = document.createElement("div").style,
				l = function (a) {
					if ("-" === a.charAt(0)) {
						c.push(a);
						a = a.split("-");
						var d = a[1];
						for (b[d] = ++b[d] || 1; 3 < a.length;)a.pop(), d = a.join("-"), StyleFix.camelCase(d)in h && -1 === c.indexOf(d) && c.push(d)
					}
				};
			if (0 < d.length)for (var g = 0; g < d.length; g++)l(d[g]); else for (var e in d)l(StyleFix.deCamelCase(e));
			var g = 0, f, k;
			for (k in b)d = b[k], g < d && (f = k, g = d);
			a.prefix = "-" + f + "-";
			a.Prefix = StyleFix.camelCase(a.prefix);
			a.properties = [];
			for (g = 0; g < c.length; g++)e = c[g], 0 === e.indexOf(a.prefix) && (f = e.slice(a.prefix.length), StyleFix.camelCase(f)in
			h || a.properties.push(f));
			!("Ms" != a.Prefix || "transform"in h || "MsTransform"in h) && "msTransform"in h && a.properties.push("transform", "transform-origin");
			a.properties.sort()
		})();
		(function () {
			function b(a, b) {
				h[b] = "";
				h[b] = a;
				return !!h[b]
			}

			var c = {
				"linear-gradient": {property: "backgroundImage", params: "red, teal"},
				calc: {property: "width", params: "1px + 5%"},
				element: {property: "backgroundImage", params: "#foo"},
				"cross-fade": {property: "backgroundImage", params: "url(a.png), url(b.png), 50%"}
			};
			c["repeating-linear-gradient"] =
				c["repeating-radial-gradient"] = c["radial-gradient"] = c["linear-gradient"];
			var d = {
				initial: "color",
				"zoom-in": "cursor",
				"zoom-out": "cursor",
				box: "display",
				flexbox: "display",
				"inline-flexbox": "display",
				flex: "display",
				"inline-flex": "display",
				grid: "display",
				"inline-grid": "display",
				"max-content": "width",
				"min-content": "width",
				"fit-content": "width",
				"fill-available": "width"
			};
			a.functions = [];
			a.keywords = [];
			var h = document.createElement("div").style, e;
			for (e in c) {
				var g = c[e], k = g.property, g = e + "(" + g.params + ")";
				!b(g, k) &&
				b(a.prefix + g, k) && a.functions.push(e)
			}
			for (var f in d)k = d[f], !b(f, k) && b(a.prefix + f, k) && a.keywords.push(f)
		})();
		(function () {
			function b(a) {
				e.textContent = a + "{}";
				return !!e.sheet.cssRules.length
			}

			var c = {
				":read-only": null,
				":read-write": null,
				":any-link": null,
				"::selection": null
			}, d = {keyframes: "name", viewport: null, document: 'regexp(".")'};
			a.selectors = [];
			a.atrules = [];
			var e = k.appendChild(document.createElement("style")), l;
			for (l in c) {
				var g = l + (c[l] ? "(" + c[l] + ")" : "");
				!b(g) && b(a.prefixSelector(g)) && a.selectors.push(l)
			}
			for (var m in d)g =
				m + " " + (d[m] || ""), !b("@" + g) && b("@" + a.prefix + g) && a.atrules.push(m);
			k.removeChild(e)
		})();
		a.valueProperties = ["transition", "transition-property"];
		k.className += " " + a.prefix;
		StyleFix.register(a.prefixCSS)
	}
})(document.documentElement);

/**
 * Swiper 3.2.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: December 7, 2015
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,s){function i(){return"horizontal"===T.params.direction}function n(e){return Math.floor(e)}function o(){T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext()):T.isEnd?s.autoplayStopOnLast?T.stopAutoplay():T._slideTo(0):T._slideNext()},T.params.autoplay)}function l(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var s;return r.parents().each(function(e,a){a===t&&(s=t)}),s?t:void 0}if(0!==r.length)return r[0]}function d(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),T.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(i()&&39===a||!i()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(i()&&37===a||!i()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents(".swiper-slide").length>0&&0===T.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},s=window.innerWidth,n=window.innerHeight,o=T.container.offset();T.rtl&&(o.left=o.left-T.container[0].scrollLeft);for(var l=[[o.left,o.top],[o.left+T.width,o.top],[o.left,o.top+T.height],[o.left+T.width,o.top+T.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=r.left&&p[0]<=r.left+s&&p[1]>=r.top&&p[1]<=r.top+n&&(t=!0)}if(!t)return}i()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev())}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=T.mousewheel.event,t=0,r=T.rtl?-1:1;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(T.params.mousewheelForceToAxis)if(i()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(T.params.mousewheelForceToAxis)if(i()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(T.params.mousewheelInvert&&(t=-t),T.params.freeMode){var s=T.getWrapperTranslate()+t*T.params.mousewheelSensitivity,n=T.isBeginning,o=T.isEnd;if(s>=T.minTranslate()&&(s=T.minTranslate()),s<=T.maxTranslate()&&(s=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(s),T.updateProgress(),T.updateActiveIndex(),(!n&&T.isBeginning||!o&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky&&(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)),0===s||s===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(0>t)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext();else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev();T.mousewheel.lastScrollTime=(new window.Date).getTime()}return T.params.autoplay&&T.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(e,t){e=a(e);var r,s,n,o=T.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",s=e.attr("data-swiper-parallax-x"),n=e.attr("data-swiper-parallax-y"),s||n?(s=s||"0",n=n||"0"):i()?(s=r,n="0"):(n=r,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*t*o+"%":s*t*o+"px",n=n.indexOf("%")>=0?parseInt(n,10)*t+"%":n*t+"px",e.transform("translate3d("+s+", "+n+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var f={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=s&&s.virtualTranslate;s=s||{};var g={};for(var v in s)if("object"!=typeof s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof r&&s[v]instanceof r||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))g[v]=s[v];else{g[v]={};for(var w in s[v])g[v][w]=s[v][w]}for(var y in f)if("undefined"==typeof s[y])s[y]=f[y];else if("object"==typeof s[y])for(var b in f[y])"undefined"==typeof s[y][b]&&(s[y][b]=f[y][b]);var T=this;if(T.params=s,T.originalParams=g,T.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(T.$=a,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams;for(var t in a)T.params[t]=a[t];T.currentBreakpoint=e}},T.params.breakpoints&&T.setBreakpoint(),T.container=a(e),0!==T.container.length)){if(T.container.length>1)return void T.container.each(function(){new t(this,s)});T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push("swiper-container-"+T.params.direction),T.params.freeMode&&T.classNames.push("swiper-container-free-mode"),T.support.flexbox||(T.classNames.push("swiper-container-no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push("swiper-container-autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push("swiper-container-3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push("swiper-container-"+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0,T.params.setWrapperSize=!1),"fade"===T.params.effect&&(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,"undefined"==typeof h&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=a(T.params.pagination),T.params.paginationClickable&&T.paginationContainer.addClass("swiper-pagination-clickable")),T.rtl=i()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push("swiper-container-rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push("swiper-container-multirow"),T.device.android&&T.classNames.push("swiper-container-android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0},T.params.grabCursor&&(T.container[0].style.cursor="move",T.container[0].style.cursor="-webkit-grab",T.container[0].style.cursor="-moz-grab",T.container[0].style.cursor="grab"),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,r,s){function i(){s&&s()}var n;e.complete&&r?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},T.preloadImages=function(){function e(){"undefined"!=typeof T&&null!==T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return"undefined"!=typeof T.autoplayTimeoutId?!1:T.params.autoplay?T.autoplaying?!1:(T.autoplaying=!0,T.emit("onAutoplayStart",T),void o()):!1},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,o()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?o():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e=T.slides.eq(T.activeIndex)[0].offsetHeight;e&&T.wrapper.css("height",T.slides.eq(T.activeIndex)[0].offsetHeight+"px")},T.updateContainerSize=function(){var e,a;e="undefined"!=typeof T.params.width?T.params.width:T.container[0].clientWidth,a="undefined"!=typeof T.params.height?T.params.height:T.container[0].clientHeight,0===e&&i()||0===a&&!i()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=i()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,r=0,s=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var o;T.params.slidesPerColumn>1&&(o=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(o=Math.max(o,T.params.slidesPerView*T.params.slidesPerColumn)));var l,d=T.params.slidesPerColumn,p=o/d,u=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){l=0;var c=T.slides.eq(e);if(T.params.slidesPerColumn>1){var m,f,h;"column"===T.params.slidesPerColumnFill?(f=Math.floor(e/d),h=e-f*d,(f>u||f===u&&h===d-1)&&++h>=d&&(h=0,f++),m=f+h*o/d,c.css({"-webkit-box-ordinal-group":m,"-moz-box-ordinal-group":m,"-ms-flex-order":m,"-webkit-order":m,order:m})):(h=Math.floor(e/p),f=e-h*p),c.css({"margin-top":0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px"}).attr("data-swiper-column",f).attr("data-swiper-row",h)}"none"!==c.css("display")&&("auto"===T.params.slidesPerView?(l=i()?c.outerWidth(!0):c.outerHeight(!0),T.params.roundLengths&&(l=n(l))):(l=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(l=n(l)),i()?T.slides[e].style.width=l+"px":T.slides[e].style.height=l+"px"),T.slides[e].swiperSlideSize=l,T.slidesSizesGrid.push(l),T.params.centeredSlides?(t=t+l/2+r/2+a,0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),s%T.params.slidesPerGroup===0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(s%T.params.slidesPerGroup===0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+l+a),T.virtualSize+=l+a,r=l,s++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),(!T.support.flexbox||T.params.setWrapperSize)&&(i()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(l+T.params.spaceBetween)*o,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);T.snapGrid=g}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);T.snapGrid=g,Math.floor(T.virtualSize-T.size)>Math.floor(T.snapGrid[T.snapGrid.length-1])&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(i()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=i()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=T.translate||0),0!==T.slides.length){"undefined"==typeof T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var r=T.slides[t],s=(a-r.swiperSlideOffset)/(r.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var i=-(a-r.swiperSlideOffset),n=i+T.slidesSizesGrid[t],o=i>=0&&i<T.size||n>0&&n<=T.size||0>=i&&n>=T.size;o&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}r.progress=T.rtl?-s:s}}},T.updateProgress=function(e){"undefined"==typeof e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,r=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!r&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,r=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)"undefined"!=typeof T.slidesGrid[a+1]?r>=T.slidesGrid[a]&&r<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:r>=T.slidesGrid[a]&&r<T.slidesGrid[a+1]&&(e=a+1):r>=T.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses())},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass);var e=T.slides.eq(T.activeIndex);if(e.addClass(T.params.slideActiveClass),e.next("."+T.params.slideClass).addClass(T.params.slideNextClass),e.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass),T.bullets&&T.bullets.length>0){T.bullets.removeClass(T.params.bulletActiveClass);var t;T.params.loop?(t=Math.ceil(T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup,t>T.slides.length-1-2*T.loopedSlides&&(t-=T.slides.length-2*T.loopedSlides),t>T.bullets.length-1&&(t-=T.bullets.length)):t="undefined"!=typeof T.snapIndex?T.snapIndex:T.activeIndex||0,T.paginationContainer.length>1?T.bullets.each(function(){a(this).index()===t&&a(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(t).addClass(T.params.bulletActiveClass)}T.params.loop||(T.params.prevButton&&(T.isBeginning?(a(T.params.prevButton).addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(a(T.params.prevButton))):(a(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(a(T.params.prevButton)))),T.params.nextButton&&(T.isEnd?(a(T.params.nextButton).addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(a(T.params.nextButton))):(a(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(a(T.params.nextButton)))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){for(var e="",a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;a>t;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}},T.update=function(e){function a(){r=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(r),T.updateActiveIndex(),T.updateClasses()}if(T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),e){var t,r;T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(t=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0),t||a())}else T.params.autoHeight&&T.updateAutoHeight()},T.onResize=function(e){T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;if(T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode){var r=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(r),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t};var x=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?x=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(x=["MSPointerDown","MSPointerMove","MSPointerUp"]),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":x[0],move:T.support.touch||!T.params.simulateTouch?"touchmove":x[1],end:T.support.touch||!T.params.simulateTouch?"touchend":x[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",i="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],n=T.support.touch?i:document,o=T.params.nested?!0:!1;T.browser.ie?(i[r](T.touchEvents.start,T.onTouchStart,!1),n[r](T.touchEvents.move,T.onTouchMove,o),n[r](T.touchEvents.end,T.onTouchEnd,!1)):(T.support.touch&&(i[r](T.touchEvents.start,T.onTouchStart,!1),i[r](T.touchEvents.move,T.onTouchMove,o),i[r](T.touchEvents.end,T.onTouchEnd,!1)),!s.simulateTouch||T.device.ios||T.device.android||(i[r]("mousedown",T.onTouchStart,!1),document[r]("mousemove",T.onTouchMove,o),document[r]("mouseup",T.onTouchEnd,!1))),window[r]("resize",T.onResize),T.params.nextButton&&(a(T.params.nextButton)[t]("click",T.onClickNext),T.params.a11y&&T.a11y&&a(T.params.nextButton)[t]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&(a(T.params.prevButton)[t]("click",T.onClickPrev),T.params.a11y&&T.a11y&&a(T.params.prevButton)[t]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(a(T.paginationContainer)[t]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&a(T.paginationContainer)[t]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&i[r]("click",T.preventClicks,!0)},T.attachEvents=function(e){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),(!T.isEnd||T.params.loop)&&T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),(!T.isBeginning||T.params.loop)&&T.slidePrev()},T.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},T.updateClickedSlide=function(e){var t=l(e,"."+T.params.slideClass),r=!1;if(t)for(var s=0;s<T.slides.length;s++)T.slides[s]===t&&(r=!0);if(!t||!r)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=a(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var i,n=T.clickedIndex;if(T.params.loop){if(T.animating)return;i=a(T.clickedSlide).attr("data-swiper-slide-index"),T.params.centeredSlides?n<T.loopedSlides-T.params.slidesPerView/2||n>T.slides.length-T.loopedSlides+T.params.slidesPerView/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n):n>T.slides.length-T.params.slidesPerView?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n)}else T.slideTo(n)}};var S,C,M,E,P,k,z,I,L,D,B="input, select, textarea, button",G=Date.now(),A=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var O,N;if(T.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),O="touchstart"===e.type,O||!("which"in e)||3!==e.which){if(T.params.noSwiping&&l(e,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||l(e,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=T.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,M=!0,P=void 0,N=void 0,T.touches.startX=t,T.touches.startY=r,E=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(I=!1),"touchstart"!==e.type){var s=!0;a(e.target).is(B)&&(s=!1),document.activeElement&&a(document.activeElement).is(B)&&document.activeElement.blur(),s&&e.preventDefault()}T.emit("onTouchStart",T,e)}}}},T.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(O&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,T.touches.startY=T.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,E=Date.now()));if(O&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(B))return C=!0,void(T.allowClick=!1);if(M&&T.emit("onTouchMove",T,e),!(e.targetTouches&&e.targetTouches.length>1)){if(T.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,T.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof P){var t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI;P=i()?t>T.params.touchAngle:90-t>T.params.touchAngle}if(P&&T.emit("onTouchMoveOpposite",T,e),"undefined"==typeof N&&T.browser.ieTouch&&(T.touches.currentX!==T.touches.startX||T.touches.currentY!==T.touches.startY)&&(N=!0),S){if(P)return void(S=!1);if(N||!T.browser.ieTouch){T.allowClick=!1,T.emit("onSliderMove",T,e),e.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&e.stopPropagation(),C||(s.loop&&T.fixLoop(),z=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,T.params.grabCursor&&(T.container[0].style.cursor="move",T.container[0].style.cursor="-webkit-grabbing",T.container[0].style.cursor="-moz-grabbin",T.container[0].style.cursor="grabbing")),C=!0;var r=T.touches.diff=i()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;r*=T.params.touchRatio,T.rtl&&(r=-r),T.swipeDirection=r>0?"prev":"next",k=r+z;var n=!0;if(r>0&&k>T.minTranslate()?(n=!1,T.params.resistance&&(k=T.minTranslate()-1+Math.pow(-T.minTranslate()+z+r,T.params.resistanceRatio))):0>r&&k<T.maxTranslate()&&(n=!1,T.params.resistance&&(k=T.maxTranslate()+1-Math.pow(T.maxTranslate()-z-r,T.params.resistanceRatio))),n&&(e.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&z>k&&(k=z),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&k>z&&(k=z),T.params.followFinger){if(T.params.threshold>0){if(!(Math.abs(r)>T.params.threshold||I))return void(k=z);if(!I)return I=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,k=z,void(T.touches.diff=i()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}(T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===A.length&&A.push({position:T.touches[i()?"startX":"startY"],time:E}),A.push({position:T.touches[i()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(k),T.setWrapperTranslate(k)}}}}}},T.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),M&&T.emit("onTouchEnd",T,e),M=!1,S){T.params.grabCursor&&C&&S&&(T.container[0].style.cursor="move",T.container[0].style.cursor="-webkit-grab",T.container[0].style.cursor="-moz-grab",T.container[0].style.cursor="grab");var t=Date.now(),r=t-E;if(T.allowClick&&(T.updateClickedSlide(e),T.emit("onTap",T,e),300>r&&t-G>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!a(e.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,e))},300)),300>r&&300>t-G&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,e))),G=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||k===z)return void(S=C=!1);S=C=!1;var s;if(s=T.params.followFinger?T.rtl?T.translate:-T.translate:-k,T.params.freeMode){if(s<-T.minTranslate())return void T.slideTo(T.activeIndex);if(s>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(A.length>1){var i=A.pop(),n=A.pop(),o=i.position-n.position,l=i.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(T.velocity=0)}else T.velocity=0;A.length=0;var d=1e3*T.params.freeModeMomentumRatio,p=T.velocity*d,u=T.translate+p;T.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-f&&(u=T.maxTranslate()-f),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>f&&(u=T.minTranslate()+f),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var h,g=0;for(g=0;g<T.snapGrid.length;g+=1)if(T.snapGrid[g]>-u){h=g;break}u=Math.abs(T.snapGrid[h]-u)<Math.abs(T.snapGrid[h-1]-u)||"next"===T.swipeDirection?T.snapGrid[h]:T.snapGrid[h-1],T.rtl||(u=-u)}if(0!==T.velocity)d=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(d),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(d),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||r>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];
		for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)"undefined"!=typeof T.slidesGrid[v+T.params.slidesPerGroup]?s>=T.slidesGrid[v]&&s<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):s>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var b=(s-T.slidesGrid[w])/y;if(r>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(b>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(b>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var s=-T.snapGrid[T.snapIndex];T.params.autoplay&&T.autoplaying&&(r||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(s);for(var i=0;i<T.slidesGrid.length;i++)-Math.floor(100*s)>=Math.floor(100*T.slidesGrid[i])&&(e=i);return!T.params.allowSwipeToNext&&s<T.translate&&s<T.minTranslate()?!1:!T.params.allowSwipeToPrev&&s>T.translate&&s>T.maxTranslate()&&(T.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.rtl&&-s===T.translate||!T.rtl&&s===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(s),!1):(T.updateClasses(),T.onTransitionStart(t),0===a?(T.setWrapperTranslate(s),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(s),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0))},T.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var r=0,s=0,o=0;i()?r=T.rtl?-e:e:s=e,T.params.roundLengths&&(r=n(r),s=n(s)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+r+"px, "+s+"px, "+o+"px)"):T.wrapper.transform("translate("+r+"px, "+s+"px)")),T.translate=i()?r:s;var l,d=T.maxTranslate()-T.minTranslate();l=0===d?0:(e-T.minTranslate())/d,l!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=s.transform||s.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===r?"":r)):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&r&&(r=-r),r||0)},T.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=i()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)d(e[a]);d(T.container[0],{childList:!1}),d(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var e=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=e.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>e.length&&(T.loopedSlides=e.length);var t,r=[],s=[];for(e.each(function(t,i){var n=a(this);t<T.loopedSlides&&s.push(i),t<e.length&&t>=e.length-T.loopedSlides&&r.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<s.length;t++)T.wrapper.append(a(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)T.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],T.slides[a]&&T.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;T.params.virtualTranslate||(r-=T.translate);var s=0;i()||(s=r,r=0);var n=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:n}).transform("translate3d("+r+"px, "+s+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},cube:{setTranslate:function(){var e,t=0;T.params.cube.shadow&&(i()?(e=T.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(e)),e.css({height:T.width+"px"})):(e=T.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),T.container.append(e))));for(var r=0;r<T.slides.length;r++){var s=T.slides.eq(r),n=90*r,o=Math.floor(n/360);T.rtl&&(n=-n,o=Math.floor(-n/360));var l=Math.max(Math.min(s[0].progress,1),-1),d=0,p=0,u=0;r%4===0?(d=4*-o*T.size,u=0):(r-1)%4===0?(d=0,u=4*-o*T.size):(r-2)%4===0?(d=T.size+4*o*T.size,u=T.size):(r-3)%4===0&&(d=-T.size,u=3*T.size+4*T.size*o),T.rtl&&(d=-d),i()||(p=d,d=0);var c="rotateX("+(i()?0:-n)+"deg) rotateY("+(i()?n:0)+"deg) translate3d("+d+"px, "+p+"px, "+u+"px)";if(1>=l&&l>-1&&(t=90*r+90*l,T.rtl&&(t=90*-r-90*l)),s.transform(c),T.params.cube.slideShadows){var m=i()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),f=i()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(i()?"left":"top")+'"></div>'),s.append(m)),0===f.length&&(f=a('<div class="swiper-slide-shadow-'+(i()?"right":"bottom")+'"></div>'),s.append(f));s[0].progress;m.length&&(m[0].style.opacity=-s[0].progress),f.length&&(f[0].style.opacity=s[0].progress)}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(i())e.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),v=T.params.cube.shadowScale,w=T.params.cube.shadowScale/g,y=T.params.cube.shadowOffset;e.transform("scale3d("+v+", 1, "+w+") translate3d(0px, "+(T.height/2+y)+"px, "+-T.height/2/w+"px) rotateX(-90deg)")}var b=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(i()?0:t)+"deg) rotateY("+(i()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!i()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=T.translate,t=i()?-e+T.width/2:-e+T.height/2,r=i()?T.params.coverflow.rotate:-T.params.coverflow.rotate,s=T.params.coverflow.depth,n=0,o=T.slides.length;o>n;n++){var l=T.slides.eq(n),d=T.slidesSizesGrid[n],p=l[0].swiperSlideOffset,u=(t-p-d/2)/d*T.params.coverflow.modifier,c=i()?r*u:0,m=i()?0:r*u,f=-s*Math.abs(u),h=i()?0:T.params.coverflow.stretch*u,g=i()?T.params.coverflow.stretch*u:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0);var v="translate3d("+g+"px,"+h+"px,"+f+"px)  rotateX("+m+"deg) rotateY("+c+"deg)";if(l.transform(v),l[0].style.zIndex=-Math.abs(Math.round(u))+1,T.params.coverflow.slideShadows){var w=i()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),y=i()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(i()?"left":"top")+'"></div>'),l.append(w)),0===y.length&&(y=a('<div class="swiper-slide-shadow-'+(i()?"right":"bottom")+'"></div>'),l.append(y)),w.length&&(w[0].style.opacity=u>0?u:0),y.length&&(y[0].style.opacity=-u>0?-u:0)}}if(T.browser.ie){var b=T.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==T.slides.length)){var r=T.slides.eq(e),s=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(s=s.add(r[0])),0!==s.length&&s.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var s=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");T.loadImage(e[0],i||s,n,!1,function(){if(s?(e.css("background-image","url("+s+")"),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),T.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(T.params.slideDuplicateClass)){var o=T.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(o.index(),!1)}else{var l=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');T.lazy.loadImageInSlide(l.index(),!1)}}T.emit("onLazyImageReady",T,r[0],e[0])}),T.emit("onLazyImageLoad",T,r[0],e[0])})}},load:function(){var e;if(T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(a(this).index())});else if(T.params.slidesPerView>1)for(e=T.activeIndex;e<T.activeIndex+T.params.slidesPerView;e++)T.slides[e]&&T.lazy.loadImageInSlide(e);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(T.params.slidesPerView>1){for(e=T.activeIndex+T.params.slidesPerView;e<T.activeIndex+T.params.slidesPerView+T.params.slidesPerView;e++)T.slides[e]&&T.lazy.loadImageInSlide(e);for(e=T.activeIndex-T.params.slidesPerView;e<T.activeIndex;e++)T.slides[e]&&T.lazy.loadImageInSlide(e)}else{var t=T.wrapper.children("."+T.params.slideNextClass);t.length>0&&T.lazy.loadImageInSlide(t.index());var r=T.wrapper.children("."+T.params.slidePrevClass);r.length>0&&T.lazy.loadImageInSlide(r.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=i()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[i()?"left":"top"]-a.dragSize/2,s=-T.minTranslate()*a.moveDivider,n=-T.maxTranslate()*a.moveDivider;s>r?r=s:r>n&&(r=n),r=-r/a.moveDivider,T.updateProgress(r),T.setWrapperTranslate(r,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},enableDraggable:function(){var e=T.scrollbar,t=T.support.touch?e.track:document;a(e.track).on(T.touchEvents.start,e.dragStart),a(t).on(T.touchEvents.move,e.dragMove),a(t).on(T.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=T.scrollbar,t=T.support.touch?e.track:document;a(e.track).off(T.touchEvents.start,e.dragStart),a(t).off(T.touchEvents.move,e.dragMove),a(t).off(T.touchEvents.end,e.dragEnd)},set:function(){if(T.params.scrollbar){var e=T.scrollbar;e.track=a(T.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=i()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=T.size/T.virtualSize,e.moveDivider=e.divider*(e.trackSize/T.size),e.dragSize=e.trackSize*e.divider,i()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",T.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&i()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),i()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=s(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var s=function(){var e,a,t;return function(r,s){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=s?a=t:e=t;return e}}()},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),i=-T.controller.spline.interpolate(-e)),i&&"container"!==T.params.controlBy||(s=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),i=(e-T.minTranslate())*s+a.minTranslate()),T.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,T),a.updateActiveIndex()}var s,i,n=T.params.control;if(T.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var s,i=T.params.control;if(T.isArray(i))for(s=0;s<i.length;s++)i[s]!==a&&i[s]instanceof t&&r(i[s]);else i instanceof t&&a!==i&&r(i)}},T.hashnav={init:function(){if(T.params.hashnav){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=T.slides.length;r>t;t++){var s=T.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var n=s.index();T.slideTo(n,a,T.params.runCallbacksOnInit,!0)}}}},setHash:function(){T.hashnav.initialized&&T.params.hashnav&&(document.location.hash=T.slides.eq(T.activeIndex).attr("data-hash")||"")}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,a(document).off("keydown",p)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,a(document).on("keydown",p)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl){try{new window.WheelEvent("wheel"),T.mousewheel.event="wheel"}catch(R){}T.mousewheel.event||void 0===document.onmousewheel||(T.mousewheel.event="mousewheel"),T.mousewheel.event||(T.mousewheel.event="DOMMouseScroll")}T.disableMousewheelControl=function(){return T.mousewheel.event?(T.container.off(T.mousewheel.event,u),!0):!1},T.enableMousewheelControl=function(){return T.mousewheel.event?(T.container.on(T.mousewheel.event,u),!0):!1},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress)}),T.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);c(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},T._plugins=[];for(var W in T.plugins){var V=T.plugins[W](T,T.params[W]);V&&T._plugins.push(V)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=m(e),"undefined"==typeof a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(T.params.nextButton)?(T.onClickNext(e),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):a(e.target).is(T.params.prevButton)&&(T.onClickPrev(e),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),a(e.target).is("."+T.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(T.params.nextButton){var e=a(T.params.nextButton);T.a11y.makeFocusable(e),T.a11y.addRole(e,"button"),T.a11y.addLabel(e,T.params.nextSlideMessage)}if(T.params.prevButton){var t=a(T.params.prevButton);T.a11y.makeFocusable(t),T.a11y.addRole(t,"button"),T.a11y.addLabel(t,T.params.prevSlideMessage)}a(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var e=a(this);T.a11y.makeFocusable(e),T.a11y.addRole(e,"button"),T.a11y.addLabel(e,T.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&a(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&a(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),s=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||s||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],s=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var i,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(s=0;s<a.length;s++)r.push(a[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var r=this[t];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=a}return this}if(this[0]){var s=this[0].getAttribute("data-"+e);return s?s:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,s){function i(e){var s=e.target;if(a(s).is(t))r.call(s,e);else for(var i=a(s).parents(),n=0;n<i.length;n++)a(i[n]).is(t)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,a,t,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],
	r=arguments[2]||!1),this[n].removeEventListener(s[i],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function s(n){t(n),i.off(e,a,s,r)}var i=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),i.on(e,a,s,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,s=e.clientLeft||t.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+i-r,left:a.left+n-s}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},is:function(t){if(!this[0])return!1;var r,s;if("string"==typeof t){var i=this[0];if(i===document)return t===document;if(i===window)return t===window;if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.mozMatchesSelector)return i.mozMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(r=a(t),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a;s.firstChild;)this[t].appendChild(s.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a,r=s.childNodes.length-1;r>=0;r--)this[t].insertBefore(s.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?a(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(a),i=0;i<s.length;i++)t.push(s[i]);return new e(t)},children:function(t){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)t?1===i[n].nodeType&&a(i[n]).is(t)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var s=a(arguments[e]);for(t=0;t<s.length;t++)r[r.length]=s[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&e(window[s[i]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});

!function(e){function t(){var e=c();e!==r&&(r=e,l.trigger("orientationchange"))}function a(t,a,n,o){var i=n.type;n.type=a,e.event.dispatch.call(t,n,o),n.type=i}e.attrFn=e.attrFn||{};var n=navigator.userAgent.toLowerCase(),o=n.indexOf("chrome")>-1&&(n.indexOf("windows")>-1||n.indexOf("macintosh")>-1||n.indexOf("linux")>-1)&&n.indexOf("mobile")<0&&n.indexOf("android")<0,i={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:window.navigator.msPointerEnabled?!1:"ontouchstart"in window&&!o,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:window.navigator.msPointerEnabled?"MSPointerDown":"ontouchstart"in window&&!o?"touchstart":"mousedown",endevent:window.navigator.msPointerEnabled?"MSPointerUp":"ontouchstart"in window&&!o?"touchend":"mouseup",moveevent:window.navigator.msPointerEnabled?"MSPointerMove":"ontouchstart"in window&&!o?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!o?"tap":"click",scrollevent:"ontouchstart"in window&&!o?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return i.touch_capable},e.getStartEvent=function(){return i.startevent},e.getEndEvent=function(){return i.endevent},e.getMoveEvent=function(){return i.moveevent},e.getTapEvent=function(){return i.tapevent},e.getScrollEvent=function(){return i.scrollevent},e.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,a){e.fn[a]=function(e){return e?this.on(a,e):this.trigger(a)},e.attrFn[a]=!0}),e.event.special.tapstart={setup:function(){var t=this,n=e(t);n.on(i.startevent,function(e){if(n.data("callee",arguments.callee),e.which&&1!==e.which)return!1;var o=e.originalEvent,s={position:{x:i.touch_capable?o.touches[0].screenX:e.screenX,y:i.touch_capable?o.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapstart",e,s),!0})},remove:function(){e(this).off(i.startevent,e(this).data.callee)}},e.event.special.tapmove={setup:function(){var t=this,n=e(t);n.on(i.moveevent,function(e){n.data("callee",arguments.callee);var o=e.originalEvent,s={position:{x:i.touch_capable?o.touches[0].screenX:e.screenX,y:i.touch_capable?o.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapmove",e,s),!0})},remove:function(){e(this).off(i.moveevent,e(this).data.callee)}},e.event.special.tapend={setup:function(){var t=this,n=e(t);n.on(i.endevent,function(e){n.data("callee",arguments.callee);var o=e.originalEvent,s={position:{x:i.touch_capable?o.changedTouches[0].screenX:e.screenX,y:i.touch_capable?o.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.changedTouches[0].pageX-o.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.changedTouches[0].pageY-o.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};return a(t,"tapend",e,s),!0})},remove:function(){e(this).off(i.endevent,e(this).data.callee)}},e.event.special.taphold={setup:function(){var t,n=this,o=e(n),s={x:0,y:0},c=0,r=0;o.on(i.startevent,function(e){if(e.which&&1!==e.which)return!1;o.data("tapheld",!1),t=e.target;var h=e.originalEvent,u=Date.now(),l={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},p={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};return s.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,s.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,c=s.x,r=s.y,i.hold_timer=window.setTimeout(function(){var g=s.x-c,d=s.y-r;if(e.target==t&&(s.x==c&&s.y==r||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){o.data("tapheld",!0);var f=Date.now(),v={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},w={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};duration=f-u;var _={startTime:u,endTime:f,startPosition:l,startOffset:p,endPosition:v,endOffset:w,duration:duration,target:e.target};o.data("callee1",arguments.callee),a(n,"taphold",e,_)}},i.taphold_threshold),!0}).on(i.endevent,function(){o.data("callee2",arguments.callee),o.data("tapheld",!1),window.clearTimeout(i.hold_timer)}).on(i.moveevent,function(e){o.data("callee3",arguments.callee),c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,r=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2).off(i.moveevent,e(this).data.callee3)}},e.event.special.doubletap={setup:function(){var t,n,o,s,c,r=this,h=e(r),u=!1;h.on(i.startevent,function(e){return e.which&&1!==e.which?!1:(h.data("doubletapped",!1),t=e.target,h.data("callee1",arguments.callee),s=e.originalEvent,o={position:{x:i.touch_capable?s.touches[0].screenX:e.screenX,y:i.touch_capable?s.touches[0].screenY:e.screenY},offset:{x:i.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target},!0)}).on(i.endevent,function(e){var s=Date.now(),l=h.data("lastTouch")||s+1,p=s-l;if(window.clearTimeout(n),h.data("callee2",arguments.callee),p<i.doubletap_int&&e.target==t&&p>100){h.data("doubletapped",!0),window.clearTimeout(i.tap_timer);var g={position:{x:i.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:i.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?e.originalEvent.changedTouches[0].pageX-e.originalEvent.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?e.originalEvent.changedTouches[0].pageY-e.originalEvent.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target},d={firstTap:o,secondTap:g,interval:g.time-o.time};u||a(r,"doubletap",e,d),u=!0,c=window.setTimeout(function(){u=!1},i.doubletap_int)}else h.data("lastTouch",s),n=window.setTimeout(function(){window.clearTimeout(n)},i.doubletap_int,[e]);h.data("lastTouch",s)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.singletap={setup:function(){var t=this,n=e(t),o=null,s=null,c={x:0,y:0};n.on(i.startevent,function(e){return e.which&&1!==e.which?!1:(s=Date.now(),o=e.target,n.data("callee1",arguments.callee),c.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,!0)}).on(i.endevent,function(e){n.data("callee2",arguments.callee),e.target==o&&(end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,i.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&c.x==end_pos_x&&c.y==end_pos_y){var o=e.originalEvent,r={position:{x:i.touch_capable?o.changedTouches[0].screenX:e.screenX,y:i.touch_capable?o.changedTouches[0].screenY:e.screenY},offset:{x:i.touch_capable?o.changedTouches[0].pageX-o.changedTouches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?o.changedTouches[0].pageY-o.changedTouches[0].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};r.time-s<i.taphold_threshold&&a(t,"singletap",e,r)}},i.doubletap_int))})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.tap={setup:function(){var t,n,o=this,s=e(o),c=!1,r=null,h={x:0,y:0};s.on(i.startevent,function(e){return s.data("callee1",arguments.callee),e.which&&1!==e.which?!1:(c=!0,h.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,h.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,t=Date.now(),r=e.target,n=e.originalEvent.targetTouches?e.originalEvent.targetTouches:[e],!0)}).on(i.endevent,function(e){s.data("callee2",arguments.callee);var u,l=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,p=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,g=h.x-l,d=h.y-p;if(r==e.target&&c&&Date.now()-t<i.taphold_threshold&&(h.x==l&&h.y==p||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){for(var f=e.originalEvent,v=[],w=0;w<n.length;w++){var _={position:{x:i.touch_capable?f.changedTouches[w].screenX:e.screenX,y:i.touch_capable?f.changedTouches[w].screenY:e.screenY},offset:{x:i.touch_capable?f.changedTouches[w].pageX-f.changedTouches[w].target.offsetLeft:e.offsetX,y:i.touch_capable?f.changedTouches[w].pageY-f.changedTouches[w].target.offsetTop:e.offsetY},time:Date.now(),target:e.target};v.push(_)}switch(n.length){case 1:u="tap";break;case 2:u="tap2";break;case 3:u="tap3";break;case 4:u="tap4"}a(o,u,e,v)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.swipe={setup:function(){function t(t){c=e(t.currentTarget),c.data("callee1",arguments.callee),u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY,l.x=u.x,l.y=u.y,r=!0;var a=t.originalEvent;o={position:{x:i.touch_capable?a.touches[0].screenX:t.screenX,y:i.touch_capable?a.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?a.touches[0].pageX-a.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?a.touches[0].pageY-a.touches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target}}function a(t){c=e(t.currentTarget),c.data("callee2",arguments.callee),l.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,l.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;var a,n=c.parent().data("xthreshold")?c.parent().data("xthreshold"):c.data("xthreshold"),s=c.parent().data("ythreshold")?c.parent().data("ythreshold"):c.data("ythreshold"),p="undefined"!=typeof n&&n!==!1&&parseInt(n)?parseInt(n):i.swipe_h_threshold,g="undefined"!=typeof s&&s!==!1&&parseInt(s)?parseInt(s):i.swipe_v_threshold;if(u.y>l.y&&u.y-l.y>g&&(a="swipeup"),u.x<l.x&&l.x-u.x>p&&(a="swiperight"),u.y<l.y&&l.y-u.y>g&&(a="swipedown"),u.x>l.x&&u.x-l.x>p&&(a="swipeleft"),void 0!=a&&r){u.x=0,u.y=0,l.x=0,l.y=0,r=!1;var d=t.originalEvent;endEvnt={position:{x:i.touch_capable?d.touches[0].screenX:t.screenX,y:i.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:i.touch_capable?d.touches[0].pageX-d.touches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?d.touches[0].pageY-d.touches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target};var f=Math.abs(o.position.x-endEvnt.position.x),v=Math.abs(o.position.y-endEvnt.position.y),w={startEvnt:o,endEvnt:endEvnt,direction:a.replace("swipe",""),xAmount:f,yAmount:v,duration:endEvnt.time-o.time};h=!0,c.trigger("swipe",w).trigger(a,w)}}function n(t){c=e(t.currentTarget);var a="";if(c.data("callee3",arguments.callee),h){var n=c.data("xthreshold"),s=c.data("ythreshold"),u="undefined"!=typeof n&&n!==!1&&parseInt(n)?parseInt(n):i.swipe_h_threshold,l="undefined"!=typeof s&&s!==!1&&parseInt(s)?parseInt(s):i.swipe_v_threshold,p=t.originalEvent;endEvnt={position:{x:i.touch_capable?p.changedTouches[0].screenX:t.screenX,y:i.touch_capable?p.changedTouches[0].screenY:t.screenY},offset:{x:i.touch_capable?p.changedTouches[0].pageX-p.changedTouches[0].target.offsetLeft:t.offsetX,y:i.touch_capable?p.changedTouches[0].pageY-p.changedTouches[0].target.offsetTop:t.offsetY},time:Date.now(),target:t.target},o.position.y>endEvnt.position.y&&o.position.y-endEvnt.position.y>l&&(a="swipeup"),o.position.x<endEvnt.position.x&&endEvnt.position.x-o.position.x>u&&(a="swiperight"),o.position.y<endEvnt.position.y&&endEvnt.position.y-o.position.y>l&&(a="swipedown"),o.position.x>endEvnt.position.x&&o.position.x-endEvnt.position.x>u&&(a="swipeleft");var g=Math.abs(o.position.x-endEvnt.position.x),d=Math.abs(o.position.y-endEvnt.position.y),f={startEvnt:o,endEvnt:endEvnt,direction:a.replace("swipe",""),xAmount:g,yAmount:d,duration:endEvnt.time-o.time};c.trigger("swipeend",f)}r=!1,h=!1}var o,s=this,c=e(s),r=!1,h=!1,u={x:0,y:0},l={x:0,y:0};c.on(i.startevent,t),c.on(i.moveevent,a),c.on(i.endevent,n)},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.moveevent,e(this).data.callee2).off(i.endevent,e(this).data.callee3)}},e.event.special.scrollstart={setup:function(){function t(e,t){n=t,a(s,n?"scrollstart":"scrollend",e)}var n,o,s=this,c=e(s);c.on(i.scrollevent,function(e){c.data("callee",arguments.callee),n||t(e,!0),clearTimeout(o),o=setTimeout(function(){t(e,!1)},50)})},remove:function(){e(this).off(i.scrollevent,e(this).data.callee)}};var s,c,r,h,u,l=e(window),p={0:!0,180:!0};if(i.orientation_support){var g=window.innerWidth||l.width(),d=window.innerHeight||l.height(),f=50;h=g>d&&g-d>f,u=p[window.orientation],(h&&u||!h&&!u)&&(p={"-90":!0,90:!0})}e.event.special.orientationchange=s={setup:function(){return i.orientation_support?!1:(r=c(),l.on("throttledresize",t),!0)},teardown:function(){return i.orientation_support?!1:(l.off("throttledresize",t),!0)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=c(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=c=function(){var e=!0,t=document.documentElement;return e=i.orientation_support?p[window.orientation]:t&&t.clientWidth/t.clientHeight<1.1,e?"portrait":"landscape"},e.event.special.throttledresize={setup:function(){e(this).on("resize",m)},teardown:function(){e(this).off("resize",m)}};var v,w,_,T=250,m=function(){w=Date.now(),_=w-x,_>=T?(x=w,e(this).trigger("throttledresize")):(v&&window.clearTimeout(v),v=window.setTimeout(t,T-_))},x=0;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,a){e.event.special[t]={setup:function(){e(this).on(a,e.noop)}}})}(jQuery);
﻿//本插件由www.swiper.com.cn提供
function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}

			return false;
		})();

		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime () { return new Date().getTime(); };

		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
				pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;

			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;

					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }

					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
				ev;

			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);

				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	})();

	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance

		this.options = {

			resizeScrollbars: true,

			mouseWheelSpeed: 20,

			snapThreshold: 0.334,

// INSERT POINT: OPTIONS

			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}

		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScroll.prototype = {
		version: '5.1.3',

		_init: function () {
			this._initEvents();

			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}

			if ( this.options.mouseWheel ) {
				this._initWheel();
			}

			if ( this.options.snap ) {
				this._initSnap();
			}

			if ( this.options.keyBindings ) {
				this._initKeys();
			}

// INSERT POINT: _init

		},

		destroy: function () {
			this._initEvents(true);

			this._execEvent('destroy');
		},

		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}

			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
				if ( e.button !== 0 ) {
					return;
				}
			}

			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}

			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				pos;

			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this._transitionTime();

			this.startTime = utils.getTime();

			if ( this.options.useTransition && this.isInTransition ) {
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;

			this.pointX		= point.pageX;
			this.pointY		= point.pageY;

			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}

			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);

			/* REPLACE START: _move */

			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

			/* REPLACE END: _move */

		},

		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}

			this.scrollTo(newX, newY);	// ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}

				if ( this.options.click ) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}


			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

// INSERT POINT: _end

			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
				y = this.y;

			time = time || 0;

			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			if ( x == this.x && y == this.y ) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow

			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;

			/* REPLACE START: refresh */

			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;

			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

			/* REPLACE END: refresh */

			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();

// INSERT POINT: _refresh

		},

		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}

			var i = 0,
				l = this._events[type].length;

			if ( !l ) {
				return;
			}

			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;

			if ( !time || (this.options.useTransition && easing.style) ) {
				this._transitionTimingFunction(easing.style);
				this._transitionTime(time);
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if ( !el ) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			time = time || 0;

			this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
			}


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}


// INSERT POINT: _transitionTime

		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}


// INSERT POINT: _transitionTimingFunction

		},

		_translate: function (x, y) {
			if ( this.options.useTransform ) {

				/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

				/* REPLACE END: _translate */

			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].updatePosition();
				}
			}


// INSERT POINT: _translate

		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}

			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;

			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},

		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;

			var that = this;

			this.indicators = [];

			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}

				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}

			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}

			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}

			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}

			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});

				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}


			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});

			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});

				delete this.indicators;
			});
		},

		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

			this.on('destroy', function () {
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},

		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;

			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}

			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				that._execEvent('scrollEnd');
				that.wheelTimeout = undefined;
			}, 400);

			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}

			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;

			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}

			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;

				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}

				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}

				this.goToPage(newX, newY);

				return;
			}

			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}

			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}

			this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
		},

		_initSnap: function () {
			this.currentPage = {};

			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}

			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;

				this.pages = [];

				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}

				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );

					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;

						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};

							y -= stepY;
							l++;
						}

						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;

					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}

						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}

						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);

						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};

						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}

				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});

			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);

				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},

		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}

			var i = 0,
				l = this.pages.length,
				m = 0;

			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}

			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}

			l = this.pages[i].length;

			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}

			if ( i == this.currentPage.pageX ) {
				i += this.directionX;

				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}

				x = this.pages[i][0].x;
			}

			if ( m == this.currentPage.pageY ) {
				m += this.directionY;

				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}

				y = this.pages[0][m].y;
			}

			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},

		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;

			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}

			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}

			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;

			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;

			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};

			this.scrollTo(posX, posY, time, easing);
		},

		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x++;

			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}

			this.goToPage(x, y, time, easing);
		},

		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x--;

			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}

			this.goToPage(x, y, time, easing);
		},

		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;

			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}

			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}

			utils.addEvent(window, 'keydown', this);

			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},

		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}

			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;

			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();

				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}

			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}

			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}

			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}

			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}

			this.scrollTo(newX, newY, 0);

			this.keyTime = now;
		},

		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;

				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);

				if ( that.isAnimating ) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');

		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}

		indicator.className = 'iScrollIndicator';

		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}

		scrollbar.style.cssText += ';overflow:hidden';

		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}

		scrollbar.appendChild(indicator);

		return scrollbar;
	}

	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}

		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
			this.wrapperStyle.opacity = '0';
		}
	}

	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},

		destroy: function () {
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}

			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},

		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;

			e.preventDefault();
			e.stopPropagation();

			this.transitionTime();

			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;

			this.startTime	= utils.getTime();

			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}

			this.scroller._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();

			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}

			this.moved = true;

			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;

			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			this._pos(newX, newY);

// INSERT POINT: indicator._move

			e.preventDefault();
			e.stopPropagation();
		},

		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}

			this.initiated = false;

			e.preventDefault();
			e.stopPropagation();

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);

				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}

			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},

		transitionTime: function (time) {
			time = time || 0;
			this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
			}
		},

		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},

		refresh: function () {
			this.transitionTime();

			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}

			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}

			var r = this.wrapper.offsetHeight;	// force refresh

			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}

				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}

			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}

			this.updatePosition();
		},

		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}

				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}

			this.x = x;
			this.y = y;

			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},

		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}

			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}

			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

			this.scroller.scrollTo(x, y);
		},

		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
				delay = val ? 0 : 300;

			val = val ? '1' : '0';

			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};

	IScroll.utils = utils;

	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else {
		window.IScroll = IScroll;
	}

})(window, document, Math);
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=E.appId,a.verifyAppId=E.appId,a.verifySignType="sha1",a.verifyTimestamp=E.timestamp+"",a.verifyNonceStr=E.nonceStr,a.verifySignature=E.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",E.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!E.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){0!=D.preVerifyState&&(u||v||E.debug||"6.0.2">z||D.systemType<0||A||(A=!0,D.appId=E.appId,D.initTime=C.initEndTime-C.initStartTime,D.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,H.getNetworkType({isInnerInvoke:!0,success:function(a){var b,c;D.networkType=a.networkType,b="http://open.weixin.qq.com/sdk/report?v="+D.version+"&o="+D.preVerifyState+"&s="+D.systemType+"&c="+D.clientVersion+"&a="+D.appId+"&n="+D.networkType+"&i="+D.initTime+"&p="+D.preVerifyTime+"&u="+D.url,c=new Image,c.src=b}})))}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){H.invoke||(H.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},H.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A=!1,B=!1,C={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},D={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},E={},F={_completes:[]},G={state:0,data:{}},m(function(){C.initEndTime=l()}),H={config:function(a){E=a,j("config",a);var b=E.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(E.jsApiList)},function(){F._complete=function(a){C.preVerifyEndTime=l(),G.state=1,G.data=a},F.success=function(){D.preVerifyState=0},F.fail=function(a){F._fail?F._fail(a):G.state=-1};var a=F._completes;return a.push(function(){k()}),F.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();F._completes=[]},F}()),C.preVerifyStartTime=l();else{for(G.state=1,a=F._completes,d=0,e=a.length;e>d;++d)a[d]();F._completes=[]}}),E.beta&&n()},ready:function(a){0!=G.state?a():(F._completes.push(a),!w&&E.debug&&a())},error:function(a){"6.0.2">z||B||(B=!0,-1==G.state?a(G.data):F._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:E.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=H),H});
j�`z�