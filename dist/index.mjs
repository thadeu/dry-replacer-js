import r from"lodash.get";import e from"lodash.set";import t from"lodash.isarray";import a from"lodash.isplainobject";function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}var o=/*#__PURE__*/function(){function o(r){this.data=void 0,this.data=r}var i=o.prototype;return i.replaceValue=function(t,a,o,i){var c=String(a).match(/{{.*?}}/g);if(c)for(var l,u=function(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(r))){t&&(r=t);var a=0;return function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c.reverse());!(l=u()).done;){var s=l.value,f=s.replace(/[{}]/g,""),p=r(i,t),v=r(o,f),d=v;["string"].includes(typeof v)&&(d=p.replace(s,v)),["number"].includes(typeof v)&&(d=p.replace(s,v)),e(i,t,d)}},i.recursiveReplace=function(r,e){for(var n=this,o=0,i=Object.keys(e);o<i.length;o++){var c=i[o],l=e[c];a(l)?this.recursiveReplace(r,l):t(l)?l.map(function(e){return n.recursiveReplace(r,e)}):this.replaceValue(c,l,r,e)}return e},i.try=function(r){var e=JSON.parse(r);return this.recursiveReplace(this.data,e),e},o}();export{o as default};
//# sourceMappingURL=index.mjs.map
