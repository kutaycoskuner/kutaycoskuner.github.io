import A from"./AYKD9-WA.js";import{_ as D,g as V,r as b,h as $,d as P,i as j,c as s,a as n,F as p,e as _,u as h,o as a,n as H,t as d,j as w,f as y,b as k,k as R,l as U}from"./BN38_k43.js";import{u as q}from"./BRmkDLDV.js";import{u as F,q as I}from"./CBy-2dtl.js";import"./DaWut61X.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./CNm7cB6B.js";const O={class:"game-design-container"},S={class:"main"},z={class:"article"},G={key:0},J=["onMouseover"],K={class:"article-meta"},Q={class:"toc-container"},W={key:0},X=["onClick"],Y={key:0},Z={key:1,style:{color:"var(--color)"}},tt={__name:"computer_science",async setup(et){let m,g;V(()=>x.value==="dark");const u=b(""),r=b(null),x=q(),{data:f}=([m,g]=$(()=>F("data",()=>I("/repository/computer_science").sort({date:-1}).where({sort_order:{$exists:!0}}).sort({sort_order:1}).find())),m=await m,g(),m);function E(e){if(e!==u.value){const t=document.getElementsByClassName(e)[0];t&&t.scrollIntoView({behavior:"smooth"}),u.value=e}}const C=e=>{if(e.target&&e.target.tagName==="PRE"){const t="copy-content",i=e.target;if(i.getElementsByClassName(t).length===0){const l=document.createElement("button");l.className=t,r.value=l,l.onclick=T,l.innerHTML=iconCopyPassive,i.appendChild(l)}}},N=e=>{var t,i,l,o;if(e.target.tagName==="PRE"&&((t=e.relatedTarget)==null?void 0:t.tagName)!=="BUTTON"&&((i=e.relatedTarget)==null?void 0:i.tagName)!=="svg"&&((l=e.relatedTarget)==null?void 0:l.tagName)!=="path"&&((o=e.relatedTarget)==null?void 0:o.tagName)!=="CODE"){const c="copy-content",v=e.target,M=v.lastElementChild;v.getElementsByClassName(c).length>0&&v.removeChild(M)}},T=()=>{if(r.value){const e=r.value.parentNode.getElementsByTagName("code")[0].textContent;navigator.clipboard.writeText(e).then(()=>!0).catch(t=>console.log(t)),r.value.classList.add("copy-active"),r.value.innerHTML=iconCopyActive,setTimeout(()=>{r.value.classList.remove("copy-active"),r.value.innerHTML=iconCopyPassive},1500)}else r.value=null},L=e=>{e!==u.value&&(u.value=e)},B=e=>{const t={weekday:"short",year:"numeric",month:"short",day:"numeric"};return new Date(e).toLocaleDateString("en-de",t)};return P(()=>{window.addEventListener("mouseover",C),window.addEventListener("mouseout",N)}),j(()=>{window.removeEventListener("mouseover",C),window.removeEventListener("mouseout",N)}),(e,t)=>{const i=A,l=U;return a(),s("div",O,[n("div",S,[(a(!0),s(p,null,_(h(f),(o,c)=>(a(),s("div",z,[o.visibility==!0?(a(),s("div",G,[n("article",{onMouseover:v=>L(o.title),class:"content"},[n("div",K,[n("h1",{class:H(o.title)},d(o.title),3),n("span",null,"Last Update: "+d(B(o.updated)),1)]),t[0]||(t[0]=n("br",null,null,-1)),w(i,{class:"nuxt-content",value:o},null,8,["value"])],40,J),t[1]||(t[1]=n("br",null,null,-1)),t[2]||(t[2]=n("br",null,null,-1)),t[3]||(t[3]=n("br",null,null,-1))])):y("",!0)]))),256)),n("div",Q,[(a(!0),s(p,null,_(h(f),o=>(a(),s("div",{class:"toc",key:o.slug},[o.visibility==!0?(a(),s("div",W,[n("div",{class:"toc-title",onClick:c=>E(o.title)},[o.title==u.value?(a(),s("span",Y,[n("b",null,d(o.title),1)])):(a(),s("span",Z,d(o.title),1))],8,X),o.title==u.value?(a(!0),s(p,{key:0},_(o.body.toc.links,c=>(a(),s("span",{key:c.id},[t[4]||(t[4]=k("   ")),w(l,{class:"toc-content",to:`#${c.id}`},{default:R(()=>[k(d(c.text),1)]),_:2},1032,["to"]),t[5]||(t[5]=n("br",null,null,-1))]))),128)):y("",!0),t[6]||(t[6]=n("br",null,null,-1))])):y("",!0)]))),128))])])])}}},ut=D(tt,[["__scopeId","data-v-98b31f34"]]);export{ut as default};
