import{j as e}from"./AlertSnackbar-C1aUMYU1.js";import{c as a}from"./index-CaBd9U9N.js";const m=({actions:t,isOpen:i,onClose:r,className:l})=>i?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:r}),e.jsx("div",{className:a("absolute right-0 top-[60px] z-50 animate-in fade-in slide-in-from-top-2 duration-200",l),children:e.jsx("div",{className:"flex flex-col items-end space-y-3",children:t.map((s,o)=>e.jsxs("div",{className:"flex items-center group",style:{animationDelay:`${o*50}ms`,animation:"slideInRight 0.3s ease-out forwards"},children:[e.jsxs("div",{className:"mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:[e.jsx("span",{className:"bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap",children:s.name}),e.jsx("div",{className:"absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"})]}),e.jsxs("button",{className:a("relative w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform","hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300",{"bg-white from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700":!s.disabled,"bg-gray-300 text-gray-500 cursor-not-allowed":s.disabled}),onClick:()=>{s.disabled||(r(),s.method())},disabled:s.disabled,title:s.name,children:[e.jsx("div",{className:"w-6 h-6 flex items-center justify-center",children:s.icon}),e.jsx("div",{className:"absolute inset-0 rounded-full bg-gray-200 opacity-0 scale-0 transition-all duration-300 pointer-events-none hover:opacity-30 hover:scale-100"})]})]},s.name))})}),e.jsx("style",{children:`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]}):null;export{m as S};
