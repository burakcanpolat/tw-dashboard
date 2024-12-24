(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(30959)}])},83787:function(e,t,r){"use strict";r.d(t,{Ol:function(){return u},Zb:function(){return a},aY:function(){return c},ll:function(){return s}});var n=r(85893),o=r(67294),l=r(94042);let a=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",r),...o})});a.displayName="Card";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...o})});u.displayName="CardHeader";let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...o})});s.displayName="CardTitle";let i=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-gray-500",r),...o})});i.displayName="CardDescription";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...o})});c.displayName="CardContent";let f=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...o})});f.displayName="CardFooter"},94042:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(90512),o=r(98388);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},95405:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let o="refresh",l="navigate",a="restore",u="server-patch",s="prefetch",i="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14231:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(52492),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(38754),o=n._(r(67294)),l=r(47406),a=r(30578),u=r(39902),s=r(44316),i=r(30586),c=r(42534),f=r(14751),d=r(4457),p=r(14231),h=r(18134),m=r(95405),y=new Set;function b(e,t,r,n,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(y.has(l))return;y.add(l)}let u=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function x(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:y,children:v,prefetch:g=null,passHref:j,replace:_,shallow:N,scroll:C,locale:O,onClick:E,onMouseEnter:w,onTouchStart:R,legacyBehavior:T=!1,...P}=e;r=v,T&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(c.RouterContext),k=o.default.useContext(f.AppRouterContext),A=null!=M?M:k,I=!M,S=!1!==g,L=null===g?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:U,as:F}=o.default.useMemo(()=>{if(!M){let e=x(u);return{href:e,as:y?x(y):e}}let[e,t]=(0,l.resolveHref)(M,u,!0);return{href:e,as:y?(0,l.resolveHref)(M,y):t||e}},[M,u,y]),H=o.default.useRef(U),K=o.default.useRef(F);T&&(n=o.default.Children.only(r));let D=T?n&&"object"==typeof n&&n.ref:t,[z,V,Z]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(K.current!==F||H.current!==U)&&(Z(),K.current=F,H.current=U),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[F,D,U,Z,z]);o.default.useEffect(()=>{A&&V&&S&&b(A,U,F,{locale:O},{kind:L},I)},[F,U,V,O,S,null==M?void 0:M.locale,A,I,L]);let W={ref:q,onClick(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,l,u,s,i,c){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let p=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:u,locale:i,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(p):p()}(e,A,U,F,_,N,C,O,I)},onMouseEnter(e){T||"function"!=typeof w||w(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(S||!I)&&b(A,U,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)},onTouchStart(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(S||!I)&&b(A,U,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)}};if((0,s.isAbsoluteUrl)(F))W.href=F;else if(!T||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(F,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);W.href=t||(0,h.addBasePath)((0,i.addLocale)(F,e,null==M?void 0:M.defaultLocale))}return T?o.default.cloneElement(n,W):o.default.createElement("a",{...P,...W},r)}),g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(67294),o=r(73371),l="function"==typeof IntersectionObserver,a=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,i=s||!l,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},u.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30959:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(85893);r(67294);var o=r(83787),l=r(41664),a=r.n(l),u=r(84297);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,u.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var i=()=>(0,n.jsx)("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:(0,n.jsxs)("div",{className:"container mx-auto p-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-center mb-8 text-gray-900",children:"TradeWizz Dashboard"}),(0,n.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[(0,n.jsx)(a(),{href:"/mrr-dashboard",className:"block",children:(0,n.jsx)(o.Zb,{className:"p-6 hover:shadow-lg transition-shadow cursor-pointer group",children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("h2",{className:"text-2xl font-semibold text-gray-900 flex items-center justify-between",children:["Current Status",(0,n.jsx)(s,{className:"w-5 h-5 transform group-hover:translate-x-1 transition-transform"})]}),(0,n.jsx)("p",{className:"text-gray-600",children:"View current MRR analytics and performance metrics"})]})})}),(0,n.jsx)(a(),{href:"/future-status",className:"block",children:(0,n.jsx)(o.Zb,{className:"p-6 hover:shadow-lg transition-shadow cursor-pointer group",children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("h2",{className:"text-2xl font-semibold text-gray-900 flex items-center justify-between",children:["Future Status",(0,n.jsx)(s,{className:"w-5 h-5 transform group-hover:translate-x-1 transition-transform"})]}),(0,n.jsx)("p",{className:"text-gray-600",children:"Explore pre-seed valuation and future projections"})]})})})]})]})})},41664:function(e,t,r){e.exports=r(11521)}},function(e){e.O(0,[582,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);