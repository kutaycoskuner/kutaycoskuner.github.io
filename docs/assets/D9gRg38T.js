import{l as m}from"./C4JABX51.js";import{s as x}from"./DJxVhClu.js";import{s as C}from"./BjZe4u12.js";import{_ as j,r as f,d as B,c as e,a as s,t as c,F as _,e as v,o as n,n as h,f as i,b as E}from"./BN38_k43.js";const M={class:"architecture"},N={class:"banner"},V=["src"],F={class:"metadata-grid"},O={class:"title"},S={class:"metadata-grid-item"},$={class:"metadata-grid-item meta-table"},z={class:"metadata-content"},D={class:"narrative"},L={key:0},T={key:1},q=["src","onClick"],w={key:3},A={key:4},G={key:0},H=["src","onClick"],J={__name:"luthier_house",setup(K){x();const g=C(),d=f(m.data),k=f(null);function b(a){const r={};let t=0;function u(o){o.forEach(l=>{l.content_type==="image"&&l.slider===!0&&(r[l.content]=t++),l.content_type==="sub-grid"&&l.content&&u(l.content)})}return a.banner&&a.banner.content_type==="image"&&a.banner.slider===!0&&(r[a.banner.content]=t++),a.metadata&&a.metadata.details&&a.metadata.details.forEach(o=>{o.slider===!0&&(r[o]=t++)}),a.narrative&&u(a.narrative),r}function p(a){const r="luthierhouse";let t=k.value[a];g.setImgCategory(r),g.setImgIndex(t)}return B(()=>{k.value=b(d.value),p(-1)}),(a,r)=>(n(),e("div",M,[s("div",N,[s("img",{src:""+d.value.banner.content,alt:""},null,8,V)]),s("div",F,[s("div",O,[s("h2",null,c(d.value.metadata.title),1)]),s("div",S,[s("p",null,c(d.value.metadata.description),1)]),s("div",$,[(n(!0),e(_,null,v(d.value.metadata.details,(t,u)=>(n(),e("div",{key:u,class:"metadata"},[s("span",null,c(Object.keys(t)[0]),1),s("div",z,c(Object.values(t)[0]),1)]))),128))])]),s("div",D,[(n(!0),e(_,null,v(d.value.narrative,(t,u)=>(n(),e("div",{key:u,class:h(t.style)},[t.content_type==="title"?(n(),e("h3",L,c(t.content),1)):i("",!0),t.content_type==="title"?(n(),e("hr",T)):i("",!0),t.content_type==="image"?(n(),e("img",{key:2,src:""+t.content,alt:"",onClick:o=>t.slider&&p(t.content)},null,8,q)):t.content_type==="text"?(n(),e("p",w,c(t.content),1)):t.content_type==="list"&&t.visibility===!0?(n(),e("div",A,[t.title!=""?(n(),e("b",G,c(t.title),1)):i("",!0),(n(!0),e(_,null,v(t.content,(o,l)=>(n(),e("p",null,[E(c(o),1),r[0]||(r[0]=s("br",null,null,-1)),r[1]||(r[1]=s("br",null,null,-1))]))),256))])):i("",!0),t.content_type==="sub-grid"?(n(),e("div",{key:5,class:h(t.style)},[(n(!0),e(_,null,v(t.content,(o,l)=>(n(),e("div",{key:l},[o.content_type==="sub-grid"?(n(),e("div",{key:0,class:h(o.style)},[(n(!0),e(_,null,v(o.content,(y,P)=>(n(),e("div",{key:l},[y.content_type==="image"?(n(),e("img",{key:0,src:y.content,alt:"",onClick:Q=>y.slider&&p(y.content)},null,8,H)):i("",!0)]))),128))],2)):i("",!0)]))),128))],2)):i("",!0)],2))),128))])]))}},Y=j(J,[["__scopeId","data-v-b388eb40"]]);export{Y as default};
