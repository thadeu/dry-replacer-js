import e from"lodash.get";import r from"lodash.set";import t from"lodash.isarray";import a from"lodash.isplainobject";class s{constructor(e){this.data=void 0,this.data=e}replaceValue(t,a,s,l){let i=String(a).match(/{{.*?}}/g);if(i)for(let a of i.reverse()){let i=a.replace(/[{}]/g,""),o=e(l,t),c=e(s,i),p=c;["string"].includes(typeof c)&&(p=o.replace(new RegExp(a),c)),r(l,t,p)}}recursiveReplace(e,r){for(let s of Object.keys(r)){let l=r[s];a(l)?this.recursiveReplace(e,l):t(l)?l.map(r=>this.recursiveReplace(e,r)):this.replaceValue(s,l,e,r)}return r}try(e){let r=JSON.parse(e);return this.recursiveReplace(this.data,r),r}}export{s as default};
//# sourceMappingURL=index.modern.mjs.map
