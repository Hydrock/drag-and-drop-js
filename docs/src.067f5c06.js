parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"S3PC":[function(require,module,exports) {
"use strict";function e(e,t){var n=0,o=0;function u(e,t,u){u.style.position="absolute",u.draggable=!0,"click"===e?(n=t.layerX,o=t.layerY,document.addEventListener("mousemove",s)):"touch"===e&&(n=parseInt(t.touches[0].clientX-t.target.parentNode.offsetLeft,10),o=parseInt(t.touches[0].clientY-t.target.parentNode.offsetTop,10),document.addEventListener("touchmove",s))}function c(e){e.draggable=!1,document.removeEventListener("mousemove",s),document.removeEventListener("touchmove",s)}function s(t){e.draggable&&("mousemove"===t.type?1===t.buttons&&(e.style.left=t.clientX-n+"px",e.style.top=t.clientY-o+"px"):"touchmove"===t.type&&(e.style.left=parseInt(t.touches[0].clientX-n,10)+"px",e.style.top=parseInt(t.touches[0].clientY-o,10)+"px"))}t||(t=e),e.ondragstart=function(){return!1},t.addEventListener("mousedown",function(t){u("click",t,e)}),t.addEventListener("touchstart",function(t){u("touch",t,e)}),document.addEventListener("mouseup",function(){c(e)}),document.addEventListener("touchend",function(){c(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("../index.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector(".section_1"),u=document.querySelector(".header_1"),c=document.querySelector(".section_2");(0,e.default)(r,u),(0,e.default)(c);
},{"../index.js":"S3PC"}]},{},["Focm"], null)
//# sourceMappingURL=src.067f5c06.map