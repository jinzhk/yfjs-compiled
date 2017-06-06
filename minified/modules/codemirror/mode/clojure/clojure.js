!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("clojure",function(a){function b(a){for(var b={},c=a.split(" "),d=0;d<c.length;++d)b[c[d]]=!0;return b}function c(a,b,c){this.indent=a,this.type=b,this.prev=c}function d(a,b,d){a.indentStack=new c(b,d,a.indentStack)}function e(a){a.indentStack=a.indentStack.prev}function f(a,b){return"0"===a&&b.eat(/x/i)?(b.eatWhile(q.hex),!0):("+"!=a&&"-"!=a||!q.digit.test(b.peek())||(b.eat(q.sign),a=b.next()),!!q.digit.test(a)&&(b.eat(a),b.eatWhile(q.digit),"."==b.peek()&&(b.eat("."),b.eatWhile(q.digit)),b.eat(q.exponent)&&(b.eat(q.sign),b.eatWhile(q.digit)),!0))}function g(a){var b=a.next();b&&b.match(/[a-z]/)&&a.match(/[a-z]+/,!0)||"u"===b&&a.match(/[0-9a-z]{4}/i,!0)}var h="string",i="atom",j="bracket",k=a.indentUnit||2,l=a.indentUnit||2,m=b("true false nil"),n=b("defn defn- def def- defonce defmulti defmethod defmacro defstruct deftype defprotocol defrecord defproject deftest slice defalias defhinted defmacro- defn-memo defnk defnk defonce- defunbound defunbound- defvar defvar- let letfn do case cond condp for loop recur when when-not when-let when-first if if-let if-not . .. -> ->> doto and or dosync doseq dotimes dorun doall load import unimport ns in-ns refer try catch finally throw with-open with-local-vars binding gen-class gen-and-load-class gen-and-save-class handler-case handle"),o=b("* *' *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* *command-line-args* *compile-files* *compile-path* *compiler-options* *data-readers* *e *err* *file* *flush-on-newline* *fn-loader* *in* *math-context* *ns* *out* *print-dup* *print-length* *print-level* *print-meta* *print-readably* *read-eval* *source-path* *unchecked-math* *use-context-classloader* *verbose-defrecords* *warn-on-reflection* + +' - -' -> ->> ->ArrayChunk ->Vec ->VecNode ->VecSeq -cache-protocol-fn -reset-methods .. / < <= = == > >= EMPTY-NODE accessor aclone add-classpath add-watch agent agent-error agent-errors aget alength alias all-ns alter alter-meta! alter-var-root amap ancestors and apply areduce array-map aset aset-boolean aset-byte aset-char aset-double aset-float aset-int aset-long aset-short assert assoc assoc! assoc-in associative? atom await await-for await1 bases bean bigdec bigint biginteger binding bit-and bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left bit-shift-right bit-test bit-xor boolean boolean-array booleans bound-fn bound-fn* bound? butlast byte byte-array bytes case cast char char-array char-escape-string char-name-string char? chars chunk chunk-append chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? class class? clear-agent-errors clojure-version coll? comment commute comp comparator compare compare-and-set! compile complement concat cond condp conj conj! cons constantly construct-proxy contains? count counted? create-ns create-struct cycle dec dec' decimal? declare default-data-readers definline definterface defmacro defmethod defmulti defn defn- defonce defprotocol defrecord defstruct deftype delay delay? deliver denominator deref derive descendants destructure disj disj! dissoc dissoc! distinct distinct? doall dorun doseq dosync dotimes doto double double-array doubles drop drop-last drop-while empty empty? ensure enumeration-seq error-handler error-mode eval even? every-pred every? ex-data ex-info extend extend-protocol extend-type extenders extends? false? ffirst file-seq filter filterv find find-keyword find-ns find-protocol-impl find-protocol-method find-var first flatten float float-array float? floats flush fn fn? fnext fnil for force format frequencies future future-call future-cancel future-cancelled? future-done? future? gen-class gen-interface gensym get get-in get-method get-proxy-class get-thread-bindings get-validator group-by hash hash-combine hash-map hash-set identical? identity if-let if-not ifn? import in-ns inc inc' init-proxy instance? int int-array integer? interleave intern interpose into into-array ints io! isa? iterate iterator-seq juxt keep keep-indexed key keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list list* list? load load-file load-reader load-string loaded-libs locking long long-array longs loop macroexpand macroexpand-1 make-array make-hierarchy map map-indexed map? mapcat mapv max max-key memfn memoize merge merge-with meta method-sig methods min min-key mod munge name namespace namespace-munge neg? newline next nfirst nil? nnext not not-any? not-empty not-every? not= ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ns-refers ns-resolve ns-unalias ns-unmap nth nthnext nthrest num number? numerator object-array odd? or parents partial partition partition-all partition-by pcalls peek persistent! pmap pop pop! pop-thread-bindings pos? pr pr-str prefer-method prefers primitives-classnames print print-ctor print-dup print-method print-simple print-str printf println println-str prn prn-str promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot rand rand-int rand-nth range ratio? rational? rationalize re-find re-groups re-matcher re-matches re-pattern re-seq read read-line read-string realized? reduce reduce-kv reductions ref ref-history-count ref-max-history ref-min-history ref-set refer refer-clojure reify release-pending-sends rem remove remove-all-methods remove-method remove-ns remove-watch repeat repeatedly replace replicate require reset! reset-meta! resolve rest restart-agent resultset-seq reverse reversible? rseq rsubseq satisfies? second select-keys send send-off seq seq? seque sequence sequential? set set-error-handler! set-error-mode! set-validator! set? short short-array shorts shuffle shutdown-agents slurp some some-fn sort sort-by sorted-map sorted-map-by sorted-set sorted-set-by sorted? special-symbol? spit split-at split-with str string? struct struct-map subs subseq subvec supers swap! symbol symbol? sync take take-last take-nth take-while test the-ns thread-bound? time to-array to-array-2d trampoline transient tree-seq true? type unchecked-add unchecked-add-int unchecked-byte unchecked-char unchecked-dec unchecked-dec-int unchecked-divide-int unchecked-double unchecked-float unchecked-inc unchecked-inc-int unchecked-int unchecked-long unchecked-multiply unchecked-multiply-int unchecked-negate unchecked-negate-int unchecked-remainder-int unchecked-short unchecked-subtract unchecked-subtract-int underive unquote unquote-splicing update-in update-proxy use val vals var-get var-set var? vary-meta vec vector vector-of vector? when when-first when-let when-not while with-bindings with-bindings* with-in-str with-loading-context with-local-vars with-meta with-open with-out-str with-precision with-redefs with-redefs-fn xml-seq zero? zipmap *default-data-reader-fn* as-> cond-> cond->> reduced reduced? send-via set-agent-send-executor! set-agent-send-off-executor! some-> some->>"),p=b("ns fn def defn defmethod bound-fn if if-not case condp when while when-not when-first do future comment doto locking proxy with-open with-precision reify deftype defrecord defprotocol extend extend-protocol extend-type try catch let letfn binding loop for doseq dotimes when-let if-let defstruct struct-map assoc testing deftest handler-case handle dotrace deftrace"),q={digit:/\d/,digit_or_colon:/[\d:]/,hex:/[0-9a-f]/i,sign:/[+-]/,exponent:/e/i,keyword_char:/[^\s\(\[\;\)\]]/,symbol:/[\w*+!\-\._?:<>\/\xa1-\uffff]/};return{startState:function(){return{indentStack:null,indentation:0,mode:!1}},token:function(a,b){if(null==b.indentStack&&a.sol()&&(b.indentation=a.indentation()),a.eatSpace())return null;var c=null;switch(b.mode){case"string":for(var r,s=!1;null!=(r=a.next());){if('"'==r&&!s){b.mode=!1;break}s=!s&&"\\"==r}c=h;break;default:var t=a.next();if('"'==t)b.mode="string",c=h;else if("\\"==t)g(a),c="string-2";else if("'"!=t||q.digit_or_colon.test(a.peek()))if(";"==t)a.skipToEnd(),c="comment";else if(f(t,a))c="number";else if("("==t||"["==t||"{"==t){var u,v="",w=a.column();if("("==t)for(;null!=(u=a.eat(q.keyword_char));)v+=u;v.length>0&&(p.propertyIsEnumerable(v)||/^(?:def|with)/.test(v))?d(b,w+k,t):(a.eatSpace(),a.eol()||";"==a.peek()?d(b,w+l,t):d(b,w+a.current().length,t)),a.backUp(a.current().length-1),c=j}else if(")"==t||"]"==t||"}"==t)c=j,null!=b.indentStack&&b.indentStack.type==(")"==t?"(":"]"==t?"[":"{")&&e(b);else{if(":"==t)return a.eatWhile(q.symbol),i;a.eatWhile(q.symbol),c=n&&n.propertyIsEnumerable(a.current())?"keyword":o&&o.propertyIsEnumerable(a.current())?"builtin":m&&m.propertyIsEnumerable(a.current())?i:"variable"}else c=i}return c},indent:function(a){return null==a.indentStack?a.indentation:a.indentStack.indent},closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}}),a.defineMIME("text/x-clojure","clojure")});