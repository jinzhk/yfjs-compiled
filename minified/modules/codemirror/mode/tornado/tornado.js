!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("tornado:inner",function(){function a(a,c){a.eatWhile(/[^\{]/);var d=a.next();if("{"==d&&(d=a.eat(/\{|%|#/)))return c.tokenize=b(d),"tag"}function b(b){return"{"==b&&(b="}"),function(d,e){return d.next()==b&&d.eat("}")?(e.tokenize=a,"tag"):d.match(c)?"keyword":"#"==b?"comment":"string"}}var c=["and","as","assert","autoescape","block","break","class","comment","context","continue","datetime","def","del","elif","else","end","escape","except","exec","extends","false","finally","for","from","global","if","import","in","include","is","json_encode","lambda","length","linkify","load","module","none","not","or","pass","print","put","raise","raw","return","self","set","squeeze","super","true","try","url_escape","while","with","without","xhtml_escape","yield"];return c=new RegExp("^(("+c.join(")|(")+"))\\b"),{startState:function(){return{tokenize:a}},token:function(a,b){return b.tokenize(a,b)}}}),a.defineMode("tornado",function(b){var c=a.getMode(b,"text/html"),d=a.getMode(b,"tornado:inner");return a.overlayMode(c,d)}),a.defineMIME("text/x-tornado","tornado")});