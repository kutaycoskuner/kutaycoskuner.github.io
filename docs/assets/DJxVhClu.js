import{aa as s}from"./BN38_k43.js";const o=s("state_bank",{state:()=>({screen_size:1920,screen_size_name:"pc",screen_size_index:2,color_mode:"light",help_msg:"",zoom_level:1,coords_base_x_offset:0,coords_base_y_offset:0,coords_state_x_offset:0,coords_state_y_offset:0}),getters:{getScreenSize(e){return e.screen_size},getScreenSizeName(e){return e.screen_size_name},getScreenSizeIndex(e){return e.screen_size_index},getColorMode(e){return e.color_mode},getHelpMsg(e){return e.help_msg},getZoomLevel(e){return e.zoom_level},getCoordsBaseXOffset(e){return e.coords_base_x_offset},getCoordsBaseYOffset(e){return e.coords_base_y_offset},getCoordsStateXOffset(e){return e.coords_state_x_offset},getCoordsStateYOffset(e){return e.coords_state_y_offset}},actions:{setScreenSize(e){this.screen_size=e},setScreenSizeName(e){this.screen_size_name=e},setScreenSizeIndex(e){this.screen_size_index=e},setColorMode(e){this.color_mode=e},setHelpMsg(e){this.help_msg=e},setZoomLevel(e){e<.16?e=.16:e=e,e>2?e=2:e=e,this.zoom_level=e},setCoordsBaseXOffset(e){this.coords_base_x_offset=e},setCoordsBaseYOffset(e){this.coords_base_y_offset=e},setCoordsStateXOffset(e){this.coords_state_x_offset=e},setCoordsStateYOffset(e){this.coords_state_y_offset=e}}});export{o as s};
