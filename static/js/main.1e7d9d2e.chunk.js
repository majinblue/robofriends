(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(17),a(19),a(1)),s=a(2),i=a(4),u=a(3),h=a(5),m=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa3 ba",onChange:t}))},f=function(e){return r.a.createElement("div",{className:"",style:{overflowY:"scroll",border:"5px solid black",height:"500px",margin:"1rem"}},e.children)},p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(n.Component),E=(a(21),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter(function(e){return e.name.toString().toLowerCase().includes(a.toString().toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),t}(n.Component));o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(E,null))))},8:function(e,t,a){e.exports=a(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.1e7d9d2e.chunk.js.map