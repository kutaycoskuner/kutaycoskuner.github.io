(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{300:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("faa78216",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r(300)},334:function(t,e,r){var o=r(14)((function(i){return i[1]}));o.push([t.i,"@media (min-width:1025px){.arch-index[data-v-b1735e66]{align-items:center;display:flex;height:90%;justify-content:center;margin:auto;width:100%}.template-image-grid[data-v-b1735e66]{height:50%!important;margin:auto;width:100%!important}.architecture-project-name[data-v-b1735e66]{bottom:1em;color:var(--color);font-size:1.4em;font-weight:300;letter-spacing:.1em;opacity:.2;position:absolute;right:1em;text-shadow:0 0 40px #000;text-transform:lowercase}}@media (max-width:480px){.arch-index[data-v-b1735e66]{align-items:center;display:flex;height:100%;justify-content:center;margin:auto;width:100%}.architecture-project-name[data-v-b1735e66]{color:var(--color);display:inline-block;font-size:1.2em;font-weight:300;letter-spacing:.1em;opacity:0;position:absolute;right:0;text-shadow:0 0 40px #000;text-transform:lowercase;top:10em;transform:rotate(-90deg);white-space:nowrap}}@media (min-width:481px) and (max-width:1024px){.arch-index[data-v-b1735e66]{align-items:center;display:flex;height:100%;justify-content:center;margin:auto;width:100%}.architecture-project-name[data-v-b1735e66]{bottom:.5em;color:var(--color);float:right;font-size:1.2em;font-weight:300;letter-spacing:.1em;opacity:.2;position:absolute;right:.5em;text-shadow:0 0 40px #000;text-transform:lowercase}}.template-image-grid[data-v-b1735e66]{height:100%;width:100%}.image-grid-item-dynamic span[data-v-b1735e66]{bottom:.5em;color:var(--color);font-size:1.1em;font-weight:100;letter-spacing:.1em;opacity:0;position:absolute;right:.5em;text-shadow:1px 1px 2px #000;text-transform:lowercase}.image-grid-container-static-5c[data-v-b1735e66]{background-color:var(--bg);display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(1,1fr);height:100%;overflow:hidden!important;padding:0}.image-grid-item-static[data-v-b1735e66]{background-color:var(--bg);display:flex;filter:grayscale(86%);height:100%;position:relative}.image-grid-item-static[data-v-b1735e66]:hover{cursor:pointer;filter:none;transition:filter .3s}.image-grid-item-static img[data-v-b1735e66]{max-width:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;opacity:.6}.image-grid-item-static:hover img[data-v-b1735e66]{opacity:.9;transition:opacity .6s}.image-grid-item-static:hover .architecture-project-name[data-v-b1735e66]{font-weight:400;opacity:.8;text-shadow:2px 2px 1px var(--bg);transition:opacity 1s,border-bottom .3s}.image-grid-container-dynamic-4c[data-v-b1735e66]{grid-gap:5px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(auto-fit,1fr);margin-left:10%;margin-right:10%;margin-top:8%}.image-grid-container-dynamic-3c div[data-v-b1735e66]{aspect-ratio:1}.image-grid-item-dynamic[data-v-b1735e66]{display:flex;height:100%;position:relative}.image-grid-item-dynamic[data-v-b1735e66]:hover{background-color:var(--bg);cursor:pointer;filter:none;transition:filter .3s}.image-grid-item-dynamic img[data-v-b1735e66]{aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover;opacity:.9;width:100%}.image-grid-item-dynamic:hover img[data-v-b1735e66]{opacity:1;transition:opacity .6s}.image-grid-item-dynamic:hover span[data-v-b1735e66]{opacity:.9;text-shadow:1px 1px 2px #000;transition:opacity .6s}.grid-horizontal[data-v-b1735e66]{grid-column:span 2}.grid-focal[data-v-b1735e66],.grid-vertical[data-v-b1735e66]{grid-row:span 2}.grid-focal[data-v-b1735e66]{grid-column:span 2}",""]),o.locals={},t.exports=o},372:function(t,e,r){"use strict";r.r(e);var o=r(129),n=r(132),c=r(131),d=r(130),m={layout:"default",data:function(){return{test:1,arch_luthier:o.data,arch_toy:n.data,arch_fw:c.data,arch_archipelago:d.data}},methods:{renderPage:function(content){this.$store.commit("update_imgIndex",-1),this.$store.commit("update_imgCat",content)}}},l=(r(333),r(8)),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arch-index"},[r("div",{staticClass:"template-image-grid"},[r("div",{staticClass:"image-grid-container-static-5c"},[r("div",{staticClass:"image-grid-item-static"},[r("nuxt-link",{attrs:{to:"/arch/luthier_house"},on:{click:function(e){return t.renderPage("luthierhouse")}}},[r("img",{attrs:{src:t.arch_luthier.banner.content}}),t._v(" "),r("span",{staticClass:"architecture-project-name"},[t._v("Luthier House")])])],1),t._v(" "),r("div",{staticClass:"image-grid-item-static"},[r("nuxt-link",{attrs:{to:"/arch/toy_museum"},on:{click:function(e){return t.renderPage("toymuseum")}}},[r("img",{attrs:{src:t.arch_toy.banner.content}}),t._v(" "),r("span",{staticClass:"architecture-project-name"},[t._v("Toy Museum")])])],1),t._v(" "),r("div",{staticClass:"image-grid-item-static"},[r("nuxt-link",{attrs:{to:"arch/archipelago"},on:{click:function(e){return t.renderPage("archipelago")}}},[r("img",{attrs:{src:t.arch_archipelago.narrative[31].content}}),t._v(" "),r("span",{staticClass:"architecture-project-name"},[t._v("Archipelago")])])],1),t._v(" "),r("div",{staticClass:"image-grid-item-static"},[r("nuxt-link",{attrs:{to:"/arch/farnsworth_house"},on:{click:function(e){return t.renderPage("farnsworthhouse")}}},[r("img",{attrs:{src:t.arch_fw.narrative[3].content}}),t._v(" "),r("span",{staticClass:"architecture-project-name"},[t._v("Farnsworth House")])])],1)])])])}),[],!1,null,"b1735e66",null);e.default=component.exports}}]);