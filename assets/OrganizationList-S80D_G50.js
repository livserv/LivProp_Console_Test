import{r as f,a as g,R as x,j as t}from"./index-DQGCQuMM.js";import{c as r}from"./index-CqYLj0U2.js";import{S as u}from"./settings-Dt2lwwni.js";import{f as h,e as w,i as b}from"./utils-DuSoZ4Pz.js";/* empty css                */import{T as j}from"./Table-BK2NjYRW.js";import{B as C}from"./Button-CrppjGYc.js";import{T as N}from"./TextBox-DllforNt.js";import{T as v}from"./Toggle-P9GVXx7W.js";import{P as B}from"./PageHeader-Bb_DNeUF.js";import"./SelectBox-DtWaFkCE.js";const L=[{field:"name",title:"Name",sortable:!0},{field:"websiteUrl",title:"Website",cellClassName:r("max-w-[250px]"),hideBelow:"lg",template:a=>!!a.websiteUrl&&t.jsx("a",{href:a.websiteUrl,target:"_blank",title:a.websiteUrl,rel:"noreferrer noopener",children:b(a.websiteUrl)})},{field:"email",title:"Email",cellClassName:r("max-w-[250px]"),hideBelow:"sm"},{field:"registeredAt",title:"Registered Date",hideBelow:"xl",sortable:!0},{field:"credits",title:"Credits",hideBelow:"lg",sortable:!0},{field:"managed",title:"Managed",cellClassName:r("text-center"),hideBelow:"md",template:a=>t.jsx(v,{checked:a.handledByLivServ,containerClassName:"mx-auto"})},{field:"",title:"",cellClassName:r("text-center"),template:()=>t.jsx(C,{icon:t.jsx(u,{}),type:"plain"})}];function D(){const[a,p]=f.useState(""),n=g(e=>e.organizationList),l=x.useMemo(()=>n.map(e=>({name:e.organizationName,websiteUrl:e.websiteUrl,email:e.admins.map(i=>i.email).join(", "),registeredAt:w(e.registeredAt),credits:h(e.availableCredits),managed:e.handledByLivServ})),[n]),s=x.useMemo(()=>{var i;const e=(i=a==null?void 0:a.toLowerCase())==null?void 0:i.trim();return e?l.filter(o=>{var m,d,c;return((m=o.name)==null?void 0:m.toLowerCase().includes(e))||((d=o.email)==null?void 0:d.toLowerCase().includes(e))||((c=o.websiteUrl)==null?void 0:c.toLowerCase().includes(e))}):l},[a,l]);return t.jsxs("div",{children:[t.jsx(B,{title:"Organizations"}),t.jsxs("div",{className:"flex flex-col gap-3 pt-6",children:[t.jsxs("div",{className:"flex justify-between py-4",children:[t.jsx("div",{className:"pt-2",children:t.jsx("span",{className:"text-sm font-semibold",children:"Organization List"})}),t.jsx("div",{children:t.jsx(N,{value:a,placeholder:"Search",onChange:p})})]}),t.jsx(j,{rows:s,columns:L,totalRows:s==null?void 0:s.length,pagination:!1})]})]})}export{D as default};
