/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/algoliasearch/dist/algoliasearch.umd.js":
/*!**************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch.umd.js ***!
  \**************************************************************/
/***/ (function(module) {

/*! algoliasearch.umd.js | 4.23.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))}))}return r}function n(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){var e,r="algoliasearch-client-js-".concat(t.key),n=function(){return void 0===e&&(e=t.localStorage||window.localStorage),e},o=function(){return JSON.parse(n().getItem(r)||"{}")},i=function(t){n().setItem(r,JSON.stringify(t))},u=function(){var e=t.timeToLive?1e3*t.timeToLive:null,r=o(),n=Object.fromEntries(Object.entries(r).filter((function(t){return void 0!==a(t,2)[1].timestamp})));if(i(n),e){var u=Object.fromEntries(Object.entries(n).filter((function(t){var r=a(t,2)[1],n=(new Date).getTime();return!(r.timestamp+e<n)})));i(u)}};return{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){u();var e=JSON.stringify(t);return o()[e]})).then((function(t){return Promise.all([t?t.value:e(),void 0!==t])})).then((function(t){var e=a(t,2),n=e[0],o=e[1];return Promise.all([n,o||r.miss(n)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve().then((function(){var a=o();return a[JSON.stringify(t)]={timestamp:(new Date).getTime(),value:e},n().setItem(r,JSON.stringify(a)),e}))},delete:function(t){return Promise.resolve().then((function(){var e=o();delete e[JSON.stringify(t)],n().setItem(r,JSON.stringify(e))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function u(t){var e=o(t.caches),r=e.shift();return void 0===r?{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=e();return n.then((function(t){return Promise.all([t,r.miss(t)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve(e)},delete:function(t){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(t,n,a).catch((function(){return u({caches:e}).get(t,n,a)}))},set:function(t,n){return r.set(t,n).catch((function(){return u({caches:e}).set(t,n)}))},delete:function(t){return r.delete(t).catch((function(){return u({caches:e}).delete(t)}))},clear:function(){return r.clear().catch((function(){return u({caches:e}).clear()}))}}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},e={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in e)return Promise.resolve(t.serializable?JSON.parse(e[o]):e[o]);var i=n(),u=a&&a.miss||function(){return Promise.resolve()};return i.then((function(t){return u(t)})).then((function(){return i}))},set:function(r,n){return e[JSON.stringify(r)]=t.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(t){return delete e[JSON.stringify(t)],Promise.resolve()},clear:function(){return e={},Promise.resolve()}}}function c(t,e,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":e};return{headers:function(){return t===m.WithinHeaders?n:{}},queryParameters:function(){return t===m.WithinQueryParameters?n:{}}}}function f(t){var e=0;return t((function r(){return e++,new Promise((function(n){setTimeout((function(){n(t(r))}),Math.min(100*e,1e3))}))}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return Promise.resolve()};return Object.assign(t,{wait:function(r){return d(t.then((function(t){return Promise.all([e(t,r),t])})).then((function(t){return t[1]})))}})}function l(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}return t}function h(t,e){return e?(Object.keys(e).forEach((function(r){t[r]=e[r](t)})),t):t}function p(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=0;return t.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var m={WithinQueryParameters:0,WithinHeaders:1};function y(t,e){var r=t||{},n=r.data||{};return Object.keys(r).forEach((function(t){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(t)&&(n[t]=r[t])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||e,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var g={Read:1,Write:2,Any:3},v=1,b=2,P=3;function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return r(r({},t),{},{status:e,lastUpdate:Date.now()})}function w(t){return"string"==typeof t?{protocol:"https",url:t,accept:g.Any}:{protocol:t.protocol||"https",url:t.url,accept:t.accept||g.Any}}var I="DELETE",x="GET",j="POST",D="PUT";function q(t,e){return Promise.all(e.map((function(e){return t.get(e,(function(){return Promise.resolve(O(e))}))}))).then((function(t){var r=t.filter((function(t){return function(t){return t.status===v||Date.now()-t.lastUpdate>12e4}(t)})),n=t.filter((function(t){return function(t){return t.status===P&&Date.now()-t.lastUpdate<=12e4}(t)})),a=[].concat(o(r),o(n));return{getTimeout:function(t,e){return(0===n.length&&0===t?1:n.length+3+t)*e},statelessHosts:a.length>0?a.map((function(t){return w(t)})):e}}))}function k(t,e,n,a){var i=[],u=function(t,e){if(t.method===x||void 0===t.data&&void 0===e.data)return;var n=Array.isArray(t.data)?t.data:r(r({},t.data),e.data);return JSON.stringify(n)}(n,a),s=function(t,e){var n=r(r({},t.headers),e.headers),a={};return Object.keys(n).forEach((function(t){var e=n[t];a[t.toLowerCase()]=e})),a}(t,a),c=n.method,f=n.method!==x?{}:r(r({},n.data),a.data),d=r(r(r({"x-algolia-agent":t.userAgent.value},t.queryParameters),f),a.queryParameters),l=0,h=function e(r,o){var f=r.pop();if(void 0===f)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:E(i)};var h={data:u,headers:s,method:c,url:N(f,n.path,d),connectTimeout:o(l,t.timeouts.connect),responseTimeout:o(l,a.timeout)},p=function(t){var e={request:h,response:t,host:f,triesLeft:r.length};return i.push(e),e},m={onSuccess:function(t){return function(t){try{return JSON.parse(t.content)}catch(e){throw function(t,e){return{name:"DeserializationError",message:t,response:e}}(e.message,t)}}(t)},onRetry:function(n){var a=p(n);return n.isTimedOut&&l++,Promise.all([t.logger.info("Retryable failure",A(a)),t.hostsCache.set(f,O(f,n.isTimedOut?P:b))]).then((function(){return e(r,o)}))},onFail:function(t){throw p(t),function(t,e){var r=t.content,n=t.status,a=r;try{a=JSON.parse(r).message}catch(t){}return function(t,e,r){return{name:"ApiError",message:t,status:e,transporterStackTrace:r}}(a,n,e)}(t,E(i))}};return t.requester.send(h).then((function(t){return function(t,e){return function(t){var e=t.status;return t.isTimedOut||function(t){var e=t.isTimedOut,r=t.status;return!e&&0==~~r}(t)||2!=~~(e/100)&&4!=~~(e/100)}(t)?e.onRetry(t):2==~~(t.status/100)?e.onSuccess(t):e.onFail(t)}(t,m)}))};return q(t.hostsCache,e).then((function(t){return h(o(t.statelessHosts).reverse(),t.getTimeout)}))}function S(t){var e=t.hostsCache,r=t.logger,n=t.requester,o=t.requestsCache,i=t.responsesCache,u=t.timeouts,s=t.userAgent,c=t.hosts,f=t.queryParameters,d={hostsCache:e,logger:r,requester:n,requestsCache:o,responsesCache:i,timeouts:u,userAgent:s,headers:t.headers,queryParameters:f,hosts:c.map((function(t){return w(t)})),read:function(t,e){var r=y(e,d.timeouts.read),n=function(){return k(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Read)})),t,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:t.cacheable))return n();var o={request:t,mappedRequestOptions:r,transporter:{queryParameters:d.queryParameters,headers:d.headers}};return d.responsesCache.get(o,(function(){return d.requestsCache.get(o,(function(){return d.requestsCache.set(o,n()).then((function(t){return Promise.all([d.requestsCache.delete(o),t])}),(function(t){return Promise.all([d.requestsCache.delete(o),Promise.reject(t)])})).then((function(t){var e=a(t,2);e[0];return e[1]}))}))}),{miss:function(t){return d.responsesCache.set(o,t)}})},write:function(t,e){return k(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Write)})),t,y(e,d.timeouts.write))}};return d}function T(t){var e={value:"Algolia for JavaScript (".concat(t,")"),add:function(t){var r="; ".concat(t.segment).concat(void 0!==t.version?" (".concat(t.version,")"):"");return-1===e.value.indexOf(r)&&(e.value="".concat(e.value).concat(r)),e}};return e}function N(t,e,r){var n=R(r),a="".concat(t.protocol,"://").concat(t.url,"/").concat("/"===e.charAt(0)?e.substr(1):e);return n.length&&(a+="?".concat(n)),a}function R(t){return Object.keys(t).map((function(e){return p("%s=%s",e,(r=t[e],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(t[e]):t[e]));var r})).join("&")}function E(t){return t.map((function(t){return A(t)}))}function A(t){var e=t.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},t),{},{request:r(r({},t.request),{},{headers:r(r({},t.request.headers),e)})})}var C=function(t){return function(e,r){return t.transporter.write({method:j,path:"2/abtests",data:e},r)}},U=function(t){return function(e,r){return t.transporter.write({method:I,path:p("2/abtests/%s",e)},r)}},z=function(t){return function(e,r){return t.transporter.read({method:x,path:p("2/abtests/%s",e)},r)}},J=function(t){return function(e){return t.transporter.read({method:x,path:"2/abtests"},e)}},F=function(t){return function(e,r){return t.transporter.write({method:j,path:p("2/abtests/%s/stop",e)},r)}},H=function(t){return function(e){return t.transporter.read({method:x,path:"1/strategies/personalization"},e)}},M=function(t){return function(e,r){return t.transporter.write({method:j,path:"1/strategies/personalization",data:e},r)}};function B(t){return function e(r){return t.request(r).then((function(n){if(void 0!==t.batch&&t.batch(n.hits),!t.shouldStop(n))return n.cursor?e({cursor:n.cursor}):e({page:(r.page||0)+1})}))}({})}var K=function(t){return function(e,a){var o=a||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=r({acl:e},void 0!==i?{queryParameters:i}:{});return d(t.transporter.write({method:j,path:"1/keys",data:s},u),(function(e,r){return f((function(n){return tt(t)(e.key,r).catch((function(t){if(404!==t.status)throw t;return n()}))}))}))}},W=function(t){return function(e,r,n){var a=y(n);return a.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:j,path:"1/clusters/mapping",data:{cluster:r}},a)}},L=function(t){return function(e,r,n){return t.transporter.write({method:j,path:"1/clusters/mapping/batch",data:{users:e,cluster:r}},n)}},Q=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:{action:"addEntry",body:[]}}},r),(function(e,r){return jt(t)(e.taskID,r)}))}},G=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:"copy",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},V=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Rules]}))}},_=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Settings]}))}},X=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Synonyms]}))}},Y=function(t){return function(e,r){return e.method===x?t.transporter.read(e,r):t.transporter.write(e,r)}},Z=function(t){return function(e,r){return d(t.transporter.write({method:I,path:p("1/keys/%s",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).then(r).catch((function(t){if(404!==t.status)throw t}))}))}))}},$=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"deleteEntry",body:{objectID:t}}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},tt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/keys/%s",e)},r)}},et=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/task/%s",e.toString())},r)}},rt=function(t){return function(e){return t.transporter.read({method:x,path:"/1/dictionaries/*/settings"},e)}},nt=function(t){return function(e){return t.transporter.read({method:x,path:"1/logs"},e)}},at=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping/top"},e)}},ot=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/clusters/mapping/%s",e)},r)}},it=function(t){return function(e){var r=e||{},a=r.retrieveMappings,o=n(r,["retrieveMappings"]);return!0===a&&(o.getClusters=!0),t.transporter.read({method:x,path:"1/clusters/mapping/pending"},o)}},ut=function(t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:t.transporter,appId:t.appId,indexName:e};return h(n,r.methods)}},st=function(t){return function(e){return t.transporter.read({method:x,path:"1/keys"},e)}},ct=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters"},e)}},ft=function(t){return function(e){return t.transporter.read({method:x,path:"1/indexes"},e)}},dt=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping"},e)}},lt=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:"move",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},ht=function(t){return function(e,r){return d(t.transporter.write({method:j,path:"1/indexes/*/batch",data:{requests:e}},r),(function(e,r){return Promise.all(Object.keys(e.taskID).map((function(n){return ut(t)(n,{methods:{waitTask:de}}).waitTask(e.taskID[n],r)})))}))}},pt=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:e}},r)}},mt=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{params:R(t.params||{})})}));return t.transporter.read({method:j,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},yt=function(t){return function(e,a){return Promise.all(e.map((function(e){var o=e.params,i=o.facetName,u=o.facetQuery,s=n(o,["facetName","facetQuery"]);return ut(t)(e.indexName,{methods:{searchForFacetValues:ue}}).searchForFacetValues(i,u,r(r({},a),s))})))}},gt=function(t){return function(e,r){var n=y(r);return n.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:I,path:"1/clusters/mapping"},n)}},vt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},bt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/keys/%s/restore",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).catch((function(t){if(404!==t.status)throw t;return r()}))}))}))}},Pt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},Ot=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("/1/dictionaries/%s/search",e),data:{query:r},cacheable:!0},n)}},wt=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/clusters/mapping/search",data:{query:e}},r)}},It=function(t){return function(e,r){return d(t.transporter.write({method:D,path:"/1/dictionaries/*/settings",data:e},r),(function(e,r){return jt(t)(e.taskID,r)}))}},xt=function(t){return function(e,r){var a=Object.assign({},r),o=r||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=i?{queryParameters:i}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return d(t.transporter.write({method:D,path:p("1/keys/%s",e),data:s},u),(function(r,n){return f((function(r){return tt(t)(e,n).then((function(t){return function(t){return Object.keys(a).filter((function(t){return-1!==c.indexOf(t)})).every((function(e){if(Array.isArray(t[e])&&Array.isArray(a[e])){var r=t[e];return r.length===a[e].length&&r.every((function(t,r){return t===a[e][r]}))}return t[e]===a[e]}))}(t)?Promise.resolve():r()}))}))}))}},jt=function(t){return function(e,r){return f((function(n){return et(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},Dt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/indexes/%s/batch",t.indexName),data:{requests:e}},r),(function(e,r){return de(t)(e.taskID,r)}))}},qt=function(t){return function(e){return B(r(r({shouldStop:function(t){return void 0===t.cursor}},e),{},{request:function(r){return t.transporter.read({method:j,path:p("1/indexes/%s/browse",t.indexName),data:r},e)}}))}},kt=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return B(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return se(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},St=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return B(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return ce(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},Tt=function(t){return function(e,r,a){var o=a||{},i=o.batchSize,u=n(o,["batchSize"]),s={taskIDs:[],objectIDs:[]};return d(function n(){var a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=[];for(a=o;a<e.length&&(c.push(e[a]),c.length!==(i||1e3));a++);return 0===c.length?Promise.resolve(s):Dt(t)(c.map((function(t){return{action:r,body:t}})),u).then((function(t){return s.objectIDs=s.objectIDs.concat(t.objectIDs),s.taskIDs.push(t.taskID),a++,n(a)}))}(),(function(e,r){return Promise.all(e.taskIDs.map((function(e){return de(t)(e,r)})))}))}},Nt=function(t){return function(e){return d(t.transporter.write({method:j,path:p("1/indexes/%s/clear",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Rt=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/rules/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},Et=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/synonyms/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},At=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/indexes/%s/deleteByQuery",t.indexName),data:e},r),(function(e,r){return de(t)(e.taskID,r)}))}},Ct=function(t){return function(e){return d(t.transporter.write({method:I,path:p("1/indexes/%s",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Ut=function(t){return function(e,r){return d(zt(t)([e],r).then((function(t){return{taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},zt=function(t){return function(e,r){var n=e.map((function(t){return{objectID:t}}));return Tt(t)(n,le.DeleteObject,r)}},Jt=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:p("1/indexes/%s/rules/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ft=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:p("1/indexes/%s/synonyms/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ht=function(t){return function(e){return Gt(t)(e).then((function(){return!0})).catch((function(t){if(404!==t.status)throw t;return!1}))}},Mt=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("1/answers/%s/prediction",t.indexName),data:{query:e,queryLanguages:r},cacheable:!0},n)}},Bt=function(t){return function(e,o){var i=o||{},u=i.query,s=i.paginate,c=n(i,["query","paginate"]),f=0;return function n(){return ie(t)(u||"",r(r({},c),{},{page:f})).then((function(t){for(var r=0,o=Object.entries(t.hits);r<o.length;r++){var i=a(o[r],2),u=i[0],c=i[1];if(e(c))return{object:c,position:parseInt(u,10),page:f}}if(f++,!1===s||f>=t.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()}))}()}},Kt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/%s",t.indexName,e)},r)}},Wt=function(){return function(t,e){for(var r=0,n=Object.entries(t.hits);r<n.length;r++){var o=a(n[r],2),i=o[0];if(o[1].objectID===e)return parseInt(i,10)}return-1}},Lt=function(t){return function(e,a){var o=a||{},i=o.attributesToRetrieve,u=n(o,["attributesToRetrieve"]),s=e.map((function(e){return r({indexName:t.indexName,objectID:e},i?{attributesToRetrieve:i}:{})}));return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:s}},u)}},Qt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/rules/%s",t.indexName,e)},r)}},Gt=function(t){return function(e){return t.transporter.read({method:x,path:p("1/indexes/%s/settings",t.indexName),data:{getVersion:2}},e)}},Vt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/synonyms/%s",t.indexName,e)},r)}},_t=function(t){return function(e,r){return d(Xt(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},Xt=function(t){return function(e,r){var a=r||{},o=a.createIfNotExists,i=n(a,["createIfNotExists"]),u=o?le.PartialUpdateObject:le.PartialUpdateObjectNoCreate;return Tt(t)(e,u,i)}},Yt=function(t){return function(e,i){var u=i||{},s=u.safe,c=u.autoGenerateObjectIDIfNotExist,f=u.batchSize,l=n(u,["safe","autoGenerateObjectIDIfNotExist","batchSize"]),h=function(e,r,n,a){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:n,destination:r}},a),(function(e,r){return de(t)(e.taskID,r)}))},m=Math.random().toString(36).substring(7),y="".concat(t.indexName,"_tmp_").concat(m),g=ee({appId:t.appId,transporter:t.transporter,indexName:y}),v=[],b=h(t.indexName,y,"copy",r(r({},l),{},{scope:["settings","synonyms","rules"]}));return v.push(b),d((s?b.wait(l):b).then((function(){var t=g(e,r(r({},l),{},{autoGenerateObjectIDIfNotExist:c,batchSize:f}));return v.push(t),s?t.wait(l):t})).then((function(){var e=h(y,t.indexName,"move",l);return v.push(e),s?e.wait(l):e})).then((function(){return Promise.all(v)})).then((function(t){var e=a(t,3),r=e[0],n=e[1],i=e[2];return{objectIDs:n.objectIDs,taskIDs:[r.taskID].concat(o(n.taskIDs),[i.taskID])}})),(function(t,e){return Promise.all(v.map((function(t){return t.wait(e)})))}))}},Zt=function(t){return function(e,n){return ne(t)(e,r(r({},n),{},{clearExistingRules:!0}))}},$t=function(t){return function(e,n){return oe(t)(e,r(r({},n),{},{clearExistingSynonyms:!0}))}},te=function(t){return function(e,r){return d(ee(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},ee=function(t){return function(e,r){var a=r||{},o=a.autoGenerateObjectIDIfNotExist,i=n(a,["autoGenerateObjectIDIfNotExist"]),u=o?le.AddObject:le.UpdateObject;if(u===le.UpdateObject){var s=!0,c=!1,f=void 0;try{for(var l,h=e[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){if(void 0===l.value.objectID)return d(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}))}}catch(t){c=!0,f=t}finally{try{s||null==h.return||h.return()}finally{if(c)throw f}}}return Tt(t)(e,u,i)}},re=function(t){return function(e,r){return ne(t)([e],r)}},ne=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingRules,u=y(n(a,["forwardToReplicas","clearExistingRules"]));return o&&(u.queryParameters.forwardToReplicas=1),i&&(u.queryParameters.clearExistingRules=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/rules/batch",t.indexName),data:e},u),(function(e,r){return de(t)(e.taskID,r)}))}},ae=function(t){return function(e,r){return oe(t)([e],r)}},oe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingSynonyms,u=a.replaceExistingSynonyms,s=y(n(a,["forwardToReplicas","clearExistingSynonyms","replaceExistingSynonyms"]));return o&&(s.queryParameters.forwardToReplicas=1),(u||i)&&(s.queryParameters.replaceExistingSynonyms=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/synonyms/batch",t.indexName),data:e},s),(function(e,r){return de(t)(e.taskID,r)}))}},ie=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/query",t.indexName),data:{query:e},cacheable:!0},r)}},ue=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("1/indexes/%s/facets/%s/query",t.indexName,e),data:{facetQuery:r},cacheable:!0},n)}},se=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/rules/search",t.indexName),data:{query:e}},r)}},ce=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/synonyms/search",t.indexName),data:{query:e}},r)}},fe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:D,path:p("1/indexes/%s/settings",t.indexName),data:e},i),(function(e,r){return de(t)(e.taskID,r)}))}},de=function(t){return function(e,r){return f((function(n){return function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/task/%s",t.indexName,e.toString())},r)}}(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},le={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},he={Settings:"settings",Synonyms:"synonyms",Rules:"rules"},pe=1,me=2,ye=3;var ge=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},ve=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{fallbackParameters:{},model:"bought-together"})})),n)}},be=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{model:"related-products"})})),n)}},Pe=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"trending-facets",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},Oe=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"trending-items",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},we=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{model:"looking-similar"})})),n)}},Ie=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"recommended-for-you",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}};function xe(t,e,n){var a,o={appId:t,apiKey:e,timeouts:{connect:1,read:2,write:30},requester:{send:function(t){return new Promise((function(e){var r=new XMLHttpRequest;r.open(t.method,t.url,!0),Object.keys(t.headers).forEach((function(e){return r.setRequestHeader(e,t.headers[e])}));var n,a=function(t,n){return setTimeout((function(){r.abort(),e({status:0,content:n,isTimedOut:!0})}),1e3*t)},o=a(t.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(t.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),e({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),e({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(t.data)}))}},logger:(a=ye,{debug:function(t,e){return pe>=a&&console.debug(t,e),Promise.resolve()},info:function(t,e){return me>=a&&console.info(t,e),Promise.resolve()},error:function(t,e){return console.error(t,e),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:u({caches:[i({key:"".concat("4.23.3","-").concat(t)}),s()]}),userAgent:T("4.23.3").add({segment:"Browser"})},f=r(r({},o),n),d=function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=S(r(r({hosts:[{url:"personalization.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{getPersonalizationStrategy:H,setPersonalizationStrategy:M}}))}};return function(t){var e=t.appId,n=c(void 0!==t.authMode?t.authMode:m.WithinHeaders,e,t.apiKey),a=S(r(r({hosts:[{url:"".concat(e,"-dsn.algolia.net"),accept:g.Read},{url:"".concat(e,".algolia.net"),accept:g.Write}].concat(l([{url:"".concat(e,"-1.algolianet.com")},{url:"".concat(e,"-2.algolianet.com")},{url:"".concat(e,"-3.algolianet.com")}]))},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({transporter:a,appId:e,addAlgoliaAgent:function(t,e){a.userAgent.add({segment:t,version:e})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},t.methods)}(r(r({},f),{},{methods:{search:mt,searchForFacetValues:yt,multipleBatch:ht,multipleGetObjects:pt,multipleQueries:mt,copyIndex:G,copySettings:_,copySynonyms:X,copyRules:V,moveIndex:lt,listIndices:ft,getLogs:nt,listClusters:ct,multipleSearchForFacetValues:yt,getApiKey:tt,addApiKey:K,listApiKeys:st,updateApiKey:xt,deleteApiKey:Z,restoreApiKey:bt,assignUserID:W,assignUserIDs:L,getUserID:ot,searchUserIDs:wt,listUserIDs:dt,getTopUserIDs:at,removeUserID:gt,hasPendingMappings:it,clearDictionaryEntries:Q,deleteDictionaryEntries:$,getDictionarySettings:rt,getAppTask:et,replaceDictionaryEntries:vt,saveDictionaryEntries:Pt,searchDictionaryEntries:Ot,setDictionarySettings:It,waitAppTask:jt,customRequest:Y,initIndex:function(t){return function(e){return ut(t)(e,{methods:{batch:Dt,delete:Ct,findAnswers:Mt,getObject:Kt,getObjects:Lt,saveObject:te,saveObjects:ee,search:ie,searchForFacetValues:ue,waitTask:de,setSettings:fe,getSettings:Gt,partialUpdateObject:_t,partialUpdateObjects:Xt,deleteObject:Ut,deleteObjects:zt,deleteBy:At,clearObjects:Nt,browseObjects:qt,getObjectPosition:Wt,findObject:Bt,exists:Ht,saveSynonym:ae,saveSynonyms:oe,getSynonym:Vt,searchSynonyms:ce,browseSynonyms:St,deleteSynonym:Ft,clearSynonyms:Et,replaceAllObjects:Yt,replaceAllSynonyms:$t,searchRules:se,getRule:Qt,deleteRule:Jt,saveRule:re,saveRules:ne,replaceAllRules:Zt,browseRules:kt,clearRules:Rt}})}},initAnalytics:function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=S(r(r({hosts:[{url:"analytics.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{addABTest:C,getABTest:z,getABTests:J,stopABTest:F,deleteABTest:U}}))}},initPersonalization:d,initRecommendation:function(){return function(t){return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."),d()(t)}},getRecommendations:ge,getFrequentlyBoughtTogether:ve,getLookingSimilar:we,getRecommendedForYou:Ie,getRelatedProducts:be,getTrendingFacets:Pe,getTrendingItems:Oe}}))}return xe.version="4.23.3",xe}));


/***/ }),

/***/ "./src/extensions/search/algolia/app/src/search/algolia.ts":
/*!*****************************************************************!*\
  !*** ./src/extensions/search/algolia/app/src/search/algolia.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! algoliasearch */ "./node_modules/algoliasearch/dist/algoliasearch.umd.js");
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(algoliasearch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");



class Algolia {
  constructor(frontend) {
    this.frontend = frontend;
    this.settings = this.frontend.config().options.search.settings;
    this.client = algoliasearch__WEBPACK_IMPORTED_MODULE_2___default()(this.settings.algolia_application_id, this.settings.algolia_search_key);
  }
  getType() {
    return 'algolia';
  }
  async search(query) {
    const locale = this.frontend.config().locale || null;
    const has_translations = this.frontend.config().has_translations || false;
    const params = {};
    if (has_translations) {
      params.facetFilters = [`language:${locale}`];
    }
    const multipleQueries = [{
      indexName: this.settings.algolia_index_name,
      params: params,
      query
    }];
    try {
      return await this.client.search(multipleQueries);
    } catch (error) {
      if (this.frontend.config().is_admin_bar_showing) {
        const message = error.message;
        alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`You must run a deployment to index the content for first time when you are using wordpress. Error: ${message}`));
      }
      return {
        results: []
      };
    }
  }
  renderResults(target, results) {
    if (!results.results) {
      return;
    }
    const template = document.getElementById('static-snap-search-result-template')?.innerHTML;
    if (!template) {
      return;
    }
    const rendered = mustache__WEBPACK_IMPORTED_MODULE_1__["default"];
    let html = '';
    for (const result of results.results) {
      const hits = result.hits;
      const itemHtml = hits.map(hit => {
        return rendered.render(template, hit);
      }).join('');
      html += '<li>' + itemHtml + '</li>';
    }
    target.innerHTML = '<ol>' + html + '</ol>';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Algolia);

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/mustache/mustache.mjs":
/*!********************************************!*\
  !*** ./node_modules/mustache/mustache.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mustache);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************!*\
  !*** ./src/extensions/search/algolia/app/src/start.ts ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/algolia */ "./src/extensions/search/algolia/app/src/search/algolia.ts");

window.StaticSnapFrontend.Search.addModule(new _search_algolia__WEBPACK_IMPORTED_MODULE_0__["default"](window.StaticSnapFrontend));
})();

/******/ })()
;
//# sourceMappingURL=algolia.js.map