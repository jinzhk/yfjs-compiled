!function(){var a=window.parent;dialog=a.$EDITORUI[window.frameElement.id.replace(/_iframe$/,"")],editor=dialog.editor,UE=a.UE,domUtils=UE.dom.domUtils,utils=UE.utils,browser=UE.browser,ajax=UE.ajax,$G=function(a){return document.getElementById(a)},$focus=function(a){setTimeout(function(){if(browser.ie){var b=a.createTextRange();b.collapse(!1),b.select()}else a.focus()},0)},utils.loadFile(document,{href:editor.options.themePath+editor.options.theme+"/dialogbase.css?cache="+Math.random(),tag:"link",type:"text/css",rel:"stylesheet"}),lang=editor.getLang(dialog.className.split("-")[2]),lang&&domUtils.on(window,"load",function(){var a=editor.options.langPath+editor.options.lang+"/images/";for(var b in lang.static){var c=$G(b);if(c){var d=c.tagName,e=lang.static[b];switch(e.src&&(e=utils.extend({},e,!1),e.src=a+e.src),e.style&&(e=utils.extend({},e,!1),e.style=e.style.replace(/url\s*\(/g,"url("+a)),d.toLowerCase()){case"var":c.parentNode.replaceChild(document.createTextNode(e),c);break;case"select":for(var f,g=c.options,h=0;f=g[h];)f.innerHTML=e.options[h++];for(var i in e)"options"!=i&&c.setAttribute(i,e[i]);break;default:domUtils.setAttributes(c,e)}}}})}();