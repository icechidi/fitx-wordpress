jQuery.noConflict(),jQuery(document).ready(function($){function e(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(location.search)||[,""])[1])}function t(e){var t=e;return this.timer&&clearTimeout(t.timer),this.timer=setTimeout(function(){$(t).parent().prev().find("strong").text(t.value)},100),!0}function i(e,t){var i=$(e).val(),o="style_link_"+t,a=t+"_ggf_previewer";if(i)if($("."+a).fadeIn(),"none"!==i&&"Select a font"!==i){$("."+o).remove();var n=i.replace(/\s+/g,"+");$("head").append('<link href="http://fonts.googleapis.com/css?family='+n+'" rel="stylesheet" type="text/css" class="'+o+'">'),$("."+a).css("font-family",i+", sans-serif")}else $("."+a).css("font-family",""),$("."+a).fadeOut()}function o(e,t){var i=$(".uploaded-file"),o,a=$(this);if(e.preventDefault(),o)return void o.open();o=wp.media({title:a.data("choose"),button:{text:a.data("update"),close:!1}}),o.on("select",function(){var e=o.state().get("selection").first();o.close(),t.find(".upload").val(e.attributes.url),"image"==e.attributes.type&&t.find(".screenshot").empty().hide().append('<img class="of-option-image" src="'+e.attributes.url+'">').slideDown("fast"),t.find(".media_upload_button").unbind(),t.find(".remove-image").show().removeClass("hide"),t.find(".of-background-properties").slideDown(),n()}),o.open()}function a(e){e.find(".remove-image").hide().addClass("hide"),e.find(".upload").val(""),e.find(".of-background-properties").hide(),e.find(".screenshot").slideUp(),e.find(".remove-file").unbind(),$(".section-upload .upload-notice").length>0&&$(".media_upload_button").remove(),n()}function n(){$(".remove-image, .remove-file").on("click",function(){a($(this).parents(".section-upload, .section-media, .slide_body"))}),$(".media_upload_button").unbind("click").click(function(e){o(e,$(this).parents(".section-upload, .section-media, .slide_body"))})}if(jQuery(".fld").click(function(){$(".f_"+this.id).slideToggle("normal","swing")}),$(".of-color").wpColorPicker(),$("#js-warning").hide(),$(".group").hide(),""!=e("tab")&&$.cookie("of_current_opt","#"+e("tab"),{expires:7,path:"/"}),null===$.cookie("of_current_opt"))$(".group:first").fadeIn("fast"),$("#of-nav li:first").addClass("current");else{var s=$("#hooks").html();s=jQuery.parseJSON(s),$.each(s,function(e,t){$.cookie("of_current_opt")=="#of-option-"+t&&($(".group#of-option-"+t).fadeIn(),$("#of-nav li."+t).addClass("current"))})}$("#of-nav li a").click(function(e){if($(this).parent().hasClass("changelog"))return void window.open("http://documentation.laborator.co/kb/oxygen/oxygen-release-notes/");$("#of-nav li").removeClass("current"),$(this).parent().addClass("current");var t=$(this).attr("href");return $.cookie("of_current_opt",t,{expires:7,path:"/"}),$(".group").hide(),$(t).fadeIn("fast"),!1});var r=0;$("#expand_options").click(function(){0==r?(r=1,$("#of_container #of-nav").hide(),$("#of_container #content").width(755),$("#of_container .group").add("#of_container .group h2").show(),$(this).removeClass("expand"),$(this).addClass("close"),$(this).text("Close")):(r=0,$("#of_container #of-nav").show(),$("#of_container #content").width(595),$("#of_container .group").add("#of_container .group h2").hide(),$("#of_container .group:first").show(),$("#of_container #of-nav li").removeClass("current"),$("#of_container #of-nav li:first").addClass("current"),$(this).removeClass("close"),$(this).addClass("expand"),$(this).text("Expand"))}),$.fn.center=function(){return this.animate({top:($(window).height()-this.height()-200)/2+$(window).scrollTop()+"px"},100),this.css("left",250),this},$("#of-popup-save").center(),$("#of-popup-reset").center(),$("#of-popup-fail").center(),$(window).scroll(function(){$("#of-popup-save").center(),$("#of-popup-reset").center(),$("#of-popup-fail").center()}),$(".of-radio-img-img").click(function(){$(this).parent().parent().find(".of-radio-img-img").removeClass("of-radio-img-selected"),$(this).addClass("of-radio-img-selected")}),$(".of-radio-img-label").hide(),$(".of-radio-img-img").show(),$(".of-radio-img-radio").hide(),$(".of-radio-tile-img").click(function(){$(this).parent().parent().find(".of-radio-tile-img").removeClass("of-radio-tile-selected"),$(this).addClass("of-radio-tile-selected")}),$(".of-radio-tile-label").hide(),$(".of-radio-tile-img").show(),$(".of-radio-tile-radio").hide(),function($){styleSelect={init:function(){$(".select_wrapper").each(function(){$(this).prepend("<span>"+$(this).find(".select option:selected").text()+"</span>")}),$(".select").live("change",function(){$(this).prev("span").replaceWith("<span>"+$(this).find("option:selected").text()+"</span>")}),$(".select").bind($.browser.msie?"click":"change",function(e){$(this).prev("span").replaceWith("<span>"+$(this).find("option:selected").text()+"</span>")})}},$(document).ready(function(){styleSelect.init()})}(jQuery),$(".slide_body").hide(),$(".slide_edit_button").live("click",function(){return $(this).parent().toggleClass("active").next().slideToggle("fast"),!1}),$(".of-slider-title").live("keyup",function(){t(this)}),$(".slide_delete_button").live("click",function(){if(confirm("Are you sure you wish to delete this slide?"))return $(this).parents("li").animate({opacity:.25,height:0},500,function(){$(this).remove()}),!1;return!1}),$(".slide_add_button").live("click",function(){var e=$(this).prev(),t=e.attr("id"),i=$("#"+t+" li").find(".order").map(function(){var e=this.id;return e=e.replace(/\D/g,""),e=parseFloat(e)}).get(),o=Math.max.apply(Math,i);o<1&&(o=0);var a=o+1,s='<li class="temphide"><div class="slide_header"><strong>Slide '+a+'</strong><input type="hidden" class="slide of-input order" name="'+t+"["+a+'][order]" id="'+t+"_slide_order-"+a+'" value="'+a+'"><a class="slide_edit_button" href="#">Edit</a></div><div class="slide_body" style="display: none; "><label>Title</label><input class="slide of-input of-slider-title" name="'+t+"["+a+'][title]" id="'+t+"_"+a+'_slide_title" value=""><label>Image URL</label><input class="upload slide of-input" name="'+t+"["+a+'][url]" id="'+t+"_"+a+'_slide_url" value=""><div class="upload_button_div"><span class="button media_upload_button" id="'+t+"_"+a+'">Upload</span><span class="button remove-image hide" id="reset_'+t+"_"+a+'" title="'+t+"_"+a+'">Remove</span></div><div class="screenshot"></div><label>Link URL (optional)</label><input class="slide of-input" name="'+t+"["+a+'][link]" id="'+t+"_"+a+'_slide_link" value=""><label>Description (optional)</label><textarea class="slide of-input" name="'+t+"["+a+'][description]" id="'+t+"_"+a+'_slide_description" cols="8" rows="8"></textarea><a class="slide_delete_button" href="#">Delete</a><div class="clear"></div></div></li>';return e.append(s),e.find(".temphide").fadeIn("fast",function(){$(this).removeClass("temphide")}),n(),!1}),jQuery(".slider").find("ul").each(function(){$("#"+jQuery(this).attr("id")).sortable({placeholder:"placeholder",opacity:.6,handle:".slide_header",cancel:"a"})}),jQuery(".sorter").each(function(){var e=jQuery(this).attr("id");$("#"+e).find("ul").sortable({items:"li",placeholder:"placeholder",connectWith:".sortlist_"+e,opacity:.6,update:function(){$(this).find(".position").each(function(){var t=$(this).parent().attr("id"),i=$(this).parent().parent().attr("id");i=i.replace(e+"_","");var o=$(this).parent().parent().parent().attr("id");$(this).prop("name",o+"["+i+"]["+t+"]")})}})}),$("#of_backup_button").live("click",function(){if(confirm("Click OK to backup your current saved options.")){var e=$(this),t=$(this).attr("id"),i=$("#security").val(),o={action:"of_ajax_post_action",type:"backup_options",security:i};$.post(ajaxurl,o,function(e){if(e==-1){var t=$("#of-popup-fail");t.fadeIn(),window.setTimeout(function(){t.fadeOut()},2e3)}else $("#of-popup-save").fadeIn(),window.setTimeout(function(){location.reload()},1e3)})}return!1}),$("#of_restore_button").live("click",function(){if(confirm("'Warning: All of your current options will be replaced with the data from your last backup! Proceed?")){var e=$(this),t=$(this).attr("id"),i=$("#security").val(),o={action:"of_ajax_post_action",type:"restore_options",security:i};$.post(ajaxurl,o,function(e){if(e==-1){var t=$("#of-popup-fail");t.fadeIn(),window.setTimeout(function(){t.fadeOut()},2e3)}else $("#of-popup-save").fadeIn(),window.setTimeout(function(){location.reload()},1e3)})}return!1}),$("#of_import_button").live("click",function(){if(confirm("Click OK to import options.")){var e=$(this),t=$(this).attr("id"),i=$("#security").val(),o=$("#export_data").val(),a={action:"of_ajax_post_action",type:"import_options",security:i,data:o};$.post(ajaxurl,a,function(e){var t=$("#of-popup-fail"),i=$("#of-popup-save");e==-1?(t.fadeIn(),window.setTimeout(function(){t.fadeOut()},2e3)):(i.fadeIn(),window.setTimeout(function(){location.reload()},1e3))})}return!1}),$("#of_save").live("click",function(){var e=$("#security").val();$(".ajax-loading-img").fadeIn();var t=$('#of_form :input[name][name!="security"][name!="of_reset"]').serialize();$("#of_form :input[type=checkbox]").each(function(){this.checked||(t+="&"+this.name+"=0")});var i={type:"save",action:"of_ajax_post_action",security:e,data:t};return $.post(ajaxurl,i,function(e){var t=$("#of-popup-save"),i=$("#of-popup-fail");$(".ajax-loading-img").fadeOut(),1==e?t.fadeIn():i.fadeIn(),window.setTimeout(function(){t.fadeOut(),i.fadeOut()},2e3)}),!1}),$("#of_reset").click(function(){if(confirm("Click OK to reset. All settings will be lost and replaced with default settings!")){var e=$("#security").val();$(".ajax-reset-loading-img").fadeIn();var t={type:"reset",action:"of_ajax_post_action",security:e};$.post(ajaxurl,t,function(e){var t=$("#of-popup-reset"),i=$("#of-popup-fail");$(".ajax-reset-loading-img").fadeOut(),1==e?(t.fadeIn(),window.setTimeout(function(){location.reload()},1e3)):(i.fadeIn(),window.setTimeout(function(){i.fadeOut()},2e3))})}return!1}),jQuery().tipsy&&$(".tooltip, .typography-size, .typography-height, .typography-face, .typography-style, .of-typography-color").tipsy({fade:!0,gravity:"s",opacity:.7}),jQuery(".smof_sliderui").each(function(){var e=jQuery(this),t="#"+e.data("id"),i=parseInt(e.data("val")),o=parseInt(e.data("min")),a=parseInt(e.data("max")),n=parseInt(e.data("step"));e.slider({value:i,min:o,max:a,step:n,range:"min",slide:function(e,i){jQuery(t).val(i.value)}})}),jQuery(".cb-enable").click(function(){var e=$(this).parents(".switch-options");jQuery(".cb-disable",e).removeClass("selected"),jQuery(this).addClass("selected"),jQuery(".main_checkbox",e).attr("checked",!0);var t=jQuery(this),i=".f_"+t.data("id");jQuery(i).slideDown("normal","swing")}),jQuery(".cb-disable").click(function(){var e=$(this).parents(".switch-options");jQuery(".cb-enable",e).removeClass("selected"),jQuery(this).addClass("selected"),jQuery(".main_checkbox",e).attr("checked",!1);var t=jQuery(this),i=".f_"+t.data("id");jQuery(i).slideUp("normal","swing")}),($.browser.msie&&$.browser.version<10||$.browser.opera)&&$(".cb-enable span, .cb-disable span").find().attr("unselectable","on"),jQuery(".google_font_select").each(function(){i(this,jQuery(this).attr("id"))}),jQuery(".google_font_select").change(function(){i(this,jQuery(this).attr("id"))}),n()});