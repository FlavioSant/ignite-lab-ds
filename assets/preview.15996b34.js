var O=Object.defineProperty;var u=(s,r)=>O(s,"name",{value:r,configurable:!0});var b=(s,r)=>()=>(r||s((r={exports:{}}).exports,r),r.exports);import{w as E,h as N,p as k,S as $}from"./iframe.c62a9d9a.js";var W=b((J,h)=>{var f="storybook/a11y",G="a11yHighlight",P="".concat(f,"/result"),D="".concat(f,"/request"),C="".concat(f,"/running"),q="".concat(f,"/error"),M="".concat(f,"/manual"),Y="".concat(f,"/highlight"),v={RESULT:P,REQUEST:D,RUNNING:C,ERROR:q,MANUAL:M,HIGHLIGHT:Y};function H(s,r,n,i,a,l,e){try{var c=s[l](e),o=c.value}catch(g){n(g);return}c.done?r(o):Promise.resolve(o).then(i,a)}u(H,"asyncGeneratorStep");function S(s){return function(){var r=this,n=arguments;return new Promise(function(i,a){var l=s.apply(r,n);function e(o){H(l,i,a,e,c,"next",o)}u(e,"_next");function c(o){H(l,i,a,e,c,"throw",o)}u(c,"_throw"),e(void 0)})}}u(S,"_asyncToGenerator");var _=E.document,B=E.window;h&&h.hot&&h.hot.decline&&h.hot.decline();var m=N.getChannel(),p=!1,d,Q=function(){var s=S(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:if(i=e.sent,a=i.manual,a){e.next=7;break}return e.next=7,w(n);case 7:case"end":return e.stop()}},"_callee$"),r)},"_callee")));return u(function(n){return s.apply(this,arguments)},"handleRequest")}(),w=function(){var s=S(regeneratorRuntime.mark(u(function r(n){var i,a,l,e,c,o,g,T,y;return regeneratorRuntime.wrap(u(function(t){for(;;)switch(t.prev=t.next){case 0:return d=n,t.prev=1,t.next=4,I(n);case 4:if(i=t.sent,p){t.next=19;break}return p=!0,m.emit(v.RUNNING),t.next=10,k(()=>import("./axe.cff2a6b1.js").then(A=>A.a),["assets/axe.cff2a6b1.js","assets/iframe.c62a9d9a.js"]);case 10:return a=t.sent.default,l=i.element,e=l===void 0?"#root":l,c=i.config,o=i.options,g=o===void 0?{}:o,T=_.querySelector(e),a.reset(),c&&a.configure(c),t.next=17,a.run(T,g);case 17:y=t.sent,d===n?m.emit(v.RESULT,y):(p=!1,w(d));case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),m.emit(v.ERROR,t.t0);case 24:return t.prev=24,p=!1,t.finish(24);case 27:case"end":return t.stop()}},"_callee2$"),r,null,[[1,21,24,27]])},"_callee2")));return u(function(n){return s.apply(this,arguments)},"run")}(),I=function(){var s=S(regeneratorRuntime.mark(u(function r(n){var i,a;return regeneratorRuntime.wrap(u(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.__STORYBOOK_STORY_STORE__.loadStory({storyId:n});case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return i=e.t0,a=i.parameters,e.abrupt("return",a.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return e.stop()}},"_callee3$"),r)},"_callee3")));return u(function(n){return s.apply(this,arguments)},"getParams")}();m.on(v.REQUEST,Q);m.on(v.MANUAL,w);var V=u(function(r){return`
  outline: 2px dashed `.concat(r,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},"highlightStyle"),R=E.document;h&&h.hot&&h.hot.decline&&h.hot.decline();var L=N.getChannel(),K=u(function(r){var n=G;U();var i=Array.from(new Set(r.elements)),a=R.createElement("style");a.setAttribute("id",n),a.innerHTML=i.map(function(l){return"".concat(l,`{
          `).concat(V(r.color),`
         }`)}).join(" "),R.head.appendChild(a)},"highlight"),U=u(function(){var r=G,n=R.getElementById(r);n&&n.parentNode.removeChild(n)},"resetHighlight");L.on($,U);L.on(v.HIGHLIGHT,K)});export default W();
//# sourceMappingURL=preview.15996b34.js.map
