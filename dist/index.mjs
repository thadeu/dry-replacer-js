<<<<<<< HEAD
import r from"lodash.get";import e from"lodash.set";import t from"lodash.isarray";import a from"lodash.isplainobject";function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}var o=/*#__PURE__*/function(){function o(r){this.data=void 0,this.data=r}var i=o.prototype;return i.replaceValue=function(t,a,o,i){var c=String(a).match(/{{.*?}}/g);if(c)for(var l,u=function(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(r))){t&&(r=t);var a=0;return function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c.reverse());!(l=u()).done;){var s=l.value,f=s.replace(/[{}]/g,""),p=r(i,t),v=r(o,f),d=v;["string"].includes(typeof v)&&(d=p.replace(s,v)),["number"].includes(typeof v)&&(d=p.replace(s,v)),e(i,t,d)}},i.recursiveReplace=function(r,e){for(var n=this,o=0,i=Object.keys(e);o<i.length;o++){var c=i[o],l=e[c];a(l)?this.recursiveReplace(r,l):t(l)?l.map(function(e){return n.recursiveReplace(r,e)}):this.replaceValue(c,l,r,e)}return e},i.try=function(r){var e=JSON.parse(r);return this.recursiveReplace(this.data,e),e},o}();export{o as default};
=======
import r from"lodash.get";import t from"lodash.set";import e from"lodash.isarray";import n from"lodash.isplainobject";function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var i=/*#__PURE__*/function(){function i(r,t){this.data=void 0,this.strict=!0,this.data=r,this.strict=null==t?void 0:t.strict}var o=i.prototype;return o.replaceValue=function(e,n,i,o){var c=String(n).match(/{{.*?}}/g);if(c)for(var l,s=function(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(e)return(e=e.call(r)).next.bind(e);if(Array.isArray(r)||(e=function(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}(r))){e&&(r=e);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c.reverse());!(l=s()).done;){var u=l.value,f=u.replace(/[{}]/g,""),p=r(o,e),d=r(i,f),v=d;["undefined",void 0,null,"string"].includes(typeof d)&&(v=p.replace(u,this.strict?d:d||"")),t(o,e,v)}},o.recursiveReplace=function(r,t){for(var a=this,i=0,o=Object.keys(t);i<o.length;i++){var c=o[i],l=t[c];n(l)?this.recursiveReplace(r,l):e(l)?l.map(function(t){return a.recursiveReplace(r,t)}):this.replaceValue(c,l,r,t)}return t},o.try=function(r){var t=JSON.parse(r);return this.recursiveReplace(this.data,t),t},i}();export{i as default};
>>>>>>> 2b856851a27a4269c36b8bcc7edcc6c4eb544550
//# sourceMappingURL=index.mjs.map
