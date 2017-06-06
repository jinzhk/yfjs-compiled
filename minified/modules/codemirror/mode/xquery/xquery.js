!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("xquery",function(){function a(a,b,c){return b.tokenize=c,c(a,b)}function b(b,g){var l=b.next(),n=!1,p=o(b);if("<"==l){if(b.match("!--",!0))return a(b,g,h);if(b.match("![CDATA",!1))return g.tokenize=i,"tag";if(b.match("?",!1))return a(b,g,j);var t=b.eat("/");b.eatSpace();for(var u,v="";u=b.eat(/[^\s\u00a0=<>\"\'\/?]/);)v+=u;return a(b,g,f(v,t))}if("{"==l)return q(g,{type:"codeblock"}),null;if("}"==l)return r(g),null;if(k(g))return">"==l?"tag":"/"==l&&b.eat(">")?(r(g),"tag"):"variable";if(/\d/.test(l))return b.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===l&&b.eat(":"))return q(g,{type:"comment"}),a(b,g,c);if(p||'"'!==l&&"'"!==l){if("$"===l)return a(b,g,e);if(":"===l&&b.eat("="))return"keyword";if("("===l)return q(g,{type:"paren"}),null;if(")"===l)return r(g),null;if("["===l)return q(g,{type:"bracket"}),null;if("]"===l)return r(g),null;var w=s.propertyIsEnumerable(l)&&s[l];if(p&&'"'===l)for(;'"'!==b.next(););if(p&&"'"===l)for(;"'"!==b.next(););w||b.eatWhile(/[\w\$_-]/);var x=b.eat(":");!b.eat(":")&&x&&b.eatWhile(/[\w\$_-]/),b.match(/^[ \t]*\(/,!1)&&(n=!0);var y=b.current();return w=s.propertyIsEnumerable(y)&&s[y],n&&!w&&(w={type:"function_call",style:"variable def"}),m(g)?(r(g),"variable"):("element"!=y&&"attribute"!=y&&"axis_specifier"!=w.type||q(g,{type:"xmlconstructor"}),w?w.style:"variable")}return a(b,g,d(l))}function c(a,b){for(var c,d=!1,e=!1,f=0;c=a.next();){if(")"==c&&d){if(!(f>0)){r(b);break}f--}else":"==c&&e&&f++;d=":"==c,e="("==c}return"comment"}function d(a,c){return function(e,f){var g;if(n(f)&&e.current()==a)return r(f),c&&(f.tokenize=c),"string";if(q(f,{type:"string",name:a,tokenize:d(a,c)}),e.match("{",!1)&&l(f))return f.tokenize=b,"string";for(;g=e.next();){if(g==a){r(f),c&&(f.tokenize=c);break}if(e.match("{",!1)&&l(f))return f.tokenize=b,"string"}return"string"}}function e(a,c){var d=/[\w\$_-]/;if(a.eat('"')){for(;'"'!==a.next(););a.eat(":")}else a.eatWhile(d),a.match(":=",!1)||a.eat(":");return a.eatWhile(d),c.tokenize=b,"variable"}function f(a,c){return function(d,e){return d.eatSpace(),c&&d.eat(">")?(r(e),e.tokenize=b,"tag"):(d.eat("/")||q(e,{type:"tag",name:a,tokenize:b}),d.eat(">")?(e.tokenize=b,"tag"):(e.tokenize=g,"tag"))}}function g(c,e){var f=c.next();return"/"==f&&c.eat(">")?(l(e)&&r(e),k(e)&&r(e),"tag"):">"==f?(l(e)&&r(e),"tag"):"="==f?null:'"'==f||"'"==f?a(c,e,d(f,g)):(l(e)||q(e,{type:"attribute",tokenize:g}),c.eat(/[a-zA-Z_:]/),c.eatWhile(/[-a-zA-Z0-9_:.]/),c.eatSpace(),(c.match(">",!1)||c.match("/",!1))&&(r(e),e.tokenize=b),"attribute")}function h(a,c){for(var d;d=a.next();)if("-"==d&&a.match("->",!0))return c.tokenize=b,"comment"}function i(a,c){for(var d;d=a.next();)if("]"==d&&a.match("]",!0))return c.tokenize=b,"comment"}function j(a,c){for(var d;d=a.next();)if("?"==d&&a.match(">",!0))return c.tokenize=b,"comment meta"}function k(a){return p(a,"tag")}function l(a){return p(a,"attribute")}function m(a){return p(a,"xmlconstructor")}function n(a){return p(a,"string")}function o(a){return'"'===a.current()?a.match(/^[^\"]+\"\:/,!1):"'"===a.current()&&a.match(/^[^\"]+\'\:/,!1)}function p(a,b){return a.stack.length&&a.stack[a.stack.length-1].type==b}function q(a,b){a.stack.push(b)}function r(a){a.stack.pop();var c=a.stack.length&&a.stack[a.stack.length-1].tokenize;a.tokenize=c||b}var s=function(){function a(a){return{type:a,style:"keyword"}}for(var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"},g={type:"punctuation",style:null},h={type:"axis_specifier",style:"qualifier"},i={if:b,switch:b,while:b,for:b,else:c,then:c,try:c,finally:c,catch:c,element:d,attribute:d,let:d,implements:d,import:d,module:d,namespace:d,return:d,super:d,this:d,throws:d,where:d,private:d,",":g,null:f,"fn:false()":f,"fn:true()":f},j=["after","ancestor","ancestor-or-self","and","as","ascending","assert","attribute","before","by","case","cast","child","comment","declare","default","define","descendant","descendant-or-self","descending","document","document-node","element","else","eq","every","except","external","following","following-sibling","follows","for","function","if","import","in","instance","intersect","item","let","module","namespace","node","node","of","only","or","order","parent","precedes","preceding","preceding-sibling","processing-instruction","ref","return","returns","satisfies","schema","schema-element","self","some","sortby","stable","text","then","to","treat","typeswitch","union","variable","version","where","xquery","empty-sequence"],k=0,l=j.length;k<l;k++)i[j[k]]=a(j[k]);for(var m=["xs:string","xs:float","xs:decimal","xs:double","xs:integer","xs:boolean","xs:date","xs:dateTime","xs:time","xs:duration","xs:dayTimeDuration","xs:time","xs:yearMonthDuration","numeric","xs:hexBinary","xs:base64Binary","xs:anyURI","xs:QName","xs:byte","xs:boolean","xs:anyURI","xf:yearMonthDuration"],k=0,l=m.length;k<l;k++)i[m[k]]=f;for(var n=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],k=0,l=n.length;k<l;k++)i[n[k]]=e;for(var o=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],k=0,l=o.length;k<l;k++)i[o[k]]=h;return i}();return{startState:function(){return{tokenize:b,cc:[],stack:[]}},token:function(a,b){return a.eatSpace()?null:b.tokenize(a,b)},blockCommentStart:"(:",blockCommentEnd:":)"}}),a.defineMIME("application/xquery","xquery")});