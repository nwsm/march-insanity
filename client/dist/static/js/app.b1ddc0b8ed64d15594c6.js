webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},EHEy:function(t,e){},HGcL:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o=n("Xxa5"),a=n.n(o),s=n("exGp"),i=n.n(s),u=n("mtWM"),c=n.n(u),l=n("NYxO");r.a.use(l.a);var p=new l.a.Store({state:{loggedIn:!1,signinProvider:null,name:null,user:null},mutations:{setLogin:function(t){this.loggedIn=t},setSigninProvider:function(t){this.signinProvider=t},setName:function(t){this.name=t},setUser:function(t){this.user=t}}}),g={getGroups:function(){return c.a.get("/GROUPS")},getUser:function(t){return c.a.get("/USERS/"+t)},insertUser:function(t,e,n){return c.a.post("/USERS/",{userID:t,email:e,name:n})},loginGoogle:function(t){return c.a.post("/auth/google/",{token:t})},getBracketCollection:function(t){return c.a.get("/BRACKETCOLLECTIONS/"+t)},createBracketCollection:function(){var t=i()(a.a.mark(function t(e,n,r){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/BRACKETCOLLECTIONS",{CollectionID:r});case 2:return t.next=4,c.a.put("/USERS/UPDATEBC",{userID:n,bracketCollectionID:r,num:e});case 4:return t.abrupt("return");case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),createGroup:function(){var t=i()(a.a.mark(function t(e,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/GROUPS/",{groupName:e,groupAdmin:n});case 2:return t.abrupt("return");case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),createUserGroup:function(){var t=i()(a.a.mark(function t(e,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/USERGROUP/",{groupName:e,userID:n});case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getGroup:function(t){return c.a.get("/GROUPS/"+t)}},d={data:function(){return{googleSignInParams:{client_id:"704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com"},fbSignInParams:{scope:"email,user_likes",return_scope:!0}}},mounted:function(){var t,e,n,r,o;window.fbAsyncInit=function(){FB.init({appId:"1994367434163980",cookie:!0,xfbml:!0,version:"v2.8"})},t=document,e="script",n="facebook-jssdk",o=t.getElementsByTagName(e)[0],t.getElementById(n)||((r=t.createElement(e)).id=n,r.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(r,o))},methods:{googleSignInSuccess:function(t){var e=this,n=t.getAuthResponse(!0);g.loginGoogle(n.id_token).then(function(t){e.$store.state.user=t.data[0],e.$store.state.loggedIn=!0,e.$store.state.signinProvider="Google"})},googleSignInError:function(t){console.log(t)},facebookSignInSuccess:function(t){var e=this;FB.api("/me?fields=name,email",function(t){e.$store.state.loggedIn=!0,e.$store.state.signinProvider="Facebook",e.$store.state.name=t.name,console.log(t)}),this.loggedIn=!0},facebookSignInError:function(t){console.log(t)},logout:function(){this.$store.state.loggedIn=!1,this.$store.state.signinProvider=null,this.$store.state.name=null}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{id:"nav",toggleable:"md",type:"dark",variant:"primary"}},[t.$store.state.loggedIn?n("div",{attrs:{id:"loginInfo"}},[t._v("\n    Logged in as "+t._s(t.$store.state.user.name)+" through "+t._s(t.$store.state.signinProvider)+" "),n("b-button",{attrs:{size:"sm",variant:"outline sm"},on:{click:t.logout}},[t._v("Logout")])],1):t._e(),t._v(" "),t.$store.state.loggedIn?t._e():n("div",[n("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.googleSignInSuccess,error:t.googleSignInError}},[t._v("\n      Sign in with Google\n    ")]),t._v(" "),n("fb-signin-button",{attrs:{params:t.fbSignInParams},on:{success:t.facebookSignInSuccess,error:t.facebookSignInError}},[t._v("\n      Sign in with Facebook\n    ")])],1)])},staticRenderFns:[]};var h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-jumbotron",{attrs:{header:"March Insanity",lead:"A New Type of NCAA Bracket Challenge"}},[e("b-btn",[this._v("How It Works")])],1)],1)},staticRenderFns:[]};var v={name:"App",data:function(){return{}},methods:{},components:{Navbar:n("VU/8")(d,f,!1,function(t){n("EHEy")},null,null).exports,Hello:n("VU/8")({name:"hello",data:function(){return{}}},h,!1,function(t){n("bfxV")},"data-v-8a725928",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),"Main"!=this.$route.name&&this.$store.state.loggedIn?this._e():e("hello"),this._v(" "),this.$store.state.loggedIn?e("router-view"):e("div",[this._v("\n    Sign in through Google or Facebook to get started!\n  ")])],1)},staticRenderFns:[]};var k=n("VU/8")(v,m,!1,function(t){n("zbMN")},null,null).exports,b=n("/ocq"),_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/Groups"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Groups")])],1),this._v(" "),e("router-link",{attrs:{to:"/BracketCollections"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Bracket Collections")])],1)],1)},staticRenderFns:[]};var C=n("VU/8")({name:"Main",data:function(){return{}}},_,!1,function(t){n("Nf96")},"data-v-037b310c",null).exports,I={name:"Groups",data:function(){return{Groups:[],newGroupName:"",groupExistsError:""}},mounted:function(){this.updateUserGroups()},methods:{updateUserGroups:function(){this.Groups=[];var t=this;g.getGroups().then(function(e){for(var n=0;n<e.data.length;n++)console.log(e.data[0]),t.$store.state.user.userID==e.data[n].groupAdmin&&g.getGroup(e.data[n].groupName).then(function(e){t.Groups.push(e.data[0])})})},createGroup:function(){var t=i()(a.a.mark(function t(){var e,n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n=0,r=0,t.next=5,g.getGroups().then(function(t){n=t.data.length});case 5:return t.next=7,g.createGroup(this.newGroupName,e.$store.state.user.userID);case 7:return t.next=9,g.getGroups().then(function(t){r=t.data.length});case 9:r==n?this.groupExistsError="Group already exists!":(this.groupExistsError="",g.createUserGroup(this.newGroupName,e.$store.state.user.userID)),this.updateUserGroups();case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.Groups,function(e){return n("div",[n("b-btn",[t._v(" "+t._s(e.groupName))])],1)}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newGroupName,expression:"newGroupName"}],attrs:{placeholder:"edit me"},domProps:{value:t.newGroupName},on:{input:function(e){e.target.composing||(t.newGroupName=e.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.groupExistsError))]),t._v(" "),n("div",[n("b-btn",{on:{click:t.createGroup}},[t._v("Create Group")])],1),t._v(" "),n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Main")])],2)},staticRenderFns:[]};var $=n("VU/8")(I,G,!1,function(t){n("HGcL")},"data-v-910b0e02",null).exports,B={name:"Brackets",data:function(){return{bracketCollections:[]}},mounted:function(){this.updateUserAndBrackets()},methods:{updateUserAndBrackets:function(){this.bracketCollections=[];var t=this;g.getUser(t.$store.state.user.userID).then(function(e){t.$store.state.user=e.data[0],t.$store.state.user.bracketCollection1&&g.getBracketCollection(t.$store.state.user.bracketCollection1).then(function(e){t.bracketCollections.push(e.data[0])}),t.$store.state.user.bracketCollection2&&g.getBracketCollection(t.$store.state.user.bracketCollection2).then(function(e){t.bracketCollections.push(e.data[0])}),t.$store.state.user.bracketCollection3&&g.getBracketCollection(t.$store.state.user.bracketCollection3).then(function(e){t.bracketCollections.push(e.data[0])})})},createBC:function(){var t=i()(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n=this.$store.state.user.userID+"--"+(this.bracketCollections.length+1),t.next=4,g.createBracketCollection(this.bracketCollections.length+1,this.$store.state.user.userID,n);case 4:e.updateUserAndBrackets();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.bracketCollections,function(e){return n("div",[n("router-link",{attrs:{to:{name:"BracketCollection",params:{bracketId:e.CollectionID}}}},[n("b-btn",[t._v("Bracket "+t._s(e.CollectionID))])],1)],1)}),t._v(" "),t.bracketCollections.length<3?n("div",[n("b-btn",{on:{click:t.createBC}},[t._v("Make a Bracket Collection")])],1):t._e(),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Main")])],2)},staticRenderFns:[]};var S=n("VU/8")(B,E,!1,function(t){n("W2VH")},"data-v-1c3e4145",null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.msg)+this._s(this.bracketId))]),this._v(" "),e("router-link",{attrs:{to:"/BracketCollections"}},[this._v("Back To Collections")])],1)},staticRenderFns:[]};var w=n("VU/8")({name:"BracketCollection",data:function(){return{msg:"This page will show all the Brackets on BracketCollection ",bracketId:0}},created:function(){this.bracketId=this.$route.params.bracketId}},x,!1,function(t){n("j5jp")},"data-v-9de27da8",null).exports;r.a.use(b.a);var U=new b.a({routes:[{path:"/",name:"Main",component:C},{path:"/Groups",name:"Groups",component:$},{path:"/BracketCollections",name:"BracketCollections",component:S},{path:"/BracketCollection/:id",name:"BracketCollection",component:w}]}),N=n("a96c"),y=n.n(N),P=n("fSYm"),R=n.n(P),A=n("e6fC");n("Jmt5"),n("9M+g");r.a.use(A.a),r.a.use(y.a),r.a.use(R.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:U,store:p,components:{App:k},template:"<App/>"})},Nf96:function(t,e){},W2VH:function(t,e){},bfxV:function(t,e){},j5jp:function(t,e){},zbMN:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b1ddc0b8ed64d15594c6.js.map