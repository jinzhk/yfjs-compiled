function clickHandler(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d].className="";c.className="focus";for(var f=c.getAttribute("tabSrc"),g=0,h=b.length;g<h;g++){var i=b[g],j=i.getAttribute("id");i.style.zIndex=j!=f?1:200}}function switchTab(a){for(var b=$G(a).children,c=b[0].children,d=b[1].children,e=0,f=c.length;e<f;e++){var g=c[e];"focus"===g.className&&clickHandler(c,d,g),g.onclick=function(){clickHandler(c,d,this)}}}function getMatchCase(a){return!!$G(a).checked}editor.firstForSR=0,editor.currentRangeForSR=null,$G("searchtab").onmousedown=function(){$G("search-msg").innerHTML="",$G("replace-msg").innerHTML=""},$G("nextFindBtn").onclick=function(a,b,c){var d,e=$G("findtxt").value;if(!e)return!1;if(d={searchStr:e,dir:1,casesensitive:getMatchCase("matchCase")},!frCommond(d)){var f=editor.selection.getRange().createBookmark();$G("search-msg").innerHTML=lang.getEnd,editor.selection.getRange().moveToBookmark(f).select()}},$G("nextReplaceBtn").onclick=function(a,b,c){var d,e=$G("findtxt1").value;if(!e)return!1;d={searchStr:e,dir:1,casesensitive:getMatchCase("matchCase1")},frCommond(d)},$G("preFindBtn").onclick=function(a,b,c){var d,e=$G("findtxt").value;if(!e)return!1;d={searchStr:e,dir:-1,casesensitive:getMatchCase("matchCase")},frCommond(d)||($G("search-msg").innerHTML=lang.getStart)},$G("preReplaceBtn").onclick=function(a,b,c){var d,e=$G("findtxt1").value;if(!e)return!1;d={searchStr:e,dir:-1,casesensitive:getMatchCase("matchCase1")},frCommond(d)},$G("repalceBtn").onclick=function(){var a,b=$G("findtxt1").value.replace(/^\s|\s$/g,""),c=$G("replacetxt").value.replace(/^\s|\s$/g,"");return!!b&&(!(b==c||!getMatchCase("matchCase1")&&b.toLowerCase()==c.toLowerCase())&&(a={searchStr:b,dir:1,casesensitive:getMatchCase("matchCase1"),replaceStr:c},void frCommond(a)))},$G("repalceAllBtn").onclick=function(){var a,b=$G("findtxt1").value.replace(/^\s|\s$/g,""),c=$G("replacetxt").value.replace(/^\s|\s$/g,"");if(!b)return!1;if(b==c||!getMatchCase("matchCase1")&&b.toLowerCase()==c.toLowerCase())return!1;a={searchStr:b,casesensitive:getMatchCase("matchCase1"),replaceStr:c,all:!0};var d=frCommond(a);d&&($G("replace-msg").innerHTML=lang.countMsg.replace("{#count}",d))};var frCommond=function(a){return editor.execCommand("searchreplace",a)};switchTab("searchtab");