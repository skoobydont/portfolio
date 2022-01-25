(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{90:function(e,t,n){},91:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),o=n.n(i),r=(n(90),n(13)),s=n(80),l=n(9),d=(n(91),n(81)),j=n(145),u=n(143),b=n(146),p=n(1),f=function(e){var t=e.children,n=Object(u.a)("(prefers-color-scheme: dark)"),a=Object(d.a)({palette:{type:n?"dark":"light"}});return Object(p.jsxs)(j.a,{theme:a,children:[Object(p.jsx)(b.a,{}),t]})},x=n(147),h=n(148),O=n(149),m=Object(x.a)((function(e){return{bar:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},text:{textTransform:"none","& span.MuiButton-label":{color:"rgba(255, 255, 255, 0.7)"}}}})),g=function(){var e=m(),t=Object(l.f)();return Object(p.jsx)(h.a,{position:"static",className:e.bar,children:Object(p.jsx)(O.a,{variant:"text",onClick:function(){return t.push("/portfolio")},className:e.text,children:"Skubak.AJ"})})},v=n(150),w=n(151),y=n(170),k=n(76),N=n.n(k),C=n(77),D=n.n(C),L=n(78),F=n.n(L),I=Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center"},icon:{maxWidth:e.spacing(5),paddingBottom:e.spacing(1),marginLeft:e.spacing(-1),"& :hover":{color:"#FFF"}}}})),M=function(){var e=I(),t=Object(l.f)(),n=function(e){return window.open(e,"_blank").focus(),null};return Object(p.jsxs)(v.a,{className:e.root,children:[Object(p.jsx)(w.a,{icon:Object(p.jsx)(y.a,{title:"Home",children:Object(p.jsx)(N.a,{})}),className:e.icon,onClick:function(){return null===t||void 0===t?void 0:t.push("/portfolio")},id:"Home"}),Object(p.jsx)(w.a,{icon:Object(p.jsx)(y.a,{title:"LinkedIn",children:Object(p.jsx)(D.a,{})}),className:e.icon,onClick:function(){return n("https://linkedin.com/in/ajskubak")},id:"LinkedIn"}),Object(p.jsx)(w.a,{icon:Object(p.jsx)(y.a,{title:"GitHub",children:Object(p.jsx)(F.a,{})}),className:e.icon,onClick:function(){return n("https://github.com/skoobydont")},id:"GitHub"})]})},R=n(53),H=n(63),S=n(154),B=n(155),E=n(153),A=n(152),T=Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"column",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),alignItems:"center"},buttonRow:{display:"flex",flexDirection:"row"},button:{maxWidth:e.spacing(15),marginRight:e.spacing(1)}}})),P=function(){var e,t=T(),n=Object(l.f)(),c=Object(a.useState)(void 0!==(null===n||void 0===n||null===(e=n.location)||void 0===e?void 0:e.state)?n.location.state:{software:!1,hardware:!1,other:!1}),i=Object(H.a)(c,2),o=i[0],s=i[1],d=function(e,t){s(Object(r.a)(Object(r.a)({},o),{},Object(R.a)({},e,t)))};return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsxs)("div",{className:t.buttonRow,children:[Object(p.jsx)(O.a,{onClick:function(){return d("software",!o.software)},variant:"outlined",color:"primary",className:t.button,children:"Software"}),Object(p.jsx)(O.a,{onClick:function(){return d("hardware",!o.hardware)},variant:"outlined",color:"primary",className:t.button,children:"Hardware"}),Object(p.jsx)(O.a,{onClick:function(){return d("other",!o.other)},variant:"outlined",color:"primary",className:t.button,children:"Other"})]}),Object(p.jsxs)(A.a,{in:null===o||void 0===o?void 0:o.software,timeout:"auto",unmountOnExit:!0,className:t.collapse,children:[Object(p.jsx)(E.a,{children:Object(p.jsx)(S.a,{children:"Software"})}),Object(p.jsx)(B.a,{children:Object(p.jsx)(O.a,{size:"small",color:"primary",onClick:function(){return n.push("".concat("/portfolio","/software"))},children:"Learn More"})})]}),Object(p.jsxs)(A.a,{in:null===o||void 0===o?void 0:o.hardware,timeout:"auto",unmountOnExit:!0,className:t.collapse,children:[Object(p.jsx)(E.a,{children:Object(p.jsx)(S.a,{children:"Hardware"})}),Object(p.jsx)(B.a,{children:Object(p.jsx)(O.a,{size:"small",color:"primary",onClick:function(){return n.push("".concat("/portfolio","/hardware"))},children:"Learn More"})})]}),Object(p.jsxs)(A.a,{in:null===o||void 0===o?void 0:o.other,timeout:"auto",unmountOnExit:!0,className:t.collapse,children:[Object(p.jsx)(E.a,{children:Object(p.jsx)(S.a,{children:"Other Fun Projects"})}),Object(p.jsx)(B.a,{children:Object(p.jsx)(O.a,{size:"small",color:"primary",onClick:function(){return n.push("".concat("/portfolio","/other"))},children:"Learn More"})})]})]})},z=Object(x.a)((function(e){return{root:{padding:e.spacing(1),display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",alignItems:"center"},button:{marginRight:e.spacing(1)}}})),J=function(){var e=z(),t=Object(l.f)();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)("div",{className:e.header,children:[Object(p.jsx)(O.a,{onClick:function(){return t.push({pathname:"/portfolio",state:Object(r.a)(Object(r.a)({},t.location.state),{},{software:!0})}),null},variant:"contained",className:e.button,children:"<"}),Object(p.jsx)(S.a,{children:"Learn More About Software Experience on this page"})]})})},G=Object(x.a)((function(e){return{root:{padding:e.spacing(1),display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",alignItems:"center"},button:{marginRight:e.spacing(1)}}})),W=function(){var e=G(),t=Object(l.f)();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)("div",{className:e.header,children:[Object(p.jsx)(O.a,{onClick:function(){return t.push({pathname:"/portfolio",state:Object(r.a)(Object(r.a)({},t.location.state),{},{hardware:!0})}),null},variant:"contained",className:e.button,children:"<"}),Object(p.jsx)(S.a,{children:"Learn More About Hardware Experience on this page"})]})})},_=Object(x.a)((function(e){return{root:{padding:e.spacing(1),display:"flex",flexDirection:"column"},header:{display:"flex",flexDirection:"row",alignItems:"center"},button:{marginRight:e.spacing(1)}}})),q=function(){var e=_(),t=Object(l.f)();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)("div",{className:e.header,children:[Object(p.jsx)(O.a,{onClick:function(){return t.push({pathname:"/portfolio",state:Object(r.a)(Object(r.a)({},t.location.state),{},{other:!0})}),null},variant:"contained",className:e.button,children:"<"}),Object(p.jsx)(S.a,{children:"Learn More About Other Fun Projects on this page"})]})})},K=(n(101),n(171),n(156),n(157),n(160),n(158),n(159),n(172),n(168),n(169),n(161),n(162),n(164),n(166),n(167),n(163),n(165),n(79),Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"column",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},header:{display:"flex",flexDirection:"row",alignItems:"center","& button.MuiIconButton-root":{paddingLeft:e.spacing(0)}},top:{display:"flex",flexDirection:"row",justifyContent:"space-around"},deets:{display:"flex",flexDirection:"column"},deetHeader:{display:"flex",flexDirection:"row",alignItems:"baseline"},subheader:{width:"100%",backgroundColor:e.palette.primary.main,padding:e.spacing(1),marginTop:e.spacing(4),borderRadius:e.spacing(1),boxShadow:"0px 2px 6px #FFF"},topMobile:{display:"flex",flexDirection:"column"}}})),function(){return Object(p.jsx)(f,{children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)("div",{className:"App container-fluid",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/portfolio",exact:!0,render:function(e){return Object(p.jsx)(P,Object(r.a)({},e))}}),Object(p.jsx)(l.a,{path:"/portfolio/software",exact:!0,render:function(e){return Object(p.jsx)(J,Object(r.a)({},e))}}),Object(p.jsx)(l.a,{path:"/portfolio/hardware",exact:!0,render:function(e){return Object(p.jsx)(W,Object(r.a)({},e))}}),Object(p.jsx)(l.a,{path:"/portfolio/other",exact:!0,render:function(e){return Object(p.jsx)(q,Object(r.a)({},e))}})]})}),Object(p.jsx)(M,{})]})})}),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root")),Q()}},[[98,1,2]]]);
//# sourceMappingURL=main.fa59df03.chunk.js.map