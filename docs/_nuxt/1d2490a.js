(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{343:function(e,t,d){var content=d(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(10).default)("6fdce220",content,!0,{sourceMap:!1})},393:function(e,t,d){"use strict";d(343)},394:function(e,t,d){var o=d(9)((function(i){return i[1]}));o.push([e.i,".settings-container[data-v-72d5605e]{background-color:var(--bg);display:none;height:0;opacity:0;overflow:hidden;position:fixed;transition:opacity .5s ease;width:100%;z-index:20}.slider-void[data-v-72d5605e]{display:grid;grid-template-rows:repeat(2,1fr);height:100%;width:100%}.slider-void .void-top[data-v-72d5605e]{opacity:.4;transition:opacity .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.slider-void .void-top[data-v-72d5605e]:hover{opacity:1}.slider-void .void-top div[data-v-72d5605e]{color:#ccc;cursor:pointer;position:fixed;right:2%;top:3%}.slider-void .void-bottom[data-v-72d5605e]{height:100%;width:100%}.slide-move[data-v-72d5605e]{height:100%;top:0}.slide-move[data-v-72d5605e],.work-move[data-v-72d5605e]{color:#474747;display:grid;grid-template-columns:repeat(2,1fr);left:50%;position:fixed;transform:translate(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.work-move[data-v-72d5605e]{height:74%;top:100%}.work-move span[data-v-72d5605e]{cursor:pointer}.work-move-left[data-v-72d5605e]{padding-right:.5em;padding-top:1em;text-align:right}.work-move-right[data-v-72d5605e]{padding-left:.5em;padding-top:1em;text-align:left}.work-move-left[data-v-72d5605e]:hover,.work-move-right[data-v-72d5605e]:hover{color:#fdfdfd;transition:color .3s}.slider[data-v-72d5605e]{height:74%;left:0;position:fixed;top:50%;transform:translateY(-50%);width:100%}.slide[data-v-72d5605e],.slider[data-v-72d5605e]{align-items:center;display:flex;justify-content:center}.slide[data-v-72d5605e]{height:0;opacity:0;overflow:hidden;width:auto}.slide img[data-v-72d5605e]{display:block;height:100%;margin:auto;-o-object-fit:cover;object-fit:cover;padding:0;width:auto}.slider-switches[data-v-72d5605e]{bottom:-68%;display:flex;height:5%;left:50%;position:relative;transform:translateX(-50%);width:20%;z-index:15}.slider-switch-wrapper[data-v-72d5605e]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.slider-switch[data-v-72d5605e]{background-color:#474747;border-radius:50%;height:6px;margin:1px;width:6px}.slider-switch.active[data-v-72d5605e]{background-color:#e0e0e0}.slider-void .void-bottom .slider-switch[data-v-72d5605e]:hover{background-color:#a0a0a0;cursor:pointer}.slider-sub-wrapper[data-v-72d5605e]{align-items:center;display:flex;height:6px;justify-content:center;left:50%;position:fixed;top:96%;transform:translate(-50%);width:20%;z-index:50}.slider-sub-switch[data-v-72d5605e]{background-color:#000;border:1px solid rgba(0,0,0,.4);border-radius:50%;height:6px;margin:1px;opacity:.4;width:6px}.slider-sub-switch.active[data-v-72d5605e]{background-color:#fff;opacity:.8}.slider-sub-switch[data-v-72d5605e]:hover{background-color:#a0a0a0;cursor:pointer}.activate-display[data-v-72d5605e]{display:block}.active[data-v-72d5605e]{height:100%;opacity:1;transition:opacity .5s ease}.hidden[data-v-72d5605e]{opacity:0!important;transition:opacity .5s ease!important;width:0!important}",""]),o.locals={},e.exports=o},433:function(e,t,d){"use strict";d.r(t);var o={setup:function(){},data:function(){return{isOverlayOpen:!0}},methods:{toggleOverlay:function(e){if(this.isOverlayOpen){this.imgState=-1;this.$refs.slider.getElementsByClassName("slide");document.body.classList.toggle("no-scroll"),document.getElementById("settings-container").classList.toggle("active"),document.getElementById("settings-container").classList.toggle("activate-display")}},closeOverlay:function(){this.isOverlayOpen=!1;var e=this.$refs.slider.getElementsByClassName("slide");e[this.activeSlide].getElementsByTagName("div")[this.subSlide+1].classList.remove("active"),e[this.activeSlide].getElementsByTagName("img")[this.subSlide].classList.add("hidden"),this.subSlide=0,this.$refs.slider.getElementsByClassName("slide")[this.activeSlide].classList.remove("active"),document.body.classList.toggle("no-scroll"),document.getElementById("settings-container").classList.toggle("active"),document.getElementById("settings-container").classList.toggle("activate-display")}}},r=(d(393),d(7)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"settings-container",attrs:{id:"settings-container"}},[d("div",{staticClass:"slider-void"},[d("div",{staticClass:"void-top",on:{click:function(t){return e.closeOverlay()}}},[d("div",[e._v("⨯ close")])]),e._v(" "),d("div",{staticClass:"void-bottom"})])])}),[],!1,null,"72d5605e",null);t.default=component.exports}}]);