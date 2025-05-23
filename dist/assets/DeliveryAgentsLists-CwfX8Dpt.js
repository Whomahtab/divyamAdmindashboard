import{R as e,N as A,r as u,_ as g,ae as D}from"./index-CqUjVgox.js";import{T as S,b as R,c as k,d as h,e as T,f as E}from"./table-D59fVxqX.js";import{S as L}from"./search-DXH-IQ_M.js";const C=({TextContent:a})=>e.createElement("div",{className:"flex justify-between items-center px-4 py-1 border-b"},e.createElement("div",{className:"flex gap-4"},e.createElement("img",{src:"https://i.pravatar.cc/300",className:"size-12 rounded-full"}),e.createElement("div",null,e.createElement("h2",{className:"font-medium text-gray-600 "},a==null?void 0:a.fullName),e.createElement("p",{className:"text-xs text-gray-400"},`${a.city} - ${a.address}`))),e.createElement(A,{to:"",className:"text-gray-500"},"View profile")),K=({SearchValue:a})=>{const[c,s]=u.useState(),l=localStorage.getItem("token");return u.useEffect(()=>{(async()=>{try{const d=await(await fetch(`${g.BACKEND_URL}/api/admin/search?s=${a}`,{method:"GET",Authorization:`Bearer ${l}`})).json();s(d)}catch(n){throw s([]),new Error(n)}})()},[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"searchResultsContainer border  w-1/2 flex flex-col gap-3 h-[600px] overflow-y-auto rounded-sm bg-neutral-100 py-4 absolute z-30 shadow-md"},c&&c.length?c.map((o,n)=>e.createElement(C,{key:n,TextContent:o})):e.createElement("p",{className:"p-4"},"No records founds..")))};var y={},x;function $(){if(x)return y;x=1,Object.defineProperty(y,"__esModule",{value:!0});var a=D();function c(s){var l=s.onTriggered,o=s.disableClick,n=s.disableTouch,d=s.disableKeys,p=s.allowAnyKey,m=s.triggerKeys,t=a.useRef(null),i=a.useCallback(function(r){p?l(r):m?m.includes(r.key)&&l(r):r.key==="Escape"&&l(r)},[p,m,l]),f=a.useCallback(function(r){t&&t.current&&(t.current.contains(r.target)||l==null||l(r))},[t.current,l]),v=a.useMemo(function(){return[[o,"click",f],[n,"touchstart",f],[d,"keyup",i]]},[o,n,d,f,i]);return a.useEffect(function(){return v.map(function(r){var b=r[0],N=r[1],w=r[2];b||document.addEventListener(N,w)}),function(){v.map(function(r){var b=r[0],N=r[1],w=r[2];b||document.removeEventListener(N,w)})}},[v]),t}return y.useDetectClickOutside=c,y}var j=$();const V=()=>{u.useRef(null);const[a,c]=u.useState(!1),[s,l]=u.useState(""),[o,n]=u.useState(),d=()=>{c(!1)},p=j.useDetectClickOutside({onTriggered:d}),m=localStorage.getItem("AppID")||void 0;return u.useEffect(()=>{(async()=>{try{const i=await fetch(`${g&&g.BACKEND_URL}/api/admin/agents?page=1&limit=2`,{method:"GET",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json",Accept:"application/json","Accept-Language":"en_US"}});if(!i.ok)throw new Error("Something went wrong..");const f=await i.json();c(!0),n(f)}catch(i){throw new Error(i)}})()},[]),e.createElement("div",{ref:p,className:"agentListWrapper mx-auto mt-4 px-4 py-2 shadow-md  border border-neutral-200"},e.createElement("div",{id:"search-bar"},e.createElement("form",{className:"flex"},e.createElement("input",{value:s,onChange:t=>{l(t.target.value),c(!0)},type:"search",placeholder:"Search delivery agents..",className:`bg-neutral-100 border p-2 rounded-sm w-full rounded-r-none
          transition-colors ease-in-out duration-200  text-neutral-500 focus:outline-none focus:border-orange-300
          `}),e.createElement("button",{className:"bg-orange-300 text-white rounded-md px-3 rounded-l-none"},e.createElement(L,null))),e.createElement("div",{id:"show-search-results",className:"mt-5 relative"},a&&s&&s.length>3?e.createElement(K,{SearchValue:s}):null)),e.createElement(S,null,e.createElement(R,null,e.createElement(k,null,e.createElement(h,{className:"w-[200px]"},"Name"),e.createElement(h,null,"City"),e.createElement(h,null,"Address"),e.createElement(h,{className:"text-right"},"Pin code"))),e.createElement(T,null,o&&o.map(t=>e.createElement(k,{key:t._id},e.createElement(E,{className:"font-medium"},e.createElement(A,{to:`/dashboard/delivery-agent/${t==null?void 0:t._id}`},t==null?void 0:t.fullName)),e.createElement(E,{className:"capitalize"},t==null?void 0:t.city),e.createElement(E,null,t==null?void 0:t.address),e.createElement(E,{className:"text-right"},t==null?void 0:t.pinCode))))))};export{V as default};
