define("echarts2/chart/gauge",["require","./base","../util/shape/GaugePointer","zrender2/shape/Text","zrender2/shape/Line","zrender2/shape/Rectangle","zrender2/shape/Circle","zrender2/shape/Sector","../config","../util/ecData","../util/accMath","zrender2/tool/util","../chart"],function(a){function b(a,b,d,e,f){c.call(this,a,b,d,e,f),this.refresh(e)}var c=a("./base"),d=a("../util/shape/GaugePointer"),e=a("zrender2/shape/Text"),f=a("zrender2/shape/Line"),g=a("zrender2/shape/Rectangle"),h=a("zrender2/shape/Circle"),i=a("zrender2/shape/Sector"),j=a("../config");j.gauge={zlevel:0,z:2,center:["50%","50%"],clickable:!0,legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#228b22"],[.8,"#48b"],[1,"#ff4500"]],width:30}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,textStyle:{color:"auto"}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},pointer:{show:!0,length:"80%",width:8,color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:[0,"40%"],textStyle:{color:"auto",fontSize:30}}};var k=a("../util/ecData"),l=a("../util/accMath"),m=a("zrender2/tool/util");return b.prototype={type:j.CHART_TYPE_GAUGE,_buildShape:function(){var a=this.series;this._paramsMap={},this.selectedMap={};for(var b=0,c=a.length;b<c;b++)a[b].type===j.CHART_TYPE_GAUGE&&(this.selectedMap[a[b].name]=!0,a[b]=this.reformOption(a[b]),this.legendHoverLink=a[b].legendHoverLink||this.legendHoverLink,this._buildSingleGauge(b),this.buildMark(b));this.addShapeList()},_buildSingleGauge:function(a){var b=this.series[a];this._paramsMap[a]={center:this.parseCenter(this.zr,b.center),radius:this.parseRadius(this.zr,b.radius),startAngle:b.startAngle.toFixed(2)-0,endAngle:b.endAngle.toFixed(2)-0},this._paramsMap[a].totalAngle=this._paramsMap[a].startAngle-this._paramsMap[a].endAngle,this._colorMap(a),this._buildAxisLine(a),this._buildSplitLine(a),this._buildAxisTick(a),this._buildAxisLabel(a),this._buildPointer(a),this._buildTitle(a),this._buildDetail(a)},_buildAxisLine:function(a){var b=this.series[a];if(b.axisLine.show)for(var c,d,e=b.min,f=b.max-e,g=this._paramsMap[a],h=g.center,i=g.startAngle,j=g.totalAngle,l=g.colorArray,m=b.axisLine.lineStyle,n=this.parsePercent(m.width,g.radius[1]),o=g.radius[1],p=o-n,q=i,r=0,s=l.length;r<s;r++)d=i-j*(l[r][0]-e)/f,c=this._getSector(h,p,o,d,q,l[r][1],m,b.zlevel,b.z),q=d,c._animationAdd="r",k.set(c,"seriesIndex",a),k.set(c,"dataIndex",r),this.shapeList.push(c)},_buildSplitLine:function(a){var b=this.series[a];if(b.splitLine.show)for(var c,d,e,g=this._paramsMap[a],h=b.splitNumber,i=b.min,j=b.max-i,k=b.splitLine,l=this.parsePercent(k.length,g.radius[1]),m=k.lineStyle,n=m.color,o=g.center,p=g.startAngle*Math.PI/180,q=g.totalAngle*Math.PI/180,r=g.radius[1],s=r-l,t=0;t<=h;t++)c=p-q/h*t,d=Math.sin(c),e=Math.cos(c),this.shapeList.push(new f({zlevel:b.zlevel,z:b.z+1,hoverable:!1,style:{xStart:o[0]+e*r,yStart:o[1]-d*r,xEnd:o[0]+e*s,yEnd:o[1]-d*s,strokeColor:"auto"===n?this._getColor(a,i+j/h*t):n,lineType:m.type,lineWidth:m.width,shadowColor:m.shadowColor,shadowBlur:m.shadowBlur,shadowOffsetX:m.shadowOffsetX,shadowOffsetY:m.shadowOffsetY}}))},_buildAxisTick:function(a){var b=this.series[a];if(b.axisTick.show)for(var c,d,e,g=this._paramsMap[a],h=b.splitNumber,i=b.min,j=b.max-i,k=b.axisTick,l=k.splitNumber,m=this.parsePercent(k.length,g.radius[1]),n=k.lineStyle,o=n.color,p=g.center,q=g.startAngle*Math.PI/180,r=g.totalAngle*Math.PI/180,s=g.radius[1],t=s-m,u=0,v=h*l;u<=v;u++)u%l!=0&&(c=q-r/v*u,d=Math.sin(c),e=Math.cos(c),this.shapeList.push(new f({zlevel:b.zlevel,z:b.z+1,hoverable:!1,style:{xStart:p[0]+e*s,yStart:p[1]-d*s,xEnd:p[0]+e*t,yEnd:p[1]-d*t,strokeColor:"auto"===o?this._getColor(a,i+j/v*u):o,lineType:n.type,lineWidth:n.width,shadowColor:n.shadowColor,shadowBlur:n.shadowBlur,shadowOffsetX:n.shadowOffsetX,shadowOffsetY:n.shadowOffsetY}})))},_buildAxisLabel:function(a){var b=this.series[a];if(b.axisLabel.show)for(var c,d,f,g,h=b.splitNumber,i=b.min,j=b.max-i,k=b.axisLabel.textStyle,m=this.getFont(k),n=k.color,o=this._paramsMap[a],p=o.center,q=o.startAngle,r=o.totalAngle,s=o.radius[1]-this.parsePercent(b.splitLine.length,o.radius[1])-5,t=0;t<=h;t++)g=l.accAdd(i,l.accMul(l.accDiv(j,h),t)),c=q-r/h*t,d=Math.sin(c*Math.PI/180),f=Math.cos(c*Math.PI/180),c=(c+360)%360,this.shapeList.push(new e({zlevel:b.zlevel,z:b.z+1,hoverable:!1,style:{x:p[0]+f*s,y:p[1]-d*s,color:"auto"===n?this._getColor(a,g):n,text:this._getLabelText(b.axisLabel.formatter,g),textAlign:c>=110&&c<=250?"left":c<=70||c>=290?"right":"center",textBaseline:c>=10&&c<=170?"top":c>=190&&c<=350?"bottom":"middle",textFont:m,shadowColor:k.shadowColor,shadowBlur:k.shadowBlur,shadowOffsetX:k.shadowOffsetX,shadowOffsetY:k.shadowOffsetY}}))},_buildPointer:function(a){var b=this.series[a];if(b.pointer.show){var c=b.max-b.min,e=b.pointer,f=this._paramsMap[a],g=this.parsePercent(e.length,f.radius[1]),i=this.parsePercent(e.width,f.radius[1]),j=f.center,l=this._getValue(a);l=l<b.max?l:b.max;var m=(f.startAngle-f.totalAngle/c*(l-b.min))*Math.PI/180,n="auto"===e.color?this._getColor(a,l):e.color,o=new d({zlevel:b.zlevel,z:b.z+1,clickable:this.query(b,"clickable"),style:{x:j[0],y:j[1],r:g,startAngle:f.startAngle*Math.PI/180,angle:m,color:n,width:i,shadowColor:e.shadowColor,shadowBlur:e.shadowBlur,shadowOffsetX:e.shadowOffsetX,shadowOffsetY:e.shadowOffsetY},highlightStyle:{brushType:"fill",width:i>2?2:i/2,color:"#fff"}});k.pack(o,this.series[a],a,this.series[a].data[0],0,this.series[a].data[0].name,l),this.shapeList.push(o),this.shapeList.push(new h({zlevel:b.zlevel,z:b.z+2,hoverable:!1,style:{x:j[0],y:j[1],r:e.width/2.5,color:"#fff"}}))}},_buildTitle:function(a){var b=this.series[a];if(b.title.show){var c=b.data[0],d=null!=c.name?c.name:"";if(""!==d){var f=b.title,g=f.offsetCenter,h=f.textStyle,i=h.color,j=this._paramsMap[a],k=j.center[0]+this.parsePercent(g[0],j.radius[1]),l=j.center[1]+this.parsePercent(g[1],j.radius[1]);this.shapeList.push(new e({zlevel:b.zlevel,z:b.z+(Math.abs(k-j.center[0])+Math.abs(l-j.center[1])<2*h.fontSize?2:1),hoverable:!1,style:{x:k,y:l,color:"auto"===i?this._getColor(a):i,text:d,textAlign:"center",textFont:this.getFont(h),shadowColor:h.shadowColor,shadowBlur:h.shadowBlur,shadowOffsetX:h.shadowOffsetX,shadowOffsetY:h.shadowOffsetY}}))}}},_buildDetail:function(a){var b=this.series[a];if(b.detail.show){var c=b.detail,d=c.offsetCenter,e=c.backgroundColor,f=c.textStyle,h=f.color,i=this._paramsMap[a],j=this._getValue(a),k=i.center[0]-c.width/2+this.parsePercent(d[0],i.radius[1]),l=i.center[1]+this.parsePercent(d[1],i.radius[1]);this.shapeList.push(new g({zlevel:b.zlevel,z:b.z+(Math.abs(k+c.width/2-i.center[0])+Math.abs(l+c.height/2-i.center[1])<f.fontSize?2:1),hoverable:!1,style:{x:k,y:l,width:c.width,height:c.height,brushType:"both",color:"auto"===e?this._getColor(a,j):e,lineWidth:c.borderWidth,strokeColor:c.borderColor,shadowColor:c.shadowColor,shadowBlur:c.shadowBlur,shadowOffsetX:c.shadowOffsetX,shadowOffsetY:c.shadowOffsetY,text:this._getLabelText(c.formatter,j),textFont:this.getFont(f),textPosition:"inside",textColor:"auto"===h?this._getColor(a,j):h}}))}},_getValue:function(a){return this.getDataFromOption(this.series[a].data[0])},_colorMap:function(a){var b=this.series[a],c=b.min,d=b.max-c,e=b.axisLine.lineStyle.color;e instanceof Array||(e=[[1,e]]);for(var f=[],g=0,h=e.length;g<h;g++)f.push([e[g][0]*d+c,e[g][1]]);this._paramsMap[a].colorArray=f},_getColor:function(a,b){null==b&&(b=this._getValue(a));for(var c=this._paramsMap[a].colorArray,d=0,e=c.length;d<e;d++)if(c[d][0]>=b)return c[d][1];return c[c.length-1][1]},_getSector:function(a,b,c,d,e,f,g,h,j){return new i({zlevel:h,z:j,hoverable:!1,style:{x:a[0],y:a[1],r0:b,r:c,startAngle:d,endAngle:e,brushType:"fill",color:f,shadowColor:g.shadowColor,shadowBlur:g.shadowBlur,shadowOffsetX:g.shadowOffsetX,shadowOffsetY:g.shadowOffsetY}})},_getLabelText:function(a,b){if(a){if("function"==typeof a)return a.call(this.myChart,b);if("string"==typeof a)return a.replace("{value}",b)}return b},refresh:function(a){a&&(this.option=a,this.series=a.series),this.backupShapeList(),this._buildShape()}},m.inherits(b,c),a("../chart").define("gauge",b),b}),define("echarts2/util/shape/GaugePointer",["require","zrender2/shape/Base","zrender2/tool/util","./normalIsCover"],function(a){function b(a){c.call(this,a)}var c=a("zrender2/shape/Base"),d=a("zrender2/tool/util");return b.prototype={type:"gauge-pointer",buildPath:function(a,b){var c=b.r,d=b.width,e=b.angle,f=b.x-Math.cos(e)*d*(d>=c/3?1:2),g=b.y+Math.sin(e)*d*(d>=c/3?1:2);e=b.angle-Math.PI/2,a.moveTo(f,g),a.lineTo(b.x+Math.cos(e)*d,b.y-Math.sin(e)*d),a.lineTo(b.x+Math.cos(b.angle)*c,b.y-Math.sin(b.angle)*c),a.lineTo(b.x-Math.cos(e)*d,b.y+Math.sin(e)*d),a.lineTo(f,g)},getRect:function(a){if(a.__rect)return a.__rect;var b=2*a.width,c=a.x,d=a.y,e=c+Math.cos(a.angle)*a.r,f=d-Math.sin(a.angle)*a.r;return a.__rect={x:Math.min(c,e)-b,y:Math.min(d,f)-b,width:Math.abs(c-e)+b,height:Math.abs(d-f)+b},a.__rect},isCover:a("./normalIsCover")},d.inherits(b,c),b});