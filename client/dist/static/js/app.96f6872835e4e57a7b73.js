webpackJsonp([1],{"0sCr":function(t,e){},"1/oy":function(t,e){},"2fz8":function(t,e){},"8DdO":function(t,e){},"99wc":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("Xxa5"),s=n.n(r),a=n("exGp"),i=n.n(a),c=n("mtWM"),l=n.n(c),u=n("NYxO");o.a.use(u.a);var g=new u.a.Store({state:{loggedIn:!1,signinProvider:null,name:null,user:null},mutations:{setLogin:function(t){this.loggedIn=t},setSigninProvider:function(t){this.signinProvider=t},setName:function(t){this.name=t},setUser:function(t){this.user=t}}}),d={getGroups:function(){return l.a.get("/GROUPS")},getUser:function(t){return l.a.get("/USERS/"+t)},insertUser:function(t,e,n){return l.a.post("/USERS/",{userID:t,email:e,name:n})},loginGoogle:function(t){return l.a.post("/auth/google/",{token:t})},getBracketCollection:function(t){return l.a.get("/BRACKETCOLLECTIONS/"+t)},createBracketCollection:function(){var t=i()(s.a.mark(function t(e,n,o){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/BRACKETCOLLECTIONS",{CollectionID:o});case 2:return t.next=4,l.a.put("/USERS/UPDATEBC",{userID:n,bracketCollectionID:o,num:e});case 4:return t.abrupt("return");case 5:case"end":return t.stop()}},t,this)}));return function(e,n,o){return t.apply(this,arguments)}}()},h={data:function(){return{googleSignInParams:{client_id:"704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com"},fbSignInParams:{scope:"email,user_likes",return_scope:!0}}},mounted:function(){var t,e,n,o,r;window.fbAsyncInit=function(){FB.init({appId:"1994367434163980",cookie:!0,xfbml:!0,version:"v2.8"})},t=document,e="script",n="facebook-jssdk",r=t.getElementsByTagName(e)[0],t.getElementById(n)||((o=t.createElement(e)).id=n,o.src="//connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r))},methods:{googleSignInSuccess:function(t){var e=this,n=t.getAuthResponse(!0);d.loginGoogle(n.id_token).then(function(t){e.$store.state.user=t.data[0],e.$store.state.loggedIn=!0,e.$store.state.signinProvider="Google"})},googleSignInError:function(t){console.log(t)},facebookSignInSuccess:function(t){var e=this;FB.api("/me?fields=name,email",function(t){e.$store.state.loggedIn=!0,e.$store.state.signinProvider="Facebook",e.$store.state.name=t.name,console.log(t)}),this.loggedIn=!0},facebookSignInError:function(t){console.log(t)},logout:function(){this.$store.state.loggedIn=!1,this.$store.state.signinProvider=null,this.$store.state.name=null}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{id:"nav",toggleable:"md",type:"dark",variant:"primary"}},[t.$store.state.loggedIn?n("div",{attrs:{id:"loginInfo"}},[t._v("\n    Logged in as "+t._s(t.$store.state.user.name)+" through "+t._s(t.$store.state.signinProvider)+" "),n("b-button",{attrs:{size:"sm",variant:"outline sm"},on:{click:t.logout}},[t._v("Logout")])],1):t._e(),t._v(" "),t.$store.state.loggedIn?t._e():n("div",[n("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.googleSignInSuccess,error:t.googleSignInError}},[t._v("\n      Sign in with Google\n    ")]),t._v(" "),n("fb-signin-button",{attrs:{params:t.fbSignInParams},on:{success:t.facebookSignInSuccess,error:t.facebookSignInError}},[t._v("\n      Sign in with Facebook\n    ")])],1)])},staticRenderFns:[]};var p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-jumbotron",{attrs:{header:"March Insanity",lead:"A New Type of NCAA Bracket Challenge"}},[e("b-btn",[this._v("How It Works")])],1)],1)},staticRenderFns:[]};var v={name:"App",data:function(){return{}},methods:{},components:{Navbar:n("VU/8")(h,f,!1,function(t){n("Pch7")},null,null).exports,Hello:n("VU/8")({name:"hello",data:function(){return{}}},p,!1,function(t){n("yl2A")},"data-v-3d24c970",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),"Main"!=this.$route.name&&this.$store.state.loggedIn?this._e():e("hello"),this._v(" "),this.$store.state.loggedIn?e("router-view"):e("div",[this._v("\n    Sign in through Google or Facebook to get started!\n  ")])],1)},staticRenderFns:[]};var k=n("VU/8")(v,m,!1,function(t){n("lpz6")},null,null).exports,b=n("/ocq"),_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/Groups"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Groups")])],1),this._v(" "),e("router-link",{attrs:{to:"/BracketCollections"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Bracket Collections")])],1)],1)},staticRenderFns:[]};var C=n("VU/8")({name:"Main",data:function(){return{}}},_,!1,function(t){n("2fz8")},"data-v-62ce2932",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Main")])],1)},staticRenderFns:[]};var B=n("VU/8")({name:"Groups",data:function(){return{msg:"This page will show all of your groups!"}}},I,!1,function(t){n("0sCr")},"data-v-38078a31",null).exports,$={name:"Brackets",data:function(){return{bracketCollections:[]}},mounted:function(){this.updateUserAndBrackets()},methods:{updateUserAndBrackets:function(){this.bracketCollections=[];var t=this;d.getUser(t.$store.state.user.userID).then(function(e){t.$store.state.user=e.data[0],t.$store.state.user.bracketCollection1&&d.getBracketCollection(t.$store.state.user.bracketCollection1).then(function(e){t.bracketCollections.push(e.data[0])}),t.$store.state.user.bracketCollection2&&d.getBracketCollection(t.$store.state.user.bracketCollection2).then(function(e){t.bracketCollections.push(e.data[0])}),t.$store.state.user.bracketCollection3&&d.getBracketCollection(t.$store.state.user.bracketCollection3).then(function(e){t.bracketCollections.push(e.data[0])})})},createBC:function(){var t=i()(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,n=this.$store.state.user.userID+"--"+(this.bracketCollections.length+1),t.next=4,d.createBracketCollection(this.bracketCollections.length+1,this.$store.state.user.userID,n);case 4:e.updateUserAndBrackets();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.bracketCollections,function(e){return n("div",[n("router-link",{attrs:{to:{name:"BracketCollection",params:{bracketId:e.CollectionID}}}},[n("b-btn",[t._v("Bracket "+t._s(e.CollectionID))])],1)],1)}),t._v(" "),t.bracketCollections.length<3?n("div",[n("b-btn",{on:{click:t.createBC}},[t._v("Make a Bracket Collection")])],1):t._e(),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Main")])],2)},staticRenderFns:[]};var E=n("VU/8")($,S,!1,function(t){n("99wc")},"data-v-20895ddf",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.msg)+this._s(this.bracketId))]),this._v(" "),e("router-link",{attrs:{to:"/BracketCollections"}},[this._v("Back To Collections")])],1)},staticRenderFns:[]};var U=n("VU/8")({name:"BracketCollection",data:function(){return{msg:"This page will show all the Brackets on BracketCollection ",bracketId:0}},created:function(){this.bracketId=this.$route.params.bracketId}},w,!1,function(t){n("8DdO")},"data-v-ca2e0474",null).exports;o.a.use(b.a);var x=new b.a({routes:[{path:"/",name:"Main",component:C},{path:"/Groups",name:"Groups",component:B},{path:"/BracketCollections",name:"BracketCollections",component:E},{path:"/BracketCollection/:id",name:"BracketCollection",component:U}]}),y=n("a96c"),A=n.n(y),P=n("fSYm"),R=n.n(P),G=n("e6fC");n("Jmt5"),n("9M+g");o.a.use(G.a),o.a.use(A.a),o.a.use(R.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:x,store:g,components:{App:k},template:"<App/>"})},Pch7:function(t,e){},lpz6:function(t,e){},yl2A:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96f6872835e4e57a7b73.js.map