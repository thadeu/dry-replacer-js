!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("lodash.get"),require("lodash.set"),require("lodash.isarray"),require("lodash.isplainobject")):"function"==typeof define&&define.amd?define(["lodash.get","lodash.set","lodash.isarray","lodash.isplainobject"],t):(e||self).dryReplacerJs=t(e.get,e.set,e.isArray,e.isPlainObject)}(this,function(e,t,r,n){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/a(e),i=/*#__PURE__*/a(t),l=/*#__PURE__*/a(r),u=/*#__PURE__*/a(n);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}/*#__PURE__*/
return function(){function e(e){this.data=void 0,this.data=e}var t=e.prototype;return t.replaceValue=function(e,t,r,n){var a=String(t).match(/{{.*?}}/g);if(a)for(var l,u=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(a.reverse());!(l=u()).done;){var c=l.value,f=c.replace(/[{}]/g,""),d=o.default(n,e),p=o.default(r,f),h=p;["string"].includes(typeof p)&&(h=d.replace(c,p)),i.default(n,e,h)}},t.recursiveReplace=function(e,t){for(var r=this,n=0,a=Object.keys(t);n<a.length;n++){var o=a[n],i=t[o];u.default(i)?this.recursiveReplace(e,i):l.default(i)?i.map(function(t){return r.recursiveReplace(e,t)}):this.replaceValue(o,i,e,t)}return t},t.try=function(e){var t=JSON.parse(e);return this.recursiveReplace(this.data,t),t},e}()});
//# sourceMappingURL=index.umd.js.map
