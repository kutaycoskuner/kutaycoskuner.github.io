(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{303:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6568decd",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n(303)},341:function(t,e,n){var o=n(9)((function(i){return i[1]}));o.push([t.i,"@media (min-width:1025px){.main[data-v-f2f2d838]{--pw:60%;margin:5% auto auto;overflow-x:hidden;width:60%;width:var(--pw)}.toc-container[data-v-f2f2d838]{left:calc(50% - var(--pw)*8/10/2 + var(--pw)*8/10 + var(--font-size)*2);line-height:1.4;position:fixed;top:25%}}@media (max-width:480px){table[data-v-f2f2d838]{display:block;overflow-x:auto;table-layout:fixed}td[data-v-f2f2d838]{word-wrap:break-word;overflow:hidden;text-overflow:ellipsis}}",""]),o.locals={},t.exports=o},387:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(43),n(69),'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" /> </svg>'),c={name:"dsh",layout:"default",head:function(){return{script:[]}},data:function(){return{activeArticle:"",copyButton:null,invertedColor:this.$colorMode.value}},created:function(){window.addEventListener("mouseover",this.addCopyButton),window.addEventListener("mouseout",this.removeCopyButton)},unmounted:function(){window.removeEventListener("mouseover",this.addCopyButton)},computed:{invertedColorComputed:function(){return"dark"==this.$colorMode.value}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en-de",{weekday:"short",year:"numeric",month:"short",day:"numeric"})},copyContent:function(){var t=this;if(this.copyButton){var content=this.copyButton.parentNode.getElementsByTagName("code")[0].textContent;navigator.clipboard.writeText(content).then((function(){return!0})).catch((function(t){console.log(t)})),this.copyButton.classList.add("copy-active"),this.copyButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>',this.isCopyActive=!this.isCopyActive,setTimeout((function(){t.copyButton.classList.remove("copy-active"),t.copyButton.innerHTML=r,t.isCopyActive=!t.isCopyActive}),1500)}else this.copyButton=null},addCopyButton:function(t){if(null!=t.target&&"PRE"==t.target.tagName){var e="copy-content",n=t.target;if(0==n.getElementsByClassName(e).length){var o=document.createElement("button");o.className=e,this.copyButton=o,o.onclick=this.copyContent,o.innerHTML=r,n.appendChild(o)}}},removeCopyButton:function(t){if("PRE"==t.target.tagName&&"BUTTON"!=t.relatedTarget.tagName&&"svg"!=t.relatedTarget.tagName&&"path"!=t.relatedTarget.tagName&&"CODE"!=t.relatedTarget.tagName){var e=t.target,n=e.lastElementChild;e.getElementsByClassName("copy-content").length>0&&e.removeChild(n)}},selectArticle:function(title){title!=this.activeArticle&&(this.activeArticle=title)},scrolltoArticle:function(title){if(title!=this.activeArticle){var element=this.$el.getElementsByClassName(title)[0];element&&element.scrollIntoView({behavior:"smooth"}),this.activeArticle=title}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blog/documentation/dsh").sortBy("title","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}},l=(n(340),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container not-mobile not-tablet"},[n("div",{staticClass:"main"},[t._l(t.articles,(function(article,e){return n("div",{key:article.slug,staticClass:"article"},[1==article.visibility?n("div",[n("article",{staticClass:"content",on:{mouseover:function(e){return t.selectArticle(article.title)}}},[n("div",{staticClass:"article-meta"},[n("h1",{class:article.title},[t._v(t._s(article.title))]),t._v(" "),n("span",[t._v("Updated at "+t._s(t.formatDate(article.updatedAt)))])]),t._v(" "),n("br"),t._v(" "),n("nuxt-content",{attrs:{document:article}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")]):t._e()])})),t._v(" "),n("div",{staticClass:"toc-container"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"toc"},[1==article.visibility?n("div",[n("div",{staticClass:"toc-title",on:{click:function(e){return t.scrolltoArticle(article.title)}}},[article.title==t.activeArticle?n("span",[n("b",[t._v(t._s(article.title))])]):n("span",{staticStyle:{color:"var(--col)"}},[t._v(t._s(article.title))])]),t._v(" "),t._l(article.toc,(function(link){return article.title==t.activeArticle?n("span",{key:link.id},[t._v("\n                          "),n("NuxtLink",{staticClass:"toc-content",attrs:{to:"#"+link.id}},[t._v(" "+t._s(link.text))]),t._v(" "),n("br")],1):t._e()})),t._v(" "),n("br")],2):t._e()])})),0)],2)])}),[],!1,null,"f2f2d838",null);e.default=component.exports}}]);