(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{315:function(t,e,o){var content=o(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("9f8b0d50",content,!0,{sourceMap:!1})},316:function(t,e,o){"use strict";o(315)},317:function(t,e,o){var n=o(25)((function(i){return i[1]}));n.push([t.i,"@media (max-width:480px){.color-mode{display:none}}@media (min-width:481px) and (max-width:1024px){.color-mode{display:none}}@media (min-width:1025px){.color-mode{position:fixed;top:calc(var(--font-size)*2.4);right:calc(var(--font-size)*1.6)}}.color-mode{width:calc(var(--font-size)*1.2);height:calc(var(--font-size)*1.2);margin-top:4px;z-index:20;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),n.locals={},t.exports=n},319:function(t,e,o){"use strict";o.r(e);var n={name:"ColorMode",data:function(){return{themeColors:["system","light","dark","sepia"]}},methods:{toggleColorMode:function(t){var e={light:"dark",dark:"light",sepia:"light"};this.$colorMode.preference=t in e?e[t]:this.$colorMode.value}}},r=(o(316),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color-mode"},["light"==t.$colorMode.value?o("div",{staticClass:"light-mode",on:{click:function(e){return t.toggleColorMode("light")}}},[o("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}})])]):t._e(),t._v(" "),"dark"==t.$colorMode.value?o("div",{staticClass:"dark-mode",on:{click:function(e){return t.toggleColorMode("dark")}}},[o("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}})])]):t._e(),t._v(" "),"sepia"==this.$colorMode.value?o("div",{staticClass:"sepia-mode",on:{click:function(e){return t.toggleColorMode("sepia")}}},[o("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"}})])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("8777d2ba",content,!0,{sourceMap:!1})},378:function(t,e,o){"use strict";o(339)},379:function(t,e,o){var n=o(25)((function(i){return i[1]}));n.push([t.i,".navigation-container[data-v-27d1c7eb]{color:var(--color);background:var(--bg);backdrop-filter:var(--main-blur)}.representation[data-v-27d1c7eb]{opacity:.96;text-decoration:none}.navigation-menu[data-v-27d1c7eb]{opacity:.96}.navigation-menu a[data-v-27d1c7eb]:hover{border-bottom:1px solid var(--color-border)}.navigation-menu a[data-v-27d1c7eb]:active{color:var(--color)}.personal-wrapper a[data-v-27d1c7eb]{cursor:pointer}.noselect[data-v-27d1c7eb]{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:480px){.navigation-container[data-v-27d1c7eb]{width:100%;height:var(--navigation-height);position:fixed;display:block;transition:top .2s;z-index:10}.representation-wrapper[data-v-27d1c7eb]{width:100%;position:relative;align-items:center;justify-content:center;text-align:center;text-transform:uppercase}#representation-1[data-v-27d1c7eb]{color:var(--color);font-size:1.5em;letter-spacing:.08em}#representation-2[data-v-27d1c7eb]{color:var(--color);opacity:.6;font-size:.9em;letter-spacing:.11em}.navigation-menu-wrapper[data-v-27d1c7eb]{width:100%;display:flex;align-items:center;justify-content:center;margin-left:.2em}.navigation-menu[data-v-27d1c7eb]{width:100%;display:grid;grid-template-rows:repeat(1,1fr);margin-top:.6em}.navigation-menu a[data-v-27d1c7eb]{color:var(--color);text-decoration:none;text-transform:uppercase;font-size:80%;font-weight:400;border-bottom:0 solid var(--color-border);transition:border-bottom .3s;margin:.4em}.works-wrapper[data-v-27d1c7eb]{width:100%;margin:auto;justify-content:center;text-align:center;text-transform:uppercase}.personal-wrapper[data-v-27d1c7eb],.works-wrapper[data-v-27d1c7eb]{position:relative;align-items:center}.personal-wrapper[data-v-27d1c7eb]{display:flex;justify-content:space-between;justify-content:center}}@media (min-width:481px) and (max-width:1024px){.navigation-container[data-v-27d1c7eb]{width:100%;height:var(--navigation-height);position:fixed;display:block;transition:top .2s;z-index:10}.navigation[data-v-27d1c7eb]{background:var(--bg);margin-left:1%;margin-right:1%}.representation-wrapper[data-v-27d1c7eb]{width:16%;min-height:var(--navigation-height);position:relative;float:left;display:flex;align-items:center;text-align:center;text-transform:uppercase}#representation-1[data-v-27d1c7eb]{color:var(--color);font-size:1.5em;letter-spacing:.08em}#representation-2[data-v-27d1c7eb]{color:var(--color);opacity:.6;font-size:.9em;letter-spacing:.11em}.navigation-menu-wrapper[data-v-27d1c7eb]{width:80%;min-height:var(--navigation-height);position:relative;float:right;display:flex;align-items:center;justify-content:center;margin-left:.2em}.navigation-menu[data-v-27d1c7eb]{width:100%;padding-top:1.2%;padding-left:18%}.navigation-menu a[data-v-27d1c7eb]{color:var(--color);text-decoration:none;text-transform:uppercase;font-size:80%;font-weight:400;border-bottom:0 solid var(--color-border);transition:border-bottom .3s;margin:.4em}.works-wrapper[data-v-27d1c7eb]{float:left}.personal-wrapper[data-v-27d1c7eb],.works-wrapper[data-v-27d1c7eb]{display:flex;justify-content:space-between}.personal-wrapper[data-v-27d1c7eb]{float:right}}@media (min-width:1025px){.navigation-container[data-v-27d1c7eb]{width:100%;height:var(--navigation-height);margin:auto;position:fixed;display:block;transition:top .2s;z-index:10}.navigation[data-v-27d1c7eb]{background:var(--bg);margin-left:22%;margin-right:22%}.representation-wrapper[data-v-27d1c7eb]{width:20%;min-height:var(--navigation-height);position:relative;float:left;display:flex;align-items:center;text-align:center;text-transform:uppercase}#representation-1[data-v-27d1c7eb]{color:var(--color);font-size:1.5em;letter-spacing:.08em}#representation-2[data-v-27d1c7eb]{color:var(--color);opacity:.6;font-size:.9em;letter-spacing:.11em}.navigation-menu-wrapper[data-v-27d1c7eb]{width:80%;min-height:var(--navigation-height);position:relative;float:right;display:flex;align-items:center;justify-content:center}.navigation-menu[data-v-27d1c7eb]{width:100%;padding-top:1.2%;padding-left:18%}.navigation-menu a[data-v-27d1c7eb]{color:var(--color);text-decoration:none;text-transform:uppercase;font-size:80%;font-weight:400;border-bottom:0 solid var(--color-border);transition:border-bottom .3s;margin:.4em}.works-wrapper[data-v-27d1c7eb]{width:60%;float:left;margin-right:.2em}.personal-wrapper[data-v-27d1c7eb],.works-wrapper[data-v-27d1c7eb]{display:flex;justify-content:space-between}.personal-wrapper[data-v-27d1c7eb]{width:20%;float:right;margin-left:.2em}}",""]),n.locals={},t.exports=n},407:function(t,e,o){"use strict";o.r(e);var n={name:"Navigation",data:function(){return{prevScrollpos:0}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)},methods:{openResume:function(){window.open("../assets/pdf/kutay-coskuner_resume.pdf")},handleScroll:function(){var t=window.pageYOffset;this.$refs.navigation.style.top=0==t?"0px":"-120px",this.prevScrollpos=t},handleMouseMove:function(t){t.clientY<120?this.$refs.navigation.style.top="0px":0!=window.pageYOffset&&(this.$refs.navigation.style.top="-120px")},scrollToTop:function(){window.scrollTo(0,0)}}},r=(o(378),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"navigation",staticClass:"navigation-container"},[o("div",{staticClass:"navigation noselect"},[o("div",{staticClass:"representation-wrapper"},[o("nuxt-link",{staticClass:"representation",attrs:{to:"/"}},[o("div",{attrs:{id:"representation-1"}},[t._v("Portfolio")]),t._v(" "),o("div",{attrs:{id:"representation-2"}},[t._v("Kutay Coşkuner")])])],1),t._v(" "),o("div",{staticClass:"navigation-menu-wrapper"},[o("div",{staticClass:"navigation-menu"},[o("div",{staticClass:"works-wrapper"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Architecture")]),t._v(" "),o("nuxt-link",{attrs:{to:"/visualization"}},[t._v("Visualization")]),t._v(" "),o("nuxt-link",{attrs:{to:"/other"}},[t._v("Other")]),t._v(" "),o("a",{staticClass:"null-link",attrs:{href:"#"}},[t._v("Blog")])],1),t._v(" "),o("div",{staticClass:"personal-wrapper"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),o("nuxt-link",{attrs:{to:"/resume"}},[t._v("Résumé")]),t._v(" "),o("ColorMode")],1)])])])])}),[],!1,null,"27d1c7eb",null);e.default=component.exports;installComponents(component,{ColorMode:o(319).default})}}]);