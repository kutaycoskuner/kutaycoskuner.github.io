(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{309:function(o,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,r(15).default)("e2c8b1ea",content,!0,{sourceMap:!1})},365:function(o,t,r){"use strict";r(309)},366:function(o,t,r){var e=r(14)((function(i){return i[1]}));e.push([o.i,"@media (max-width:480px){.goto-top[data-v-0077413a]{border:0 solid var(--color);border-color:var(--color);border-radius:2%;bottom:-5%;display:block;left:calc(var(--page-width-mobile)*.92);padding:6px;position:fixed;transition:bottom .3s;width:100%;z-index:10}}@media (min-width:481px) and (max-width:1024px){.goto-top[data-v-0077413a]{border:0 solid var(--color);border-color:var(--color);border-radius:10%;bottom:-5%;display:block;padding:6px;position:fixed;right:10%;transition:bottom .3s;z-index:10}}@media (min-width:1025px){.goto-top[data-v-0077413a]{bottom:-5%;display:block;left:calc(var(--page-width)*1.55 + 30px);position:fixed;transition:bottom .3s;z-index:10}}.goto-top[data-v-0077413a]:hover{cursor:pointer}.goto-top img[data-v-0077413a]{max-height:24px;max-width:100%;opacity:var(--level4-opacity)}",""]),e.locals={},o.exports=e},399:function(o,t,r){"use strict";r.r(t);var e={name:"ToggleToc",data:function(){return{prevScrollpos:0,invertedColor:this.$colorMode.value}},computed:{invertedColorComputed:function(){return"dark"==this.$colorMode.value}},created:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var o=window.pageYOffset;this.$refs.top.style.bottom=o<100?"-5%":"10%",this.prevScrollpos=o},scrollToTop:function(){window.scrollTo(0,0)}}},n=(r(365),r(7)),component=Object(n.a)(e,(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{ref:"top",staticClass:"goto-top",class:{"inverted-color":o.invertedColorComputed},on:{click:o.scrollToTop}},[r("img",{attrs:{src:"/icons/toc.png",alt:"toc"}}),o._v(" "),r("img",{attrs:{src:"/icons/drawer.png",alt:"lib"}})])}),[],!1,null,"0077413a",null);t.default=component.exports}}]);