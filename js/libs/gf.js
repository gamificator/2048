(function(g,h,e){function b(a){this.userId=a;this.transport=null;this.offline=[];this.listeners={}}var k=[],d=null;if(null==e){var f=h.createElement("script");f.src="http://cdn.sockjs.org/sockjs-0.3.min.js";f.onload=function(){e=g.SockJS;d=new e("http://gf-ws-frontend.herokuapp.com/ws");for(var a;a=k.pop();)a()};h.head.appendChild(f)}b.prototype.ready=function(a){this.transport=a;var c=this;a.addEventListener("message",function(a){c.onMessage(a)});a.addEventListener("close",function(){c.onClose()});
1!==this.transport.readyState?a.addEventListener("open",function(){c.flush()}):this.flush()};b.prototype.flush=function(){for(var a;a=this.offline.pop();)a[a.type].userId=this.userId,a=JSON.stringify(a),this.transport.send(a)};b.prototype.send=function(a){null==this.transport||1!==this.transport.readyState?this.offline.push(a):(a[a.type].userId=this.userId,a=JSON.stringify(a),this.transport.send(a))};b.prototype.increment=function(a,c){c=parseInt(c)||1;this.send({type:"Increment",Increment:{id:a,
count:c}})};b.prototype.onMessage=function(a){a=JSON.parse(a.data);this.emit("achivement",a)};b.prototype.onClose=function(){this.emit("close")};b.prototype.on=function(a,c){var b=this.listeners[a];null==b?this.listeners[a]=[c]:b.push(c)};b.prototype.emit=function(a,c){var b=this.listeners[a];if(null!=b&&0<b.length)for(var d=0,e=b.length;d<e;d++)(0,b[d])(c)};g.gf={connect:function(a){var c=new b(a);null==d?k.push(function(){c.ready(d)}):c.ready(d);(a=function(){}).prototype=c;return new a}}})(window,
document,window.SockJS);