(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r.n(c),s=r(7),o=r.n(s),i=r(2),h=r(3),l=r(5),b=r(4);var j=function(e){var t=e.name,r=e.email,c=e.id;return Object(n.jsxs)("div",{className:"tc bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5",children:[Object(n.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{children:r})]})]})};var d=function(e){var t=e.robots;return Object(n.jsx)("div",{children:t.map((function(e,r){return Object(n.jsx)(j,{id:t[r].id,name:t[r].name,email:t[r].email},r)}))})};var u=function(e){e.searchfield;var t=e.searchChange;return Object(n.jsx)("div",{className:"pa2",children:Object(n.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})};var f=function(e){return Object(n.jsx)("div",{style:{overflowY:"Scroll",border:"3px solid black",height:"700px"},children:e.children})},O=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(h.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Oops, there's an error"}):this.props.children}}]),r}(c.Component),p=(r(13),function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)("h1",{className:"title",children:"Robofriends"}),Object(n.jsx)(u,{searchChange:this.onSearchChange}),Object(n.jsx)(f,{children:Object(n.jsx)(O,{children:Object(n.jsx)(d,{robots:c})})})]})}}]),r}(c.Component));r(14),r(15);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dc13ebde.chunk.js.map