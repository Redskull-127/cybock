(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,u=void 0!==c&&c,y=e.loading,m=e.lazyRoot,j=void 0===m?null:m,I=e.lazyBoundary,x=void 0===I?"200px":I,L=e.className,R=e.quality,C=e.width,P=e.height,M=e.style,_=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,U=e.placeholder,D=void 0===U?"empty":U,B=e.blurDataURL,W=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=s.useContext(g.ImageConfigContext),T=s.useMemo((function(){var e=v||H||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[H]),F=W,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var K=z;if("loader"in F){if(F.loader){var $=F.loader;K=function(e){e.config;var t=b(e,["config"]);return $(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(A(e)||function(e){return void 0!==e.src}(e))}(t)){var J=A(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(P=P||J.height,C=C||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var Q=E(C),X=E(P),Y=E(R),Z=!u&&("lazy"===y||"undefined"===typeof y);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=i(s.useState(!1),2),ne=te[0],re=te[1],oe=i(p.useIntersection({rootRef:j,rootMargin:x,disabled:!Z}),3),ie=oe[0],ae=oe[1],le=oe[2],ce=!Z||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:q};0;0;var pe=Object.assign({},M,"raw"===V?{}:de),ge="blur"!==D||ne?{}:{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof X){var ye=X/Q,me=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===V?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=me):"intrinsic"===V?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(ue.display="inline-block",ue.position="relative",ue.width=Q,ue.height=X)}else 0;var he={src:S,srcSet:void 0,sizes:void 0};ce&&(he=O({config:T,src:t,unoptimized:l,layout:V,width:Q,quality:Y,sizes:n,loader:K}));var be=t;0;var ve,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var je=(o(ve={},we,he.srcSet),o(ve,Se,he.sizes),ve),Ae=s.default.useLayoutEffect,Oe=s.useRef(N),Ee=s.useRef(t);s.useEffect((function(){Oe.current=N}),[N]),Ae((function(){Ee.current!==t&&(le(),Ee.current=t)}),[le,t]);var ze=h({isLazy:Z,imgAttributes:he,heightInt:X,widthInt:Q,qualityInt:Y,layout:V,className:L,imgStyle:pe,blurStyle:ge,loading:y,config:T,unoptimized:l,placeholder:D,loader:K,srcString:be,onLoadingCompleteRef:Oe,setBlurComplete:re,setIntersection:ie,isVisible:ce},F);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(k,Object.assign({},ze)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(k,Object.assign({},ze))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},je))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),p=n(9246),g=n(8730),y=(n(670),n(2700));function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){m(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(y.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(x(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(x(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(x(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(e){return void 0!==e.default}function O(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,i=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,i=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,c),f=s.widths,d=s.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:l,width:f[p]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function I(e,t,n,r,o,i){e&&e.src!==S&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&i(!0),null===o||void 0===o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,o=e.qualityInt,i=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,y=e.unoptimized,m=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,j=e.onLoad,A=e.onError,E=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,t,"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,className:a,style:h({},l,c),ref:s.useCallback((function(e){S(e),(null===e||void 0===e?void 0:e.complete)&&I(e,p,0,f,v,w)}),[S,p,i,f,v,w]),onLoad:function(e){I(e.currentTarget,p,0,f,v,w),j&&j(e)},onError:function(e){"blur"===f&&w(!0),A&&A(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},E,O({config:g,src:p,unoptimized:y,layout:i,width:r,quality:o,sizes:t.sizes,loader:m}),"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,style:l,className:a,loading:d||"lazy"}))))};function x(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},l=n(1003),c=n(880),u=n(9246);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,i=void 0===r?!0!==Boolean(!1):r,p=e.href,g=e.as,y=e.children,m=e.prefetch,h=e.passHref,b=e.replace,v=e.shallow,w=e.scroll,S=e.locale,j=e.onClick,A=e.onMouseEnter,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=y,i&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var E,z=!1!==m,I=c.useRouter(),k=a.default.useMemo((function(){var e=o(l.resolveHref(I,p,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(I,g):n||t}}),[I,p,g]),x=k.href,L=k.as,R=a.default.useRef(x),C=a.default.useRef(L);i&&(E=a.default.Children.only(n));var P=i?E&&"object"===typeof E&&E.ref:t,M=o(u.useIntersection({rootMargin:"200px"}),3),_=M[0],q=M[1],N=M[2],U=a.default.useCallback((function(e){C.current===L&&R.current===x||(N(),C.current=L,R.current=x),_(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[L,P,x,N,_]);a.default.useEffect((function(){var e=q&&z&&l.isLocalURL(x),t="undefined"!==typeof S?S:I&&I.locale,n=f[x+"%"+L+(t?"%"+t:"")];e&&!n&&d(I,x,L,{locale:t})}),[L,x,q,S,z,I]);var D={ref:U,onClick:function(e){i||"function"!==typeof j||j(e),i&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}))}(e,I,x,L,b,v,w,S)},onMouseEnter:function(e){i||"function"!==typeof A||A(e),i&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),l.isLocalURL(x)&&d(I,x,L,{priority:!0})}};if(!i||h||"a"===E.type&&!("href"in E.props)){var B="undefined"!==typeof S?S:I&&I.locale,W=I&&I.isLocaleDomain&&l.getDomainLocale(L,B,I&&I.locales,I&&I.domainLocales);D.href=W||l.addBasePath(l.addLocale(L,B,I&&I.defaultLocale))}return i?a.default.cloneElement(E,D):a.default.createElement("a",Object.assign({},O,D),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],g=o(i.useState(t?t.current:null),2),y=g[0],m=g[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]),b=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&m(t.current)}),[t]),[h,d,b]};var i=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){n(9749)},1664:function(e,t,n){n(1551)},4298:function(e,t,n){e.exports=n(3573)}}]);