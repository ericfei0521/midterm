(this.webpackJsonpmidtermtest=this.webpackJsonpmidtermtest||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),a=n.n(i),s=n(3),r=n.n(s),d=(n(20),n(4)),j=n(2),l=n(14);n(21);var u=function(t){var e=t.addList,n=t.title,a=Object(i.useState)(),s=Object(j.a)(a,2),r=s[0],d=s[1],u=Object(i.useState)(!1),o=Object(j.a)(u,2),b=o[0],O=o[1];return Object(c.jsx)("div",{children:b?Object(c.jsx)("div",{className:"input",children:Object(c.jsxs)("div",{className:"submit",children:[Object(c.jsx)("input",{type:"text",onChange:function(t){return d(t.target.value)},value:r}),Object(c.jsx)("button",{onClick:function(){e({id:Object(l.a)(),name:r}),d(""),O(!1)},children:"Submit"}),Object(c.jsx)("button",{className:" danger",onClick:function(){return O(!1)},children:"Cancel"})]})}):Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("button",{onClick:function(){return O(!0)},children:n})})})},o=n(5),b=n(8),O=(n(22),function(t){var e=t.title,n=t.id,a=t.editList,s=t.deleteList,r=Object(i.useState)([]),l=Object(j.a)(r,2),O=l[0],f=l[1],x=Object(i.useState)(e),h=Object(j.a)(x,2),m=h[0],p=h[1],v=Object(i.useState)(!1),g=Object(j.a)(v,2),C=g[0],N=g[1];return Object(c.jsxs)("div",{className:"list",children:[C?Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",onChange:function(t){return p(t.target.value)},value:m}),Object(c.jsx)("button",{onClick:function(){N(!1),a(m,n)},children:"Edit"}),Object(c.jsx)("button",{className:"danger",onClick:function(){return s(n)},children:"Delete"})]}):Object(c.jsx)("h1",{onClick:function(){N(!C)},children:e}),Object(c.jsx)(b.a,{onDragEnd:function(t){if(t.destination&&t.destination!==t.source.index){var e=Array.from(O),n=e.splice(t.source.index,1),c=Object(j.a)(n,1)[0];e.splice(t.destination.index,0,c),f(e)}},children:Object(c.jsx)(b.c,{droppableId:"List",children:function(t){return Object(c.jsxs)("div",Object(o.a)(Object(o.a)({className:"listcontent",ref:t.innerRef},t.droppableProps),{},{children:[O.map((function(t,e){return Object(c.jsx)(b.b,{draggableId:e.toString(),index:e,children:function(e){return Object(c.jsx)("div",Object(o.a)(Object(o.a)(Object(o.a)({className:"listItem"},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(c.jsx)("h2",{children:t.name})}),t.id)}})})),t.placeholder]}))}})}),Object(c.jsx)(u,{addList:function(t){t.name&&f([].concat(Object(d.a)(O),[t]))},title:"Add Card"})]})});n(29);var f=function(){var t=Object(i.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],s=function(t,e){for(var c=Object(d.a)(n),i=0;i<c.length;i++)c[i].id===e&&(c[i].name=t);t&&a(c)},r=function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));a(e)};return Object(c.jsxs)("div",{className:"all",children:[Object(c.jsx)("div",{className:"inputarea",children:Object(c.jsx)(u,{addList:function(t){t.name&&a([].concat(Object(d.a)(n),[t]))},title:"Addlist"})}),Object(c.jsx)("div",{className:"listplace",children:n.map((function(t){return Object(c.jsx)(O,{title:t.name,id:t.id,editList:s,deleteList:r},t.id)}))})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.084efde4.chunk.js.map