webpackJsonp([0xd2a57dc1d883],{54:function(e,t,n){"use strict";function o(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function a(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=a;var r=[{plugin:n(265),options:{plugins:[],siteUrl:"https://gatsby-starter-typescript-plus.netlify.com"}}]},145:function(e,t,n){"use strict";t.components={"component---src-templates-page-tsx":n(258),"component---src-pages-404-tsx":n(255),"component---src-pages-index-tsx":n(256),"component---src-pages-page-2-tsx":n(257)},t.json={"layout-index.json":n(259),"a-markdown-page.json":n(262),"404.json":n(260),"index.json":n(263),"page-2.json":n(264),"404-html.json":n(261)},t.layouts={"layout---index":n(254)}},146:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(2),f=o(l),p=n(97),d=o(p),h=n(40),g=o(h),m=n(54),v=n(359),y=o(v),R=function(e){var t=e.children;return s.default.createElement("div",null,t())},_=function(e){function t(n){a(this,t);var o=r(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,y.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);_.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=_,e.exports=t.default},40:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(295),r=o(a),u=(0,r.default)();e.exports=u},147:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(52),r=n(98),u=o(r),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),r=(0,u.default)(o,t);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),i[r])return i[r];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,a.matchPath)(r,{path:e.path})||(0,a.matchPath)(r,{path:e.matchPath}))return c=e,i[r]=e,!0}else{if((0,a.matchPath)(r,{path:e.path,exact:!0}))return c=e,i[r]=e,!0;if((0,a.matchPath)(r,{path:e.path+"index.html"}))return c=e,i[r]=e,!0}return!1}),c}}},148:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(87),r=o(a),u=n(54),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,r.default)();e.exports=s},261:function(e,t,n){n(8),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(288)})})}},260:function(e,t,n){n(8),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(289)})})}},262:function(e,t,n){n(8),e.exports=function(e){return n.e(0x9820ec0a8a1,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(290)})})}},263:function(e,t,n){n(8),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(291)})})}},259:function(e,t,n){n(8),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(90)})})}},264:function(e,t,n){n(8),e.exports=function(e){return n.e(0x7b71d9db271c,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(292)})})}},254:function(e,t,n){n(8),e.exports=function(e){return n.e(22676092666560,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(149)})})}},97:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var a=n(1),r=(o(a),n(147)),u=o(r),i=n(40),c=o(i),s=n(98),l=o(s),f=void 0,p={},d={},h={},g={},m={},v=[],y=[],R={},_="",x=[],P={},w=function(e){return e&&e.default||e},b=void 0,k=!0,C=[],E={},N={},j=5;b=n(150)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){x=x.filter(function(t){return t!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var O=function(e,t){return P[e]>P[t]?1:P[e]<P[t]?-1:0},S=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},L=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){g[t]=o,C.push({resource:t,succeeded:!e}),N[t]||(N[t]=e),C=C.slice(-j),n(e,o)})}},A=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):N[t]?e.nextTick(function(){n(N[t])}):L(t,function(e,o){if(e)n(e);else{var a=w(o());m[t]=a,n(e,a)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=C.find(function(e){return e.succeeded});return!!t},T=function(e,t){console.log(t),E[e]||(E[e]=t),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){y=[],R={},P={},x=[],v=[],_=""},addPagesArray:function(e){v=e,_="/blog",f=(0,u.default)(e,_)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var t=(0,l.default)(e,_);if(!v.some(function(e){return e.path===t}))return!1;var n=1/U;U+=1,R[t]?R[t]+=1:R[t]=1,M.has(t)||y.unshift(t),y.sort(S);var o=f(t);return o.jsonName&&(P[o.jsonName]?P[o.jsonName]+=1+n:P[o.jsonName]=1+n,x.indexOf(o.jsonName)!==-1||g[o.jsonName]||x.unshift(o.jsonName)),o.componentChunkName&&(P[o.componentChunkName]?P[o.componentChunkName]+=1+n:P[o.componentChunkName]=1+n,x.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||x.unshift(o.componentChunkName)),x.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:P}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var a;if(n){if(o>=t.length)break;a=t[o++]}else{if(o=t.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),k=!1;if(E[t])return T(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return T(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){h[t]={component:a,json:r,layout:u,page:o};var e={component:a,json:r,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,t){e&&T(o.path,"Loading the component for "+o.path+" failed"),a=t,i()}),A(o.jsonName,function(e,t){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),r=t,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,t){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:M.getResourcesForPathname};t.default=M}).call(t,n(142))},293:function(e,t){e.exports=[{componentChunkName:"component---src-templates-page-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"a-markdown-page.json",path:"/a-markdown-page/"},{componentChunkName:"component---src-pages-404-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404-html.json",path:"/404.html"}]},150:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],a=[],r=function(){var e=t();e&&(a.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(54),u=n(1),i=o(u),c=n(143),s=o(c),l=n(52),f=n(269),p=n(246),d=o(p),h=n(89),g=n(148),m=o(g),v=n(40),y=o(v),R=n(293),_=o(R),x=n(294),P=o(x),w=n(146),b=o(w),k=n(145),C=o(k),E=n(97),N=o(E);n(170),window.___history=m.default,window.___emitter=y.default,N.default.addPagesArray(_.default),N.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=N.default,window.matchPath=l.matchPath;var j=P.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),O=function(e){var t=j[e];return null!=t&&(m.default.replace(t.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){O(e.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n(151);var o=function(e){function t(e){e.page.path===N.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,h.createLocation)(e,null,null,m.default.location),o=n.pathname,a=j[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==n.pathname||r.search!==n.search||r.hash!==n.hash){var u=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);N.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:m.default})[0],g=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},v=(0,l.withRouter)(b.default);N.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return N.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,a({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0],c=(0,r.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},294:function(e,t){e.exports=[]},151:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(40),r=o(a),u="/";u="/blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},98:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},246:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(a,e=function(){for(n.removeEventListener(a,e),r=1;e=t.shift();)e()}),function(e){r?setTimeout(e,0):t.push(e)}})},8:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),a=n.e,r=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!r&&t&&t[o]?void s(!0):(a(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,r?r[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},265:function(e,t){"use strict";t.onRouteUpdate=function(e){var t=e.location,n=document.querySelector("link[rel='canonical']"),o=n.getAttribute("href"),a=n.getAttribute("data-baseProtocol"),r=n.getAttribute("data-baseHost");o&&a&&r&&n.setAttribute("href",a+"//"+r+t.pathname+t.search+t.hash)}},295:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},359:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},255:function(e,t,n){n(8),e.exports=function(e){return n.e(0xa25129398ba8,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(156)})})}},256:function(e,t,n){n(8),e.exports=function(e){return n.e(0xc956abe28b23,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(157)})})}},257:function(e,t,n){n(8),e.exports=function(e){return n.e(0x94072fe266bb,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(158)})})}},258:function(e,t,n){n(8),e.exports=function(e){return n.e(0xe1205677a4c8,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(160)})})}}});
//# sourceMappingURL=app-49d10a15c79862f651d5.js.map