!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("lodash.get"),require("lodash.set"),require("lodash.isarray"),require("lodash.isplainobject")):"function"==typeof define&&define.amd?define(["lodash.get","lodash.set","lodash.isarray","lodash.isplainobject"],r):(e||self).dryReplacerJs=r(e.get,e.set,e.isArray,e.isPlainObject)}(this,function(e,r,t,n){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/a(e),i=/*#__PURE__*/a(r),l=/*#__PURE__*/a(t),u=/*#__PURE__*/a(n);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}/*#__PURE__*/
return function(){function e(e){this.data=void 0,this.data=e}var r=e.prototype;return r.replaceValue=function(e,r,t,n){var a=String(r).match(/{{.*?}}/g);if(a)for(var l,u=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(a.reverse());!(l=u()).done;){var c=l.value,f=c.replace(/[{}]/g,""),d=o.default(n,e),p=o.default(t,f),y=p;["string"].includes(typeof p)&&(y=d.replace(c,p)),["number"].includes(typeof p)&&(y=d.replace(c,p)),i.default(n,e,y)}},r.recursiveReplace=function(e,r){for(var t=this,n=0,a=Object.keys(r);n<a.length;n++){var o=a[n],i=r[o];u.default(i)?this.recursiveReplace(e,i):l.default(i)?i.map(function(r){return t.recursiveReplace(e,r)}):this.replaceValue(o,i,e,r)}return r},r.try=function(e){var r=JSON.parse(e);return this.recursiveReplace(this.data,r),r},e}()});
//# sourceMappingURL=index.umd.js.map
