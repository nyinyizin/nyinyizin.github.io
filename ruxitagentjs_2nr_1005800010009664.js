(function(){if(window.dT_)return;function n(){return(new Date).getTime()}function ea(){if("string"!==typeof document.title){var a=document.getElementsByTagName("title")[0];return a.innerText||a.textContent}return document.title}function Ob(a,b){return D(a,b)}function Na(){return Oa?new Oa:Pa?new Pa("MSXML2.XMLHTTP.3.0"):window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("MSXML2.XMLHTTP.3.0")}function x(a,b){return parseInt(a,b||10)}function H(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++)if(c=
e[b].indexOf("\x3d"),d=e[b].substring(0,c),c=e[b].substring(c+1),d=d.replace(/^\s+|\s+$/g,""),d===a)return"DTSA"===a.toUpperCase()?decodeURIComponent(c):c;return null}function Pb(a){document.cookie=a+'\x3d"";path\x3d/'+(l.domain?";domain\x3d"+l.domain:"")+"; expires\x3dThu, 01-Jan-70 00:00:01 GMT;"}function N(a,b){b?(b="DTSA"===a.toUpperCase()?W(b):b,document.cookie=a+"\x3d"+b+";path\x3d/"+(l.domain?";domain\x3d"+l.domain:"")):Pb(a)}function q(a,b){for(var c=1;c<arguments.length;c++)a.push(arguments[c])}
function id(){return v}function jd(){return 0===document.location.href.indexOf("file")}function kd(a){return a&&1===a.length&&void 0!==l.featureHash?-1!==l.featureHash.indexOf(a):!1}function ld(a){var b=h.dT_;if(b.ism(a)&&-1===b.iMod().indexOf(a))return b.iMod(a),!0;b.ism(a)&&h.console&&h.console.log("WARNING: "+('Module "'+a+'" already enabled!'));return!1}function md(a,b){if(a){var c=/([a-zA-Z]*)[0-9]{0,3}_[a-zA-Z_0-9]*_[0-9]+/g.exec(a);if(c&&c.length){var d=c[0];l.csu=c[1];c=d.split("_");l.featureHash=
c[1]}}if(b)for(c=b.split("|"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d");-1===e?l[c[d]]=!0:l[c[d].substring(0,e)]=c[d].substring(e+1,c[d].length)}}function nd(a){a&&(l.initializedModules+=a);return l.initializedModules}function od(a){return l[a]}function pd(a,b){l[a]=b}function qd(a){return a&&383<=a}function rd(){return l.csu}function ra(a){return a?String.trim?a.trim():a.replace(/^\s+|\s+$/g,""):null}function Qa(a,b){if(a.indexOf)return a.indexOf(b);for(var c=a.length;c--;)if(a[c]===b)return c;
return-1}function O(a,b,c){a.addEventListener?a.addEventListener(b,c,!0):a.attachEvent&&a.attachEvent("on"+b,c);q(sa,{object:a,event:b,listener:c})}function Ra(a){try{var b=a.tagUrn;return b&&-1!==b.indexOf("schemas-microsoft-com:vml")}catch(c){return!0}}function sd(a){return-1===a.indexOf("://")?null:a.split("/")[2].split(":")[0].toLowerCase()}function td(a){a=a?a:h.location.pathname;var b=h.location.search;b&&b.length&&"?"===b.charAt(0)&&(b=b.substring(1));a=31+Qb(a);a=31*a+Qb(b);return"RID_"+(a&
a)}function Qb(a){var b=0;if(a)for(var c=a.length,d=0;d<c;d++)b=31*b+a.charCodeAt(d),b&=b;return b}function T(a,b){try{h.sessionStorage[a]=b}catch(c){N(a,b)}}function Sa(a){return h.sessionStorage?h.sessionStorage[a]:H(a)}function W(a){a=encodeURIComponent(a);var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c),e=ud[d];e?q(b,e):q(b,d)}return b.join("")}function u(a){var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c),e=vd[d];e?q(b,e):q(b,d)}return b.join("")}function wd(a){a=a.replace(/_/g,
"_5F").replace(/%/g,"_25");return u(a)}function P(a){if(a){for(var b=[],c=0;c<a.length;c++){var d=a.charAt(c),e=l.spc;e||(e="");e+=xd;-1===e.indexOf(d)&&q(b,d)}a=b.join("")}return a}function Ta(){var a=document.location.href,b=a.indexOf("#");0<=b&&(a=a.substr(0,b));return a}function Ua(a){var b=H("dtLatC"),c=0,d=[],e=0;if(b&&0<b.length){b=b.split("p");1<b.length&&(e=b.length-1);9<e&&(e=9);for(var m=1;m<=e;m++)c+=parseFloat(b[m]),d[m+1]=b[m]}e++;d[0]=x((c+a)/e);d[1]=a;N("dtLatC",d.join("p"));return d[0]}
function Va(){return h.performance&&h.performance.timing&&(!v.ff||9<v.ff)?h.performance:null}function Rb(a,b,c,d){if(Object.defineProperty&&(!v.ie||8<v.ie)){X[b]=a[b];var e=function(c){X[b]=c;d&&d.apply(a,[c]);return X[b]};try{Object.defineProperty(a,b,{get:function(){return c?c.apply(a,null):X[b]},set:e,configurable:!0})}catch(m){}}}function Sb(a,b){if(a[b]&&Object.defineProperty&&(!v.ie||8<v.ie)){var c=a[b];try{delete a[b],X[b]=null,a[b]=c}catch(d){Object.defineProperty(a,b,{get:function(){return X[b]},
set:void 0,configurable:!0})}}}function yd(a,b,c,d){if(l.ffi)return!0;for(var e=!1,m=e,f=e,k=0;k<a.length&&(!e||!m);k++)a[k]=a[k].split("."),e=a[k][0]==b,m=a[k][1]==c,!f&&e&&(f=!0);a=e&&m||f;e&&m||(f?ta(d+" version ("+b+"."+c+") official not supported. Instrumentation active nonetheless, because major version is supported."):ta(d+" not instrumented because version ("+b+"."+c+") not supported."));return a}function zd(a){N("dtUseDebugAgent",a)}function Ad(a){N("dt_dbg_console",a)}function Bd(a){return(0==
a.indexOf("http")||0==a.indexOf("//"))&&location.href.indexOf(location.host)!=a.indexOf(location.host)&&-1==a.indexOf("..")}function Cd(){return E}function fa(a){var b=[];if(a&&"-"!==a){a=a.split("p");for(var c=0;c<a.length;c++){var d=a[c].split("h");if(2===d.length&&d[0]&&d[1]){var e=d[0],f;e&&0<=e.indexOf("$")&&(e=e.split("$")[1]);if(0<=d[1].indexOf("v")){var g=d[1].split("v");2==g.length&&(f=g[1],d[1]=g[0])}var g=e.split("_"),g=x(g[0]),k=n()%Wa;k<g&&(k+=Wa);g+9E5>k&&q(b,{frameId:e,actionId:d[1]})}}}for(c=
0;c<b.length;c++)b[c].visitId=f;return b}function Tb(){var a=H(Xa),b={sessionId:null,serverId:null};if(a){var c=a.indexOf("|"),d=a;-1!==c&&(d=a.substring(0,c));c=d.indexOf("$");-1!==c?(b.sessionId=d.substring(c+1),b.serverId=d.substring(0,c)):b.sessionId=d}return b}function Ya(){return Tb().sessionId}function ua(){return Tb().serverId}function Za(){var a=fa(H(U));if(0<a.length){for(var b=[],c=0;c<a.length;c++)a[c].frameId!==E&&q(b,a[c]);va(b)}}function va(a,b){var c="",d=!1;if(a){for(var c=[],e=0;e<
a.length;e++)"-"!=a[e].actionId&&(d=!0,0<e&&0<c.length&&q(c,"p"),q(c,Q),q(c,"$"),q(c,a[e].frameId),q(c,"h"),q(c,a[e].actionId));0==c.length&&(ga&&(wa(),ga=!1),Q=ua(),q(c,Q),q(c,"$"),q(c,E),q(c,"h-"));q(c,"v");q(c,b||$a(d));c=c.join("")}c||(ga&&(wa(),ga=!1),Q=ua(),c=Q+"$"+E+"h-v"+(b||$a(!1)));N(U,c)}function Dd(a){a=E+"h"+f.esc(a);var b=H(U);return b&&0<=b.indexOf(a)&&!f.hyb()?null:a}function Ed(){var a=window.crypto||window.msCrypto,b;if(a)b=new Int8Array(Ub),a.getRandomValues(b);else for(b=[],a=
0;a<Ub;a++)b.push(Math.floor(Math.random()*(Vb-0+1))+0);for(var c=[],a=0;a<b.length;a++){var d=Math.abs(b[a]%Vb),d=9>=d?String.fromCharCode(d+48):String.fromCharCode(d+55);c.push(d)}return c.join("")}function $a(a){var b;if(!ab&&a||null==window[xa])if((b=fa(H(U)))&&1<=b.length&&!(Wb()<n())){var c=n();T(bb,c+cb);db();b="sessionIDorRunIDMissing"==b[0].visitId?null:b[0].visitId}else b=null;else b=null;b||(b=wa(a));ab=!1;return b}function Xb(a){var b=Ya();if(!b)return"sessionIDorRunIDMissing";a=""+a;
for(var c=a.length,d=[],e=0;e<b.length;e++)d[e]=String.fromCharCode(65+Math.abs((b[e]^a[e%c])%26));return d.join("")}function wa(a){a:{if(ab||!a)if(a=window[xa]){window[xa]=null;break a}a=null}var b=n();a||(a=Xb(b));var c=a,d=fa(H(U));va(d,c);db();T(bb,b+cb);return a}function db(){Yb&&clearTimeout(Yb);setTimeout(Fd,cb)}function Fd(){if(Wb()<n()){var a=n(),a=Xb(a),b=fa(H(U));va(b,a);db()}}function Wb(){var a=Sa(bb);return a?a:0}function Gd(a){a=u(a);eb[a]||(eb[a]="1")}function Hd(a){return"1"===eb[a]}
function Id(){var a=f;try{for(var b=R;b&&b!==self;){if(b.dT_)return b.dT_.tdto();b=b!==b.parent?b.parent:!1}}catch(c){}return a}function Jd(){return!ha}function fb(a,b,c,d,e){for(var f=3,g=0;0<f;)try{var k,Zb=l.cors;if(Zb){var h=Na();"withCredentials"in h||(h=window.XDomainRequest?new XDomainRequest:null);k=h}else k=Na();if(!k)break;g=n();a&&a(k,b,d,g);"onreadystatechange"in k?k.open("POST",b,c):k.open("POST",b);"setRequestHeader"in k&&(k.setRequestHeader("Content-Type","text/plain;charset\x3dUTF-8"),
e&&!Zb&&k.setRequestHeader("x-dtreferer",e));k.send(d);f=0}catch(q){f--}}function gb(a,b){var c;try{l.markSendBeacon&&(a+=(0<=a.indexOf("?")?"\x26":"?")+"VIASENDBEACON\x3d1"),c=navigator.sendBeacon(a,b||"")}catch(d){c=!1}return c}function $b(a,b){return Kd&&!l.dsndb&&!b&&(a||!(l.bandwidth&&f.tp()&&f.ism("b")))}function ac(){var a=this;a.vals=[];a.a=function(b,c){q(a.vals,[b,c])}}function ya(a,b,c,d){a=bc(a,b,c);s&&cc(c,d,a)}function bc(a,b,c){var d="",e=null;if(a){c="";hb=0;var m=!1,g;for(g in r)r.hasOwnProperty(g)&&
(b=r[g],ib(b)?m||(m=!0,ta("Maximum open actions exceeded configured amount of "+(l.moa||30)+", dropping action "+b)):(c=c?c+",":c,c+=dc(r[g],!1,!1,!0)));d=c}else{e="";g=A.length;b&&(r=[]);b="";if(0<g){for(d=0;d<g;d++){b||(b=A[d].getReferer());var k=dc(A[d],!0,c,!1);k&&0<k.length&&("_load_"==A[d].type&&(ec=!0,w&&(e=w.delayed?"d|"+w.actionId+"|"+w.name+"|"+w.type+"|"+w.info+"|"+w.frameId+"|"+w.start+"|"+w.location+"|"+w.title:"s|"+w.actionId+"|"+w.name+"|"+w.type+"|"+w.info+"|"+w.frameId+"|"+w.start,
w=null)),0<e.length&&(e+=","),e+=k)}A=[];for(m in r)r.hasOwnProperty(m)&&q(A,r[m])}e={actions:e,referer:b};d=e.actions;e=e.referer}s=null;if(0<d.length){c=d;s||(s=new ac);s.a("a",W(c));s.a("svrid",Q);s.a("v",f.version);s.a("fId",E);a&&s.a("PV",1);f.pageId!==E&&s.a("pId",f.pageId);jb&&s.a("pFId",jb);s.a("rId",l.rid);s.a("rpId",l.rpid);if(!a){fc||s.a("title",W(P(ea())));a:{c=(m=Va())?m.timing:!1;if(m&&c&&(m=c.domComplete,c=c.domContentLoaded,m||c)){c=m?m:c;break a}c=kb}c&&s.a("domR",c);fc=!0}lb()&&
s.a("unload","xhr");gc(a);hc=!1}else!1===hc&&(s||(s=new ac),s.a("svrid",Q),c=s.vals.length,gc(a),s.vals.length>c?(s.a("fId",E),s.a("v",f.version)):s=null);return e}function gc(a){for(var b=0;b<mb.length;b++)mb[b](s,a)}function ic(){for(var a=[],b=0;b<s.vals.length;b++)0<b&&q("$"),q(a,"$",s.vals[b][0],"\x3d",s.vals[b][1]);return a.join("")}function jc(){var a=ic(),b=v.ie?1500:7E3;l.msl&&(b=Math.min(b,x(l.msl)));return 0===a.length%b?x(a.length/b):x(a.length/b)+1}function Ld(a,b,c){var d=document.createElement("img");
d.onerror=function(){Ua((n()-b)/2)};d.setAttribute("src",c+"?"+a)}function cc(a,b,c){var d=n();s.a("time",d);f.hyb()&&s.a("url",encodeURIComponent(document.location.href));var e=v,m,g,k=$b(a,!!c);if(k)m=!0,b=!1;else{var h=l.fsc;m=l.fso;var C=e.op&&15<=e.op&&!m;g=jc();m=!a||a&&!(e.sf||e.op&&!C||e.ff&&(1<g||l.sffs||17<e.ff)||e.ie&&(9>e.ie||l.sies)||e.msf||e.ab||e.ch&&(22<e.ch||h));b&&(m=!1);b=(1==g||C)&&a&&(e.ie&&9>e.ie||e.ch&&!h||C)}a=m;m=ic();h=null;if(l.spl||b){g=v.ie?1500:7E3;l.msl&&(g=Math.min(g,
x(l.msl)));var C=jc(),p,u=n(),r=0;if(1<C){if(100>C)for(var h=[],t=0;t<C;t++){var w="svrid\x3d"+Q+"\x26sid\x3d"+u+"\x26p"+(t+1)+"_"+C+"\x3d";r+g<=m.length?(p=m.slice(r,r+g),"%"==p.charAt(p.length-1)&&m.length>=r+g+1&&(p+=m.charAt(r+g),p+=m.charAt(r+g+1),r+=2),"%"==p.charAt(p.length-2)&&m.length>=r+g+2&&(p+=m.charAt(r+g),r+=1)):p=m.slice(r);q(h,w+p);r+=g}}else h=[m]}else h=[m];m=h;if(null!==m)if(h=l.reportUrl?l.reportUrl:"dynaTraceMonitor",b)for(c=0;c<m.length;c++)Ld(m[c],d,h);else{d=h;b=m[0];h=!1;
l.cors?(d=d+"?"+("dtCookie\x3d"+encodeURIComponent(H(Xa))+";"),d+="dtLatC\x3d"+H("dtLatC")+";",d+="referer\x3d"+encodeURIComponent(c||document.location.href),d+=";visitID\x3d"+encodeURIComponent($a(!0)),h=!0):k&&c&&c!==document.location.href&&(d+="?referer\x3d"+encodeURIComponent(c),h=!0);if(l.spl)for(g=0;g<m.length;g++)C=d,b=null,h||(C+="?"),C+=m[g],k?gb(C,b):fb(kc,C,a,b,c);else k?gb(d,b):fb(kc,d,a,b,c);if(!k&&e.ch&&22>=e.ch||e.ff&&1<m.length)for(c=n();25>n()-c;);}}function Md(){ia||(ia=document.createElement("doc:rdy"));
if(ia.doScroll){var a=function(){try{ia.doScroll("left"),ia=null,kb=n(),I()}catch(b){D(a,0)}};a()}else document.addEventListener("DOMContentLoaded",function(){kb=n();I()},!1)}function Nd(a){Y(a)}function Y(a){if(ja){var b=!1;a?n()+a<lc&&(b=!0):b=!0;b&&(clearTimeout(mc),ja=!1)}ja||(lc=n()+(a?a:0),void 0==a||0==a?nc():(mc=D(nc,void 0!=a?a:0),ja=!0))}function nc(){ja=!1;ya(!1,!1,!1,!1)}function Od(a){q(mb,a)}function Pd(a,b,c){ya(b,c,!1,a)}function I(){for(var a=0;a<nb.length;a++)nb[a]()}function oc(){return r}
function Z(a,b,c,d,e,f,g){var k={actionId:Qd++,start:c,stop:d,type:a,name:b,info:g,domNodes:e,next:[],sendNextPreview:null,previewCountMax:null,parentActionLinkType:null,parentFrameActionName:null,simpleName:null,websocketRequestID:f?x(2147483647*Math.random())+1:0,parent:null,referer:location.href,getReferer:function(){return k.parent?k.parent.getReferer():k.referer},add:function(a){a&&a.name&&q(k.next,a)}};k.timeoutId=Ob(function(){k&&(k.shouldTimeout=!0,k.stop||ob(k)||V(k.actionId))},1E3*x(l.oat||
180));return k}function ob(a){for(var b=!1,c=0;c<a.next.length;c++)if(!a.next[c].stop||ob(a.next[c])){b=!0;break}return b}function pc(){var a=!1,b=[],c;for(c in r)if(r.hasOwnProperty(c)){var d=r[c];0<d.previewCountMax&&(n()>d.sendNextPreview&&(d.sendNextPreview+=6E4,q(b,d)),a=!0)}0<b.length&&ya(!0,!0,!1,!1);for(c=0;c<b.length;c++)b[c].previewCountMax--;a&&D(pc,1E3)}function qc(a,b){if(a)for(var c=null,d=0;d<a.length;d++)if(c=a[d],c.actionId==b||c.next&&(c=qc(c.next,b),null!==c))return c;return null}
function pb(a){var b=null;A&&(b=qc(A,a));return b}function za(a,b,c,d,e,f){c||(c=n());a=Z(b,a,c,null,null,e,f);"boolean"==typeof d&&d&&(d=t);if(d){if(b=null,b="number"==typeof d?pb(d):"object"==typeof d?d:t){b.add(a);a.parent=b;qb(a);for(var g in r)r.hasOwnProperty(g)&&r[g]&&r[g].sendNextPreview>a.start+1E4&&(r[g].sendNextPreview=a.start+1E4)}}else qb(a),rc(a),q(r,a),t=a,q(A,a),a.sendNextPreview=a.start+1E4,a.previewCountMax=100,sc(a),D(pc,5E3);return a}function qb(a){if(t!=a)if(t&&(Aa=t),t=a){a=
a.actionId;for(var b=fa(H(U)),c=!1,d=0;d<b.length;d++)b[d].frameId===E&&(b[d].actionId=W(a),c=!0);c||q(b,{frameId:E,actionId:W(a)});va(b)}else Za()}function V(a,b,c){b||(b=n());var d=[];if(A)for(var e=0;e<A.length;e++){var f=tc(A[e],a,b,c);"string"!==typeof f&&(d[e]=f)}a=!1;b=[];for(c=0;c<A.length;c++)d[c]?a=d[c]:(ob(A[c])||q(b,A[c].actionId),L=null);d=[];for(c in r)r.hasOwnProperty(c)&&(e=r[c],0<=Qa(b,e.actionId)?q(d,c):M&&(f=$.gca(),e.parentActionLinkType=R&&f[f.length-1]==M?"S":"A",M=null));for(c=
0;c<d.length;c++)r.splice(d[c],d[c]-(d[c]||NaN)+1||r.length);d=a;Y();qb(d)}function tc(a,b,c,d){var e,f=a.actionId==b;if(f){a.stop=c;d&&(a.start=d);a.domNodes=document.getElementsByTagName("*").length;a.timeoutId&&window.clearTimeout&&window.clearTimeout(a.timeoutId);var g=a.parent;if(g&&!g.stop&&g.shouldTimeout){for(var k=!1,h=0;h<g.next.length;h++)if(!g.next[h].stop&&g.next[h].actionId!=b){k=!0;break}k||D(function(){g.stop||V(g.actionId)},0)}}else a.stop||(e=a);k=!1;if(a.next&&a.next.length)for(h=
1;h<=a.next.length;h++){var l=tc(a.next[a.next.length-h],b,c,d),n="string"===typeof l,k=k||n||l&&l.found===b;n||(e=l||e);if((k||f)&&e)break}if(f||k)"object"===typeof e?e.found=b:e="found";return e}function dc(a,b,c,d){if(a.parentFrameActionName){var e=[],f=["0"];f[1]=a.actionId;f[2]=a.parentFrameActionName;f[3]=a.parentActionLinkType;e[0]=f.join("|");e[1]=rb(a,1,b,c,d).result;return e[1]?e.join(","):null}return rb(a,1,b,c,d).result||null}function rb(a,b,c,d,e){a.domNodes||(a.domNodes=document.getElementsByTagName("*").length);
var f=[];if(a.next&&0<a.next.length){for(var g=0;g<a.next.length;g++){var k=a.next[g],k=rb(k,b+1,c,d,e),h=k.result;if(h)f.push(h);else if(!k.exceeded)return{}}if(c)for(g=0;g<a.next.length;g++)if(k=a.next[g],k.stop)a.stop&&k.stop>a.stop&&(a.stop=k.stop);else{a.stop=void 0;break}}if(!(d||e||a.stop&&0!=a.stop))return{};c=[];c[0]=b.toString();c[1]=a.actionId;c[2]=u(a.simpleName||a.name);c[3]=u(a.type);c[4]=a.info?u(a.info):"-";c[5]=a.start;c[6]=a.stop||0;c[7]=a.domNodes;1==b&&a.childFrameActions&&(c[8]=
a.childFrameActions);a.websocketRequestID&&(c[8]||(c[8]="-"),c[9]=a.websocketRequestID);b=!1;a.stop||d||a.next&&a.next.length||!ib(a)?(f.unshift(c.join("|")),hb++):ib(a)&&(b=!0);a={exceeded:b};1<f.length?a.result=f.join(","):f[0]&&(a.result=f[0]);return a}function ib(a){var b=x(l.moa)||30,c=["_warning_","_error_","_log_","_rv_","_rs_"];return hb+1>b&&-1==Qa(c,a.type)}function lb(){if(0<sb){var a=S.length;if(0<a)return S[a-1]}return null}function uc(a,b,c){var d=null;1==arguments.length&&(b=3);var e=
aa(),f="";e&&(e.info=a||"-",f=e.info);var g=lb();!g&&e&&e.actionId&&(g=e.actionId);g?d=vc(g):e?3<=b&&(d=tb(e.getName(),e.type,e.start,null,c,f),e.actionId=d):t?1<=b&&(d=vc(t.actionId,a,"xhr",n(),c,f)):l.cux&&(d=tb("Unlinked XHR","xhr",n(),null,c,f));return d}function tb(a,b,c,d,e,f){a=za(a,b,c,d,e,f);a.usage=1;J[a.actionId]=a;return a.actionId}function vc(a,b,c,d,e,f){a=J[a];var g;a?(a.usage++,g=a.actionId):t&&(g=tb(b,c,d,t.actionId,e,f));return g}function Rd(a){if(1<Sd())D(function(){wc(a)},0);else return D(function(){wc(a)},
0),I(),!0;return!1}function Td(a){a&&(q(S,a),sb++)}function Ud(a){a&&(sb--,D(function(){for(var b=-1,c=S.length-1;-1==b&&0<=c;)S[c]==a&&(b=c),c--; -1!=b&&(b==S.length-1?S.pop():S.splice(b,1))},0))}function wc(a){var b=0,c=J[a];c&&(c.usage--,b=c.usage,0>=b&&(V(a),J[a]=null,delete J[a]));return b}function Sd(){var a=0,b;for(b in J)if(b&&J.hasOwnProperty(b))try{a+=J[b].usage}catch(c){}return a}function rc(a){M=null;if($){var b=$.gca();if(M=b[b.length-1])a.parentFrameActionName=M.name,M.childFrameActions?
M.childFrameActions++:M.childFrameActions=1}}function ka(a,b,c){var d=n();a=P(a);b=Z(b,a,d,d,-1);(c=la(b,c))&&Y();return c}function la(a,b){var c;if(c="undefined"==typeof b?t:pb(b))return c.add(a),!1;rc(a);q(A,a);sc(a);return!0}function Vd(a){ka("visit end","_endVisit_",a)?wa():ga=!0}function Wd(a){ub.push(a)}function sc(a){a={name:a.name,type:a.type,actionId:a.actionId,depth:a.depth,info:a.info};for(var b=0;b<ub.length;b++)try{ub[b](a)}catch(c){}}function Xd(a,b){f.gne()<=(f.cfg("mepp")||10)&&(f.iet(),
ka(a,"_error_",b))}function ta(a,b){ka(a,"_warning_",b)}function Yd(a,b){ka(a,"_log_",b)}function Zd(a){a=uc(a,3,!0);return pb(a)}function $d(a){return a.websocketRequestID}function ae(a){return a.actionId}function be(a){isNaN(a)||(a=J[a]);return a?a.getReferer():null}function ce(a,b){var c=n(),c=Z("_rv_",a+"\x3d"+b,c,c,0);la(c);Y()}function de(a,b,c){var d=n();a=Z("_rs_",a+"\x3d"+b,d,d,0);la(a,c);Y()}function ee(){return t}function xc(){return t?t.name:null}function fe(a){var b=a==xc();if(!Aa)return!b;
a=a===Aa.name&&3E3>=n()-Aa.start;return!b&&!a}function ge(){return!t||0<t.stop}function he(a){return J[a]}function ie(a,b,c,d,e){if(4>arguments.length||"undefined"==typeof d)d=!0;return za(a,b,c,d,e).actionId}function je(a,b,c){I();V(a,b,c)}function ke(){return ec}function le(){return Ba}function me(){Ba++}function Ca(a,b,c,d,e){var f=!1;if(!vb){vb=!0;try{try{ba&&ba!=Ca&&"function"==typeof ba&&(f=ba(a,b,c,d,e))}catch(g){yc(null,null,null,null,g)}f||yc(a,b,c,d,e)}catch(k){}vb=!1}return f}function yc(a,
b,c,d,e){if((a||e)&&Ba+1<=Da){Ba++;e=e||{};e.error=e.error||{};a=e.message||a;b=e.fileName||e.filename||b||"";c=e.lineNumber||e.lineno||c||-1;var f=e.columnNumber||e.colno||d||-1,g=e.stack||e.error.stack||e.backtrace||e.stacktrace||!1;d=aa()||!1;e=e.number||e.code;var k=n();a=Z("_error_",P(a),k,k,-1);k=la(a);0<=c&&(b+="|"+c);0<=f&&(b+="|"+f);Ea("_location_",u(b),a);g&&(b=g.replace("\n","|"),Ea("_stack_",u(b),a));e&&Ea("_code_",u(e),a);d&&Ea("_useraction_",u(d.type+"|"+d.name),a);k&&Y()}}function Ea(a,
b,c){var d=n();a=Z(a,P(b),d,d,-1);la(a,c.actionId)}function wb(a){if(a)for(var b=document.getElementsByTagName("LABEL"),c=0;c<b.length;c++)if(b[c].htmlFor==a)return a=b[c],F(a.innerText,a.textContent);return null}function F(a){for(var b=0;b<arguments.length;b++){var c=arguments[b];if(c&&"string"==typeof c&&ra(c))return ra(c)}return null}function zc(a){if(a){if(0===a.indexOf("data:"))return null;a=a.split("/");if(0<a.length)return a[a.length-1].split(".")[0]}return null}function Ac(a){if(a){var b=
a.split("/");if(0<b.length&&(b=ra(b[b.length-1]),null!==b))return b}return a}function Bc(a,b){var c=b.nodeName?b.nodeName.toUpperCase():xb,d=b.type&&"string"===typeof b.type?b.type.toUpperCase():null,e=null;switch(a){case ca.LABEL:c==ma&&d!=yb&&(c=!d||d!=zb&&d!=Cc&&d!=Dc&&d!=Ab?null:b.value,e=wb(b.id),e=!d||d!=zb&&d!=Cc&&d!=Dc?F(e,c):F(c,e));e||(e=F(b.textContent,b.innerText));break;case ca.NAME:if(c==ma&&d!=yb||c==zb)e=F(b.name,b.title,d&&d==Ab?b.alt:null);break;case ca.OTHER:c==ma&&d==Ab?e=zc(b.src):
c==Ec?e=F(b.title,Ac(b.href)):c==ne?e=F(b.name,b.title,b.alt,zc(b.src)):c==oe&&(e=F(b.name,b.id,b.action));e||(e=F(b.title,b.data,b.wholeText,b.id));break;case ca.CLASS:e="object"==typeof b.className?b.baseVal||b.animVal:b.className;break;case ca.TAG:c==ma&&d!=yb?e=ma+": "+d:c==Ec?e="LINK":na||(na=e=c)}return e}function Fc(a){if(!a)return null;if(v.ie&&Ra(a))return"VML Node";var b=a.nodeName?a.nodeName.toUpperCase():xb;if(b==Gc||b==Hc||b==Ic||b==Jc)return na;for(b=0;4>=b;b++){var c=Bc(b,a);if(c&&
c!==na)return c}return Fc(a.parentNode)}function Kc(a,b){if(!b||0>=b.length||20<Fa)return null;for(var c=0;c<b.length;c++){var d=b[c];if(v.ie&&Ra(d))return"VML Node";var e=null;Fa++;if(e=Kc(a,d.childNodes))return e;Fa--;if(e=Bc(a,d))return e}return null}function pe(a){na=null;if(v.ie&&Ra(a))return"VML Node";if("string"==typeof a)return a;if(a.attributes){var b=a.attributes["data-dtName"];if(b&&b.value)return b.value}b=a.nodeName?a.nodeName.toUpperCase():xb;if(b==Gc||b==Hc||b==Ic||b==Jc)return"Page: "+
qe;if(b==Lc){if(a)if(b=a.nodeName?a.nodeName.toUpperCase():null,b!=Lc)a=null;else{var c=wb(a.id),b=F(c,a.name,b),c=null;a.multiple||(a=a.options&&-1<a.selectedIndex?a.options[a.selectedIndex]:null)&&(c=F(a.label,a.innerText,a.textContent));a=c?"["+b+"] to value ["+c+"]":b}else a=null;return a}if(b==Mc)return a?(b=a.nodeName?a.nodeName.toUpperCase():null,b!=Mc?a=null:(c=wb(a.id),a=F(c,a.name,b)||a.nodeName)):a=null,a;if(b=ra(F(a.innerText,a.textContent)))return b;Fa=0;return 0<a.childNodes.length?
ca.foreach(Kc,[a]):Fc(a)}function Nc(a,b,c,d){if(f!=y)return y.bi(a,b,c,d);try{d||(d=30);var e={id:re++,htmlObject:a,name:null,type:b,info:c?c:"-",start:n(),sourceActionCreated:!1,validUntil:n()+d,getName:function(){if(!e.name){var a="";(a=l.uam?"dTMasked_"+e.htmlObject.nodeName:P(pe(e.htmlObject)))||(a="-");var b=l.sl||100;a.length>b&&(a=a.substring(0,b-3)+"...");e.name=a}return e.name},isSourceActionCreated:function(){return e.sourceActionCreated},setSourceActionCreated:function(){var a=e;do a.sourceActionCreated=
!0,a=a.next;while(a)}};Oc&&(e.next=G,e.next&&(e.next.prev=e),G=e);return e}finally{e&&(a=e.validUntil-n(),0>=a?Bb(e):D(function(){Bb(e)},a))}}function aa(){if(f!=y)return y.gci();try{if(G){for(var a=G,b=G.next;b;){var c;if(c=b.htmlObject!=a.htmlObject)a:{for(var d=b.htmlObject.parentNode;d;){if(d==a.htmlObject){c=!0;break a}d=d.parentNode}c=!1}c&&(a=b);b=b.next}return a}return null}catch(e){return null}}function Pc(){return f!=y?y.ci():aa()?G.getName():null}function se(){return f!=y?y.cit():aa()?
G.type:null}function oa(){return f!=y?y.gpi():pa}function Qc(){return f!=y?y.pi():oa()?pa.getName():null}function te(){return f!=y?y.pit():oa()?pa.type:null}function Rc(){return f!=y?y.piv():oa()?pa.validUntil:null}function Sc(){for(var a=G;a;)a.htmlObject=null,a=a.next;G=null}function Bb(a){if(f!=y)return y.ei(a);if(G){for(var b=G;b.next&&b!==a;)b=b.next;b===a&&(Pc()&&(pa=G),b.htmlObject=null,b.prev?b.prev.next=b.next:G=b.next,b.next&&(b.next.prev=b.prev))}}function K(a,b,c){var d=!1,e=l.doNotDetect?
l.doNotDetect.split(","):null;if(c&&e)for(var f=0;f<e.length;f++)e[f]==c&&(d=!0);d||(b||(b=a),O(document,a,function(a){var c=null;a.target?c=a.target:a.srcElement&&(c=a.srcElement);var d=b;if(("KD"==d||"KU"==d)&&"password"!==c.type&&(a=a.keyCode?a.keyCode:a.charCode))if(l.uam){var e=String.fromCharCode(a);"a"<=e&&"z">=e||"A"<=e&&"Z">=e||"0"<=e&&"9">=e||(d+=a)}else d+=a;Nc(c,d,null,30)}))}function ue(a){(Oc=a)||Sc()}function Cb(){var a=void 0,a=B?0<B.redirectStart?B.navigationStart+6E4>B.redirectStart?
B.navigationStart:B.redirectStart:B.navigationStart+6E4>B.fetchStart?B.navigationStart:B.fetchStart:"undefined"!=typeof h.external&&"undefined"!=typeof h.external.pageT?n()-h.external.pageT:"undefined"!=typeof h.gtbExternal&&"undefined"!=typeof h.gtbExternal.pageT?n()-h.gtbExternal.pageT():"undefined"!=typeof h.chrome&&"undefined"!=typeof h.chrome.csi?n()-h.chrome.csi().pageT:Ga;return a<Ga-2E4||a>Ga+2E4?Ga:Math.floor(a)}function ve(a){a||n()}function Tc(){Ha--;if(0>=Ha){var a=B?B.loadEventEnd:0,
b;b=B?B.loadEventStart:0;b=b<Cb()?0:b;if(da){if(a&&b){var c=n()-a;5E3<(0>c?-1*c:c)&&(a+=c);V(da.actionId,a,b)}else V(da.actionId);da=void 0}Uc||Vc()}}function Vc(){qa&&(V(qa.actionId),qa=null,I())}function we(){Ha++}function xe(){Uc=!0}function Wc(){qa&&!da&&(da=za("_onload_","_load_",null,qa))}function ye(a){q(Db,a)}function ze(a){q(nb,a)}function Ae(a){q(Eb,a)}function Be(){if(!Xc){Xc=!0;I();for(var a=0;a<Db.length;a++)try{Db[a]()}catch(b){}Tc()}}function Yc(){I();Fb||(Wc(),Fb=!0,D(Be,0))}function Ce(){"loaded"==
document.readyState&&I();"complete"==document.readyState&&Yc()}function Gb(){I();Fb||("complete"==document.readyState?Zc?ya(!1,!0,!1,!1):(Zc=!0,D(Gb,3E3)):D(Gb,3E3))}function De(){Hb();var a;if(0<Ia.length){a=$b(!0,!1);for(var b=0;b<Ia.length;b++)try{var c=Ia[b];a?gb(c.path,c.data):fb(null,c.path,!1,c.data)}catch(d){}}if(!$c)try{Sc();var e;for(e=0;e<sa.length;e++){var f=sa[e],g=f.object,h=f.event,l=f.listener;g.removeEventListener?g.removeEventListener(h,l,!1):g.detachEvent("on"+h,l)}B=Pa=Oa=sa=null;
$c=!0}catch(n){}Ja||(Ja=!0,Za())}function Ee(){Hb(!0);Ja||(Ja=!0,Za())}function Fe(){var a=Sa("dtSa");T("dtSa","-");if(a&&"-"!=a&&(a=a.split("|"),9==a.length)){var a={delayed:"true"==a[0],type:a[1],actionId:a[2],name:a[3],info:a[4],start:a[5],frameId:a[6],location:a[7],title:a[8]},b=!1;f!=f.tdto()&&(b=f.tdto().iRO(a.location));if(!document.referrer||a.location==u(document.referrer)||a.location==u(document.location)||b)L=w=a}}function ad(a,b,c,d){var e=lb();!e&&a&&b&&c?T("dtSa","true|"+u(b)+"|-1|"+
u(a)+"|"+u(d||"-")+"|"+c+"|"+E+"|"+u(Ta())+"|"+u(P(ea()))):e&&L?(T("dtSa","false|"+L.type+"|"+L.actionId+"|"+L.name+"|"+L.info||"-|"+n()+"|"+L.frameId+"|"+u(Ta())+"|"+u(P(ea()))),L=null):t&&"_load_"!=t.name&&T("dtSa","false|"+u(t.type)+"|"+t.actionId+"|"+u(t.name)+"|"+u(t.info||"-")+"|"+n()+"|"+E+"|"+u(Ta())+"|"+u(P(ea())))}function bd(){Hb()}function Hb(a){if(!Ka){Ka=!a;for(a=0;a<Eb.length;a++)Eb[a](Ka);bc(!1,!0,!0);a=aa();if(!a){var b=oa();b&&z.isci(Qc())&&3E3>=n()-Rc()&&(a=b)}a&&!1===a.isSourceActionCreated()?
(a.setSourceActionCreated(),ad(a.getName(),a.type,a.start,a.info)):ad(null,null,null,null);if(v.sf&&h.frames)for(a=0;a<h.frames.length;a++)try{h.frames[a].dT_&&h.frames[a].dT_.obc()}catch(c){}s&&cc(!0,!1)}}function Ge(){return 0>=Ha}function He(a){cd?a(z.bwsW,z.bwsH):q(Ib,a)}function Ie(){var a=document,b=a.documentElement,c=0,d=0,e=a.body;"number"===typeof self.innerWidth?(c=self.innerWidth,d=self.innerHeight):a&&(b.clientWidth||b.clientHeight)?(c=b.clientWidth,d=b.clientHeight):e&&(e.clientWidth||
e.clientHeight)&&(c=e.clientWidth,d=e.clientHeight);if(0<c&&0<d)a=screen.availWidth,b=screen.availHeight,c=c<a?c:a,d=d<b?d:b;else{var f;z.gBI().ie?f=140:f=10;c=Math.max(c,f);d=Math.max(d,10)}z.bwsW=c;z.bwsH=d;cd=!0;for(a=0;a<Ib.length;a++)Ib[a](c,d)}if(!window.dT_){var Ga=n(),h=window,D=h.setTimeout,Oa=h.XMLHttpRequest,Pa=h.ActiveXObject,R=h.parent,f={version:"1005800010009664"};h.dT_||(document.dT_=window.dT_,h.dT_=f);f.dC=Pb;f.sC=N;f.gC=H;f.gx=Na;f.st=Ob;f.nw=n;f.pn=x;var v=[],p=navigator.userAgent;
try{var dd=/Firefox[\/\s](\d+\.\d+)/,Je=/(iPod|iPhone|iPad)/,Ke=/AppleWebKit/;if(0<=p.indexOf("MSIE"))v.ie=x(p.substr(p.lastIndexOf("MSIE")+5,3));else if(0<=p.indexOf("Trident"))0<=p.indexOf("rv:")?v.ie=x(p.substr(p.lastIndexOf("rv:")+3,2)):0<=p.indexOf("rv ")&&(v.ie=x(p.substr(p.lastIndexOf("rv ")+3,2)));else if(0<=p.indexOf("Android"))v.ab=parseFloat(p.substr(p.indexOf("Android")+8,1));else if(p.match(Je)&&p.match(Ke)){var Jb=/Version\/([0-9]*\.[0-9]*)/;p.match(Jb)||(Jb=/OS ([0-9]*_[0-9]*)/);v.msf=
parseFloat(p.match(Jb)[1])}else if(("Safari"===navigator.appName||-1<p.indexOf("Safari"))&&-1===p.indexOf("Chrom"))v.sf=x(p.substr(p.lastIndexOf("Version/")+8,1));else if(h.opera)v.op=x(h.opera.version().split(".")[0]);else if(0<=p.indexOf("OPR/"))v.op=x(p.match(/OPR\/([0-9]*\.[0-9]*)/)[1]);else if(dd.test(p)){var ed=x(p.match(dd)[1]);v.ff=-1===ed?0:ed}else{var Kb=p.indexOf("Chrom");-1<Kb&&(v.ch=x(p.substring(Kb+7,Kb+9)))}}catch(Le){}f.gBI=id;f.hyb=jd;var l={reportUrl:"dynaTraceMonitor",initializedModules:"",
csu:"dtagent"},Lb=document.getElementsByTagName("script");if(0<Lb.length)for(var La,Mb=Lb.length-1;0<=Mb;Mb--)if(La=Lb[Mb],La.attributes){var fd=La.attributes.getNamedItem("data-dtconfig");if(fd){md(La.src,fd.value);break}}f.acfgP=pd;f.gAN=rd;f.smbi=ld;f.isc=qd;f.cfg=od;f.ism=kd;f.iMod=nd;var xd="\t\n\r",sa=[],ud={"!":"%21","~":"%7E","*":"%2A","(":"%28",")":"%29","'":"%27",$:"%24",";":"%3B",",":"%2C"},vd={"^":"^^","|":"^p",",":"^c",";":"^s"},X={};f.icr=Bd;f.aIOf=Qa;f.ael=O;f.lv=Sa;f.sv=T;f.gh=sd;
f.cvs=yd;f.esc=W;f.aesc=u;f.tpesc=wd;f.ulc=Ua;f.gP=Va;f.apl=Rb;f.rpl=Sb;f.dbg=zd;f.dbc=Ad;var Wa=6E8,U="dtPC",Xa="dtCookie",Q=ua(),ga=!1,E=n()%Wa+"_"+x(1E3*Math.random());f.frameId=E;f.gFId=Cd;f.gDtc=Ya;f.gSId=ua;f.gPAH=Dd;var Vb=32,Ub=32;Ya()||N(Xa,-1*(Math.floor(20*Math.random())+2)+"$"+Ed());var Yb,bb="dtVT",cb=18E5,ab=!0,xa="rx_visitID";f.sVIDP=xa;f.pageId=null;f.pageTitle=null;f.frameCount=0;var ha=null,jb,$,eb={};try{R&&R!==self&&R.dT_&&R.dT_.version===f.version&&($=R.dT_,ha=R.dT_.tdto())}catch(Me){}ha?
(f.pageId=ha.pageId,f.pageTitle=ha.pageTitle,jb=$.frameId,$.frameCount++):(f.pageId=E,f.pageTitle=ea());f.tp=Jd;f.tdto=Id;f.aFU=Gd;f.iRO=Hd;var kc=function(a,b,c,d){function e(a){var b=n()-d;Ua(b/2);a=a&&a.split("|");for(b=1;b<a.length;b++){var c=a[b].indexOf("dtCookie\x3d");if(-1<c){N("dtCookie",decodeURIComponent(a[b].substr(c+9)));break}}}"onreadystatechange"in a||(a.onload=function(){e(a.responseText)});a.onreadystatechange=function(){4==a.readyState&&(200==a.status?e(a.responseText):Ka&&v.sf&&
Ia.push({path:b,data:c}),a=null)}},Kd=navigator&&"sendBeacon"in navigator,s=null,mb=[],ja=!1,fc=!1,kb,hc=!0,ia=!1,mc,lc,Ia=[];f.ss=Pd;f.asl=Od;f.sMPS=Nd;var t=null,Aa=null,A=[],r=[],hb=0,sb=0,S=[],J=[],M,ec=!1,Qd=1,ub=[];f.getCurrentOpenRootActions=oc;var nb=[];f.ea=ie;f.la=je;f.lx=Rd;f.ex=uc;f.ec=Td;f.lc=Ud;f.eV=Vd;f.aacc=Wd;f.pe=Xd;f.pw=ta;f.pl=Yd;f.rv=ce;f.rs=de;f.pcn=ka;f.ewa=Zd;f.gWRI=$d;f.gAID=ae;f.ca=ee;f.can=xc;f.isci=fe;f.noa=ge;f.ti=I;f.las=ke;f.gca=oc;f.gAR=be;f.gAA=he;var ba,vb=!1,Da=
l.mepp;Da||0==Da||(Da=10);var Ba=0;h.onerror!=Ca&&(h.onerror&&(ba=h.onerror),h.onerror=Ca);try{Rb(window,"onerror",function(){return Ca},function(a){ba=a})}catch(Ne){}O(h,"unload",function(){Sb(window,"onerror");h.onerror=null});f.gne=le;f.iet=me;var zb="BUTTON",ma="INPUT",yb="HIDDEN",Cc="SUBMIT",Dc="RESET",Ab="IMAGE",ne="IMG",Ec="A",oe="FORM",Jc="#DOCUMENT",Gc="HTML",Hc="BODY",Ic="HEAD",Lc="SELECT",xb="unknown",Mc="TEXTAREA",qe=Ac(h.location.href),na=null,ca={LABEL:0,NAME:1,OTHER:2,CLASS:3,TAG:4,
foreach:function(a,b){for(var c=0;4>=c;c++){var d=a(c,b);if(d)return d}return null}},Fa=0,G,pa=null,re=0,Oc=!0,y=f.tdto();K("click","C","clk");K("mousedown","D","mdw");K("mouseup","U","mup");K("dblclick","CC","dcl");K("keydown","KD","kyd");K("keyup","KU","kyu");K("scroll","S","scr");K("touchstart","TS","tcs");K("touchend","TE","tce");if(l.ade){var Ma=l.ade.split(",");if(Ma&&0<Ma.length)for(var Nb=0;Nb<Ma.length;Nb++)K(Ma[Nb])}f.bi=Nc;f.ei=Bb;f.gci=aa;f.ci=Pc;f.cit=se;f.gpi=oa;f.pi=Qc;f.pit=te;f.piv=
Rc;f.aad=ue;var Fb=!1,Xc=!1,Zc=!1,w=null,L=null;Fe();var da=null,Ja=!1,Db=[],Eb=[],Ka=!1,$c=!1,Ha=1;f.tdto().aFU(document.location.href);l.rid||(l.rid=td(l.ridPath));var B=null,Uc,gd=Va();gd&&(B=gd.timing);f.sls=ve;f.sole=Tc;f.iolm=we;f.solb=Wc;f.slem=xe;f.lst=Cb;O(h,"beforeunload",bd);O(h,"unload",De);O(h,"pagehide",Ee);O(document,"readystatechange",Ce);D(Gb,3E3);O(h,"load",Yc);Md();if(!window.doNotCreateLoadAction){var qa=za("_load_","_load_",Cb(),null);I()}f.all=ye;f.ail=ze;f.apll=Ae;f.sle=Vc;
f.obc=bd;f.ile=Ge;var z=window.dT_,Ib=[],cd=!1;z.all(Ie);z.abwsl||(z.abwsl=He);var hd=!1;z.asl(function(a,b){if(!b&&!hd&&z.las()){hd=!0;var c=z.tdto(),d=function(a){return 0>a||2147483647<=a||isNaN(a)?0:a};c?(a.a("w",d(c.bwsW)),a.a("h",d(c.bwsH))):(a.a("w",d(z.bwsW)),a.a("h",d(z.bwsH)))}});(function(){z.asl(function(a,b){var c=z.gC("dtCookie");if("undefined"!=typeof window.sessionStorage){var d=window.sessionStorage.dtCookie;if("undefined"!=typeof d&&""!=d&&"null"!=d&&c!=d){var e;if(e=d){var f=e.indexOf("|");
-1!=f&&(e=e.substring(0,f))}"undefined"!=typeof c&&null!=c&&""!=c?c&&e&&(d=c.indexOf("|"),c=-1!=d?e+c.substring(d):e):c=d}null!=c&&(z.dC("dtCookie"),z.sC("dtCookie",c),window.sessionStorage.setItem("dtCookie",c))}})})()}})();(function(){function k(d,e,c){for(var b=2;b<arguments.length;b++)d.push(arguments[b]),(b<arguments.length-1||e)&&d.push("|")}function E(d,e){return d[12]<e[12]?1:d[12]==e[12]?0:-1}function F(){if(c.re_t)for(var d=0,d=0;d<q.length;d++){var e=q[d];0===e[4]&&0<e[3]&&("i"===e[0]?(e[8]=!0,e[7]=!1,e[4]=c.nw()):(e[5]||(e[7]=!0),e[4]=e[3]));e[12]=e[4]?e[4]-e[3]:e[12]}}function G(){var d=c.lst();F();if(0<q.length&&0<d){var e={},f;for(f=0;f<q.length;f++){var b=q[f],h=c.gh(b[1]);e[h]||(e[h]=[]);k(e[h],0,b)}var n=
{},l=null;for(l in e)if(e.hasOwnProperty(l)&&e[l].length){h=e[l];h.sort(E);var g={};for(f=0;f<h.length;f++){var b=h[f],a=g[b[0]];a||(a={successful:0,interrupted:0,failed:0,cached:0,withImpact:0,withNetworkTiming:0,impactIntervals:new w,w3cIntervals:new w,avgImpact:0,minImpact:d+99999999,maxImpact:0,avgNetworkTime:0,minNetworkTime:d+99999999,maxNetworkTime:0},g[b[0]]=a);if(b[3]&&b[4]){a.withImpact++;var m=b[4]-b[3];a.minImpact=a.minImpact<m?a.minImpact:m;a.maxImpact=a.maxImpact>m?a.maxImpact:m;a.avgImpact=
c.pn((a.avgImpact*(a.withImpact-1)+m)/a.withImpact,10);a.impactIntervals.add(b[3]-d,b[4]-d)}if(b[5]&&b[6]){a.withNetworkTiming++;m=b[11];0>m&&(m=b[6]-b[5]);if(0>m||3E5<m)m=0;a.minNetworkTime=a.minNetworkTime<m?a.minNetworkTime:m;a.maxNetworkTime=a.maxNetworkTime>m?a.maxNetworkTime:m;a.avgNetworkTime=c.pn((a.avgNetworkTime*(a.withNetworkTiming-1)+m)/a.withNetworkTiming,10);a.w3cIntervals.add(b[5],b[6])}a.successful+=b[7]?1:0;a.cached+=b[9]?1:0;b[7]||(a.interrupted+=b[8]?1:0,a.failed+=b[8]?0:1)}n[l]=
{maxDuration:0};for(var p in g)g.hasOwnProperty(p)&&(a=g[p],n[l].maxDuration=Math.max(a.maxImpact,a.maxNetworkTime),n[l][p]="i"==p||"s"==p?[a.successful,a.failed,a.interrupted,a.cached,a.withImpact,a.withNetworkTiming,a.impactIntervals.getIntervalsAsString(),a.avgImpact,a.withImpact?a.minImpact:"0",a.maxImpact,a.w3cIntervals.getIntervalsAsString(),a.avgNetworkTime,a.withNetworkTiming?a.minNetworkTime:"0",a.maxNetworkTime].join("|"):"o"==p||"y"==p?[a.successful,a.failed,a.interrupted,a.cached,a.w3cIntervals.getIntervalsAsString(),
a.avgNetworkTime,a.minNetworkTime,a.maxNetworkTime].join("|"):[a.successful,a.impactIntervals.getIntervalsAsString(),a.avgImpact,a.minImpact,a.maxImpact].join("|"))}p=[];for(l in n)e.hasOwnProperty(l)&&k(p,0,l);0<s&&(h=p.sort(function(a,b){return n[b].maxDuration-n[a].maxDuration}),h.length>s&&(p=h.slice(0,s)));g=[];for(a=0;a<p.length;a++)for(l=p[a],h=e[l],f=n[l],0<g.length&&k(g,0,";"),k(g,1,c.aesc(l),"featureHash"),b=0,l=g.length-2,f.i&&(k(g,1,f.i),b+=2),f.s&&(k(g,1,f.s),b+=4),f.y&&(k(g,1,f.y),b+=
8),f.o&&(k(g,1,f.o),b+=16),f.c&&(k(g,1,f.c),b+=32),g.pop(),g[l]=b.toString(32),f=0;f<h.length&&f<x&&(h[f][12]>=u||h[f][11]>=u);f++)b=h[f],k(g,0,","),k(g,0,b[0]+(b[7]?"":b[8]?"i":"f"),b[3]?b[3]-d:0,b[4]?b[4]-d:0,c.aesc(b[2]),c.tpesc(b[1])),b[5]&&k(g,0,"",b[5],b[6]);d=g.join("");return c.esc(d)}return null}function y(d,e){if(!e&&!z&&c.las()){z=!0;var f;c.re_t&&(q=c.thirdPartyInfo);c.re_r&&c.arti(q);(f=G())&&d.a("3p",f);q=[]}}function H(d){var e=c.gh(d);return!(-1!=d.indexOf("chrome-extension://")||
-1!=d.indexOf("chrome://")||-1!=d.indexOf("data:"))&&(A||e&&e!=B)}function C(){0<r&&2E3<c.nw()-r?(v=!1,c.asl(y),c.sMPS(5E3)):(c.re_t&&c.inttp(),c.st(C,D))}var c=window.dT_,z=!1,D=30,u=500,x=3,A=!1,s=-1,B,r,v,w=function(){this.head=null;this.add=function(d,e){if(d>e)throw"Error: Start("+d+") must be before stop ("+e+")";var c={start:d,stop:e},b=this.head,h=null;if(b){for(;b&&d>b.start;)h=b,b=b.next;h?(c.next=h.next,h.next=c):(c.next=this.head,this.head=c)}else this.head=c,c.next=null};this.reduce=
function(){for(var d=this.head;d&&d.next;){for(;d.next&&d.stop+1>=d.next.start;)d.stop<=d.next.stop&&(d.stop=d.next.stop),d.next=d.next.next;d=d.next}};this.getIntervalsAsString=function(){this.reduce();for(var d=[],c=this.head;c;)0<d.length&&k(d,0,"_"),k(d,0,c.start),k(d,0,"_"),k(d,0,c.stop),c=c.next;return d.join("")}},q=[],n=c.cfg("tp")?c.cfg("tp"):"500,50,3";if(c.smbi("2")){var n=n.split(","),t=n.length;3<=t&&5>=t&&(u=c.pn(n[0],10),D=c.pn(n[1],10),x=c.pn(n[2],10),4<=t&&(A=c.pn(n[3],10)),5==t&&
(s=c.pn(n[4],10)),B=c.gh(document.location.href),c.tpih=H,c.apll(function(){c.asl(y)}),c.all(function(){r=c.nw()}),c.asl(function(){-1===r&&(r=c.nw())}),c.ca()&&!v&&(r=c.nw(),v=!0,C()),r=-1)}})();(function(){var c=window.dT_,g=window.performance,k={c:"redirectStart",d:"redirectEnd",e:"fetchStart",f:"domainLookupStart",g:"domainLookupEnd",h:"connectStart",i:"connectEnd",j:"secureConnectionStart",k:"requestStart",l:"responseStart",m:"responseEnd",n:"domLoading",o:"domInteractive",p:"domContentLoadedEventStart",q:"domContentLoadedEventEnd",r:"domComplete",s:"loadEventStart",t:"loadEventEnd"},l=!1;c.smbi("n")&&c.asl(function(e,m){if(!m&&!l&&c.las())if(l=!0,"undefined"!=typeof g)if(c.gBI().ff&&
9>=c.gBI().ff)e.a("nt","0");else{var a;a=g.timing||{};var d=g.navigation||{},f=a.navigationStart;if(f){var d=["a",d.type,"b",f],b;for(b in k){var h=a[k[b]];h&&h>=f&&("j"!=b&&"t"!=b&&String.fromCharCode(b.charCodeAt(0)+1),d.push(b),d.push(h-f))}a=d.join("")}else a=null;a?e.a("nt",a):e.a("nt","0")}else e.a("nt","0")})})();(function(){function n(a){a=l+a.startTime;a-=c.lst();return Math.round(a)}function m(){var a=c.gP();if(a&&a.timing){var d=a.getEntriesByType||a.webkitGetEntriesByType,g=a.getEntriesByName||a.webkitGetEntriesByName;d&&g&&(l=a.timing.navigationStart,k=function(){return d.call(a,"resource")},a.onresourcetimingbufferfull=function(){a.setResourceTimingBufferSize(k().length+100)},c.arti=q)}}function q(a){if(k)for(var d=k(),g=0;g<d.length;g++){var b=d[g];if(!r[b.name]){var h=b.name;if(!(!c.tpih(h)||-1<h.indexOf(c.gAN())||
-1<h.indexOf(c.cfg("reportUrl")))){var h=a,e={};e[0]=s(b);e[11]=Math.round(b.duration);e[5]=n(b);var m=e,f;0<b.responseEnd?(f=l+b.responseEnd,f-=c.lst(),f=Math.round(f)):(f=c.nw(),f=Math.round(f-c.lst()));m[6]=f;e[1]=b.name;p=c.gP().timing.loadEventEnd;e[2]=n(b)<=p?"_load_":"-";e[8]=0===b.responseEnd;e[7]=c.gh(b.name)==c.gh(document.location.href)&&c.gBI().ie?0!=b.requestStart:0<b.responseEnd;e[9]=c.gBI().ch?0!=b.domainLookupStart&&0==b.requestStart:c.gh(b.name)!=c.gh(document.location.href)&&0===
b.requestStart&&2>b.duration?!0:0>=b.responseEnd?!1:b.requestStart==b.fetchStart&&b.requestStart==b.responseStart&&b.responseStart!=b.responseEnd;h.push(e)}}}}function s(a){a=a.name.toLowerCase();-1<a.indexOf("ScriptResource.axd")?a="js":(a=a.substr(1+a.lastIndexOf("/")),0<a.indexOf("?")&&(a=a.split("?")[0]),0<a.indexOf("#")&&(a=a.split("#")[0]),a=0<a.indexOf(".")?a.substring(a.lastIndexOf(".")+1):"-");switch(a){case "js":return"s";case "gif":case "png":case "jpg":case "jpeg":case "ico":case "tiff":case "bmp":case "xbm":case "svg":return"i";
case "css":return"y";default:return"o"}}var c=window.dT_,k=void 0,l=null,p=null,r={};if(c.smbi("r"))if(window.externalHost)c.re_r=!1;else{var d=c.gP();if(d&&d.timing){var t=d.getEntriesByName||d.webkitGetEntriesByName;(d.getEntriesByType||d.webkitGetEntriesByType)&&t?(c.re_r=!0,m()):c.re_r=!1}else c.re_r=!1}})();