(this.webpackJsonptuesdayexam=this.webpackJsonptuesdayexam||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},2:function(e,n,t){e.exports={App:"App_App__3d-Ga",counter:"App_counter__32UyR",btn:"App_btn__1tnPx",newCounter:"App_newCounter__3V06B"}},20:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),s=t(4),i=t.n(s),o=(t(13),t(14),t(2)),u=t.n(o),a=t(1);var b=function(e){var n=5===e.counter?u.a.counter:"";return Object(a.jsxs)("div",{className:u.a.App,children:[Object(a.jsx)("div",{className:n,children:Object(a.jsx)("h3",{className:u.a.newCounter,children:e.counter})}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{className:u.a.btn,disabled:5===e.counter,onClick:function(){e.increase()},children:"inc"})}),Object(a.jsx)("button",{className:u.a.btn,disabled:0===e.counter,onClick:function(){e.reset()},children:"reset"})]})},d=t(3),j=0;var l=function(){var e=Object(d.c)((function(e){return e.counter})),n=Object(d.b)();return Object(a.jsx)("div",{children:Object(a.jsx)(b,{counter:e,increase:function(){n({type:"INCREASE-NUMBER"})},reset:function(){n({type:"RESET-NUMBER"})}})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),s(e),i(e)}))},h=t(8),f=Object(h.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREASE-NUMBER":return e<5&&(j=e+1),j;case"RESET-NUMBER":return 5===j&&(j-=5),j;default:return e}}}),x=Object(h.b)(f);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d.a,{store:x,children:Object(a.jsx)(l,{})})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.50d6f516.chunk.js.map