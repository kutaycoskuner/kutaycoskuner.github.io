import{q as w,r as d,s as q,x as y,y as x,z as I,A as S,B as _,C as b,u as h,D as g,E as j,G as C,H as B,I as $,J as k,K as a}from"./BN38_k43.js";import O from"./AYKD9-WA.js";import U from"./BPi8U6rL.js";import"./DaWut61X.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./CNm7cB6B.js";import"./CBy-2dtl.js";function A(r,s={}){const e=s.head||w();if(e)return e.ssr?e.push(r,s):E(e,r,s)}function E(r,s,e={}){const c=d(!1),u=d({});q(()=>{u.value=c.value?{}:_(s)});const n=r.push(u.value,e);return y(u,f=>{n.patch(f)}),b()&&(x(()=>{n.dispose()}),I(()=>{c.value=!0}),S(()=>{c.value=!1})),n}const v=(r,s=g())=>{const e=h(r),c=C();y(()=>h(r),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const f=t.title||(n==null?void 0:n.title);f&&(t.title=f),c.public.content.host;const p=(t==null?void 0:t.description)||(n==null?void 0:n.description);p&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:p}),t!=null&&t.image||(n==null||n.image),j(()=>A(t))},{immediate:!0})},J=B({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(r){const{contentHead:s}=C().public.content,e=$(),{tag:c,excerpt:u,path:n,query:t,head:f}=r,p=f===void 0?s:f,l={...t||{},path:n||(t==null?void 0:t.path)||k(g().path),find:"one"},H=(o,i)=>a("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return a(U,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:D})=>{var m;return p&&v(o),(m=e.default)==null?void 0:m.call(e,{doc:o,refresh:i,isPartial:D,excerpt:u,...this.$attrs})}:({data:o})=>(p&&v(o),a(O,{value:o,excerpt:u,tag:c,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):H("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||a("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||a("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),Y=J;export{Y as default};
