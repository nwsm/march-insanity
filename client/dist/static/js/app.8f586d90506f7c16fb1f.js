webpackJsonp([1],{"0sCr":function(t,e){},"1/oy":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("mtWM"),s=n.n(r),a=n("NYxO");o.a.use(a.a);var i=new a.a.Store({state:{loggedIn:!1,signinProvider:null,name:null,user:null},mutations:{setLogin:function(t){this.loggedIn=t},setSigninProvider:function(t){this.signinProvider=t},setName:function(t){this.name=t},setUser:function(t){this.user=t}}}),c=function(t){return s.a.post("/auth/google/",{token:t})},u=function(t){return s.a.get("/BRACKETCOLLECTIONS/",{id:t})},l=function(t){s.a.post("/BRACKETCOLLECTIONS/",{CollectionID:i.state.user.userID+"-#"+t}).then(function(e){var n=[];n[0]=i.state.user.bracketCollection1,n[1]=i.state.user.bracketCollection2,n[2]=i.state.user.bracketCollection3,n[t-1]=i.state.user.userID+"-#"+t,s.a.put("/USERS/",{userID:i.state.user.userID,email:i.state.user.email,bracketCollection1:n[0],bracketCollection2:n[1],bracketCollection3:n[2],name:i.state.user.name}).then(function(){s.a.get("/USERS/"+i.state.user.userID).then(function(t){i.state.user=t.data[0]})})})},g={data:function(){return{googleSignInParams:{client_id:"704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com"},fbSignInParams:{scope:"email,user_likes",return_scope:!0}}},mounted:function(){var t,e,n,o,r;window.fbAsyncInit=function(){FB.init({appId:"1994367434163980",cookie:!0,xfbml:!0,version:"v2.8"})},t=document,e="script",n="facebook-jssdk",r=t.getElementsByTagName(e)[0],t.getElementById(n)||((o=t.createElement(e)).id=n,o.src="//connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r))},methods:{googleSignInSuccess:function(t){var e=t.getAuthResponse(!0);c(e.id_token).then(function(t){console.log(t)})},googleSignInError:function(t){console.log(t)},facebookSignInSuccess:function(t){var e=this;FB.api("/me?fields=name,email",function(t){e.$store.state.loggedIn=!0,e.$store.state.signinProvider="Facebook",e.$store.state.name=t.name,console.log(t)}),this.loggedIn=!0},facebookSignInError:function(t){console.log(t)},logout:function(){this.$store.state.loggedIn=!1,this.$store.state.signinProvider=null,this.$store.state.name=null}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{id:"nav",toggleable:"md",type:"dark",variant:"primary"}},[t.$store.state.loggedIn?n("div",{attrs:{id:"loginInfo"}},[t._v("\n    Logged in as "+t._s(t.$store.state.name)+" through "+t._s(t.$store.state.signinProvider)+" "),n("b-button",{attrs:{size:"sm",variant:"outline sm"},on:{click:t.logout}},[t._v("Logout")])],1):t._e(),t._v(" "),t.$store.state.loggedIn?t._e():n("div",[n("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.googleSignInSuccess,error:t.googleSignInError}},[t._v("\n      Sign in with Google\n    ")]),t._v(" "),n("fb-signin-button",{attrs:{params:t.fbSignInParams},on:{success:t.facebookSignInSuccess,error:t.facebookSignInError}},[t._v("\n      Sign in with Facebook\n    ")])],1)])},staticRenderFns:[]};var d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-jumbotron",{attrs:{header:"March Insanity",lead:"A New Type of NCAA Bracket Challenge"}},[e("b-btn",[this._v("How It Works")])],1)],1)},staticRenderFns:[]};var h={name:"App",data:function(){return{}},methods:{},components:{Navbar:n("VU/8")(g,f,!1,function(t){n("piiG")},null,null).exports,Hello:n("VU/8")({name:"hello",data:function(){return{}}},d,!1,function(t){n("yl2A")},"data-v-3d24c970",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),"Main"!=this.$route.name&&this.$store.state.loggedIn?this._e():e("hello"),this._v(" "),this.$store.state.loggedIn?e("router-view"):e("div",[this._v("\n    Sign in through Google or Facebook to get started!\n  ")])],1)},staticRenderFns:[]};var m=n("VU/8")(h,v,!1,function(t){n("lpz6")},null,null).exports,p=n("/ocq"),b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/Groups"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Groups")])],1),this._v(" "),e("router-link",{attrs:{to:"/Brackets"}},[e("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Brackets")])],1)],1)},staticRenderFns:[]};var k=n("VU/8")({name:"Main",data:function(){return{}}},b,!1,function(t){n("W/fp")},"data-v-f9a5e414",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Main")])],1)},staticRenderFns:[]};var C=n("VU/8")({name:"Groups",data:function(){return{msg:"This page will show all of your groups!"}}},_,!1,function(t){n("0sCr")},"data-v-38078a31",null).exports,I=n("Xxa5"),S=n.n(I),$=n("exGp"),B=n.n($),E={name:"Brackets",data:function(){return{bracketCollections:[]}},mounted:function(){this.getBCs()},methods:{getBCs:function(){var t=this.$store,e=this;this.$store.state.user.bracketCollection1&&u(t.state.user.bracketCollection1).then(function(t){e.bracketCollections.push(t.data)}),this.$store.state.user.bracketCollection2&&u(t.state.user.bracketCollection2).then(function(t){e.bracketCollections.push(t.data)}),this.$store.state.user.bracketCollection3&&u(t.state.user.bracketCollection3).then(function(t){e.bracketCollections.push(t.data)})},createBC:function(){var t=this;return B()(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.bracketCollections.length+1);case 2:t.getBCs();case 3:case"end":return e.stop()}},e,t)}))()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.bracketCollections,function(e){return n("div",[n("b-btn",[t._v("Bracket")])],1)}),t._v(" "),t.bracketCollections.length<3?n("div",[n("b-btn",{on:{click:t.createBC}},[t._v("Make a Bracket Collection")])],1):t._e(),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Main")])],2)},staticRenderFns:[]};var y=n("VU/8")(E,w,!1,function(t){n("uCc2")},"data-v-65bdcd32",null).exports;o.a.use(p.a);var x=new p.a({routes:[{path:"/",name:"Main",component:k},{path:"/Groups",name:"Groups",component:C},{path:"/Brackets",name:"Brackets",component:y}]}),A=n("a96c"),F=n.n(A),M=n("fSYm"),N=n.n(M),P=n("e6fC");n("Jmt5"),n("9M+g");o.a.use(P.a),o.a.use(F.a),o.a.use(N.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:x,store:i,components:{App:m},template:"<App/>"})},"W/fp":function(t,e){},lpz6:function(t,e){},piiG:function(t,e){},uCc2:function(t,e){},yl2A:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8f586d90506f7c16fb1f.js.map