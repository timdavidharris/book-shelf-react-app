(this["webpackJsonpreact-library-app"]=this["webpackJsonpreact-library-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(16),a(7)),u=a(8),i=a(10),m=a(9),b=a(3),d=a(1),s=a(2);function E(e){var t=Object(n.useState)(e.book),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),i=u[0],m=u[1],E=Object(n.useState)("hide"),p=Object(s.a)(E,2),k=p[0],h=p[1],f=e.updateLibraryArray,v=e.removeBook,g=function(e){o(Object(d.a)(Object(d.a)({},l),{},Object(b.a)({},e.target.name,e.target.value)))},O=function(){m(!1===i)},y=function(){h("show"===k?"hide":"show")};return r.a.createElement("div",{className:"book-child-div"},"".concat(l.title," by ").concat(l.author," has ").concat(l.pages," pages and is ").concat(l.bookRead),r.a.createElement("button",{onClick:function(){"read"===l.bookRead?(l.bookRead="unread",o((function(e){return Object(d.a)(Object(d.a)({},e),{},{bookRead:"unread"})}))):(l.bookRead="read",o((function(e){return Object(d.a)(Object(d.a)({},e),{},{bookRead:"read"})}))),f(l)}},"Change Read Status"),r.a.createElement("button",{onClick:O},"Edit Book"),"hide"===k?r.a.createElement("button",{onClick:y},"DELETE BOOK"):r.a.createElement("div",{className:"modal"},r.a.createElement("span",{className:"close-btn",onClick:y},"\xd7"),r.a.createElement("div",{className:"modal-content"},r.a.createElement("button",{onClick:function(){return v(l)}},"YES, DELETE BOOK"),r.a.createElement("br",null),r.a.createElement("button",{onClick:y},"NO, do NOT delete Book"))),!1===i?null:r.a.createElement("div",{className:"modal"},r.a.createElement("span",{className:"close-btn",onClick:O},"\xd7"),r.a.createElement("form",{className:"modal-content add-a-book-form",onSubmit:function(e){e.preventDefault(),m(!1),f(l)}},r.a.createElement("label",null,"Book Title",r.a.createElement("input",{name:"title",type:"text",value:l.title,onChange:g})),r.a.createElement("label",null,"Author",r.a.createElement("input",{name:"author",type:"text",value:l.author,onChange:g})),r.a.createElement("label",null,"Number of Pages",r.a.createElement("input",{name:"pages",type:"number",value:l.pages,onChange:g})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"EDIT"))))}var p=a(4),k=a.n(p);function h(){var e={title:"Dune",author:"Frank Herbert",pages:"658",bookRead:"read",id:k()()},t={title:"1984",author:"George Orwell",pages:"298",bookRead:"read",id:k()()},a=Object(n.useState)({title:"",author:"",pages:"",bookRead:"read",id:k()()}),l=Object(s.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],p=i[1],h=Object(n.useState)(null===localStorage.getItem("libraryArray")?[e,t]:JSON.parse(localStorage.getItem("libraryArray"))),f=Object(s.a)(h,2),v=f[0],g=f[1],O=function(e){c(Object(d.a)(Object(d.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))},y=function(e){var t=v.filter((function(t){return t.id!==e.id}));g(t),C(t)},j=function(){p(!0!==m)},N=function(e){var t=e,a=v.findIndex((function(e){return e.id===t.id}));v.splice(a,1,t),g(v),C(v)},C=function(e){localStorage.setItem("libraryArray",JSON.stringify(e))};return r.a.createElement("div",{className:"form-and-card-div"},r.a.createElement("div",{className:"book-parent-div"},void 0===v||0===v.length?r.a.createElement("div",{className:"book-child-div"},r.a.createElement("h3",null,"Humm... no books?",r.a.createElement("br",null),'Click "Add A Book" to start your library!',r.a.createElement("br",null),"\ud83d\udc47")):v.map((function(e){return r.a.createElement(E,{key:e.id,book:e,removeBook:y,updateLibraryArray:N})}))),r.a.createElement("button",{className:"toggle-btn",onClick:j},"Add A Book"),!1===m?null:r.a.createElement("div",{className:"modal"},r.a.createElement("span",{className:"close-btn",onClick:j},"\xd7"),r.a.createElement("form",{className:"modal-content add-a-book-form",onSubmit:function(e){return e.preventDefault(),g(v.concat(o)),j()}},r.a.createElement("label",null,"This book is:",r.a.createElement("br",null),r.a.createElement("select",{name:"bookRead",value:o.bookRead,onChange:O,required:!0},r.a.createElement("option",{value:""},"--select one--"),r.a.createElement("option",{value:"read"},"read"),r.a.createElement("option",{value:"unread"},"unread"))),r.a.createElement("br",null),r.a.createElement("label",null,"Book Title",r.a.createElement("input",{name:"title",type:"text",value:o.title,onChange:O,required:!0})),r.a.createElement("label",null,"Author",r.a.createElement("input",{name:"author",type:"text",value:o.author,onChange:O,required:!0})),r.a.createElement("label",null,"Number of Pages",r.a.createElement("input",{name:"pages",type:"number",value:o.pages,onChange:O,required:!0})),r.a.createElement("button",{type:"submit"},"ADD"))))}var f=function(){return r.a.createElement("div",{id:"github"},r.a.createElement("a",{href:"https://github.com/timdavidharris/book-shelf-react-app",target:"_blank",rel:"noopener noreferrer"},"GitHub Link"))},v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Book Shelf"),r.a.createElement("h2",null,"Books on Your Shelf"),r.a.createElement("section",{id:"book-cards"},r.a.createElement(h,null),r.a.createElement(f,null)))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.21e8388e.chunk.js.map