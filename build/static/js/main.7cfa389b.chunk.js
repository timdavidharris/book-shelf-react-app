(this["webpackJsonpreact-library-app"]=this["webpackJsonpreact-library-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(9),i=a.n(n),l=(a(15),a(2)),s=a(3),b=a(5),u=a(4),d=a(7),c=a(1),k=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).deleteBook=function(){if(window.confirm('Click "OK" if you want to delete '.concat(o.state.bookTitle," from your shelf")))return o.state.removeBook(o.state.book)},o.handleChange=function(e){var t=e.target.value,a=e.target.name;o.setState(Object(d.a)({},a,t)),o.setBookObj()},o.setBookObj=function(){o.setState({book:{title:o.state.bookTitle,author:o.state.bookAuthor,pages:o.state.bookPages,bookRead:o.state.isBookRead,id:o.state.id}})},o.handleSubmit=function(e){e.preventDefault(),o.toggleEditFormDisplay(),o.state.updateLibraryArray(o.state.book)},o.updateReadStatus=function(){"read"===o.state.isBookRead?o.setState({isBookRead:"unread"}):o.setState({isBookRead:"read"}),o.setBookObj(),o.state.updateLibraryArray(o.state.book)},o.toggleEditFormDisplay=function(){!0===o.state.hideEditForm?o.setState({hideEditForm:!1}):o.setState({hideEditForm:!0})},o.state={bookTitle:e.book.title,bookAuthor:e.book.author,bookPages:e.book.pages,isBookRead:e.book.bookRead,id:e.book.id,removeBook:e.removeBook,updateLibraryArray:e.updateLibraryArray,hideEditForm:!0,book:{title:e.book.title,author:e.book.author,pages:e.book.pages,bookRead:e.book.bookRead,id:e.book.id}},o.updateReadStatus=o.updateReadStatus.bind(Object(c.a)(o)),o.deleteBook=o.deleteBook.bind(Object(c.a)(o)),o.handleChange=o.handleChange.bind(Object(c.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(c.a)(o)),o.setBookObj=o.setBookObj.bind(Object(c.a)(o)),o.toggleEditFormDisplay=o.toggleEditFormDisplay.bind(Object(c.a)(o)),o}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"book-child-div"},"".concat(this.state.bookTitle," by ").concat(this.state.bookAuthor," has ").concat(this.state.bookPages," pages and is ").concat(this.state.isBookRead),r.a.createElement("button",{onClick:this.updateReadStatus},"Change Read Status"),r.a.createElement("button",{onClick:this.toggleEditFormDisplay},"Edit Book"),!0===this.state.hideEditForm?null:r.a.createElement("form",{id:"add-a-book-form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Book Title",r.a.createElement("input",{name:"bookTitle",type:"text",value:this.state.bookTitle,onChange:this.handleChange})),r.a.createElement("label",null,"Author",r.a.createElement("input",{name:"bookAuthor",type:"text",value:this.state.bookAuthor,onChange:this.handleChange})),r.a.createElement("label",null,"Number of Pages",r.a.createElement("input",{name:"bookPages",type:"number",value:this.state.bookPages,onChange:this.handleChange})),r.a.createElement("button",{"data-key":this.state.id,onClick:this.deleteBook},"DELETE BOOK"),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"EDIT")))}}]),a}(r.a.Component),h=a(6),m=a.n(h),p=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).setExampleBook_Dune=function(){return{title:"Dune",author:"Frank Herbert",pages:"658",bookRead:"read",id:m()()}},o.setExampleBook_1984=function(){return{title:"1984",author:"George Orwell",pages:"298",bookRead:"read",id:m()()}},o.handleChange=function(e){var t=e.target.value,a=e.target.name;o.setState(Object(d.a)({},a,t)),o.setBookObj()},o.setBookObj=function(){o.setState({book:{title:o.state.bookTitle,author:o.state.bookAuthor,pages:o.state.bookPages,bookRead:o.state.isBookRead,id:m()()}})},o.removeBook=function(e){var t=e;o.setState({library:o.state.library.filter((function(e){return e.id!==t.id}))})},o.toggleFormDisplay=function(){!0===o.state.displayForm?o.setState({displayForm:!1}):o.setState({displayForm:!0})},o.handleSubmit=function(e){return e.preventDefault(),o.setState({library:o.state.library.concat(o.state.book),bookTitle:"",bookAuthor:"",bookPages:"",isBookRead:"read"}),o.toggleFormDisplay()},o.updateLibraryArray=function(e){var t=e,a=o.state.library.findIndex((function(e){return e.id===t.id}));o.state.library.splice(a,1,t),o.setState({library:o.state.library}),o.updateLocalStorage()},o.updateLocalStorage=function(){localStorage.setItem("libraryArray",JSON.stringify(o.state.library))},o.state={library:null===localStorage.getItem("libraryArray")?[o.setExampleBook_Dune(),o.setExampleBook_1984()]:JSON.parse(localStorage.getItem("libraryArray")),displayForm:!1,bookTitle:"",bookAuthor:"",bookPages:"",isBookRead:"read",book:{title:"",author:"",pages:"",bookRead:"",id:m()()}},o.handleChange=o.handleChange.bind(Object(c.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(c.a)(o)),o.removeBook=o.removeBook.bind(Object(c.a)(o)),o.toggleFormDisplay=o.toggleFormDisplay.bind(Object(c.a)(o)),o.updateLibraryArray=o.updateLibraryArray.bind(Object(c.a)(o)),o}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"form-and-card-div"},r.a.createElement("div",{id:"book-parent-div"},void 0===this.state.library?null:this.state.library.map((function(t){return r.a.createElement(k,{key:t.id,book:t,removeBook:e.removeBook,updateLibraryArray:e.updateLibraryArray})}))),r.a.createElement("button",{id:"toggle-btn",onClick:this.toggleFormDisplay},"Toggle Add A Book Form"),!1===this.state.displayForm?null:r.a.createElement("form",{id:"add-a-book-form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"This book is:",r.a.createElement("br",null),r.a.createElement("select",{name:"isBookRead",value:this.state.isBookRead,onChange:this.handleChange,required:!0},r.a.createElement("option",{value:""},"--select one--"),r.a.createElement("option",{value:"read"},"read"),r.a.createElement("option",{value:"unread"},"unread"))),r.a.createElement("br",null),r.a.createElement("label",null,"Book Title",r.a.createElement("input",{name:"bookTitle",type:"text",value:this.state.bookTitle,onChange:this.handleChange,required:!0})),r.a.createElement("label",null,"Author",r.a.createElement("input",{name:"bookAuthor",type:"text",value:this.state.bookAuthor,onChange:this.handleChange,required:!0})),r.a.createElement("label",null,"Number of Pages",r.a.createElement("input",{name:"bookPages",type:"number",value:this.state.bookPages,onChange:this.handleChange,required:!0})),r.a.createElement("button",{type:"submit"},"ADD")))}}]),a}(r.a.Component),g=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Book Shelf"),r.a.createElement("h2",null,"Books on Your Shelf"),r.a.createElement("section",{id:"book-cards"},r.a.createElement(p,null)))}}]),a}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7cfa389b.chunk.js.map