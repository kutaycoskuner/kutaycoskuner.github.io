(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{315:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("ec0aa9ee",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n(315)},363:function(t,e,n){var o=n(9)((function(i){return i[1]}));o.push([t.i,".nuxt-content table tr td[data-v-a9ebf1ee]:first-child{white-space:nowrap}",""]),o.locals={},t.exports=o},412:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(43),n(11),n(24),n(25),n(200),n(201),n(69),n(57),n(44),n(129),'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" /> </svg>'),c={layout:"default",data:function(){return{activeArticle:"",copyButton:null,invertedColor:this.$colorMode.value}},created:function(){window.addEventListener("mouseover",this.addCopyButton),window.addEventListener("mouseout",this.removeCopyButton)},mounted:function(){},unmounted:function(){window.removeEventListener("mouseover",this.addCopyButton)},computed:{invertedColorComputed:function(){return"dark"==this.$colorMode.value}},methods:{addTitlesToCodeBlocks:function(){document.querySelectorAll(".nuxt-content-highlight pre").forEach((function(t){var e=t.querySelector("code");if(e){var n=e.textContent.match(/\/\/\s*#\s*(.*)/);if(n){var title=n[1].trim();t.setAttribute("data-title",title);var o=document.createElement("div");o.classList.add("code-title");var r=document.createElement("span");r.classList.add("title-text"),r.textContent=title,o.appendChild(r),t.parentElement.insertBefore(o,t)}}}))},formatDate:function(t){return new Date(t).toLocaleDateString("en-de",{weekday:"short",year:"numeric",month:"short",day:"numeric"})},copyContent:function(){var t=this;if(this.copyButton){var content=this.copyButton.parentNode.getElementsByTagName("code")[0].textContent;navigator.clipboard.writeText(content).then((function(){return!0})).catch((function(t){console.log(t)})),this.copyButton.classList.add("copy-active"),this.copyButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#008080" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>',this.isCopyActive=!this.isCopyActive,setTimeout((function(){t.copyButton.classList.remove("copy-active"),t.copyButton.innerHTML=r,t.isCopyActive=!t.isCopyActive}),3e3)}else this.copyButton=null},addCopyButton:function(t){if(null!=t.target){if(!t.target.tagName)return;if("PRE"==t.target.tagName){var e="copy-content",n=t.target;if(0==n.getElementsByClassName(e).length){var o=document.createElement("button");o.className=e,this.copyButton=o,o.onclick=this.copyContent,o.innerHTML=r,n.appendChild(o)}}}},removeCopyButton:function(t){var e,n;if(null!=t&&null!==(e=t.target)&&void 0!==e&&e.tagName&&"PRE"===t.target.tagName){var o=null===(n=t.relatedTarget)||void 0===n?void 0:n.tagName;if(!o||!["BUTTON","svg","path","CODE"].includes(o)){var r=t.target,c=r.lastElementChild;r.getElementsByClassName("copy-content").length>0&&r.removeChild(c)}}},selectArticle:function(title){title!=this.activeArticle&&(this.activeArticle=title)},scrolltoArticle:function(title){if(title!=this.activeArticle){var element=this.$el.getElementsByClassName(title)[0];element&&element.scrollIntoView({behavior:"smooth"}),this.activeArticle=title}},getLanguage:function(t){return{en:"English",tr:"Turkish",es:"Spanish",fr:"French",de:"German",it:"Italian",pt:"Portuguese",ru:"Russian",zh:"Chinese"}[t]||""},formatSlug:function(t){var e=t.toLowerCase(),n=(e=e.replace(/\s+/g,"-")).search(/[[\]]/);return-1!==n&&(e=e.substring(0,n)),e=e.replace(/-+$/,"")}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blog/notes/cpp").sortBy("sort_order","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}},l=(n(362),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-design-container"},[n("div",{staticClass:"main"},[t._l(t.articles,(function(article,e){return n("div",{key:article.slug,staticClass:"article"},[article.visibility?n("div",[n("article",{staticClass:"content",attrs:{id:t.formatSlug(article.title)},on:{mouseover:function(e){return t.selectArticle(article.title)}}},[n("div",{staticClass:"article-meta"},[n("h1",{class:article.title},[t._v(t._s(article.title))]),t._v(" "),n("span",[t._v("Published : "+t._s(t.formatDate(article.created))+" ")]),t._v(" "),n("span",[t._v("Revision : "+t._s(t.formatDate(article.updated))+", v"+t._s(article.revision))]),n("span",[t._v("Language : "+t._s(t.getLanguage(article.language)))])]),t._v(" "),n("br"),t._v(" "),n("nuxt-content",{attrs:{document:article}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")]):t._e()])})),t._v(" "),n("div",{staticClass:"toc-container no-select"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"toc"},[article.visibility?n("div",[n("div",{staticClass:"toc-title",on:{click:function(e){return t.scrolltoArticle(article.title)}}},[article.title==t.activeArticle?n("span",[n("b",[t._v(t._s(article.title))])]):n("span",{staticStyle:{color:"var(--col)"}},[t._v(t._s(article.title))])]),t._v(" "),t._l(article.toc,(function(link){return article.title==t.activeArticle?n("span",{key:link.id},[t._v("\n             \n            "),n("NuxtLink",{staticClass:"toc-content",attrs:{to:"#"+link.id}},[t._v("\n              "+t._s(link.text))]),t._v(" "),n("br")],1):t._e()})),t._v(" "),n("br")],2):t._e()])})),0)],2)])}),[],!1,null,"a9ebf1ee",null);e.default=component.exports}}]);