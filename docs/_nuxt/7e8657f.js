(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6],{286:function(t,e,o){var content=o(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("718f7cf0",content,!0,{sourceMap:!1})},289:function(t,e,o){"use strict";o(286)},290:function(t,e,o){var n=o(9)((function(i){return i[1]}));n.push([t.i,".copy-content[data-v-7e2f2587]{align-items:center;background:none;border:none;cursor:pointer;display:flex;justify-content:center;opacity:.7;padding:5px;position:absolute;right:10px;top:10px;transition:opacity .3s ease}.copy-content[data-v-7e2f2587]:hover{opacity:1}.copy-content.copy-active[data-v-7e2f2587]{color:green}.copy-content svg[data-v-7e2f2587]{height:24px;width:24px}",""]),n.locals={},t.exports=n},291:function(t,e,o){"use strict";o.r(e);o(69);var n={props:{content:{type:String,required:!0}},data:function(){return{isCopyActive:!1,isHovered:!1,iconCopyActive:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>',iconCopyPassive:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" /> </svg>'}},methods:{copyContent:function(){var t=this;navigator.clipboard.writeText(this.content).then((function(){t.isCopyActive=!0,setTimeout((function(){t.isCopyActive=!1}),1500)})).catch((function(t){return console.error("Failed to copy content:",t)}))}}},r=(o(289),o(7)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"copy-content",class:{"copy-active":t.isCopyActive},on:{click:t.copyContent,mouseover:function(e){t.isHovered=!0},mouseleave:function(e){t.isHovered=!1}}},[o("span",{domProps:{innerHTML:t._s(t.isCopyActive?t.iconCopyActive:t.iconCopyPassive)}})])}),[],!1,null,"7e2f2587",null);e.default=component.exports},300:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("453bedeb",content,!0,{sourceMap:!1})},330:function(t){t.exports=JSON.parse('{"data":[{"name":"Blog","to":"","items":[{"name":"Documentation","to":"","items":[{"name":"German Course Notes","to":"/blog/deutsch"}]},{"name":"Essays","to":"","items":[{"name":"The Void of Fictionalized Perception","to":"","items":[]},{"name":"Alteration on  Roles of  the Architect","to":"","items":[]}]},{"name":"Notes","to":"","items":[]},{"name":"Standards","to":"","items":[{"name":"Citation Guide","to":"/blog/standards/"},{"name":"Naming Conventions","to":"/blog/standards/"}]}]},{"name":"Library","to":"","items":[{"name":"Articles","to":"","items":[{"name":"Life and Creativity of Great Bethesda Artist","to":"","items":[]},{"name":"Pokemon","to":"","items":[]},{"name":"Iskandinav Ulkelerindeki Insanlar Neden Mutlu","to":"","items":[]},{"name":"Orta Ust Sinifin Kapagi Baska Ulkeye Atma Istegi","to":"","items":[]},{"name":"Zenginligin Yeni Sembolu: Gosterisci Uretim","to":"","items":[]},{"name":"Calismak abartilmis bir erdemdir","to":"","items":[]},{"name":"Kotuler Sofistikedir iyiler vasat","to":"","items":[]},{"name":"2021-2020 Turkiye ekonomisi","to":"","items":[]}]},{"name":"Links","to":"","items":[{"name":"Useful Links","to":""},{"name":"Tutorials","to":""},{"name":"Interesting Projects","to":""},{"name":"Personal Websites","to":""}]}]},{"name":"Archive","to":"","items":[{"name":"Game Design Portfolio","to":"game_design","items":[]},{"name":"Resume","to":"resume","items":[]}]}]}')},331:function(t,e,o){"use strict";o(300)},332:function(t,e,o){var n=o(9)((function(i){return i[1]}));n.push([t.i,".content-tree[data-v-0f7ed17e]{border-right:1px solid var(--col-transparent2);padding:4px;position:fixed;right:calc(50% - var(--page-width)*8/10/2 + var(--page-width)*8/10 + var(--font-size)*4);top:1em;width:300px}hr[data-v-0f7ed17e]{opacity:.2}a[data-v-0f7ed17e]{color:inherit;-webkit-text-decoration:none;text-decoration:none;text-transform:lowercase}a[data-v-0f7ed17e]:hover{color:var(--col-link)}.l3[data-v-0f7ed17e]{margin-left:5px}",""]),n.locals={},t.exports=n},387:function(t,e,o){"use strict";o.r(e);var n=o(330),r=(o(291),{name:"AccessLibrary",layout:"default",data:function(){return{tree:n.data}}}),c=(o(331),o(7)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-tree"},[o("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"}})]),t._v(" "),o("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"}})]),t._v(" "),t._l(t.tree,(function(e,n){return o("div",[o("span",{staticClass:"level-1"},[o("strong",[t._v(t._s(e.name))])]),t._v(" "),t._l(e.items,(function(e,n){return o("div",[""==e.to?o("span",{staticClass:"level-2"},[t._v(" "+t._s(e.name))]):t._e(),t._v(" "),""!=e.to?o("router-link",{staticClass:"level-2",attrs:{to:e.to}},[t._v(t._s(e.name))]):t._e(),t._v(" "),t._l(e.items,(function(article,e){return o("div",{staticClass:"l3"},[o("router-link",{staticClass:"level-3",attrs:{to:article.to}},[t._v(t._s(article.name))])],1)}))],2)})),t._v(" "),o("hr")],2)}))],2)}),[],!1,null,"0f7ed17e",null);e.default=component.exports}}]);