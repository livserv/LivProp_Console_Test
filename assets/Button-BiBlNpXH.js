import{g as w,R as v,j as y}from"./index-s9xg2lC1.js";var P={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var b;function H(){return b||(b=1,function(o){(function(){var n={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=u(e,d(a)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)n.call(e,a)&&e[a]&&(r=u(r,a));return r}function u(e,r){return r?e?e+" "+r:e+r:e}o.exports?(t.default=t,o.exports=t):window.classNames=t})()}(P)),P.exports}var O=H();const F=w(O),R=v.createContext({}),B=R.Provider;function N(o,n){const{valueFieldProp:t="value",hasErrorFieldProp:d="hasError",errorMessageFieldProp:u="errorMessage",changeHandler:e,defaultProps:r}={};return function(m){const f=v.useContext(R),{[t]:j,onChange:E,...S}=m,h=S,C=v.useRef({field:m.field,onChange:E,form:f,changeHandler:e});C.current={field:m.field,onChange:E,form:f,changeHandler:e};const M=v.useCallback((s,i,...l)=>{const{form:c,onChange:x,field:p,changeHandler:g}=C.current;typeof g=="function"&&(s=g(s,i,...l),i=p||i),p&&(c!=null&&c.onChange)&&c.onChange(s,p,...l),x==null||x(s,i,...l)},[]);if(f!=null&&f.getProps&&m.field){const{[t]:s=j,hasError:i,isTouched:l,errorMessage:c,middleware:x}=f.getProps(m,n);C.current.middleware=x,h[t]=v.useMemo(()=>{const{middleware:p,field:g}=C.current;return p?p(s,g,!1):s},[s]),i&&l&&(h[d]=i),c&&l&&(h[u]=c)}else h.value=j;return y.jsx(o,{...r,...h,onChange:M})}}function W({label:o,icon:n,type:t="primary",className:d,size:u="lg",...e}){return y.jsxs("button",{className:F("button",{"icon-only":!o&&!!n},t,u,d),...e,children:[!!n&&(typeof n=="string"?y.jsx("span",{className:F("me-2",n)}):n),o]})}export{W as B,B as P,F as a,N as c};
