!function(t,e,o,n){"use strict";if(o){var i,a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","share","close"],idleTime:3,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"true"},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:o.noop,beforeLoad:o.noop,afterLoad:o.noop,beforeShow:o.noop,afterShow:o.noop,beforeClose:o.noop,afterClose:o.noop,onActivate:o.noop,onDeactivate:o.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zur\xfcck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp\xe4ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Ma\xdfstab"}}},s=o(t),r=o(e),c=0,l=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},d=function(){var t,o=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n!==o.style[t])return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,n,i){var a=this;a.opts=o.extend(!0,{index:i},o.fancybox.defaults,n||{}),o.fancybox.isMobile&&(a.opts=o.extend(!0,{},a.opts,a.opts.mobile)),n&&o.isArray(n.buttons)&&(a.opts.buttons=n.buttons),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=o(e.activeElement).blur(),a.slides={},a.init())};o.extend(p.prototype,{init:function(){var i,a,s,c=this,l=c.group[c.currIndex],d=l.opts,f=o.fancybox.scrollbarWidth;c.scrollTop=r.scrollTop(),c.scrollLeft=r.scrollLeft(),o.fancybox.getInstance()||(o("body").addClass("fancybox-active"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream?"image"!==l.type&&o("body").css("top",-1*o("body").scrollTop()).addClass("fancybox-iosfix"):!o.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(f===n&&(i=o('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),f=o.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),o("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+f+"px; }</style>"),o("body").addClass("compensate-for-scrollbar"))),s="",o.each(d.buttons,function(t,e){s+=d.btnTpl[e]||""}),a=o(c.translate(c,d.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",d.btnTpl.arrowLeft+d.btnTpl.arrowRight))).attr("id","fancybox-container-"+c.id).addClass("fancybox-is-hidden").addClass(d.baseClass).data("FancyBox",c).appendTo(d.parentEl),c.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){c.$refs[t]=a.find(".fancybox-"+t)}),c.trigger("onInit"),c.activate(),c.jumpTo(c.currIndex)},translate:function(t,e){var o=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=o[e];return i===n?t:i})},createGroup:function(t){var e=this,i=o.makeArray(t);o.each(i,function(t,i){var a,s,r,c,l,d={},f={};o.isPlainObject(i)?(d=i,f=i.opts||i):"object"===o.type(i)&&o(i).length?(f=(a=o(i)).data(),(f=o.extend({},f,f.options||{})).$orig=a,d.src=f.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=i)):d={type:"html",src:i+""},d.opts=o.extend(!0,{},e.opts,f),o.isArray(f.buttons)&&(d.opts.buttons=f.buttons),s=d.type||d.opts.type,c=d.src||"",s||!c||(c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":(r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",d.opts.videoFormat||(d.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):"#"!==c.charAt(0)||(s="inline")),s?d.type=s:e.trigger("objectNeedsType",d),d.index=e.group.length,d.opts.$orig&&!d.opts.$orig.length&&delete d.opts.$orig,!d.opts.$thumb&&d.opts.$orig&&(d.opts.$thumb=d.opts.$orig.find("img:first")),d.opts.$thumb&&!d.opts.$thumb.length&&delete d.opts.$thumb,"function"===o.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(i,[e,d])),"function"===o.type(e.opts.caption)&&(d.opts.caption=e.opts.caption.apply(i,[e,d])),d.opts.caption instanceof o||(d.opts.caption=n===d.opts.caption?"":d.opts.caption+""),"ajax"===s&&(l=c.split(/\s+/,2)).length>1&&(d.src=l.shift(),d.opts.filter=l.shift()),"auto"==d.opts.smallBtn&&(o.inArray(s,["html","inline","ajax"])>-1?(d.opts.toolbar=!1,d.opts.smallBtn=!0):d.opts.smallBtn=!1),"pdf"===s&&(d.type="iframe",d.opts.iframe.preload=!1),d.opts.modal&&(d.opts=o.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(d)})},addEvents:function(){var n=this;n.removeEvents(),n.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),n.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),n.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),n.next()}).on("click.fb","[data-fancybox-zoom]",function(t){n[n.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?l(function(){n.update()}):(n.$refs.stage.hide(),setTimeout(function(){n.$refs.stage.show(),n.update()},600))}),r.on("focusin.fb",function(t){var i=o.fancybox?o.fancybox.getInstance():null;!(i.isClosing||!i.current||!i.current.opts.trapFocus||o(t.target).hasClass("fancybox-container")||o(t.target).is(e))&&i&&"fixed"!==o(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))}),r.on("keydown.fb",function(t){var e=n.current,i=t.keyCode||t.which;if(!(!e||!e.opts.keyboard||o(t.target).is("input")||o(t.target).is("textarea"))){if(8===i||27===i){t.preventDefault(),n.close(t);return}if(37===i||38===i){t.preventDefault(),n.previous();return}if(39===i||40===i){t.preventDefault(),n.next();return}n.trigger("afterKeydown",t,i)}}),n.group[n.currIndex].opts.idleTime&&(n.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){n.idleSecondsCounter=0,n.isIdle&&n.showControls(),n.isIdle=!1}),n.idleInterval=t.setInterval(function(){n.idleSecondsCounter++,n.idleSecondsCounter>=n.group[n.currIndex].opts.idleTime&&!n.isDragging&&(n.isIdle=!0,n.idleSecondsCounter=0,n.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,d,p,u=this,h=u.group.length;if(!u.isDragging&&!u.isClosing&&(!u.isAnimating||!u.firstRun)){if(t=parseInt(t,10),!(s=u.current?u.current.opts.loop:u.opts.loop)&&(t<0||t>=h))return!1;if(a=u.firstRun=null===u.firstRun,!(h<2)||a||!u.isDragging){if(c=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,r=u.createSlide(t),h>1&&((s||r.index>0)&&u.createSlide(t-1),(s||r.index<h-1)&&u.createSlide(t+1)),u.current=r,u.currIndex=r.index,u.currPos=r.pos,u.trigger("beforeShow",a),u.updateControls(),d=o.fancybox.getTranslate(r.$slide),r.isMoved=(0!==d.left||0!==d.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=n,o.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a){r.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.removeClass("fancybox-is-hidden"),f(u.$refs.container),u.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),u.loadSlide(r),u.preload("image");return}if(o.each(u.slides,function(t,e){o.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),o.each(u.slides,function(t,n){var i=n.pos-r.pos;o.fancybox.animate(n.$slide,{top:0,left:i*l+i*n.opts.gutter},e,function(){n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),n.pos===u.currPos&&(r.isMoved=!1,u.complete())})})):u.$refs.stage.children().removeAttr("style"),r.isLoaded?u.revealContent(r):u.loadSlide(r),u.preload("image"),c.pos!==r.pos)p="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(p):(p="fancybox-animated "+p+" fancybox-fx-"+r.opts.transitionEffect,o.fancybox.animate(c.$slide,p,e,function(){c.$slide.removeClass(p).removeAttr("style")})))}}},createSlide:function(t){var e,n,i=this;return n=(n=t%i.group.length)<0?i.group.length+n:n,!i.slides[t]&&i.group[n]&&(e=o('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=o.extend(!0,{},i.group[n],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,f=d.current,p=f.$content,u=parseInt(f.$slide.width(),10),h=parseInt(f.$slide.height(),10),b=f.width,g=f.height;"image"==f.type&&!f.hasError&&p&&!d.isAnimating&&(o.fancybox.stop(p),d.isAnimating=!0,t=t===n?.5*u:t,e=e===n?.5*h:e,c=b/(a=o.fancybox.getTranslate(p)).width,l=g/a.height,s=.5*u-.5*b,r=.5*h-.5*g,b>u&&((s=a.left*c-(t*c-t))>0&&(s=0),s<u-b&&(s=u-b)),g>h&&((r=a.top*l-(e*l-e))>0&&(r=0),r<h-g&&(r=h-g)),d.updateCursor(b,g),o.fancybox.animate(p,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,n=this,i=n.current,a=i.$content;"image"==i.type&&!i.hasError&&a&&!n.isAnimating&&(o.fancybox.stop(a),n.isAnimating=!0,e=n.getFitPos(i),n.updateCursor(e.width,e.height),o.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){n.isAnimating=!1}))},getFitPos:function(t){var e,n,i,a,s,r=t.$content,c=t.width,l=t.height,d=t.opts.margin;return!!r&&!!r.length&&(!!c||!!l)&&("number"===o.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),a=Math.floor((i=Math.min(1,(e=parseInt(this.$refs.stage.width(),10)-(d[1]+d[3]))/c,(n=parseInt(this.$refs.stage.height(),10)-(d[0]+d[2]))/l))*c),{top:Math.floor((n-(s=Math.floor(i*l)))*.5)+d[0],left:Math.floor((e-a)*.5)+d[3],width:a,height:s})},update:function(){var t=this;o.each(t.slides,function(e,o){t.updateSlide(o)})},updateSlide:function(t,e){var n=this,i=t&&t.$content;i&&(t.width||t.height)&&(n.isAnimating=!1,o.fancybox.stop(i),o.fancybox.setTranslate(i,n.getFitPos(t)),t.pos===n.currPos&&n.updateCursor()),t.$slide.trigger("refresh"),n.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a;this.current&&(i=Math.round(t.$slide.width()),a=t.pos-this.current.pos,o.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===n?0:e,null,!1))},updateCursor:function(t,e){var o,i=this.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");this.current&&!this.isClosing&&(this.isZoomable()?(i.addClass("fancybox-is-zoomable"),(o=t!==n&&e!==n?t<this.current.width&&e<this.current.height:this.isScaledDown())?i.addClass("fancybox-can-zoomIn"):this.current.opts.touch?i.addClass("fancybox-can-drag"):i.addClass("fancybox-can-zoomOut")):this.current.opts.touch&&i.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this.current;return!e||this.isClosing?void 0:!!("image"===e.type&&e.isLoaded&&!e.hasError&&("zoom"===e.opts.clickContent||o.isFunction(e.opts.clickContent)&&"zoom"===e.opts.clickContent(e)))&&(t=this.getFitPos(e),!!(e.width>t.width)||!!(e.height>t.height))},isScaledDown:function(){var t=this.current,e=t.$content,n=!1;return e&&(n=(n=o.fancybox.getTranslate(e)).width<t.width||n.height<t.height),n},canPan:function(){var t=this.current,e=t.$content,o=!1;return e&&(o=this.getFitPos(t),o=Math.abs(e.width()-o.width)>1||Math.abs(e.height()-o.height)>1),o},loadSlide:function(t){var e,n,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),n=t.type,(i=t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--"+(n||"unknown")).addClass(t.opts.slideClass),n){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":o(t.src).length?a.setContent(t,o(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),e=o.ajax(o.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,o){"success"===o&&a.setContent(t,e)},error:function(e,o){e&&"abort"!==o&&a.setError(t)}})),i.one("onReset",function(){e.abort()});break;case"video":a.setContent(t,'<video controls><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video>");break;default:a.setError(t)}return!0}},setImage:function(e){var n,i,a,s,r=this,c=e.opts.srcset||e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,(i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,o){var n=parseInt(t.substring(0,t.length-1),10);if(0===o)return e.url=t;n&&(e.value=n,e.postfix=t[t.length-1])}),e})).sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var d=i[l];if("w"===d.postfix&&d.value>=s||"x"===d.postfix&&d.value>=a){n=d;break}}!n&&i.length&&(n=i[i.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value))}e.$content=o('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=o("<img />").one("error",function(){o(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,n=o("<img />");t.$image=n.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,!e.isClosing&&(t.width=t.opts.width||this.naturalWidth,t.height=t.opts.height||this.naturalHeight,t.opts.image.srcset&&n.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(n[0].complete||"complete"==n[0].readyState)&&n[0].naturalWidth&&n[0].naturalHeight?n.trigger("load"):n[0].error?n.trigger("error"):t.timouts=setTimeout(function(){n[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=o('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=o(a.tpl.replace(/\{rnd\}/g,new Date().getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var o,i,s,r=t.$content,c=a.css.width,l=a.css.height;if(1===e[0].isReady){try{s=(i=e.contents()).find("body")}catch(d){}s&&s.length&&(c===n&&(o=e[0].contentWindow.document.documentElement.scrollWidth,c=Math.ceil(s.outerWidth(!0)+(r.width()-o)),c+=r.outerWidth()-r.innerWidth()),l===n&&(l=Math.ceil(s.outerHeight(!0)),l+=r.outerHeight()-r.innerHeight()),c&&r.width(c),l&&r.height(l)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),!0===t.opts.smallBtn&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{o(this).find("iframe").hide().attr("src","//about:blank")}catch(e){}o(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var n;!this.isClosing&&((this.hideLoading(t),t.$slide.empty(),(n=e)&&n.hasOwnProperty&&n instanceof o&&e.parent().length)?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=o("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):!t.hasError&&("string"===o.type(e)&&3===(e=o("<div>").append(o.trim(e)).contents())[0].nodeType&&(e=o("<div>").html(e)),t.opts.filter&&(e=o("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){o(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(o(this).empty(),t.isLoaded=!1)}),t.$content=o(e).appendTo(t.$slide),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=o(this.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){!this.isClosing&&(t.isLoading=!1,t.isLoaded=!0,this.trigger("afterLoad",t),this.hideLoading(t),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=o(this.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&o('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),this.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,d=!1;if(e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(n===t.forcedDuration?a:t.forcedDuration,10),(t.isMoved||t.pos!==c.currPos||!a)&&(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(d=c.getThumbPos(t))||(e="fade"),"zoom"===e){(r=c.getFitPos(t)).scaleX=r.width/d.width,r.scaleY=r.height/d.height,delete r.width,delete r.height,"auto"==(s=t.opts.zoomOpacity)&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,r.opacity=1),o.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),o.fancybox.animate(t.$content,r,a,function(){c.complete()});return}if(c.updateSlide(t),!e){f(l),t.$content.removeClass("fancybox-is-hidden"),t.pos===c.currPos&&c.complete();return}o.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>=c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),o.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)},getThumbPos:function(n){var i,a=!1,s=n.opts.$thumb,r=s?s.offset():0;return r&&s[0].ownerDocument===e&&function(e){for(var n,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)("hidden"===o(i.parentElement).css("overflow")||"auto"===o(i.parentElement).css("overflow"))&&s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return(n=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),o=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&o>0}))&&a.bottom>0&&a.right>0&&a.left<o(t).width()&&a.top<o(t).height()}(s)&&(i=this.$refs.stage.offset(),a={top:r.top-i.top+parseFloat(s.css("border-top-width")||0),left:r.left-i.left+parseFloat(s.css("border-left-width")||0),width:s.width(),height:s.height(),scaleX:1,scaleY:1}),a},complete:function(){var t=this,n=t.current,i={};!n.isMoved&&n.isLoaded&&!n.isComplete&&(n.isComplete=!0,n.$slide.siblings().trigger("onReset"),t.preload("inline"),f(n.$slide),n.$slide.addClass("fancybox-slide--complete"),o.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?i[n.pos]=n:n&&(o.fancybox.stop(n.$slide),n.$slide.off().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),n.$slide.find("video,audio").first().trigger("play"),(o(e.activeElement).is("[disabled]")||n.opts.autoFocus&&!("image"==n.type||"iframe"===n.type))&&t.focus())},preload:function(t){var e=this.slides[this.currPos+1],o=this.slides[this.currPos-1];e&&e.type===t&&this.loadSlide(e),o&&o.type===t&&this.loadSlide(o)},focus:function(){var t,e=this.current;!this.isClosing&&(e&&e.isComplete&&!(t=e.$slide.find("input[autofocus]:enabled:visible:first")).length&&(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),(t=t&&t.length?t:this.$refs.container).focus())},activate:function(){var t=this;o(".fancybox-container").each(function(){var e=o(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var n,i,a,s,r,c,p=this,u=p.current,h=function(){p.cleanUp(t)};return!p.isClosing&&((p.isClosing=!0,!1===p.trigger("beforeClose",t))?(p.isClosing=!1,l(function(){p.update()}),!1):(p.removeEvents(),u.timouts&&clearTimeout(u.timouts),a=u.$content,n=u.opts.animationEffect,i=o.isNumeric(e)?e:n?u.opts.animationDuration:0,u.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),u.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(u),p.hideControls(),p.updateCursor(),"zoom"!==n||!0!==t&&a&&i&&"image"===u.type&&!u.hasError&&(c=p.getThumbPos(u))||(n="fade"),"zoom"===n)?(o.fancybox.stop(a),(r=o.fancybox.getTranslate(a)).width=r.width*r.scaleX,r.height=r.height*r.scaleY,"auto"==(s=u.opts.zoomOpacity)&&(s=Math.abs(u.width/u.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,o.fancybox.setTranslate(u.$content,r),f(u.$content),o.fancybox.animate(u.$content,c,i,h),!0):(n&&i?!0===t?setTimeout(h,i):o.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+n,i,h):h(),!0))},cleanUp:function(t){var n,i,a=this,r=o("body");a.current.$slide.trigger("onReset"),a.$refs.container.empty().remove(),a.trigger("afterClose",t),a.$lastFocus&&a.current.opts.backFocus&&a.$lastFocus.focus(),a.current=null,(n=o.fancybox.getInstance())?n.activate():(s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft),r.removeClass("fancybox-active compensate-for-scrollbar"),r.hasClass("fancybox-iosfix")&&(i=parseInt(e.body.style.top,10),r.removeClass("fancybox-iosfix").css("top","").scrollTop(-1*i)),o("#fancybox-style-noscroll").remove())},trigger:function(t,e){var n,i=Array.prototype.slice.call(arguments,1),a=e&&e.opts?e:this.current;if(a?i.unshift(a):a=this,i.unshift(this),o.isFunction(a.opts[t])&&(n=a.opts[t].apply(a,i)),!1===n)return n;"afterClose"!==t&&this.$refs?this.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(t){var e=this,o=e.current,n=o.index,i=o.opts.caption,a=e.$refs.container,s=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(n+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&n<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&n>=e.group.length-1),"image"===o.type?a.find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,o=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,o.toggleClass("fancybox-show-toolbar",!!(e.toolbar&&e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?o.addClass("fancybox-show-caption "):o.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),o.fancybox={version:"3.2.10",defaults:a,getInstance:function(t){var e=o('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),n=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===o.type(t)?e[t].apply(e,n):"function"===o.type(t)&&t.apply(e,n),e)},open:function(t,e,o){return new p(t,e,o)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:n!==e.createTouch&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(i=e.createElement("div"),t.getComputedStyle&&t.getComputedStyle(i).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)),getTranslate:function(t){var e;if(!t||!t.length)return!1;if((e=(e=t.eq(0).css("transform"))&&-1!==e.indexOf("matrix")?(e=(e=e.split("(")[1]).split(")")[0]).split(","):[]).length)e=(e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]]).map(parseFloat);else{e=[0,0,1,1];var o=/\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var o="",i={};if(t&&e)return(n!==e.left||n!==e.top)&&(o=(n===e.left?t.position().left:e.left)+"px, "+(n===e.top?t.position().top:e.top)+"px",o=this.use3d?"translate3d("+o+", 0px)":"translate("+o+")"),n!==e.scaleX&&n!==e.scaleY&&(o=(o.length?o+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),o.length&&(i.transform=o),n!==e.opacity&&(i.opacity=e.opacity),n!==e.width&&(i.width=e.width),n!==e.height&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){o.isFunction(i)&&(a=i,i=null),o.isPlainObject(e)||t.removeAttr("style"),t.on(d,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(o.fancybox.stop(t),o.isPlainObject(e)?(n!==e.scaleX&&n!==e.scaleY&&(t.css("transition-duration",""),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,o.fancybox.setTranslate(t,e)),!1===s&&t.removeAttr("style")):!0!==s&&t.removeClass(e),o.isFunction(a)&&a(i))}),o.isNumeric(i)&&t.css("transition-duration",i+"ms"),o.isPlainObject(e)?o.fancybox.setTranslate(t,e):t.addClass(e),e.scaleX&&t.hasClass("fancybox-image-wrap")&&t.parent().addClass("fancybox-is-scaling"),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.hasClass("fancybox-image-wrap")&&t.parent().removeClass("fancybox-is-scaling")}},o.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?o("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},u):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},u),this},r.on("click.fb-start","[data-fancybox]",u)}function u(t){var e=o(t.currentTarget),n=t.data?t.data.options:{},i=e.attr("data-fancybox")||"",a=0,s=[];!t.isDefaultPrevented()&&(t.preventDefault(),i?(a=(s=(s=n.selector?o(n.selector):t.data?t.data.items:[]).length?s.filter('[data-fancybox="'+i+'"]'):o('[data-fancybox="'+i+'"]')).index(e))<0&&(a=0):s=[e],o.fancybox.open(s,n,a))}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,o,n){if(e)return n=n||"","object"===t.type(n)&&(n=t.param(n,!0)),t.each(o,function(t,o){e=e.replace("$"+t,o||"")}),n.length&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},o={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(n,i,a){var s,r,c,l,d,f,p,u=a.src||"",h=!1;s=t.extend(!0,{},o,a.opts.media),t.each(s,function(o,n){if(c=u.match(n.matcher)){if(h=n.type,f={},n.paramPlace&&c[n.paramPlace]){"?"==(d=c[n.paramPlace])[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(f[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},n.params,a.opts[o],f),u="function"===t.type(n.url)?n.url.call(this,c,l,a):e(n.url,c,l),r="function"===t.type(n.thumb)?n.thumb.call(this,c,l,a):e(n.thumb,c),"vimeo"===o&&(u=u.replace("&%23","#")),!1}}),h?(a.src=u,a.type=h,a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),a.contentProvider=p,a.opts.slideClass+=" fancybox-slide--"+("gmap_place"==p||"gmap_search"==p?"map":"video"))):u&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var o=function(t){this.instance=t,this.init()};e.extend(o.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(!0===t||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){this.isActive?this.stop():this.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new o(e))},"beforeShow.fb":function(t,e,o,n){var i=e&&e.SlideShow;n?i&&o.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,o){var n=e&&e.SlideShow;n&&n.isActive&&n.set()},"afterKeydown.fb":function(o,n,i,a,s){var r=n&&n.SlideShow;r&&i.opts.slideShow&&(80===s||32===s)&&!e(t.activeElement).is("button,a,input")&&(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var o=e&&e.SlideShow;o&&o.stop()}}),e(t).on("visibilitychange",function(){var o=e.fancybox.getInstance(),n=o&&o.SlideShow;n&&n.isActive&&(t.hidden?n.clear():n.set())})}(document,window.jQuery||jQuery);