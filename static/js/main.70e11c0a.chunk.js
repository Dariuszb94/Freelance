(this.webpackJsonpfreelance=this.webpackJsonpfreelance||[]).push([[0],{26:function(t,e,n){"use strict";var c=n(1);e.a=function(){return Object(c.jsxs)("svg",{width:"48",height:"41",viewBox:"0 0 48 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("rect",{y:"5",width:"41",height:"31",fill:"black"}),Object(c.jsx)("path",{d:"M48 20.5V30.5V34.5V41L41 36V5L48 0V20.5Z",fill:"black"})]})}},31:function(t,e,n){},36:function(t,e,n){"use strict";(function(t){var c=n(4),a=n(2),r=(n(31),n(3)),i=(n(51),n(26)),s=(n(35),n(37)),o=n.n(s),l=(n(53),n(38)),j=n(1);e.a=function(){var e=Object(a.useRef)(null),n=Object(a.useRef)(null),s=Object(a.useState)(!1),u=Object(c.a)(s,2),b=(u[0],u[1]),d=Object(a.useState)(0),f=Object(c.a)(d,2),O=f[0],g=f[1],h=Object(a.useState)(!1),x=Object(c.a)(h,2),m=(x[0],x[1]),p=Object(a.useState)(0),v=Object(c.a)(p,2),y=v[0],_=v[1],w=Object(r.useSpring)({opacity:O,left:"".concat(50-50*O,"%"),top:"".concat(50-50*O,"%"),transform:"translate(".concat(50*O-50,"%, ").concat(50*O-50,"%) rotate(").concat(45*O,"deg)")}),S=Object(r.useSpring)({width:"".concat(y>0?100*y:0,"%"),opacity:"".concat(y<=0?0:1),boxShadow:"0px 0px 8px ".concat(8*y,"px #8306b1")}),L=Object(r.useSpring)({opacity:O,left:"".concat(50+50*O,"%"),top:"".concat(50-50*O,"%"),transform:"translate(".concat(-100*O,"%, ").concat(50*O-50,"%) rotate(").concat(-45*O,"deg)")}),k=Object(r.useSpring)({background:"linear-gradient(\n      to right,\n      #8306b1 -89%,\n      rgba(255, 255, 255, 0) ".concat(window.innerWidth<500?70*y:100*y,"%\n    )")}),N=Object(r.useSpring)({background:"linear-gradient(\n      to left,\n      #8306b1 -89%,\n      rgba(255, 255, 255, 0) ".concat(window.innerWidth<500?70*y:100*y,"%\n    )")});return Object(a.useEffect)((function(){t((function(){b(!0)}))}),[]),Object(a.useEffect)((function(){var t=function(t){var c=(t.target.documentElement.scrollTop-e.current.offsetTop+window.innerHeight)/n.current.clientHeight,a=(t.target.documentElement.scrollTop-e.current.offsetTop)/(e.current.clientHeight-n.current.clientHeight-80);_(a>0&&a<=1?a:a>1?1:0),c<0&&(g(0),m(!1)),c>0&&c<=1&&(g(c),m(!1)),c>1&&g(1)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[O]),Object(j.jsx)(r.animated.section,{className:"tunnel",ref:e,children:Object(j.jsx)("div",{className:"tunnel__sticky",children:Object(j.jsxs)("div",{className:"tunnel__sticky-inner",ref:n,children:[Object(j.jsx)(r.animated.div,{style:w,className:"tunnel__box__lt",children:Object(j.jsxs)("div",{className:"spotlight__inner",children:[Object(j.jsx)(i.a,{}),Object(j.jsx)("div",{className:"spotlight__inner__light",children:Object(j.jsx)(r.animated.div,{className:"spotlight__inner__light__bg",style:k})})]})}),Object(j.jsx)(r.animated.div,{style:L,className:"tunnel__box__rt",children:Object(j.jsxs)("div",{className:"spotlight__inner",children:[Object(j.jsx)(i.a,{}),Object(j.jsx)("div",{className:"spotlight__inner__light",children:Object(j.jsx)(r.animated.div,{className:"spotlight__inner__light__bg",style:N})})]})}),Object(j.jsx)(l.a,{scrollOnScene:y}),Object(j.jsxs)(r.animated.div,{className:"scene__text",children:[O>=1?Object(j.jsx)(o.a,{options:{delay:28},onInit:function(t){t.deleteAll().typeString("Please keep scrolling!").callFunction((function(){m(!0)})).start()}}):null,Object(j.jsx)(r.animated.hr,{style:S,className:"scene__text__underline"})]})]})})})}}).call(this,n(19).setImmediate)},38:function(t,e,n){"use strict";var c=n(4),a=n(7),r=n(28),i=n(2),s=n.n(i),o=(n(31),n(3)),l=n(56),j=n(39),u=n(40),b=n(41),d=n(1),f=["open","children"],O=["x","y"],g=["F","a","s","t"],h=["T","o","p"],x=["Q","u","a","l","i","t","y"],m=["R","W","D"];function p(t){t.open;var e=t.children,n=(Object(r.a)(t,f),s.a.Children.toArray(e)),c=Object(o.useTrail)(n.length,{config:{mass:5,tension:2e3,friction:135},opacity:1,x:1,y:1,from:{opacity:0,x:0,y:0}});return Object(d.jsx)(d.Fragment,{children:c.map((function(t,e){var c=t.x,i=t.y,s=Object(r.a)(t,O);return Object(d.jsx)(o.animated.div,{className:"trails-text",style:Object(a.a)(Object(a.a)({},s),{},{transform:Object(o.interpolate)([c.interpolate({range:[0,.9,1],output:[0,1.2,1]}),i.interpolate({range:[0,.9,1],output:[0,.8,1]})],(function(t,e){return"scale(".concat(t,",").concat(e,")")}))}),children:n[e]},n[e].key)}))})}var v=function(t){var e=t.children,n=Object(i.useState)(!1),a=Object(c.a)(n,2),r=a[0],s=a[1],j=Object(l.a)(r,40),u=Object(c.a)(j,1)[0],b=Object(o.useSpring)({from:{x:u?0:1,y:u?0:1},to:{x:1,y:1},config:{mass:.5,tension:120,friction:2,precision:.001},reset:u,onStart:function(t){return s(!1)}}),f=b.x,O=b.y;return Object(d.jsx)(o.animated.div,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},style:{transform:Object(o.interpolate)([f.interpolate({range:[0,.3,1],output:[1,1.3,1]}),O.interpolate({range:[0,.3,1],output:[1,.7,1]})],(function(t,e){return"scale(".concat(t,",").concat(e,")")}))},children:e})};e.a=function(t){var e=Object.assign({},t),n=(Object(o.useSpring)({opacity:e.scrollOnScene>.8?1:0,color:"red"}),Object(o.useSpring)({textShadow:"0px 0px ".concat(e.scrollOnScene>=.6?50*(e.scrollOnScene-.6):0,"px #fff")}));return Object(d.jsxs)("div",{className:"slogans",children:[Object(d.jsx)(o.animated.div,{className:"slogan",style:n,children:e.scrollOnScene>0?Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(p,{children:g.map((function(t){return Object(d.jsx)(v,{className:"letter",children:t})}))}),Object(d.jsx)(b.a,{})]}):null}),Object(d.jsx)(o.animated.div,{className:"slogan",style:n,children:e.scrollOnScene>.3?Object(d.jsxs)(i.Fragment,{children:[Object(d.jsxs)(p,{children:[h.map((function(t){return Object(d.jsx)(v,{className:"letter",children:t})})),"\xa0\xa0",x.map((function(t){return Object(d.jsx)(v,{children:t})}))]}),Object(d.jsx)(u.a,{})]}):null}),Object(d.jsx)(o.animated.div,{className:"slogan",style:n,children:e.scrollOnScene>.6?Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(p,{children:m.map((function(t){return Object(d.jsx)(v,{className:"letter",children:t})}))}),Object(d.jsx)(j.a,{})]}):null})]})}},39:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return j}));var c=n(7),a=n(4),r=n(3),i=n(2),s=n(1);function o(t){var e=t.toggle,n=(t.delay,Object(i.useState)(null)),c=Object(a.a)(n,2),s=c[0],o=c[1];return{style:Object(r.useSpring)({strokeDashoffset:e?0:s,strokeDasharray:s,delay:400,config:{friction:80}}),ref:function(t){t&&o(t.getTotalLength())}}}function l(t){var e=t.color,n=t.d,a=o({toggle:t.toggle});return Object(s.jsx)(r.animated.path,Object(c.a)(Object(c.a)({},a),{},{stroke:e,strokeWidth:"4",d:n}))}function j(){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){t((function(){r(!0)}))}),[]),Object(s.jsx)("div",{class:"icon-container",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"120",fill:"none",viewBox:"0 0 70 120",children:Object(s.jsx)(l,{toggle:c,d:"M1 6C1 3.23858 3.23858 1 6 1H64C66.7614 1 69 3.23858 69 6V105C69 107.761 66.7614 110 64 110H6C3.23858 110 1 107.761 1 105V6ZM35 106C38.3137 106 41 103.314 41 100C41 96.6863 38.3137 94 35 94C31.6863 94 29 96.6863 29 100C29 103.314 31.6863 106 35 106Z",color:" #8306b1 ",stroke:"black"})})})}}).call(this,n(19).setImmediate)},40:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return j}));var c=n(7),a=n(4),r=n(3),i=n(2),s=n(1);function o(t){var e=t.toggle,n=(t.delay,Object(i.useState)(null)),c=Object(a.a)(n,2),s=c[0],o=c[1];return{style:Object(r.useSpring)({strokeDashoffset:e?0:s,strokeDasharray:s,delay:400,config:{friction:80}}),ref:function(t){t&&o(t.getTotalLength())}}}function l(t){var e=t.color,n=t.d,a=o({toggle:t.toggle});return Object(s.jsx)(r.animated.path,Object(c.a)(Object(c.a)({},a),{},{stroke:e,strokeWidth:"4",d:n}))}function j(){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){t((function(){r(!0)}))}),[]),Object(s.jsx)("div",{class:"icon-container",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"84",fill:"none",viewBox:"0 0 88 84",children:Object(s.jsx)(l,{toggle:c,d:"M44.951 2.16312L53.8256 29.4762C54.2272 30.7123 55.3791 31.5492 56.6788 31.5492H85.3975C86.3662 31.5492 86.769 32.7888 85.9852 33.3582L62.7513 50.2386C61.6999 51.0025 61.2599 52.3566 61.6615 53.5927L70.5361 80.9058C70.8354 81.8271 69.781 82.5932 68.9972 82.0238L45.7633 65.1434C44.7119 64.3795 43.2881 64.3795 42.2366 65.1434L19.0027 82.0238C18.219 82.5932 17.1645 81.8271 17.4639 80.9058L26.3385 53.5927C26.7401 52.3566 26.3001 51.0025 25.2486 50.2386L2.01474 33.3582C1.23103 32.7888 1.6338 31.5492 2.60253 31.5492H31.3212C32.6209 31.5492 33.7728 30.7123 34.1744 29.4762L43.0489 2.16312C43.3483 1.24181 44.6517 1.24181 44.951 2.16312Z",color:"#8306b1",stroke:"black"})})})}}).call(this,n(19).setImmediate)},41:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return j}));var c=n(7),a=n(4),r=n(3),i=n(2),s=n(1);function o(t){var e=t.toggle,n=(t.delay,Object(i.useState)(null)),c=Object(a.a)(n,2),s=c[0],o=c[1];return{style:Object(r.useSpring)({strokeDashoffset:e?0:s,strokeDasharray:s,delay:400,config:{friction:80}}),ref:function(t){t&&o(t.getTotalLength())}}}function l(t){var e=t.color,n=t.d,a=o({toggle:t.toggle});return Object(s.jsx)(r.animated.path,Object(c.a)(Object(c.a)({},a),{},{stroke:e,strokeWidth:"4",d:n}))}function j(){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){t((function(){r(!0)}))}),[]),Object(s.jsx)("div",{class:"icon-container",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"114",fill:"none",viewBox:"0 0 105 114",children:Object(s.jsx)(l,{toggle:c,d:"M69.2128 1.49428L103.7 0.536306L62.6575 39.1358L61.7385 40H63H87.0746L40.6877 77.1096L39.5746 78H41H62.5782L2.37955 111.599L26.872 84.3341L27.6213 83.5H26.5H11.7071L48.3536 46.8536L49.1815 46.0256L48.0109 46.0001L26.1492 45.5249L49.3572 21.3499L49.3607 21.3463L69.2128 1.49428Z",color:"#8306b1",stroke:"black"})})})}}).call(this,n(19).setImmediate)},47:function(t,e,n){},48:function(t,e,n){},51:function(t,e,n){"use strict";n.p},53:function(t,e,n){"use strict";n(3),n(1)},54:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(21),i=n.n(r),s=(n(47),n(48),n(36)),o=(n(54),n(3)),l=(n(35),n(1)),j=function(){return Object(l.jsx)(o.animated.section,{className:"component"})};var u=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(s.a,{}),Object(l.jsx)(j,{})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()}},[[55,1,2]]]);
//# sourceMappingURL=main.70e11c0a.chunk.js.map