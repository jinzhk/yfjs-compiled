define("echarts2/chart/treemap",["require","./base","zrender2/tool/area","zrender2/shape/Rectangle","zrender2/shape/Text","zrender2/shape/Line","../layout/TreeMap","../data/Tree","../config","../util/ecData","zrender2/config","zrender2/tool/event","zrender2/tool/util","zrender2/tool/color","../chart"],function(a){function b(a,b,d,e,f){c.call(this,a,b,d,e,f),this.refresh(e);var g=this;g._onclick=function(a){return g.__onclick(a)},g.zr.on(l.EVENT.CLICK,g._onclick)}var c=a("./base"),d=a("zrender2/tool/area"),e=a("zrender2/shape/Rectangle"),f=a("zrender2/shape/Text"),g=a("zrender2/shape/Line"),h=a("../layout/TreeMap"),i=a("../data/Tree"),j=a("../config");j.treemap={zlevel:0,z:1,calculable:!1,clickable:!0,center:["50%","50%"],size:["80%","80%"],root:"",itemStyle:{normal:{label:{show:!0,x:5,y:12,textStyle:{align:"left",color:"#000",fontFamily:"Arial",fontSize:13,fontStyle:"normal",fontWeight:"normal"}},breadcrumb:{show:!0,textStyle:{}},borderWidth:1,borderColor:"#ccc",childBorderWidth:1,childBorderColor:"#ccc"},emphasis:{}}};var k=a("../util/ecData"),l=a("zrender2/config"),m=(a("zrender2/tool/event"),a("zrender2/tool/util")),n=a("zrender2/tool/color");return b.prototype={type:j.CHART_TYPE_TREEMAP,refresh:function(a){this.clear(),a&&(this.option=a,this.series=this.option.series),this._treesMap={};for(var b=this.series,c=this.component.legend,d=0;d<b.length;d++)if(b[d].type===j.CHART_TYPE_TREEMAP){b[d]=this.reformOption(b[d]);var e=b[d].name||"";if(this.selectedMap[e]=!c||c.isSelected(e),!this.selectedMap[e])continue;this._buildSeries(b[d],d)}},_buildSeries:function(a,b){var c=i.fromOptionData(a.name,a.data);this._treesMap[b]=c;var d=a.root&&c.getNodeById(a.root)||c.root;this._buildTreemap(d,b)},_buildTreemap:function(a,b){for(var c=this.shapeList,d=0;d<c.length;){var e=c[d];k.get(e,"seriesIndex")===b?(this.zr.delShape(c[d]),c.splice(d,1)):d++}for(var f=c.length,g=this.series[b],i=g.itemStyle,j=this.parsePercent(g.size[0],this.zr.getWidth())||400,l=this.parsePercent(g.size[1],this.zr.getHeight())||500,m=this.parseCenter(this.zr,g.center),n=m[0]-.5*j,o=m[1]-.5*l,p=j*l,q=0,r=[],s=a.children,d=0;d<s.length;d++)q+=s[d].data.value;for(var t=0;t<s.length;t++)r.push(s[t].data.value*p/q);for(var u=new h({x:n,y:o,width:j,height:l}),v=u.run(r),w=0;w<v.length;w++){var x=s[w].data,y=v[w],z=[x.itemStyle,i],A=this.deepMerge(z);A.normal.color||(A.normal.color=this.zr.getColor(w)),A.emphasis.color||(A.emphasis.color=A.normal.color),this._buildItem(x,A,y,b,w),x.children&&this._buildChildrenTreemap(x.children,A,y,b)}this.query(g,"itemStyle.normal.breadcrumb.show")&&this._buildBreadcrumb(a,b,n,o+l);for(var d=f;d<c.length;d++)this.zr.addShape(c[d])},_buildItem:function(a,b,c,d,e){var f=this.series,g=this.getRectangle(a,b,c);k.pack(g,f[d],d,a,e,a.name),this.shapeList.push(g)},getRectangle:function(a,b,c){var d=b.emphasis,f=b.normal,g=this.getLabel(b,c,a.name,a.value),h=this.option.hoverable,i={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:h,clickable:!0,style:m.merge({x:c.x,y:c.y,width:c.width,height:c.height,brushType:"both",color:f.color,lineWidth:f.borderWidth,strokeColor:f.borderColor},g.style,!0),highlightStyle:m.merge({color:d.color,lineWidth:d.borderWidth,strokeColor:d.borderColor},g.highlightStyle,!0)};return new e(i)},getLabel:function(a,b,c,e){var f=a.normal.label.textStyle,g=[a.emphasis.label.textStyle,f],h=this.deepMerge(g),i=a.normal.label.formatter,j=this.getLabelText(c,e,i),k=this.getFont(f),l=d.getTextWidth(j,k),m=d.getTextHeight(j,k),n=this.deepQuery([a.emphasis,a.normal],"label.formatter"),o=this.getLabelText(c,e,n),p=this.getFont(h),q=d.getTextWidth(j,p),r=d.getTextHeight(j,p);return a.normal.label.show?(a.normal.label.x+l>b.width||a.normal.label.y+m>b.height)&&(j=""):j="",a.emphasis.label.show?(h.x+q>b.width||h.y+r>b.height)&&(o=""):o="",{style:{textX:b.x+a.normal.label.x,textY:b.y+a.normal.label.y,text:j,textPosition:"specific",textColor:f.color,textFont:k},highlightStyle:{textX:b.x+a.emphasis.label.x,textY:b.y+a.emphasis.label.y,text:o,textColor:h.color,textPosition:"specific"}}},getLabelText:function(a,b,c){return c?"function"==typeof c?c.call(this.myChart,a,b):"string"==typeof c?(c=c.replace("{b}","{b0}").replace("{c}","{c0}"),c=c.replace("{b0}",a).replace("{c0}",b)):void 0:a},_buildChildrenTreemap:function(a,b,c,d){for(var e=c.width*c.height,f=0,g=[],i=0;i<a.length;i++)f+=a[i].value;for(var j=0;j<a.length;j++)g.push(a[j].value*e/f);for(var l=new h({x:c.x,y:c.y,width:c.width,height:c.height}),m=l.run(g),n=b.normal.childBorderWidth,o=b.normal.childBorderColor,p=0;p<m.length;p++){var q=m[p],r=[];c.y.toFixed(2)!==q.y.toFixed(2)&&r.push(this._getLine(q.x,q.y,q.x+q.width,q.y,n,o)),c.x.toFixed(2)!==q.x.toFixed(2)&&r.push(this._getLine(q.x,q.y,q.x,q.y+q.height,n,o)),(c.y+c.height).toFixed(2)!==(q.y+q.height).toFixed(2)&&r.push(this._getLine(q.x,q.y+q.height,q.x+q.width,q.y+q.height,n,o)),(c.x+c.width).toFixed(2)!==(q.x+q.width).toFixed(2)&&r.push(this._getLine(q.x+q.width,q.y,q.x+q.width,q.y+q.height,n,o));for(var s=0;s<r.length;s++)k.set(r[s],"seriesIndex",d),this.shapeList.push(r[s])}},_getLine:function(a,b,c,d,e,f){var h={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:a,yStart:b,xEnd:c,yEnd:d,lineWidth:e,strokeColor:f}};return new g(h)},_buildBreadcrumb:function(a,b,c,d){for(var e=[],g=a;g;)e.unshift(g.data.name),g=g.parent;for(var h=this.series[b],i=this.query(h,"itemStyle.normal.breadcrumb.textStyle")||{},j=this.query(h,"itemStyle.emphasis.breadcrumb.textStyle")||{},l={y:d+10,textBaseline:"top",textAlign:"left",color:i.color,textFont:this.getFont(i)},o={brushType:"fill",color:j.color||n.lift(i.color,-.3),textFont:this.getFont(j)},p=0;p<e.length;p++){var q=new f({zlevel:this.getZlevelBase(),z:this.getZBase(),style:m.merge({x:c,text:e[p]+(e.length-1-p?" > ":"")},l),clickable:!0,highlightStyle:o});k.set(q,"seriesIndex",b),k.set(q,"name",e[p]),c+=q.getRect(q.style).width,this.shapeList.push(q)}},__onclick:function(a){var b=a.target;if(b){var c=k.get(b,"seriesIndex"),d=k.get(b,"name"),e=this._treesMap[c],f=e.getNodeById(d);f&&f.children.length&&this._buildTreemap(f,c)}}},m.inherits(b,c),a("../chart").define("treemap",b),b}),define("echarts2/layout/TreeMap",["require"],function(a){function b(a){a.x,a.y,a.width,a.height;this.x=a.x,this.y=a.y,this.width=a.width,this.height=a.height}return b.prototype.run=function(a){var b=[];return this._squarify(a,{x:this.x,y:this.y,width:this.width,height:this.height},b),b},b.prototype._squarify=function(a,b,c){var d="VERTICAL",e=b.width,f=b.height;b.width<b.height&&(d="HORIZONTAL",e=b.height,f=b.width);for(var g=this._getShapeListInAbstractRow(a,e,f),h=0;h<g.length;h++){g[h].x=0,g[h].y=0;for(var i=0;i<h;i++)g[h].y+=g[i].height}var j={};if("VERTICAL"==d){for(var k=0;k<g.length;k++)c.push({x:g[k].x+b.x,y:g[k].y+b.y,width:g[k].width,height:g[k].height});j={x:g[0].width+b.x,y:b.y,width:b.width-g[0].width,height:b.height}}else{for(var l=0;l<g.length;l++)c.push({x:g[l].y+b.x,y:g[l].x+b.y,width:g[l].height,height:g[l].width});j={x:b.x,y:b.y+g[0].width,width:b.width,height:b.height-g[0].width}}var m=a.slice(g.length);0!==m.length&&this._squarify(m,j,c)},b.prototype._getShapeListInAbstractRow=function(a,b,c){if(1===a.length)return[{width:b,height:c}];for(var d=1;d<a.length;d++){var e=this._placeFixedNumberRectangles(a.slice(0,d),b,c),f=this._placeFixedNumberRectangles(a.slice(0,d+1),b,c);if(this._isFirstBetter(e,f))return e}},b.prototype._placeFixedNumberRectangles=function(a,b,c){for(var d=a.length,e=[],f=0,g=0;g<a.length;g++)f+=a[g];for(var h=f/c,i=0;i<d;i++){var j=c*a[i]/f;e.push({width:h,height:j})}return e},b.prototype._isFirstBetter=function(a,b){var c=a[0].height/a[0].width;c=c>1?1/c:c;var d=b[0].height/b[0].width;return d=d>1?1/d:d,Math.abs(c-1)<=Math.abs(d-1)},b});