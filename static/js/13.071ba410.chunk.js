(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[13],{55:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(4),a=c(12),i=c(1),j=c.n(i),l=c(5),b=c(10),o=c(6),u=c(25),d=c(0),x=j.a.lazy((function(){return c.e(6).then(c.bind(null,45))}));t.default=function(){var e=Object(l.i)(),t=Object(i.useState)(),c=Object(a.a)(t,2),n=c[0],j=c[1],O=Object(i.useState)(),m=Object(a.a)(O,2),h=m[0],f=m[1],p=Object(i.useState)(!0),v=Object(a.a)(p,2),g=v[0],N=v[1],y=Object(i.useState)(500),w=Object(a.a)(y,2),k=w[0],S=w[1];Object(i.useEffect)((function(){N(!0),function(){var e=Object(s.a)(r.a.mark((function e(t){var c,n,s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=11;break}return e.next=3,Object(b.f)(50);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,N(!1),f(n),e.next=19;break;case 11:return e.next=13,Object(b.d)(t);case 13:return s=e.sent,e.next=16,s.json();case 16:a=e.sent,N(!1),f(a);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.category)}),[e]),Object(i.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(t){var c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,Object(b.c)(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,j(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(4)}),[]);var z=h?h.filter((function(e){return e.price<=k})):null;return Object(d.jsx)("section",{className:"products py-5 my 5",id:"products",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section_title text-center mb-5",children:Object(d.jsx)("h1",{className:"text-capitalize",children:e.category?e.category:"All Products"})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-3 border-right mb-small-5",children:[Object(d.jsx)("h4",{className:"mb-5 border-bottom",children:"Filters"}),Object(d.jsxs)("div",{className:"mb-5",children:[Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Category"})}),Object(d.jsx)("ul",{className:"list-group",children:n?n.map((function(e){return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(o.b,{to:"/product/category/".concat(e.category),children:e.category})},e.id)})):Object(d.jsx)(u.a,{})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Price"})}),Object(d.jsx)("input",{onChange:function(e){S(e.target.value)},type:"range",min:"50",max:"1000",step:"50",className:"form-control-range",value:k})]})}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)("label",{children:["$",k]}),Object(d.jsx)("label",{children:"$1000"})]})]})]}),Object(d.jsx)("div",{className:"col-md-9",children:Object(d.jsx)("div",{className:"row mb-5",children:g?Object(d.jsx)(u.a,{}):z?z.map((function(e){return Object(d.jsx)(x,{image:e.image,title:e.title,price:e.price,id:e.id},e.id)})):Object(d.jsx)("h3",{className:"w-100 text text-center mt-5",children:"No data found"})})})]})]})})}}}]);
//# sourceMappingURL=13.071ba410.chunk.js.map