(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(e,t,o){"use strict";o.r(t);var r={name:"BlackboardShortcuts",data:function(){return{isMobile:!1,isTablet:!1}},mounted:function(){this.setScreenSize()},beforeDestroy:function(){},computed:{randomMode:function(){return this.$store.state.blackboard.randomMode},displayRandomKey:function(){return this.$store.state.blackboard.displayRandomKey},minefieldMode:function(){return this.$store.state.blackboard.minefieldMode},displayMinefieldKey:function(){return this.$store.state.blackboard.displayMinefieldKey},areAnswersShown:function(){return this.$store.state.blackboard.areAnswersShown}},watch:{"this.$store.state.settingsMenu":function(){},"this.$store.state.blackboard":function(){}},methods:{setScreenSize:function(){this.screenWidth=window.innerWidth,this.isMobile=window.innerWidth<481,this.isMobile||(this.isTablet=window.innerWidth<1025)},toggleOverlay:function(){var e=!this.$store.state.settingsMenu.isOverlayVisible,t=this.$store.state.settingsMenu.settingsName,o=this.$store.state.settingsMenu.settingsSelection;this.$store.commit("update_settingsMenu",{isOverlayVisible:e,settingsName:t,settingsSelection:o})},toggleRandomMode:function(){this.$emit("e_toggleRandomMode")},toggleMinefieldMode:function(){this.$emit("e_toggleMinefieldMode")},showCorrectAnswers:function(){this.$emit("e_showCorrectAnswers")},checkAnswers:function(){this.$emit("e_checkAnswers")},nextQuestion:function(){this.$emit("e_nextQuestion")},prevQuestion:function(){this.$emit("e_prevQuestion")}}},n=(o(315),o(7)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"keyboard-shortcuts"},[o("div",{class:{"keyboard-key-block":e.displayMinefieldKey,"keyboard-key-block-active":e.minefieldMode&&(e.isMobile||e.isTablet)}},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.toggleMinefieldMode()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("M")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{attrs:{lass:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("minefield mode : "),o("strong",[e._v(e._s(e.minefieldMode))])])]),e._v(" "),o("div",{class:{"keyboard-key-block":e.displayRandomKey,"keyboard-key-block-active":e.randomMode&&(e.isMobile||e.isTablet)}},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.toggleRandomMode()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("R")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("random mode : "),o("strong",[e._v(e._s(e.randomMode))])])]),e._v(" "),o("div",{staticClass:"keyboard-key-block"},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.showCorrectAnswers()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("T")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e.areAnswersShown?e._e():o("span",[e._v("show answers")]),e._v(" "),e.areAnswersShown?o("span",[e._v("hide answers")]):e._e()])]),e._v(" "),o("div",{staticClass:"keyboard-key-block"},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.checkAnswers()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("Enter")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("Check answers")])]),e._v(" "),o("div",{staticClass:"keyboard-key-block"},[o("div",{staticClass:"keyboard-key reverse",on:{click:function(t){return e.prevQuestion()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("➜")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 5 7 7-7 7"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("Prev")])]),e._v(" "),o("div",{staticClass:"keyboard-key-block"},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.nextQuestion()}}},[e.isMobile||e.isTablet?e._e():o("span",[e._v("➜")]),e._v(" "),e.isMobile||e.isTablet?o("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[o("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 5 7 7-7 7"}})]):e._e()]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("next")])]),e._v(" "),e.isMobile||e.isTablet?e._e():o("div",{staticClass:"keyboard-key-block"},[o("div",{staticClass:"keyboard-key",on:{click:function(t){return e.toggleOverlay()}}},[e._v("ESC")]),e._v(" "),o("div",{staticClass:"keyboard-key-desc"},[e._v("settings")])])])}),[],!1,null,"05d3674f",null);t.default=component.exports},310:function(e,t,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(10).default)("15daca34",content,!0,{sourceMap:!1})},315:function(e,t,o){"use strict";o(310)},316:function(e,t,o){var r=o(9)((function(i){return i[1]}));r.push([e.i,'.overlay[data-v-05d3674f]{align-items:center;background-color:hsla(0,0%,88%,.8);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%}.overlay-content input[type=file][data-v-05d3674f]{display:none}.overlay-submenu hr[data-v-05d3674f]{opacity:.2;width:50%}.italic-bold[data-v-05d3674f]{font-style:italic;font-weight:700}.answers[data-v-05d3674f]{display:flex;flex-wrap:wrap;grid-template-columns:repeat(auto-fill,1fr);grid-template-rows:auto;margin-bottom:.5em;margin-top:.5em;overflow-x:clip}.answer[data-v-05d3674f]{word-wrap:break-word;border:1px dashed #aaa;border-radius:var(--border-radius);font-size:.8em;margin-right:1em;padding:.2em 1em;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.answer[data-v-05d3674f]:hover{background:var(--bg-alter);cursor:pointer;font-weight:700}.answer-title[data-v-05d3674f]{color:var(--color-primary);font-style:italic}.answer-selected[data-v-05d3674f]{background:rgba(6,180,186,.1);border:1px dashed var(--color-primary);border-radius:var(--border-radius);color:var(--color-primary)}.answer-selected[data-v-05d3674f],.answer-true[data-v-05d3674f]{padding-left:.5em;padding-right:.5em}.answer-true[data-v-05d3674f]{background:rgba(100,255,100,.1);border:1px dashed green;border-radius:var(--border-radius);color:green}.answer-false[data-v-05d3674f]{background:hsla(0,100%,70%,.1);border:1px dashed red;border-radius:var(--border-radius);color:red;padding-left:.5em;padding-right:.5em}.no-wrap[data-v-05d3674f]{white-space:nowrap}.reverse[data-v-05d3674f]{transform:scaleX(-1)}.tag[data-v-05d3674f]:after{content:".";margin-right:1em}.draggable-disabled[data-v-05d3674f]{color:gray;opacity:.6}.dropslot-occupied[data-v-05d3674f]{border-bottom:1px dashed #aaa;color:gray;cursor:pointer;text-transform:lowercase}.dropslot[data-v-05d3674f]{border:1px dashed #aaa;display:inline;margin:0 1px;padding-left:1em;padding-right:1em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.keyboard-key-block-active[data-v-05d3674f]{align-items:center;background:hsla(0,0%,95%,.8);border-radius:2px;box-shadow:0 4px 4px 2px rgba(0,0,0,.2);display:flex;height:1.6em;justify-content:center;vertical-align:middle;width:1.6em}.keyboard-key-block-active svg[data-v-05d3674f]{display:block;margin:0;padding:0}@media (max-width:480px){.canvas[data-v-05d3674f]{padding:.3em}#box1[data-v-05d3674f]{font-size:.8em;margin-top:2em}#box1[data-v-05d3674f]:after{border-top:1px solid var(--color-separator);content:"";display:block;margin-bottom:10px;margin-top:10px}h2[data-v-05d3674f]{font-size:1.2em}p[data-v-05d3674f]{padding-bottom:1em;padding-top:1em}#box2[data-v-05d3674f]{font-size:.8em}.draggable[data-v-05d3674f]{margin-bottom:1em}.answer[data-v-05d3674f],.draggable[data-v-05d3674f]{border:1px dashed #aaa}.answer[data-v-05d3674f]{margin-top:1em;padding:.2em}#box2[data-v-05d3674f]:last-child{margin-bottom:10em}.overlay-close[data-v-05d3674f]{display:none}.overlay-content[data-v-05d3674f]{align-items:stretch;display:grid;grid-template-columns:repeat(1,1fr);min-width:100%;padding:1em}.overlay-menu[data-v-05d3674f]{background:var(--bg);bottom:0;display:flex;flex-direction:column;height:6%;justify-content:center;left:0;position:fixed;width:100%}.overlay-menu ul[data-v-05d3674f]{display:grid;grid-template-columns:repeat(3,1fr);list-style-type:none;margin:3em;padding:0}.overlay-content .overlay-menu ul li[data-v-05d3674f]{font-size:.8em;padding:.8em;text-align:left;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-menu ul li span[data-v-05d3674f]{display:none}.overlay-menu ul li svg[data-v-05d3674f]{display:block;margin:auto}.overlay-submenu[data-v-05d3674f]{background:var(--bg);display:flex;flex-direction:column;height:94%;justify-content:center;left:0;position:fixed;text-align:center;top:0;width:100%}.overlay-submenu ul[data-v-05d3674f]{list-style-type:none;padding:0}.overlay-submenu ul li[data-v-05d3674f]{font-size:.8em;padding:.8em;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-submenu a[data-v-05d3674f]{color:inherit;text-align:center;-webkit-text-decoration:none;text-decoration:none}.overlay-content label[data-v-05d3674f],.overlay-submenu a[data-v-05d3674f]{cursor:pointer;display:inline-block;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content label[data-v-05d3674f]{border:1px dashed var(--color-border);font-size:.8em;font-style:italic;padding:1em 2em;text-transform:uppercase}.keyboard-shortcuts[data-v-05d3674f]{grid-gap:4px;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:1;position:fixed;right:1em;top:0}.keyboard-key-block[data-v-05d3674f]{align-items:center;background:hsla(0,0%,95%,.4);border-radius:2px;box-shadow:0 4px 4px 2px rgba(0,0,0,.2);display:flex;height:1.6em;justify-content:center;vertical-align:middle;width:1.6em}.keyboard-key-block svg[data-v-05d3674f]{display:block;margin:0;opacity:.6;padding:0}.keyboard-key[data-v-05d3674f]{padding:.2em}.keyboard-key-desc[data-v-05d3674f]{display:none}}@media (min-width:481px) and (max-width:1024px){.canvas[data-v-05d3674f]{box-shadow:0 4px 4px 2px rgba(0,0,0,.2);margin-left:6%;padding:.3em}#box1[data-v-05d3674f]{font-size:.8em}#box1[data-v-05d3674f]:after{border-top:1px solid var(--color-separator);content:"";display:block;margin-bottom:10px;margin-top:10px}h2[data-v-05d3674f]{font-size:1.2em}p[data-v-05d3674f]{padding-bottom:1em;padding-top:1em}#box2[data-v-05d3674f]{font-size:.8em}.answer[data-v-05d3674f]{border:1px dashed #aaa;margin-top:1em;padding:.2em}#box2[data-v-05d3674f]:last-child{margin-bottom:10em}.overlay[data-v-05d3674f]{background:hsla(0,0%,88%,0)}.overlay-close[data-v-05d3674f]{display:none}.overlay-content[data-v-05d3674f]{align-items:stretch;display:grid;grid-template-columns:repeat(1,1fr);min-width:100%;padding:1em}.overlay-menu[data-v-05d3674f]{display:flex;flex-direction:column;height:40%;justify-content:flex-start;left:0;position:fixed;top:0;width:6%}.overlay-menu ul[data-v-05d3674f]{display:grid;grid-template-rows:repeat(3,1fr);list-style-type:none;padding:0}.overlay-content .overlay-menu ul li[data-v-05d3674f]{font-size:.6em;padding-bottom:1em;text-align:left;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-menu ul li span[data-v-05d3674f]{display:none}.overlay-menu ul li svg[data-v-05d3674f]{display:block;margin:auto}.overlay-submenu[data-v-05d3674f]{background:var(--bg);display:flex;flex-direction:column;height:100%;justify-content:center;left:6%;position:fixed;text-align:center;top:0;width:94%}.overlay-submenu ul[data-v-05d3674f]{list-style-type:none;padding:0}.overlay-submenu ul li[data-v-05d3674f]{cursor:pointer;font-size:.8em;padding:.8em;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-submenu a[data-v-05d3674f]{color:inherit;text-align:center;-webkit-text-decoration:none;text-decoration:none}.overlay-content label[data-v-05d3674f],.overlay-submenu a[data-v-05d3674f]{cursor:pointer;display:inline-block;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content label[data-v-05d3674f]{border:1px dashed var(--color-border);font-size:.8em;font-style:italic;padding:1em 2em;text-transform:uppercase}.keyboard-shortcuts[data-v-05d3674f]{grid-gap:4px;bottom:1em;display:grid;grid-template-columns:1;grid-template-rows:repeat(auto,1fr);justify-content:center;left:0;position:fixed;width:6%}.keyboard-key-block[data-v-05d3674f]{align-items:center;background:#f2f2f2;border-radius:2px;box-shadow:0 4px 4px 2px rgba(0,0,0,.2);display:flex;height:1.6em;justify-content:center;vertical-align:middle;width:1.6em}.keyboard-key-block svg[data-v-05d3674f]{display:block;margin:0;opacity:.6;padding:0}.keyboard-key[data-v-05d3674f]{padding:.2em}.keyboard-key-desc[data-v-05d3674f]{display:none}}@media (min-width:1025px){.center-page[data-v-05d3674f]{align-items:center;display:flex;height:100vh;justify-content:center}.canvas[data-v-05d3674f]{background-color:var(--bg);border-radius:2px;box-shadow:var(--box-shadow);display:flex;height:80%;justify-content:space-around;margin-top:-1em;max-width:1900px;width:94%}.box[data-v-05d3674f]:first-child{box-shadow:2px 0 5px rgba(0,0,0,.1)}.box[data-v-05d3674f]:first-child,.box[data-v-05d3674f]:last-child{border:none;max-height:100%;overflow-y:auto;padding:20px;text-align:left;width:50%}.box[data-v-05d3674f]:last-child{box-shadow:none}h2[data-v-05d3674f]{padding-left:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}p[data-v-05d3674f]{font-size:.8em;padding:10px}.dropslot[data-v-05d3674f]{border:1px dashed #aaa;display:inline;margin:0 5px;padding-left:2em;padding-right:2em}.draggable[data-v-05d3674f],.dropslot[data-v-05d3674f]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.draggable[data-v-05d3674f]{border:1px solid #ccc;border-radius:4px;cursor:grab;font-size:.9em;margin:5px 0;padding:10px}.keyboard-shortcuts[data-v-05d3674f]{bottom:4em;display:flex;gap:1em;opacity:.8;position:fixed;right:4em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.keyboard-key-block[data-v-05d3674f]{display:inline-flex}.keyboard-key-desc[data-v-05d3674f]{font-size:.6em;padding-top:.2em;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.keyboard-key[data-v-05d3674f]{align-items:center;background-color:var(--bg);border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 1px rgba(0,0,0,.4);color:#333;display:flex;font-size:.6em;font-weight:700;height:1em;justify-content:center;margin-right:.2em;padding:.2em}.keyboard-key[data-v-05d3674f]:hover{border:2px solid rgba(0,0,0,.2);box-shadow:none;cursor:pointer}.overlay-close[data-v-05d3674f]{cursor:pointer;display:inline-block;position:fixed;right:4.2em;top:3em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-close-text[data-v-05d3674f]{font-size:.7em;padding-right:.5em;text-transform:uppercase}.overlay-close-icon[data-v-05d3674f]{font-size:1.1em;position:absolute;top:-.03em}.overlay-content[data-v-05d3674f]{align-items:stretch;background-color:#fff;border-radius:var(--border-radius);box-shadow:0 4px 8px rgba(0,0,0,.2);display:grid;grid-template-columns:24% 76%;margin-top:-4em;min-width:600px;padding:1em}.overlay-content .overlay-menu[data-v-05d3674f]{border-right:1px solid #ccc;display:flex;flex-direction:column;justify-content:center}.overlay-content .overlay-menu svg[data-v-05d3674f]{height:1.1em;padding-right:1em;width:1.1em}.overlay-content ul[data-v-05d3674f]{list-style-type:none;padding:0}.overlay-content .overlay-menu ul li[data-v-05d3674f]{cursor:pointer;font-size:.8em;padding:.8em;text-align:left;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content .overlay-menu ul li[data-v-05d3674f]:hover{background:var(--color-link-hover-bg);font-weight:700}.overlay-content .overlay-submenu[data-v-05d3674f]{display:flex;flex-direction:column;justify-content:center;margin-left:1em;text-align:center}.overlay-content .overlay-submenu ul li[data-v-05d3674f]{cursor:pointer;font-size:.8em;padding:.8em;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content .overlay-submenu ul li[data-v-05d3674f]:hover{font-weight:700}.overlay-content .overlay-submenu a[data-v-05d3674f]{color:inherit;text-align:center;-webkit-text-decoration:none;text-decoration:none}.overlay-content .overlay-submenu a[data-v-05d3674f],.overlay-content label[data-v-05d3674f]{cursor:pointer;display:inline-block;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content label[data-v-05d3674f]{border:1px dashed var(--color-border);font-size:.8em;font-style:italic;padding:1em 6em;text-transform:uppercase}}',""]),r.locals={},e.exports=r}}]);