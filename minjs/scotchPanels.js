!function(t){"use strict";var e=[],s=!1,n=!1,i=!1,a={containerSelector:"body",type:"html",direction:"top",duration:300,transition:"ease",easingPluginTransition:"easeInCirc",useCSS:!0,useEasingPlugin:!1,imageURL:!1,iframeURL:!1,autoPlayVideo:!0,youtubeID:!1,youTubeTheme:"light",distanceX:"70%",forceMinHeight:!1,minHeight:"200px",closeAfter:0,startOpened:!1,startOpenedDelay:0,clickSelector:!1,enableEscapeKey:!0,hoverSelector:!1,touchSelector:!1,beforePanelOpen:function(){},afterPanelOpen:function(){},beforePanelClose:function(){},afterPanelClose:function(){}};t.fn.scotchPanel=function(o){if(void 0===o&&(o={}),0===this.length)return this;if(this.length>1)return this.each(function(){e.push(t(this).scotchPanel(o))}),e.open=function(){for(var t=0;t<e.length;t++)e[t].open()},e.close=function(){for(var t=0;t<e.length;t++)e[t].close()},e.toggle=function(){for(var t=0;t<e.length;t++)e[t].toggle()},e;var r={},c=function(){var e=t(r.settings.containerSelector);e.hasClass("scotchified")||e.wrapInner('<div class="scotch-panel-wrapper"><div class="scotch-panel-canvas"></div></div>').addClass("scotchified"),t(".scotch-panel-wrapper").css({position:"relative",overflow:"hidden",width:"100%"}),t(".scotch-panel-canvas").css({position:"relative",height:"100%",width:"100%"}),r.settings.useCSS&&t(".scotch-panel-canvas").css({"-moz-transform":"translate3d(0, 0, 0)","-ms-transform":"translate3d(0, 0, 0)","-o-transform":"translate3d(0, 0, 0)","-webkit-transform":"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","-o-backface-visibility":"hidden","-webkit-backface-visibility":"hidden","backface-visibility":"hidden"}),"top"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-top"),r.css({bottom:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"bottom"==r.settings.direction&&(r.height=r.height(),r.addClass("scotch-panel-bottom"),r.css({top:"100%",left:"0",width:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"left"==r.settings.direction&&(r.addClass("scotch-panel-left"),r.css({top:"0",left:"-"+r.settings.distanceX,width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),"right"==r.settings.direction&&(r.addClass("scotch-panel-right"),r.css({top:"0",right:"-83%",width:r.settings.distanceX,height:"100%",position:"absolute","z-index":"888888",overflow:"hidden"})),r.css({"-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","-o-backface-visibility":"hidden","-webkit-backface-visibility":"hidden","backface-visibility":"hidden"}),"image"==r.settings.type&&r.settings.imageURL&&(r.css({"-o-background-size":"cover","-ms-background-size":"cover","-moz-background-size":"cover","-webkit-background-size":"cover","background-size":"cover","background-position":"50% 0","background-repeat":"no-repeat","background-image":"url("+r.settings.imageURL+")"}),"top"!=r.settings.direction&&"bottom"!=r.settings.direction||(r.css("min-height",r.settings.minHeight),r.height=t(r).height())),"iframe"==r.settings.type&&r.settings.iframeURL&&(r.iframeIsLoaded=!1,r.append('<iframe frameborder="0" style="width: 100%; height: 100%; display: block; position: relative; min-height: '+r.settings.minHeight+'" allowfullscreen></iframe>'),"top"!=r.settings.direction&&"bottom"!=r.settings.direction||(r.height=t(r).height())),"video"==r.settings.type&&r.settings.youtubeID&&(r.append('<div id="video-id-'+r.settings.youtubeID+'" style="min-height: '+r.settings.minHeight+'; display: block !important;"><iframe src="//www.youtube.com/embed/'+r.settings.youtubeID+"?enablejsapi=1&theme="+r.settings.youTubeTheme+'" frameborder="0" style="width: 100%; height: 100%; display: block; position: absolute; left: 0; top: 0;" allowfullscreen></iframe></div>'),"top"!=r.settings.direction&&"bottom"!=r.settings.direction||(r.height=t(r).height())),n&&i&&d(r.settings.transition,r.settings.duration),r.settings.startOpened&&setTimeout(function(){r.open()},r.settings.startOpenedDelay),0!=r.settings.closeAfter&&setTimeout(function(){r.close()},r.settings.closeAfter)},l={transition:function(){if(!window.getComputedStyle)return!1;var t=(document.body||document.documentElement).style,e="transition";if("string"==typeof t[e])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];e=e.charAt(0).toUpperCase()+e.substr(1);for(var n=0;n<s.length;n++)if("string"==typeof t[s[n]+e])return!0;return!1},translate3d:function(){if(!window.getComputedStyle)return!1;var t,e;return t=document.createElement("p"),t.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",t.style.margin="0",document.body.insertBefore(t,document.body.lastChild),void 0!==(e=window.getComputedStyle(t).getPropertyValue("transform"))&&"none"!==e}},g=function(t,e){var s=document.getElementById(t),n=s.getElementsByTagName("iframe")[0].contentWindow;s.style.display="hide"==e?"none":"";var i="hide"==e?"pauseVideo":"playVideo";n.postMessage('{"event":"command","func":"'+i+'","args":""}',"*"),s.style.display="block"},d=function(t,e){r.parents(".scotch-panel-canvas:first").css({"-ms-transition":"all "+e+"ms "+t,"-moz-transition":"all "+e+"ms "+t,"-o-transition":"all "+e+"ms "+t,"-webkit-transition":"all "+e+"ms "+t,transition:"all "+e+"ms "+t})},h=function(t){r.settings.forceMinHeight&&r.parents(".scotch-panel-canvas:first").css("min-height",t),n&&i&&r.settings.useCSS?(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d(0, "+t+"px, 0)","-moz-transform":"translate3d(0, "+t+"px, 0)","-o-transform":"translate3d(0, "+t+"px, 0)","-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)):(r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({top:t+"px"},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}))},f=function(t){if(n&&i&&r.settings.useCSS){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose();r.parents(".scotch-panel-canvas:first").css({"-ms-transform":"translate3d("+t+", 0, 0)","-moz-transform":"translate3d("+t+", 0, 0)","-o-transform":"translate3d("+t+", 0, 0)","-webkit-transform":"translate3d("+t+", 0, 0)",transform:"translate3d("+t+", 0, 0)"}),setTimeout(function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()},r.settings.duration)}else r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.beforePanelOpen():r.settings.beforePanelClose(),r.settings.useEasingPlugin?r.parents(".scotch-panel-canvas:first").animate({left:t},{duration:r.settings.duration,easing:r.settings.easingPluginTransition,complete:function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()}}):r.parents(".scotch-panel-canvas:first").animate({left:t},r.settings.duration,function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.settings.afterPanelOpen():r.settings.afterPanelClose()})};return(r=this).open=function(){r.parents(".scotch-panel-canvas:first").addClass("scotch-is-showing"),"iframe"==r.settings.type&&r.settings.iframeURL&&!r.iframeIsLoaded&&(r.iframeIsLoaded=!0,r.find("iframe").attr("src",r.settings.iframeURL)),"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&g("video-id-"+r.settings.youtubeID,""),"top"==r.settings.direction&&h(r.height),"bottom"==r.settings.direction&&h("-"+r.height),"left"==r.settings.direction&&f(r.settings.distanceX),"right"==r.settings.direction&&f("-"+r.settings.distanceX)},r.close=function(){r.parents(".scotch-panel-canvas:first").removeClass("scotch-is-showing"),setTimeout(function(){"video"==r.settings.type&&r.settings.youtubeID&&r.settings.autoPlayVideo&&g("video-id-"+r.settings.youtubeID,"hide")},r.settings.duration),"top"!=r.settings.direction&&"bottom"!=r.settings.direction||h(0),"left"!=r.settings.direction&&"right"!=r.settings.direction||f(0)},r.toggle=function(){r.parents(".scotch-panel-canvas:first").hasClass("scotch-is-showing")?r.close():r.open()},function(){s||(s=!0,n=l.transition(),i=l.translate3d());for(var e in a)a.hasOwnProperty(e)&&r.attr("data-"+e.toLowerCase())&&(o[e]=r.data(e.toLowerCase()));r.settings=t.extend({},a,o),c()}(),t(document).keyup(function(t){27==t.keyCode&&r.settings.enableEscapeKey&&r.close()}),r.settings.hoverSelector&&t(r.settings.hoverSelector).hover(function(){r.open()},function(){r.close()}),r.settings.clickSelector&&t(r.settings.clickSelector).click(function(){return r.toggle(),!1}),r.settings.touchSelector&&t(r.settings.touchSelector).on("touchstart",function(){return r.toggle(),!1}),r}}(jQuery);