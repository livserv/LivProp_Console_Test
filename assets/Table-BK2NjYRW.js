import{j as e,r as h}from"./index-DQGCQuMM.js";import{c as y}from"./index-CqYLj0U2.js";import"./Button-CrppjGYc.js";import{S as D}from"./SelectBox-DtWaFkCE.js";const E=({columns:s,rows:a,noRowsMessage:i})=>e.jsx("tbody",{children:a.length===0?e.jsx("tr",{className:"border-b border-gray-200",children:e.jsx("td",{className:"px-4 py-2 text-center",colSpan:s.length,children:i||"No records found."})}):a.map((d,t)=>e.jsx("tr",{className:"border-b border-gray-200 hover:bg-gray-50",children:s.map((n,r)=>{const l=n.template?n.template(d):d[n.field],o=typeof l=="string"||typeof l=="number"?l:"";return e.jsx("td",{className:y("text-sm px-4 py-2 truncate text-ellipsis",{hidden:!!n.hideBelow,"xs:table-cell":n.hideBelow==="xs","sm:table-cell":n.hideBelow==="sm","md:table-cell":n.hideBelow==="md","mlg:table-cell":n.hideBelow==="mlg","lg:table-cell":n.hideBelow==="lg","xl:table-cell":n.hideBelow==="xl","2xl:table-cell":n.hideBelow==="2xl"},n.cellClassName),title:o.toString(),children:l},r)})},t))});function I({columns:s,rowsCount:a,pageIndex:i,totalPages:d,rowsCounts:t,onChangeCount:n,onNavigate:r}){const l=t.map(o=>({label:o,value:o}));return e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:s.length,children:e.jsxs("div",{className:"flex items-center justify-between px-4 py-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2",children:"Rows per page"}),e.jsx(D,{className:"border border-gray-300 rounded px-2 py-1",value:a,options:l,showClear:!1,onChange:n})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("button",{className:"font-bold text-2xl disabled:text-[#695A5A]",onClick:()=>r(1),disabled:i===1,children:"«"}),e.jsx("button",{className:"font-bold text-2xl disabled:text-[#695A5A]",onClick:()=>r(i-1),disabled:i===1,children:"‹"}),e.jsxs("span",{className:"px-2 text-sm font-medium",children:[i," of ",d||1]}),e.jsx("button",{className:"font-bold text-2xl disabled:text-[#695A5A]",onClick:()=>r(i+1),disabled:i>=d||!d,children:"›"}),e.jsx("button",{className:"font-bold text-2xl disabled:text-[#695A5A]",onClick:()=>r(d),disabled:i>=d||!d,children:"»"})]})]})})})})}const L=({columns:s,sortColumn:a,sortAsc:i,onSort:d})=>e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-gray-200",children:s.map((t,n)=>{const r=t.sortable&&(a==null?void 0:a.field)===t.field;return e.jsxs("th",{className:y("px-4 py-2 font-medium cursor-pointer select-none text-left",{hidden:!!t.hideBelow,"xs:table-cell":t.hideBelow==="xs","sm:table-cell":t.hideBelow==="sm","md:table-cell":t.hideBelow==="md","mlg:table-cell":t.hideBelow==="mlg","lg:table-cell":t.hideBelow==="lg","xl:table-cell":t.hideBelow==="xl","2xl:table-cell":t.hideBelow==="2xl","flex items-start":r},t.headerClassName),onClick:()=>d(t),children:[t.title,r&&e.jsx("span",{className:"ml-1",children:i?"↑":"↓"})]},n)})})});function M(s,a,i=!0,d){return h.useMemo(()=>!d||!a||!(s!=null&&s.length)?s:[...s].sort((t,n)=>{const r=t[a],l=n[a];if(j(r)&&j(l))return 0;if(j(r))return i?-1:1;if(j(l))return i?1:-1;let o=0;if(typeof r=="number"&&typeof l=="number")o=r-l;else if(r instanceof Date&&l instanceof Date)o=r.getTime()-l.getTime();else{const f=String(r).toLowerCase(),m=String(l).toLowerCase();f<m?o=-1:f>m?o=1:o=0}return i?o:-o}),[s,a,i,d])}function j(s){return s==null}const F=[10,20,25,50,75,100];function z({columns:s,rows:a,totalRows:i,page:d,sortColumn:t,sortAsc:n,onSort:r,onChange:l,noRowsMessage:o,rowsPerPage:f,rowCounts:m=F,pagination:S}){const[x,w]=h.useState(t),[b,C]=h.useState(n??!0),[N,B]=h.useState(d||1),[u,v]=h.useState(f??m[0]),g=Math.ceil(i/u),A=M(a,x==null?void 0:x.field,b,i===(a==null?void 0:a.length)),T=c=>{if(!c.sortable)return;let p=!0;x&&x.field===c.field&&(p=!b),w(c),C(p),r&&r(c,p),l&&l({sortColumn:c,sortAsc:p,count:u,pageNumber:N})},k=c=>{v(c),B(1),l&&l({sortColumn:x||void 0,sortAsc:b,count:c,pageNumber:1})},R=c=>{c<1||c>g||(B(c),l&&l({sortColumn:x||void 0,sortAsc:b,count:u,pageNumber:c}))};return e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white rounded shadow",children:[e.jsx(L,{columns:s,sortColumn:x,sortAsc:b,onSort:T}),e.jsx(E,{columns:s,rows:A,noRowsMessage:o}),S!==!1&&e.jsx(I,{columns:s,pageIndex:N,rowsCount:u,rowsCounts:m,totalPages:g,onChangeCount:k,onNavigate:R})]})})}export{z as T};
