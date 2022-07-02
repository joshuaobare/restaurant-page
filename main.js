(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),d=n.n(i),s=new URL(n(675),n.b),l=c()(r()),p=d()(s);l.push([e.id,"h1 {\n    text-align: center;\n    font-size: 4em;\n}\n\nli {\n    list-style: none;\n}\n.header {\n    display: flex;\n    justify-content: center;\n    gap:100px;\n    font-size: 2em;\n    align-items: center;\n}\n.hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.mainText {\n    margin-top: 40px;\n    width: 400px;\n    text-align: center;\n    color: black;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n}\nhtml {\n    background-image: url("+p+");\n    color: white;\n    font-family: monospace;\n     /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover;\n  /*height: 100%;\n  overflow: hidden; */\n}\n\n.topHours {\n    font-weight: bold;\n    font-size: 2em;\n}\n\n.bottomHours , .mainText {\n   /* font-size: 1.5em; */\n}\n\nimg {\n    width: 410px;\n    height: 300px;\n    border: 5px solid black;\n}\n\n.menuItem{\n    width: 410px;\n}\nh2 {\n    text-align: center;\n}\np {\n    text-align: center;\n}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},675:(e,t,n)=>{e.exports=n.p+"9723b31caf9781e903c4.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"f4f0e64e35fd23cd21f5.jpg",t=n.p+"4f9d60007583880bfe9a.jpg",o=n.p+"ed31914b01f068745f32.jpg",r=n.p+"4be3ba829f9208bf7eb5.jpg",a=n.p+"91e10a6ea66fa60ed851.jpg",c=n.p+"02882da7c00430b55ff9.jpg",i=function(){const n=document.querySelector("#content"),i=document.createElement("div");i.classList.add("container");const d=document.createElement("h1"),s=document.createElement("div");s.classList.add("header"),d.textContent="THE STEAKHOUSE";const l=document.createElement("div");l.textContent="Home";const p=document.createElement("div");p.textContent="Menu";const u=document.createElement("div");u.textContent="Contacts";const m=document.createElement("h1");m.textContent="MAINS";const h=document.createElement("div");h.classList.add("menuItem");const f=document.createElement("h2");f.textContent="BEEF RIBS";const g=document.createElement("p");g.textContent="All hands are needed for this feast! Huge, mighty meaty ribs, specially marinated & dipped in our secret rib basting";const v=document.createElement("img");v.src=e,h.appendChild(f),h.appendChild(g),h.appendChild(v);const C=document.createElement("div");C.classList.add("menuItem");const b=document.createElement("h2");b.textContent="TOMAHAWK STEAK";const x=document.createElement("p");x.textContent="A delicious cut of beef, full of natural flavour.Specially matured, bursting with flavour";const E=document.createElement("img");E.src=t,C.appendChild(b),C.appendChild(x),C.appendChild(E);const y=document.createElement("div");y.classList.add("menuItem");const w=document.createElement("h2");w.textContent="SPECIALTY SKEWER";const I=document.createElement("p");I.textContent="Aged selected prime cuts of beef, marinated chicken or prawns skewered with mixed peppers & onions. Flame-grilled to your liking, served with your choice of side.";const S=document.createElement("img");S.src=o,y.appendChild(w),y.appendChild(I),y.appendChild(S);const T=document.createElement("div");T.classList.add("menuItem");const j=document.createElement("h2");j.textContent="BEEF BURRITO";const A=document.createElement("p");A.textContent="Juicy fillet strips, cucumber, onion, tomato, tzatziki, avocado & flavoured rice with beans wrapped in a warm tortilla wrap.";const k=document.createElement("img");k.src=r,T.appendChild(j),T.appendChild(A),T.appendChild(k);const L=document.createElement("div");L.classList.add("menuItem");const H=document.createElement("h2");H.textContent="CHICKEN SANDWICH";const M=document.createElement("p");M.textContent="Crumb fried chicken fillets with melted cheese, coleslaw, tomato & mango served on a brioche knot";const N=document.createElement("img");N.src=a,L.appendChild(H),L.appendChild(M),L.appendChild(N);const P=document.createElement("div");P.classList.add("menuItem");const R=document.createElement("h2");R.textContent="CHICKEN WINGS";const z=document.createElement("p");z.textContent="Chicken wings grilled with our secret honey basting or Peri Peri hot sauce.";const O=document.createElement("img");O.src=c,P.appendChild(R),P.appendChild(z),P.appendChild(O),s.appendChild(l),s.appendChild(p),s.appendChild(u),i.appendChild(d),i.appendChild(s),i.appendChild(m),i.appendChild(h),i.appendChild(C),i.appendChild(y),i.appendChild(T),i.appendChild(L),i.appendChild(P),n.appendChild(i)}();var d=n(379),s=n.n(d),l=n(795),p=n.n(l),u=n(569),m=n.n(u),h=n(565),f=n.n(h),g=n(216),v=n.n(g),C=n(589),b=n.n(C),x=n(28),E={};E.styleTagTransform=b(),E.setAttributes=f(),E.insert=m().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=v(),s()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals,i()})()})();