(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{318:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4836ce31",content,!0,{sourceMap:!1})},364:function(t,e,n){t.exports=n.p+"img/line_paper_plane.9058560.png"},365:function(t,e,n){"use strict";n(318)},366:function(t,e,n){var o=n(9)((function(i){return i[1]}));o.push([t.i,'@media (max-width:480px){.navigation-general-wrapper[data-v-47171a73]{margin:auto;width:var(--page-width-mobile)}.representation-wrapper[data-v-47171a73]{min-height:var(--navigation-height-mobile);text-align:center;text-transform:uppercase;width:100%}.navigation-menu-wrapper[data-v-47171a73]{align-items:center;min-height:var(--navigation-height-mobile)}.navigation-menu[data-v-47171a73],.navigation-menu-wrapper[data-v-47171a73]{display:flex;justify-content:center;width:100%}.navigation-menu[data-v-47171a73]{padding-top:2%}.navigation-menu *[data-v-47171a73]{border-bottom:0 solid var(--color-border);color:var(--color);font-size:80%;font-weight:400;margin:auto;opacity:.8;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase}}@media (min-width:481px) and (max-width:1024px){.navigation-general-wrapper[data-v-47171a73]{margin:auto;width:var(--page-width-mobile)}.representation-wrapper[data-v-47171a73]{float:left;text-align:center;text-transform:uppercase}.navigation-menu-wrapper[data-v-47171a73],.representation-wrapper[data-v-47171a73]{align-items:center;display:flex;min-height:var(--navigation-height-tablet);position:relative}.navigation-menu-wrapper[data-v-47171a73]{float:right;justify-content:center}.navigation-menu[data-v-47171a73]{display:flex;justify-content:right;padding-top:2%;width:100%}.navigation-menu *[data-v-47171a73]{border-bottom:0 solid var(--color-border);color:var(--color);font-size:80%;font-weight:400;margin:0 0 0 3em;opacity:.8;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase}}@media (min-width:1025px){.navigation-general-wrapper[data-v-47171a73]{margin:auto;width:var(--page-width)}.representation-wrapper[data-v-47171a73]{float:left;text-align:center;text-transform:uppercase}.navigation-menu-wrapper[data-v-47171a73],.representation-wrapper[data-v-47171a73]{align-items:center;display:flex;min-height:var(--navigation-height);position:relative}.navigation-menu-wrapper[data-v-47171a73]{float:right;justify-content:center}.navigation-menu[data-v-47171a73]{display:flex;justify-content:right;padding-top:2%;width:100%}.navigation-menu *[data-v-47171a73]{border-bottom:0 solid var(--color-border);color:var(--color);font-size:80%;font-weight:400;margin:0 0 0 2.5em;opacity:.8;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase}}.representation-wrapper[data-v-47171a73]{font-family:"Gotham",sans-serif!important}#representation-1[data-v-47171a73]{color:var(--color);font-size:1.5em;letter-spacing:.08em}#representation-2[data-v-47171a73]{color:var(--color);font-size:.9em;letter-spacing:.11em;opacity:.6}.navigation-container[data-v-47171a73]{-webkit-backdrop-filter:var(--main-blur);backdrop-filter:var(--main-blur);background:var(--bg-transparent);color:var(--color);display:block;line-height:1.2;margin:auto;max-width:var(--page-width-max)!important;position:fixed;transition:top .2s;width:100%;z-index:10}.representation a[data-v-47171a73]{color:var(--color);font-size:150%;letter-spacing:.1em;opacity:.8;-webkit-text-decoration:none;text-decoration:none}.representation a[data-v-47171a73]:hover{cursor:pointer;opacity:.9;transition:opacity,.3s}.representation-mid-wrapper[data-v-47171a73]{align-items:center;display:flex;justify-content:center;width:40%}.representation-mid-wrapper img[data-v-47171a73]{display:block;margin:auto;width:30%}.navigation-menu a[data-v-47171a73]:hover{border-bottom:1px solid var(--color-border);transition:border-bottom .3s}.navigation-menu a[data-v-47171a73]:active{color:var(--color-primary)}.navigation-icons[data-v-47171a73]{grid-column-gap:calc(var(--font-size)*2);bottom:calc(var(--font-size)*-.2);display:grid;grid-template-columns:repeat(2,1fr);position:relative}.navigation-icons *[data-v-47171a73]{height:100%;margin:0;padding:0;width:120%}.navigation-icons a[data-v-47171a73]:hover{border-bottom:0 solid var(--bg)}.navigation-icons[data-v-47171a73] :hover{filter:drop-shadow(0 0 .4em var(--icon-glow))}.navigation-icons img[data-v-47171a73]{filter:grayscale(1);height:calc(var(--font-size)*2);-o-object-fit:contain;object-fit:contain;width:calc(var(--font-size)*2)}.noselect[data-v-47171a73]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}',""]),o.locals={},t.exports=o},409:function(t,e,n){"use strict";n.r(e);var o={name:"navigation02",data:function(){return{prevScrollpos:0}},computed:{invertedColorComputed:function(){return"dark"==this.$colorMode.value}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)},methods:{openResume:function(){window.open("../assets/pdf/kutay-coskuner_resume.pdf")},handleScroll:function(){var t=window.pageYOffset;this.$refs.navigation.style.top=0==t?"0px":"calc(-2 * var(--navigation-height))",this.prevScrollpos=t},handleMouseMove:function(t){t.clientY<120?this.$refs.navigation.style.top="0px":0!=window.pageYOffset&&(this.$refs.navigation.style.top="calc(-2 * var(--navigation-height))")},scrollToTop:function(){window.scrollTo(0,0)}}},r=(n(365),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"navigation",staticClass:"navigation-container"},[o("div",{staticClass:"navigation-general-wrapper"},[t._m(0),t._v(" "),o("div",{staticClass:"navigation-menu-wrapper"},[o("div",{staticClass:"navigation-menu"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Architecture")]),t._v(" "),o("nuxt-link",{attrs:{to:"/visualization"}},[t._v("Visualization")]),t._v(" "),o("nuxt-link",{attrs:{to:"/other"}},[t._v("Other")]),t._v(" "),o("div",{staticClass:"navigation-icons"},[o("nuxt-link",{class:{"inverted-color":t.invertedColorComputed},attrs:{to:"/about"}},[o("img",{attrs:{src:n(364),alt:"dsc"}})]),t._v(" "),o("colormode")],1)],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"representation-wrapper"},[n("div",{staticClass:"representation"},[n("div",{attrs:{id:"representation-1"}},[t._v("Portfolio")]),t._v(" "),n("div",{attrs:{id:"representation-2"}},[t._v("Kutay Coşkuner")])])])}],!1,null,"47171a73",null);e.default=component.exports}}]);