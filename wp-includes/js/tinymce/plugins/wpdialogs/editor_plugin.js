(function(b){var a=function(c){return function(){if(this.features.wpDialog){return c.apply(this,arguments)}else{return this.parent.apply(this,arguments)}}};tinymce.create("tinymce.plugins.WPDialogs",{init:function(c,d){c.onBeforeRenderUI.add(function(){c.windowManager=new tinymce.WPWindowManager(c)})},getInfo:function(){return{longname:"WPDialogs",author:"WordPress",authorurl:"http://wordpress.org",infourl:"http://wordpress.org",version:"0.1"}}});tinymce.create("tinymce.WPWindowManager:tinymce.InlineWindowManager",{WPWindowManager:function(c){this.parent(c)},open:function(e,g){var d=this,c;if(!e.wpDialog){return this.parent(e,g)}else{if(!e.id){return}}c=b("#"+e.id);if(!c.length){return}d.features=e;d.params=g;d.onOpen.dispatch(d,e,g);d.element=d.windows[e.id]=c;d.bookmark=d.editor.selection.getBookmark();if(tinyMCEPopup){tinyMCEPopup.init()}c.dialog({title:e.title,width:e.width,height:e.height,modal:true,dialogClass:"wp-dialog",zIndex:300000})},close:a(function(){this.element.dialog("close")})});tinymce.PluginManager.add("wpdialogs",tinymce.plugins.WPDialogs)})(jQuery);