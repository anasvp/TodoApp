(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(3),c=n.n(i),o=(n(12),n(4)),r=n(5),d=n(7),l=n(6),m=n(0),u=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).handleChange=function(t){s.setState({textContent:t.target.value})},s.addItem=function(t){t.preventDefault();var e=s.state.textContent,n=s.state.listItems;!0===s.state.checkEdit?s.state.listItems.map((function(t,e){if(t===s.state.IsEditItem){var a=s.state.textContent;-1!==e&&(s.setState.listItems[e]=a,s.setState({listItems:n,textContent:"",checkEdit:!1}))}return t})):(n.push(e),s.setState({listItems:n,textContent:""}))},s.editItem=function(t,e){s.setState({textContent:t,IsEditItem:t,checkEdit:!0})},s.removeItem=function(t){var e=s.state.listItems;e.splice(t,1),s.setState({listItems:e})},s.state={textContent:"",listItems:[],IsEditItem:"",checkEdit:!1},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"Todoapp-Div",children:[Object(m.jsx)("h1",{children:"TodoApp"}),Object(m.jsx)("form",{className:"Inputdiv",onSubmit:this.addItem,children:Object(m.jsx)("input",{type:"text",value:this.state.textContent,className:"form-control",placeholder:"Enter Items",onChange:this.handleChange})})]}),Object(m.jsx)("div",{className:"TodoListDiv",children:Object(m.jsx)("ul",{children:this.state.listItems.map((function(e,n){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{"data-item":n,children:[e," "]}),Object(m.jsx)("i",{className:"fas fa-edit","aria-hidden":"true",onClick:function(){t.editItem(e,n)}})," ",Object(m.jsx)("i",{className:"fa fa-trash","aria-hidden":"true",onClick:function(){t.removeItem(n)}})]},n)}))})})]})}}]),n}(a.a.Component),h=(n(14),function(){return Object(m.jsx)(u,{})});c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6c8658d3.chunk.js.map