(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(62)},37:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(30),c=t.n(r),o=(t(37),t(8)),s=t(9),m=t(11),i=t(10),u=t(13),d=t(1),p=t(7),h=t(12),b=t.n(h),f=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={fistname:null,lastname:null,phone:null,email:null,address:null,error:null},e.handleType=function(a){var t,l=a.target,n=l.name,r=l.value;e.setState((t={},Object(p.a)(t,n,r),Object(p.a)(t,"error",null),t))},e.handleClick=function(a){a.preventDefault(),b.a.post("https://safe-anchorage-94582.herokuapp.com/api/v1/crud",{firstname:e.state.firstname,lastname:e.state.lastname,phone:e.state.phone,email:e.state.email,address:e.state.address}).then((function(a){e.props.onLogin(a)})).catch((function(a){return e.state({error:a.response.data.data})}))},e.handleUstgah=function(a){var t;a.preventDefault();var l=a.target,n=l.name;l.value;e.setState((t={},Object(p.a)(t,n,null),Object(p.a)(t,"error",null),t))},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.state.error&&n.a.createElement("div",{className:"p-3 mb-2 bg-warning text-dark"},this.state.error),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"mt-4"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-4 col-form-label"},"\u041e\u0432\u043e\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colObog",name:"lastname",onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043e\u0432\u0433\u0438\u0439\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-4 col-form-label"},"\u041d\u044d\u0440"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colNer",name:"firstname",onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043d\u044d\u0440\u0438\u0439\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0423\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"number",className:"form-control",id:"colPhoneNumber",name:"phone",onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u0443\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440\u044b\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0418-\u041c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"email",className:"form-control",id:"colEmail",name:"email",onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u0438-\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433\u0430\u0430 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0413\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colAddress",name:"address",onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u0433\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433\u0430\u0430 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-block",onClick:this.handleClick},"\u0411\u04af\u0440\u0442\u0433\u044d\u0445")),n.a.createElement("div",{className:"col-sm-12 mt-2 "},n.a.createElement("button",{type:"button",className:"btn btn-success btn-sm btn-block",onClick:this.handleUstgah},"\u0423\u0441\u0442\u0433\u0430\u0445")))))))}}]),t}(l.Component);function E(e){return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"navbar "},n.a.createElement(u.b,{className:"navbar-item",to:"/"},"\u0411\u04af\u0440\u0442\u0433\u044d\u043b\u04af\u04af\u0434"),n.a.createElement(u.b,{className:"navbar-item ml-4",to:"/"},"\u0413\u0430\u0440\u0430\u0445")))}var v=t(16),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={firsname:null,lastname:null,phone:null,email:null,address:null,error:null,delete:null},e.handleType=function(a){var t,l=a.target,n=l.name,r=l.value;e.setState((t={},Object(p.a)(t,n,r),Object(p.a)(t,"error",null),t))},e.componentDidMount=function(){b.a.put("https://safe-anchorage-94582.herokuapp.com/api/v1/crud/"+e.props.match.params.id).then((function(a){return e.setState(Object(v.a)(Object(v.a)({},a.data.data),{},{error:null}))})).catch((function(a){e.setState({error:a.response.data.data})}))},e.goBack=function(){e.props.history.goBack()},e.hadnleUpdate=function(a){a.preventDefault(),e.setState({success:null}),b.a.put("https://safe-anchorage-94582.herokuapp.com/api/v1/crud/"+e.props.match.params.id,{firsname:e.state.firsname,lastname:e.state.lastname,phone:e.state.phone,email:e.state.email,address:e.state.address}).then((function(a){console.log(a),e.setState(Object(v.a)(Object(v.a)({},a.data.data),{},{error:null}))})).catch((function(a){console.log(a.response.statusText),e.setState({error:a.response.statusText})}))},e.hadnleDelete=function(a){a.preventDefault(),e.setState({success:null}),b.a.delete("https://safe-anchorage-94582.herokuapp.com/api/v1/crud/"+e.props.match.params.id).then((function(a){console.log(a),e.setState({deleted:!0})})).catch((function(a){console.log(a.response.statusText),e.setState({error:a.response.statusText})}))},e}return Object(s.a)(t,[{key:"render",value:function(){return this.state.deleted?n.a.createElement("div",{className:"btn btnd-danger"},"\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0443\u0441\u0442\u0433\u0430\u0433\u0434\u043b\u0430\u0430..."):n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"mt-4"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-4 col-form-label"},"\u041e\u0432\u043e\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colObog",name:"lastname",onChange:this.handleType,required:!0,Value:this.state.lastname,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043e\u0432\u0433\u0438\u0439\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-4 col-form-label"},"\u041d\u044d\u0440"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colNer",name:"firstname",onChange:this.handleType,Value:this.state.firstname,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043d\u044d\u0440\u0438\u0439\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0423\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"number",className:"form-control",id:"colPhoneNumber",name:"phone",Value:this.state.phone,onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u0443\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440\u044b\u0433 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0418-\u041c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"email",className:"form-control",id:"colEmail",name:"email",Value:this.state.email,onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u0438-\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433\u0430\u0430 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{for:"colFormLabel",className:"col-sm-6 col-form-label"},"\u0413\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433"),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"colAddress",name:"address",Value:this.state.address,onChange:this.handleType,required:!0,placeholder:"\u0422\u0430 \u0433\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433\u0430\u0430 \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}))),n.a.createElement("div",{className:"col-sm-12 mt-4"},n.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm btn-block",onClick:this.goBack},"\u0411\u0443\u0446\u0430\u0445")),n.a.createElement("div",{className:"col-sm-12 mt-2"},n.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-block",onClick:this.hadnleUpdate},"\u0428\u0438\u043d\u044d\u0447\u043b\u044d\u0445")),n.a.createElement("div",{className:"col-sm-12 mt-2"},n.a.createElement("button",{type:"button",className:"btn btn-success btn-sm btn-block",onClick:this.hadnleDelete},"\u0423\u0441\u0442\u0433\u0430\u0445"))))))}}]),t}(l.Component),g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={burtgel:[]},e.componentDidMount=function(){b.a.get("https://safe-anchorage-94582.herokuapp.com/api/v1/crud").then((function(a){return e.setState({burtgel:a.data.data})})).catch((function(e){return console.log(e.response)}))},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("h3",null,"\u042d\u043d\u044d \u0442\u0430\u043b\u0431\u0430\u0440\u0442 \u0431\u04af\u0445 \u0431\u04af\u0440\u0442\u0433\u044d\u043b\u04af\u04af\u0434 \u0433\u0430\u0440\u043d\u0430")),n.a.createElement("div",{className:"row"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"ID"),n.a.createElement("th",{scope:"col"},"FirstName"),n.a.createElement("th",{scope:"col"},"LastName"),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"Address"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,this.state.burtgel.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e._id),n.a.createElement("td",null,e.firstname),n.a.createElement("td",null,e.lastname),n.a.createElement("td",null,e.phone),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.address),n.a.createElement("td",null,n.a.createElement(u.b,{to:"/crud/".concat(e._id)},n.a.createElement("a",{href:"#",className:"btn btn-success btn-sm active",role:"button","aria-pressed":"true"},"Edit"))))}))))))}}]),t}(l.Component),y=(t(60),t(61),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).handleLogout=function(){console.log("Garlaa"),e.router.history.push("/")},e.handleLogin=function(){e.router.history.push("/crud")},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,{ref:function(a){return e.router=a}},n.a.createElement(E,{onLogout:this.handleLogout}),n.a.createElement("div",{className:"container"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/crud",component:g}),n.a.createElement(d.a,{path:"/crud/:id",component:N}),n.a.createElement(d.a,{path:"/",render:function(){return n.a.createElement(f,{onLogin:e.handleLogin})}}))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.233d8201.chunk.js.map