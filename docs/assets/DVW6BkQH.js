import{_ as y,g as f,r as m,h as C,d as N,i as h,c as E,t as w,u as T,o as B}from"./BN38_k43.js";import{u as L}from"./BRmkDLDV.js";import{u as x,q as b}from"./CBy-2dtl.js";import"./CNm7cB6B.js";const M={class:"game-design-container"},k={__name:"test",async setup(P){let s,c;f(()=>u.value==="dark"),m("");const t=m(null),u=L(),{data:p}=([s,c]=C(()=>x("data",()=>b("/repository/game_design").sort({date:-1}).where({sort_order:{$exists:!0}}).sort({sort_order:1}).find())),s=await s,c(),s),i=e=>{if(e.target&&e.target.tagName==="PRE"){const o="copy-content",n=e.target;if(n.getElementsByClassName(o).length===0){const a=document.createElement("button");a.className=o,t.value=a,a.onclick=g,a.innerHTML=iconCopyPassive,n.appendChild(a)}}},l=e=>{var o,n,a,d;if(e.target.tagName==="PRE"&&((o=e.relatedTarget)==null?void 0:o.tagName)!=="BUTTON"&&((n=e.relatedTarget)==null?void 0:n.tagName)!=="svg"&&((a=e.relatedTarget)==null?void 0:a.tagName)!=="path"&&((d=e.relatedTarget)==null?void 0:d.tagName)!=="CODE"){const v="copy-content",r=e.target,_=r.lastElementChild;r.getElementsByClassName(v).length>0&&r.removeChild(_)}},g=()=>{if(t.value){const e=t.value.parentNode.getElementsByTagName("code")[0].textContent;navigator.clipboard.writeText(e).then(()=>!0).catch(o=>console.log(o)),t.value.classList.add("copy-active"),t.value.innerHTML=iconCopyActive,setTimeout(()=>{t.value.classList.remove("copy-active"),t.value.innerHTML=iconCopyPassive},1500)}else t.value=null};return N(()=>{window.addEventListener("mouseover",i),window.addEventListener("mouseout",l)}),h(()=>{window.removeEventListener("mouseover",i),window.removeEventListener("mouseout",l)}),(e,o)=>(B(),E("div",M,w(T(p)),1))}},q=y(k,[["__scopeId","data-v-3bf30a6d"]]);export{q as default};