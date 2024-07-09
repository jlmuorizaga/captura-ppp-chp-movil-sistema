"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[420],{8420:(En,ee,v)=>{v.r(ee),v.d(ee,{RegionesPage:()=>vn});var K=v(467),_=v(177),xe=v(4341),E=v(6075),i=v(4438),ne=v(7673),te=v(1985),Ae=v(6648),_e=v(274),De=v(5964),L=v(6354),re=v(980),Fe=v(5558);class U{}class B{}class T{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?"string"==typeof n?this.lazyInit=()=>{this.headers=new Map,n.split("\n").forEach(r=>{const t=r.indexOf(":");if(t>0){const o=r.slice(0,t),s=o.toLowerCase(),c=r.slice(t+1).trim();this.maybeSetNormalizedName(o,s),this.headers.has(s)?this.headers.get(s).push(c):this.headers.set(s,[c])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((r,t)=>{this.setHeaderEntries(t,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([r,t])=>{this.setHeaderEntries(r,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const r=this.headers.get(n.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,r){return this.clone({name:n,value:r,op:"a"})}set(n,r){return this.clone({name:n,value:r,op:"s"})}delete(n,r){return this.clone({name:n,value:r,op:"d"})}maybeSetNormalizedName(n,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,n)}init(){this.lazyInit&&(this.lazyInit instanceof T?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(r=>{this.headers.set(r,n.headers.get(r)),this.normalizedNames.set(r,n.normalizedNames.get(r))})}clone(n){const r=new T;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof T?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([n]),r}applyUpdate(n){const r=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if("string"==typeof t&&(t=[t]),0===t.length)return;this.maybeSetNormalizedName(n.name,r);const o=("a"===n.op?this.headers.get(r):void 0)||[];o.push(...t),this.headers.set(r,o);break;case"d":const s=n.value;if(s){let c=this.headers.get(r);if(!c)return;c=c.filter(a=>-1===s.indexOf(a)),0===c.length?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,c)}else this.headers.delete(r),this.normalizedNames.delete(r)}}setHeaderEntries(n,r){const t=(Array.isArray(r)?r:[r]).map(s=>s.toString()),o=n.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>n(this.normalizedNames.get(r),this.headers.get(r)))}}class Ce{encodeKey(n){return oe(n)}encodeValue(n){return oe(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const Xe=/%(\d[a-f0-9])/gi,Le={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function oe(e){return encodeURIComponent(e).replace(Xe,(n,r)=>{var t;return null!==(t=Le[r])&&void 0!==t?t:n})}function J(e){return`${e}`}class M{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new Ce,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function je(e,n){const r=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const s=o.indexOf("="),[c,a]=-1==s?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,s)),n.decodeValue(o.slice(s+1))],d=r.get(c)||[];d.push(a),r.set(c,d)}),r}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(r=>{const t=n.fromObject[r],o=Array.isArray(t)?t.map(J):[J(t)];this.map.set(r,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const r=this.map.get(n);return r?r[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,r){return this.clone({param:n,value:r,op:"a"})}appendAll(n){const r=[];return Object.keys(n).forEach(t=>{const o=n[t];Array.isArray(o)?o.forEach(s=>{r.push({param:t,value:s,op:"a"})}):r.push({param:t,value:o,op:"a"})}),this.clone(r)}set(n,r){return this.clone({param:n,value:r,op:"s"})}delete(n,r){return this.clone({param:n,value:r,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const r=this.encoder.encodeKey(n);return this.map.get(n).map(t=>r+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const r=new M({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(n),r}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const r=("a"===n.op?this.map.get(n.param):void 0)||[];r.push(J(n.value)),this.map.set(n.param,r);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let t=this.map.get(n.param)||[];const o=t.indexOf(J(n.value));-1!==o&&t.splice(o,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class Ue{constructor(){this.map=new Map}set(n,r){return this.map.set(n,r),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}function se(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ie(e){return typeof Blob<"u"&&e instanceof Blob}function ae(e){return typeof FormData<"u"&&e instanceof FormData}class D{constructor(n,r,t,o){var s,c;let a;if(this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function Be(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==t?t:null,a=o):a=t,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),this.transferCache=a.transferCache),null!==(s=this.headers)&&void 0!==s||(this.headers=new T),null!==(c=this.context)&&void 0!==c||(this.context=new Ue),this.params){const d=this.params.toString();if(0===d.length)this.urlWithParams=r;else{const l=r.indexOf("?");this.urlWithParams=r+(-1===l?"?":l<r.length-1?"&":"")+d}}else this.params=new M,this.urlWithParams=r}serializeBody(){return null===this.body?null:"string"==typeof this.body||se(this.body)||ie(this.body)||ae(this.body)||function Je(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)?this.body:this.body instanceof M?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ae(this.body)?null:ie(this.body)?this.body.type||null:se(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof M?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){var r,t,o,s;const c=n.method||this.method,a=n.url||this.url,d=n.responseType||this.responseType,l=null!==(r=n.transferCache)&&void 0!==r?r:this.transferCache,p=void 0!==n.body?n.body:this.body,w=null!==(t=n.withCredentials)&&void 0!==t?t:this.withCredentials,R=null!==(o=n.reportProgress)&&void 0!==o?o:this.reportProgress;let f=n.headers||this.headers,m=n.params||this.params;const b=null!==(s=n.context)&&void 0!==s?s:this.context;return void 0!==n.setHeaders&&(f=Object.keys(n.setHeaders).reduce((u,h)=>u.set(h,n.setHeaders[h]),f)),n.setParams&&(m=Object.keys(n.setParams).reduce((u,h)=>u.set(h,n.setParams[h]),m)),new D(c,a,p,{params:m,headers:f,context:b,reportProgress:R,responseType:d,withCredentials:w,transferCache:l})}}var N=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(N||{});class W{constructor(n,r=F.Ok,t="OK"){this.headers=n.headers||new T,this.status=void 0!==n.status?n.status:r,this.statusText=n.statusText||t,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class z extends W{constructor(n={}){super(n),this.type=N.ResponseHeader}clone(n={}){return new z({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class I extends W{constructor(n={}){super(n),this.type=N.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new I({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class A extends W{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}var F=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(F||{});function $(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}let ce=(()=>{var e;class n{constructor(t){this.handler=t}request(t,o,s={}){let c;if(t instanceof D)c=t;else{let l,p;l=s.headers instanceof T?s.headers:new T(s.headers),s.params&&(p=s.params instanceof M?s.params:new M({fromObject:s.params})),c=new D(t,o,void 0!==s.body?s.body:null,{headers:l,context:s.context,params:p,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}const a=(0,ne.of)(c).pipe((0,_e.H)(l=>this.handler.handle(l)));if(t instanceof D||"events"===s.observe)return a;const d=a.pipe((0,De.p)(l=>l instanceof I));switch(s.observe||"body"){case"body":switch(c.responseType){case"arraybuffer":return d.pipe((0,L.T)(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return d.pipe((0,L.T)(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return d.pipe((0,L.T)(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return d.pipe((0,L.T)(l=>l.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,o={}){return this.request("DELETE",t,o)}get(t,o={}){return this.request("GET",t,o)}head(t,o={}){return this.request("HEAD",t,o)}jsonp(t,o){return this.request("JSONP",t,{params:(new M).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,o={}){return this.request("OPTIONS",t,o)}patch(t,o,s={}){return this.request("PATCH",t,$(s,o))}post(t,o,s={}){return this.request("POST",t,$(s,o))}put(t,o,s={}){return this.request("PUT",t,$(s,o))}}return(e=n).\u0275fac=function(t){return new(t||e)(i.KVO(U))},e.\u0275prov=i.jDH({token:e,factory:e.\u0275fac}),n})();function de(e,n){return n(e)}function We(e,n){return(r,t)=>n.intercept(r,{handle:o=>e(o,t)})}const Ge=new i.nKC(""),C=new i.nKC(""),ue=new i.nKC(""),he=new i.nKC("");function qe(){let e=null;return(n,r)=>{var t;null===e&&(e=(null!==(t=(0,i.WQX)(Ge,{optional:!0}))&&void 0!==t?t:[]).reduceRight(We,de));const o=(0,i.WQX)(i.TgB),s=o.add();return e(n,r).pipe((0,re.j)(()=>o.remove(s)))}}let fe=(()=>{var e;class n extends U{constructor(t,o){super(),this.backend=t,this.injector=o,this.chain=null,this.pendingTasks=(0,i.WQX)(i.TgB);const s=(0,i.WQX)(he,{optional:!0});this.backend=null!=s?s:t}handle(t){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(C),...this.injector.get(ue,[])]));this.chain=s.reduceRight((c,a)=>function $e(e,n,r){return(t,o)=>(0,i.N4e)(r,()=>n(t,s=>e(s,o)))}(c,a,this.injector),de)}const o=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,re.j)(()=>this.pendingTasks.remove(o)))}}return(e=n).\u0275fac=function(t){return new(t||e)(i.KVO(B),i.KVO(i.uvJ))},e.\u0275prov=i.jDH({token:e,factory:e.\u0275fac}),n})();const en=/^\)\]\}',?\n/;let ye=(()=>{var e;class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new i.wOt(-2800,!1);const o=this.xhrFactory;return(o.\u0275loadImpl?(0,Ae.H)(o.\u0275loadImpl()):(0,ne.of)(null)).pipe((0,Fe.n)(()=>new te.c(c=>{const a=o.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((u,h)=>a.setRequestHeader(u,h.join(","))),t.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const u=t.detectContentTypeHeader();null!==u&&a.setRequestHeader("Content-Type",u)}if(t.responseType){const u=t.responseType.toLowerCase();a.responseType="json"!==u?u:"text"}const d=t.serializeBody();let l=null;const p=()=>{if(null!==l)return l;const u=a.statusText||"OK",h=new T(a.getAllResponseHeaders()),P=function nn(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(a)||t.url;return l=new z({headers:h,status:a.status,statusText:u,url:P}),l},w=()=>{let{headers:u,status:h,statusText:P,url:g}=p(),y=null;h!==F.NoContent&&(y=typeof a.response>"u"?a.responseText:a.response),0===h&&(h=y?F.Ok:0);let j=h>=200&&h<300;if("json"===t.responseType&&"string"==typeof y){const X=y;y=y.replace(en,"");try{y=""!==y?JSON.parse(y):null}catch(V){y=X,j&&(j=!1,y={error:V,text:y})}}j?(c.next(new I({body:y,headers:u,status:h,statusText:P,url:g||void 0})),c.complete()):c.error(new A({error:y,headers:u,status:h,statusText:P,url:g||void 0}))},R=u=>{const{url:h}=p(),P=new A({error:u,status:a.status||0,statusText:a.statusText||"Unknown Error",url:h||void 0});c.error(P)};let f=!1;const m=u=>{f||(c.next(p()),f=!0);let h={type:N.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),"text"===t.responseType&&a.responseText&&(h.partialText=a.responseText),c.next(h)},b=u=>{let h={type:N.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),c.next(h)};return a.addEventListener("load",w),a.addEventListener("error",R),a.addEventListener("timeout",R),a.addEventListener("abort",R),t.reportProgress&&(a.addEventListener("progress",m),null!==d&&a.upload&&a.upload.addEventListener("progress",b)),a.send(d),c.next({type:N.Sent}),()=>{a.removeEventListener("error",R),a.removeEventListener("abort",R),a.removeEventListener("load",w),a.removeEventListener("timeout",R),t.reportProgress&&(a.removeEventListener("progress",m),null!==d&&a.upload&&a.upload.removeEventListener("progress",b)),a.readyState!==a.DONE&&a.abort()}})))}}return(e=n).\u0275fac=function(t){return new(t||e)(i.KVO(_.N0))},e.\u0275prov=i.jDH({token:e,factory:e.\u0275fac}),n})();const H=new i.nKC(""),ge=new i.nKC("",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),me=new i.nKC("",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class ve{}let on=(()=>{var e;class n{constructor(t,o,s){this.doc=t,this.platform=o,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,_._b)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return(e=n).\u0275fac=function(t){return new(t||e)(i.KVO(_.qQ),i.KVO(i.Agw),i.KVO(ge))},e.\u0275prov=i.jDH({token:e,factory:e.\u0275fac}),n})();function sn(e,n){const r=e.url.toLowerCase();if(!(0,i.WQX)(H)||"GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return n(e);const t=(0,i.WQX)(ve).getToken(),o=(0,i.WQX)(me);return null!=t&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,t)})),n(e)}var k=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(k||{});function O(e,n){return{\u0275kind:e,\u0275providers:n}}function an(...e){const n=[ce,ye,fe,{provide:U,useExisting:fe},{provide:B,useExisting:ye},{provide:C,useValue:sn,multi:!0},{provide:H,useValue:!0},{provide:ve,useClass:on}];for(const r of e)n.push(...r.\u0275providers);return(0,i.EmA)(n)}const Re=new i.nKC("");let ln=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({providers:[an(O(k.LegacyInterceptors,[{provide:Re,useFactory:qe},{provide:C,useExisting:Re,multi:!0}]))]}),n})(),ke=(()=>{var e;class n{constructor(t){this.http=t}dameListaSucursales(){return this.http.get("http://ec2-54-153-58-93.us-west-1.compute.amazonaws.com:3005/regiones")}borraRegion(t){return this.http.delete("http://ec2-54-153-58-93.us-west-1.compute.amazonaws.com:3005/regiones/"+t)}}return(e=n).\u0275fac=function(t){return new(t||e)(i.KVO(ce))},e.\u0275prov=i.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),n})(),yn=(()=>{var e;class n{}return(e=n).\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({providers:[ke],imports:[_.MD,ln]}),n})();function gn(e,n){if(1&e){const r=i.RV6();i.j41(0,"ion-item")(1,"ion-label"),i.EFF(2),i.k0s(),i.j41(3,"ion-button",5),i.bIt("click",function(){const o=i.eBV(r).$implicit,s=i.XpG(2);return i.Njj(s.confirmaBorrar(o))}),i.EFF(4,"Borrar"),i.k0s(),i.nrm(5,"br"),i.k0s()}if(2&e){const r=n.$implicit;i.R7$(2),i.JRh(r.nombre)}}function mn(e,n){if(1&e&&i.Z7z(0,gn,6,1,"ion-item",null,i.Vm6),2&e){const r=i.XpG();i.Dyx(r.regiones)}}let vn=(()=>{var e;class n{constructor(t,o){this.regionesSvc=t,this.alertController=o}ngOnInit(){this.leerRegiones()}leerRegiones(){this.regionesSvc.dameListaSucursales().subscribe({next:t=>{console.log("Servicio leido de forma exitosa"),console.log(t),this.regiones=t},error:t=>{console.log("Error en la lectura del servicio"),console.log(t)}})}borraRegion(t){console.log("Voy a borrar esta regi\xf3n="+t),this.regionesSvc.borraRegion(t).subscribe({next:o=>{console.log("Regi\xf3n borrada de forma exitosa"),console.log(o),this.leerRegiones()},error:o=>{console.log("Error en el borrado de la regi\xf3n"),console.log(o)}})}confirmaBorrar(t){var o=this;return(0,K.A)(function*(){yield(yield o.alertController.create({header:"Confirmaci\xf3n",message:"\xbfEst\xe1s seguro de que deseas borrar la regi\xf3n "+t.nombre+" ?",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Operaci\xf3n cancelada")}},{text:"Aceptar",handler:()=>{console.log("Operaci\xf3n confirmada"),o.borraRegion(t.id)}}]})).present()})()}}return(e=n).\u0275fac=function(t){return new(t||e)(i.rXU(ke),i.rXU(E.hG))},e.\u0275cmp=i.VBU({type:e,selectors:[["app-regiones"]],standalone:!0,features:[i.aNF],decls:13,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"]],template:function(t,o){1&t&&(i.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),i.EFF(3,"regiones"),i.k0s(),i.j41(4,"ion-buttons",1),i.nrm(5,"ion-back-button"),i.k0s()()(),i.j41(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),i.EFF(10,"regiones"),i.k0s()()(),i.j41(11,"ion-list"),i.DNE(12,mn,2,0),i.k0s()()),2&t&&(i.Y8G("translucent",!0),i.R7$(6),i.Y8G("fullscreen",!0),i.R7$(6),i.vxM(12,o.regiones?12:-1))},dependencies:[yn,E.uz,E.he,E.nf,E.el,E.Jm,E.QW,E.W9,E.eU,E.BC,E.ai,_.MD,xe.YN]}),n})()}}]);