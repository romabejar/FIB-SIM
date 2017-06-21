/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */

(function(h){h.jqplot.DateAxisRenderer=function(){h.jqplot.LinearAxisRenderer.call(this);this.date=new h.jsDate()};var c=1000;var e=60*c;var f=60*e;var l=24*f;var b=7*l;var j=30.4368499*l;var k=365.242199*l;var g=[31,28,31,30,31,30,31,30,31,30,31,30];var i=["%M:%S.%#N","%M:%S.%#N","%M:%S.%#N","%M:%S","%M:%S","%M:%S","%M:%S","%H:%M:%S","%H:%M:%S","%H:%M","%H:%M","%H:%M","%H:%M","%H:%M","%H:%M","%a %H:%M","%a %H:%M","%b %e %H:%M","%b %e %H:%M","%b %e %H:%M","%b %e %H:%M","%v","%v","%v","%v","%v","%v","%v"];var m=[0.1*c,0.2*c,0.5*c,c,2*c,5*c,10*c,15*c,30*c,e,2*e,5*e,10*e,15*e,30*e,f,2*f,4*f,6*f,8*f,12*f,l,2*l,3*l,4*l,5*l,b,2*b];var d=[];function a(p,s,t){var o=Number.MAX_VALUE;var u,r,v;for(var q=0,n=m.length;q<n;q++){u=Math.abs(t-m[q]);if(u<o){o=u;r=m[q];v=i[q]}}return[r,v]}h.jqplot.DateAxisRenderer.prototype=new h.jqplot.LinearAxisRenderer();h.jqplot.DateAxisRenderer.prototype.constructor=h.jqplot.DateAxisRenderer;h.jqplot.DateTickFormatter=function(n,o){if(!n){n="%Y/%m/%d"}return h.jsDate.strftime(o,n)};h.jqplot.DateAxisRenderer.prototype.init=function(E){this.tickOptions.formatter=h.jqplot.DateTickFormatter;this.tickInset=0;this.drawBaseline=true;this.baselineWidth=null;this.baselineColor=null;this.daTickInterval=null;this._daTickInterval=null;h.extend(true,this,E);var C=this._dataBounds,u,x,D,y,A,z,o;for(var t=0;t<this._series.length;t++){u={intervals:[],frequencies:{},sortedIntervals:[],min:null,max:null,mean:null};x=0;D=this._series[t];y=D.data;A=D._plotData;z=D._stackData;o=0;for(var r=0;r<y.length;r++){if(this.name=="xaxis"||this.name=="x2axis"){y[r][0]=new h.jsDate(y[r][0]).getTime();A[r][0]=new h.jsDate(y[r][0]).getTime();z[r][0]=new h.jsDate(y[r][0]).getTime();if((y[r][0]!=null&&y[r][0]<C.min)||C.min==null){C.min=y[r][0]}if((y[r][0]!=null&&y[r][0]>C.max)||C.max==null){C.max=y[r][0]}if(r>0){o=Math.abs(y[r][0]-y[r-1][0]);u.intervals.push(o);if(u.frequencies.hasOwnProperty(o)){u.frequencies[o]+=1}else{u.frequencies[o]=1}}x+=o}else{y[r][1]=new h.jsDate(y[r][1]).getTime();A[r][1]=new h.jsDate(y[r][1]).getTime();z[r][1]=new h.jsDate(y[r][1]).getTime();if((y[r][1]!=null&&y[r][1]<C.min)||C.min==null){C.min=y[r][1]}if((y[r][1]!=null&&y[r][1]>C.max)||C.max==null){C.max=y[r][1]}if(r>0){o=Math.abs(y[r][1]-y[r-1][1]);u.intervals.push(o);if(u.frequencies.hasOwnProperty(o)){u.frequencies[o]+=1}else{u.frequencies[o]=1}}}x+=o}if(D.renderer.bands){if(D.renderer.bands.hiData.length){var w=D.renderer.bands.hiData;for(var r=0,q=w.length;r<q;r++){if(this.name==="xaxis"||this.name==="x2axis"){w[r][0]=new h.jsDate(w[r][0]).getTime();if((w[r][0]!=null&&w[r][0]>C.max)||C.max==null){C.max=w[r][0]}}else{w[r][1]=new h.jsDate(w[r][1]).getTime();if((w[r][1]!=null&&w[r][1]>C.max)||C.max==null){C.max=w[r][1]}}}}if(D.renderer.bands.lowData.length){var w=D.renderer.bands.lowData;for(var r=0,q=w.length;r<q;r++){if(this.name==="xaxis"||this.name==="x2axis"){w[r][0]=new h.jsDate(w[r][0]).getTime();if((w[r][0]!=null&&w[r][0]<C.min)||C.min==null){C.min=w[r][0]}}else{w[r][1]=new h.jsDate(w[r][1]).getTime();if((w[r][1]!=null&&w[r][1]<C.min)||C.min==null){C.min=w[r][1]}}}}}var B=0,v=0;for(var p in u.frequencies){u.sortedIntervals.push({interval:p,frequency:u.frequencies[p]})}u.sortedIntervals.sort(function(s,n){return n.frequency-s.frequency});u.min=h.jqplot.arrayMin(u.intervals);u.max=h.jqplot.arrayMax(u.intervals);u.mean=x/y.length;this._intervalStats.push(u);u=x=D=y=A=z=null}C=null};h.jqplot.DateAxisRenderer.prototype.reset=function(){this.min=this._options.min;this.max=this._options.max;this.tickInterval=this._options.tickInterval;this.numberTicks=this._options.numberTicks;this._autoFormatString="";if(this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString){this.tickOptions.formatString=""}this.daTickInterval=this._daTickInterval};h.jqplot.DateAxisRenderer.prototype.createTicks=function(p){var U=this._ticks;var J=this.ticks;var E=this.name;var G=this._dataBounds;var L=this._intervalStats;var n=(this.name.charAt(0)==="x")?this._plotDimensions.width:this._plotDimensions.height;var w;var ab,I;var y,x;var aa,X;var s=30;var N=1;var v=this.tickInterval;ab=((this.min!=null)?new h.jsDate(this.min).getTime():G.min);I=((this.max!=null)?new h.jsDate(this.max).getTime():G.max);var A=p.plugins.cursor;if(A&&A._zoom&&A._zoom.zooming){this.min=null;this.max=null}var B=I-ab;if(this.tickOptions==null||!this.tickOptions.formatString){this._overrideFormatString=true}if(J.length){for(X=0;X<J.length;X++){var O=J[X];var V=new this.tickRenderer(this.tickOptions);if(O.constructor==Array){V.value=new h.jsDate(O[0]).getTime();V.label=O[1];if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}V.setTick(V.value,this.name);this._ticks.push(V)}else{V.value=new h.jsDate(O).getTime();if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}V.setTick(V.value,this.name);this._ticks.push(V)}}this.numberTicks=J.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.daTickInterval=[(this.max-this.min)/(this.numberTicks-1)/1000,"seconds"]}else{if(this.min==null&&this.max==null){var M=h.extend(true,{},this.tickOptions,{name:this.name,value:null});var Y,H;if(!this.tickInterval&&!this.numberTicks){var Q=Math.max(n,s+1);var W=115;if(this.tickRenderer===h.jqplot.CanvasAxisTickRenderer&&this.tickOptions.angle){W=115-40*Math.abs(Math.sin(this.tickOptions.angle/180*Math.PI))}Y=Math.ceil((Q-s)/W+1);H=(I-ab)/(Y-1)}else{if(this.tickInterval){H=this.tickInterval}else{if(this.numberTicks){Y=this.numberTicks;H=(I-ab)/(Y-1)}}}if(H<=19*l){var P=a(ab,I,H);var r=P[0];this._autoFormatString=P[1];ab=Math.floor(ab/r)*r;ab=new h.jsDate(ab);ab=ab.getTime()+ab.getUtcOffset();Y=Math.ceil((I-ab)/r)+1;this.min=ab;this.max=ab+(Y-1)*r;if(this.max<I){this.max+=r;Y+=1}this.tickInterval=r;this.numberTicks=Y;for(var X=0;X<Y;X++){M.value=this.min+X*r;V=new this.tickRenderer(M);if(this._overrideFormatString&&this._autoFormatString!=""){V.formatString=this._autoFormatString}if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}this._ticks.push(V)}N=this.tickInterval}else{if(H<=9*j){this._autoFormatString="%v";var D=Math.round(H/j);if(D<1){D=1}else{if(D>6){D=6}}var S=new h.jsDate(ab).setDate(1).setHours(0,0,0,0);var q=new h.jsDate(I);var z=new h.jsDate(I).setDate(1).setHours(0,0,0,0);if(q.getTime()!==z.getTime()){z=z.add(1,"month")}var R=z.diff(S,"month");Y=Math.ceil(R/D)+1;this.min=S.getTime();this.max=S.clone().add((Y-1)*D,"month").getTime();this.numberTicks=Y;for(var X=0;X<Y;X++){if(X===0){M.value=S.getTime()}else{M.value=S.add(D,"month").getTime()}V=new this.tickRenderer(M);if(this._overrideFormatString&&this._autoFormatString!=""){V.formatString=this._autoFormatString}if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}this._ticks.push(V)}N=D*j}else{this._autoFormatString="%v";var D=Math.round(H/k);if(D<1){D=1}var S=new h.jsDate(ab).setMonth(0,1).setHours(0,0,0,0);var z=new h.jsDate(I).add(1,"year").setMonth(0,1).setHours(0,0,0,0);var K=z.diff(S,"year");Y=Math.ceil(K/D)+1;this.min=S.getTime();this.max=S.clone().add((Y-1)*D,"year").getTime();this.numberTicks=Y;for(var X=0;X<Y;X++){if(X===0){M.value=S.getTime()}else{M.value=S.add(D,"year").getTime()}V=new this.tickRenderer(M);if(this._overrideFormatString&&this._autoFormatString!=""){V.formatString=this._autoFormatString}if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}this._ticks.push(V)}N=D*k}}}else{if(E=="xaxis"||E=="x2axis"){n=this._plotDimensions.width}else{n=this._plotDimensions.height}if(this.min!=null&&this.max!=null&&this.numberTicks!=null){this.tickInterval=null}if(this.tickInterval!=null){if(Number(this.tickInterval)){this.daTickInterval=[Number(this.tickInterval),"seconds"]}else{if(typeof this.tickInterval=="string"){var Z=this.tickInterval.split(" ");if(Z.length==1){this.daTickInterval=[1,Z[0]]}else{if(Z.length==2){this.daTickInterval=[Z[0],Z[1]]}}}}}if(ab==I){var o=24*60*60*500;ab-=o;I+=o}B=I-ab;var F=2+parseInt(Math.max(0,n-100)/100,10);var T,C;T=(this.min!=null)?new h.jsDate(this.min).getTime():ab-B/2*(this.padMin-1);C=(this.max!=null)?new h.jsDate(this.max).getTime():I+B/2*(this.padMax-1);this.min=T;this.max=C;B=this.max-this.min;if(this.numberTicks==null){if(this.daTickInterval!=null){var u=new h.jsDate(this.max).diff(this.min,this.daTickInterval[1],true);this.numberTicks=Math.ceil(u/this.daTickInterval[0])+1;this.max=new h.jsDate(this.min).add((this.numberTicks-1)*this.daTickInterval[0],this.daTickInterval[1]).getTime()}else{if(n>200){this.numberTicks=parseInt(3+(n-200)/100,10)}else{this.numberTicks=2}}}N=B/(this.numberTicks-1)/1000;if(this.daTickInterval==null){this.daTickInterval=[N,"seconds"]}for(var X=0;X<this.numberTicks;X++){var ab=new h.jsDate(this.min);aa=ab.add(X*this.daTickInterval[0],this.daTickInterval[1]).getTime();var V=new this.tickRenderer(this.tickOptions);if(!this.showTicks){V.showLabel=false;V.showMark=false}else{if(!this.showTickMarks){V.showMark=false}}V.setTick(aa,this.name);this._ticks.push(V)}}}if(this.tickInset){this.min=this.min-this.tickInset*N;this.max=this.max+this.tickInset*N}if(this._daTickInterval==null){this._daTickInterval=this.daTickInterval}U=null}})(jQuery);
