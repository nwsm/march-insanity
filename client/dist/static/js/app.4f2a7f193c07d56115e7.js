webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},Bw9G:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("Xxa5"),a=n.n(o),s=n("exGp"),i=n.n(s),u=n("mtWM"),c=n.n(u),l=n("NYxO");r.a.use(l.a);var p=new l.a.Store({state:{loggedIn:!1,signinProvider:null,name:null,user:null},mutations:{setLogin:function(e){this.loggedIn=e},setSigninProvider:function(e){this.signinProvider=e},setName:function(e){this.name=e},setUser:function(e){this.user=e}}}),h={getGroups:function(){return c.a.get("/GROUPS")},getUser:function(e){return c.a.get("/USERS/"+e)},insertUser:function(e,t,n){return c.a.post("/USERS/",{userID:e,email:t,name:n})},loginGoogle:function(e){return c.a.post("/auth/google/",{token:e})},loginFacebook:function(e){return c.a.post("/auth/facebook/",{fbID:e.id,fbEmail:e.email,fbName:e.name})},getBracketCollection:function(e){return c.a.get("/BRACKETCOLLECTIONS/"+e)},createBracketCollection:function(){var e=i()(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/BRACKETCOLLECTIONS",{CollectionID:r});case 2:return e.next=4,c.a.put("/USERS/UPDATEBC",{userID:n,bracketCollectionID:r,num:t});case 4:return e.abrupt("return");case 5:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),createGroup:function(){var e=i()(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/GROUPS/",{groupName:t,groupAdmin:n});case 2:return e.abrupt("return");case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),createUserGroup:function(){var e=i()(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/USERGROUP/",{groupName:t,userID:n});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),updateUserGroup:function(){var e=i()(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.put("/USERGROUP/",{bracketCollection:r,groupName:n,userID:t});case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),getGroup:function(e){return c.a.get("/GROUPS/"+e)},getUserGroups:function(e){return c.a.get("/USERGROUP/"+e)},getMembers:function(e){return c.a.get("/MEMBERS/"+e)},sendMail:function(e,t){c.a.get("/SEND/"+e+"/"+t)}},d={data:function(){return{googleSignInParams:{client_id:"704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com"},fbSignInParams:{scope:"email,user_likes",return_scope:!0}}},mounted:function(){var e,t,n,r,o;window.fbAsyncInit=function(){FB.init({appId:"1994367434163980",cookie:!0,xfbml:!0,version:"v2.8"})},e=document,t="script",n="facebook-jssdk",o=e.getElementsByTagName(t)[0],e.getElementById(n)||((r=e.createElement(t)).id=n,r.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(r,o))},methods:{googleSignInSuccess:function(e){var t=this,n=e.getAuthResponse(!0);h.loginGoogle(n.id_token).then(function(e){void 0==e.data[0]?(t.$store.state.user=e.data,t.$store.state.user.userID=e.data.userid,t.$store.state.name=e.data.name,t.$store.state.loggedIn=!0,t.$store.state.signinProvider="Google"):(t.$store.state.user=e.data[0],t.$store.state.user.userID=e.data[0].userID,t.$store.state.name=e.data[0].name,t.$store.state.loggedIn=!0,t.$store.state.signinProvider="Google")})},googleSignInError:function(e){console.log(e)},facebookSignInSuccess:function(e){var t=this;FB.api("/me?fields=name,email",function(e){console.log(e),t.$store.state.user=e,t.$store.state.user.userID="fb-"+e.id,t.$store.state.loggedIn=!0,t.$store.state.signinProvider="Facebook",t.$store.state.name=e.name,h.loginFacebook(e)})},facebookSignInError:function(e){console.log(e)},logout:function(){this.$store.state.loggedIn=!1,this.$store.state.signinProvider=null,this.$store.state.name=null}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{id:"nav",toggleable:"md",type:"dark",variant:"primary"}},[this.$store.state.loggedIn?n("div",{attrs:{id:"loginInfo"}},[e._v("\n    Logged in as "+e._s(this.$store.state.name)+" through "+e._s(this.$store.state.signinProvider)+" "),n("b-button",{attrs:{size:"sm",variant:"outline sm"},on:{click:e.logout}},[e._v("Logout")])],1):e._e(),e._v(" "),this.$store.state.loggedIn?e._e():n("div",[n("g-signin-button",{attrs:{params:e.googleSignInParams},on:{success:e.googleSignInSuccess,error:e.googleSignInError}},[e._v("\n      Sign in with Google\n    ")]),e._v(" "),n("fb-signin-button",{attrs:{params:e.fbSignInParams},on:{success:e.facebookSignInSuccess,error:e.facebookSignInError}},[e._v("\n      Sign in with Facebook\n    ")])],1)])},staticRenderFns:[]};var g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-jumbotron",{attrs:{header:"March Insanity",lead:"A New Type of NCAA Bracket Challenge"}},[t("b-btn",[this._v("How It Works")])],1)],1)},staticRenderFns:[]};var v={name:"App",data:function(){return{}},methods:{},components:{Navbar:n("VU/8")(d,m,!1,function(e){n("eIZC")},null,null).exports,Hello:n("VU/8")({name:"hello",data:function(){return{}}},g,!1,function(e){n("bfxV")},"data-v-8a725928",null).exports}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),"Main"!=this.$route.name&&this.$store.state.loggedIn?this._e():t("hello"),this._v(" "),this.$store.state.loggedIn?t("router-view"):t("div",[this._v("\n    Sign in through Google or Facebook to get started!\n  ")])],1)},staticRenderFns:[]};var b=n("VU/8")(v,f,!1,function(e){n("zbMN")},null,null).exports,k=n("/ocq"),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-link",{attrs:{to:"/Groups"}},[t("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Groups")])],1),this._v(" "),t("router-link",{attrs:{to:"/BracketCollections"}},[t("b-btn",{attrs:{size:"lg",variant:"outline-primary"}},[this._v("Your Bracket Collections")])],1)],1)},staticRenderFns:[]};var I=n("VU/8")({name:"Main",data:function(){return{}}},_,!1,function(e){n("Nf96")},"data-v-037b310c",null).exports,C={name:"Groups",data:function(){return{Groups:[],newGroupName:"",groupExistsError:""}},mounted:function(){this.updateUserGroups()},methods:{updateUserGroups:function(){this.Groups=[];var e=this;h.getUserGroups(e.$store.state.user.userID).then(function(t){for(var n=0;n<t.data.length;n++)h.getGroup(t.data[n].groupName).then(function(t){e.Groups.push(t.data[0])})})},createGroup:function(){var e=i()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,0,0,e.next=5,h.getGroup(t.newGroupName).then(function(){var e=i()(a.a.mark(function e(n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.data.length){e.next=7;break}return e.next=3,h.createGroup(t.newGroupName,t.$store.state.user.userID);case 3:t.groupExistsError="",h.createUserGroup(t.newGroupName,t.$store.state.user.userID),e.next=8;break;case 7:t.groupExistsError="Group already exists!";case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 5:t.updateUserGroups();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Your Groups:")]),e._v(" "),e._l(e.Groups,function(t){return n("div",[n("router-link",{attrs:{to:{name:"Group",params:{id:t.groupName,groupAdmin:t.groupAdmin}}}},[n("b-btn",[e._v(" "+e._s(t.groupName))])],1)],1)}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newGroupName,expression:"newGroupName"}],attrs:{placeholder:"New Group Name"},domProps:{value:e.newGroupName},on:{input:function(t){t.target.composing||(e.newGroupName=t.target.value)}}}),e._v(" "),n("p",[e._v(e._s(e.groupExistsError))]),e._v(" "),n("div",[n("b-btn",{on:{click:e.createGroup}},[e._v("Create Group")])],1),e._v(" "),n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("Main")])],2)},staticRenderFns:[]};var w=n("VU/8")(C,G,!1,function(e){n("ak/x")},"data-v-78470b84",null).exports,N={name:"Group",data:function(){return{groupName:0,userID:0,groupAdmin:0,notInGroup:!1,entries:[],BracketCollections:[]}},created:function(){this.userID=this.$store.state.user.userID,this.groupName=this.$route.params.id},mounted:function(){this.getGroupNameAndAdmin(),this.checkMembership(),this.getEntries(),this.getUserBCs()},methods:{getGroupNameAndAdmin:function(){var e=i()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.next=3,h.getGroup(this.groupName).then(function(e){t=e.data[0].groupAdmin});case 3:this.groupAdmin=t;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkMembership:function(){var e=i()(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=!0,n=this.groupName,e.next=4,h.getUserGroups(this.userID).then(function(e){for(var r=0;r<e.data.length;r++)if(e.data[r].groupName==n){t=!1;break}});case 4:this.notInGroup=!!t;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),joinGroup:function(){h.createUserGroup(this.groupName,this.userID).then(this.checkMembership())},getEntries:function(){var e=i()(a.a.mark(function e(){var t,n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.entries=[],t=this.groupName,n=this,e.next=5,h.getMembers(t).then(function(e){for(var t=0;t<e.data.length;t++)n.entries.push({userID:e.data[t].userID,bracketCollection:e.data[t].bracketCollection,Score:0})});case 5:r=0;case 6:if(!(r<n.entries.length)){e.next=13;break}return console.log("outer",n.entries[r].userID),e.next=10,h.getUser(n.entries[r].userID).then(function(e){console.log("inner",n.entries[r].userID),n.entries[r].userID=e.data[0].name});case 10:r++,e.next=6;break;case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getUserBCs:function(){var e=i()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,h.getUser(this.userID).then(function(e){null!=e.data[0].bracketCollection1&&t.BracketCollections.push({bcID:e.data[0].bracketCollection1}),null!=e.data[0].bracketCollection2&&t.BracketCollections.push({bcID:e.data[0].bracketCollection2}),null!=e.data[0].bracketCollection3&&t.BracketCollections.push({bcID:e.data[0].bracketCollection3})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submitBCChoice:function(){for(var e=document.getElementsByName("BracketCollection"),t=null,n=0;n<e.length;n++)e[n].checked&&(t=e[n].value);null!=t&&h.updateUserGroup(this.userID,this.groupName,t),this.getEntries()}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Group Name: "+e._s(e.groupName))]),e._v(" "),this.groupAdmin===this.userID?n("div",[n("router-link",{attrs:{to:{name:"Invite",params:{groupName:this.groupName,groupAdmin:this.groupAdmin}}}},[n("b-btn",[e._v("Invite new members")])],1)],1):e._e(),e._v(" "),e.notInGroup?n("div",[n("b-btn",{on:{click:e.joinGroup}},[e._v("Join")])],1):n("div",[n("h2",[e._v("Choose your bracket collection for the group:")]),e._v(" "),n("form",e._l(this.BracketCollections,function(t){return n("div",[n("input",{attrs:{type:"radio",name:"BracketCollection"},domProps:{value:t.bcID}}),e._v(" "+e._s(t.bcID)),n("br")])})),e._v(" "),n("b-btn",{on:{click:e.submitBCChoice}},[e._v("Submit Choice")])],1),e._v(" "),n("router-link",{attrs:{to:"/Groups"}},[e._v("Back to your groups")]),e._v(" "),n("h2",[e._v("Group Standings")]),e._v(" "),n("table",[e._m(0),e._v(" "),n("tbody",e._l(e.entries,function(t){return n("tr",[n("td",[e._v(e._s(t.userID))]),e._v(" "),n("td",[e._v(e._s(t.bracketCollection))]),e._v(" "),n("td",[e._v(e._s(t.Score))])])}))])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Player")]),this._v(" "),t("th",[this._v("Bracket Collection")]),this._v(" "),t("th",[this._v("Score")])])])}]};var B=n("VU/8")(N,E,!1,function(e){n("b3dy")},"data-v-2b26905c",null).exports,$={name:"Invite",data:function(){return{groupName:0,groupAdmin:0,sentMessage:"",newMemberEmail:""}},created:function(){this.groupID=this.$route.params.groupAdmin,this.groupName=this.$route.params.groupName},methods:{sendInvite:function(){""!=this.newMemberEmail&&(h.sendMail(this.newMemberEmail,this.groupName),this.sentMessage="Invite sent to "+this.newMemberEmail),console.log("sendInvite clicked")}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Group Name: "+e._s(e.groupName))]),e._v(" "),n("div",[n("h3",[e._v("Enter email of new group member ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMemberEmail,expression:"newMemberEmail"}],attrs:{placeholder:"New Member Email"},domProps:{value:e.newMemberEmail},on:{input:function(t){t.target.composing||(e.newMemberEmail=t.target.value)}}}),e._v(" "),n("p",[e._v(e._s(e.sentMessage))]),e._v(" "),n("b-btn",{on:{click:e.sendInvite}},[e._v("Send Invite")])],1),e._v(" "),n("router-link",{attrs:{to:{name:"Group",params:{groupName:this.groupName,groupAdmin:this.groupAdmin}},id:"groupPage"}},[e._v("Back to group")])],1)},staticRenderFns:[]};var S=n("VU/8")($,x,!1,function(e){n("Bw9G")},"data-v-02a3c65e",null).exports,U={name:"Brackets",data:function(){return{bracketCollections:[]}},mounted:function(){this.updateUserAndBrackets()},methods:{updateUserAndBrackets:function(){this.bracketCollections=[];var e=this;h.getUser(e.$store.state.user.userID).then(function(t){e.$store.state.user=t.data[0],e.$store.state.user.bracketCollection1&&h.getBracketCollection(e.$store.state.user.bracketCollection1).then(function(t){e.bracketCollections.push(t.data[0])}),e.$store.state.user.bracketCollection2&&h.getBracketCollection(e.$store.state.user.bracketCollection2).then(function(t){e.bracketCollections.push(t.data[0])}),e.$store.state.user.bracketCollection3&&h.getBracketCollection(e.$store.state.user.bracketCollection3).then(function(t){e.bracketCollections.push(t.data[0])})})},createBC:function(){var e=i()(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,n=this.$store.state.user.userID+"--"+(this.bracketCollections.length+1),e.next=4,h.createBracketCollection(this.bracketCollections.length+1,this.$store.state.user.userID,n);case 4:t.updateUserAndBrackets();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.bracketCollections,function(t){return n("div",[n("router-link",{attrs:{to:{name:"BracketCollection",params:{bracketId:t.CollectionID}}}},[n("b-btn",[e._v("Bracket "+e._s(t.CollectionID))])],1)],1)}),e._v(" "),e.bracketCollections.length<3?n("div",[n("b-btn",{on:{click:e.createBC}},[e._v("Make a Bracket Collection")])],1):e._e(),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("Main")])],2)},staticRenderFns:[]};var M=n("VU/8")(U,D,!1,function(e){n("W2VH")},"data-v-1c3e4145",null).exports,y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v(this._s(this.msg)+this._s(this.bracketId))]),this._v(" "),t("router-link",{attrs:{to:"/BracketCollections"}},[this._v("Back To Collections")])],1)},staticRenderFns:[]};var A=n("VU/8")({name:"BracketCollection",data:function(){return{msg:"This page will show all the Brackets on BracketCollection ",bracketId:0}},created:function(){this.bracketId=this.$route.params.bracketId}},y,!1,function(e){n("j5jp")},"data-v-9de27da8",null).exports;r.a.use(k.a);var P=new k.a({routes:[{path:"/",name:"Main",component:I},{path:"/Groups",name:"Groups",component:w},{path:"/Groups/:id",name:"Group",component:B},{path:"/Invite",name:"Invite",component:S},{path:"/BracketCollections",name:"BracketCollections",component:M},{path:"/BracketCollection/:id",name:"BracketCollection",component:A}]}),R=n("a96c"),F=n.n(R),V=n("fSYm"),O=n.n(V),j=n("e6fC");n("Jmt5"),n("9M+g");r.a.use(j.a),r.a.use(F.a),r.a.use(O.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:P,store:p,components:{App:b},template:"<App/>"})},Nf96:function(e,t){},W2VH:function(e,t){},"ak/x":function(e,t){},b3dy:function(e,t){},bfxV:function(e,t){},eIZC:function(e,t){},j5jp:function(e,t){},zbMN:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4f2a7f193c07d56115e7.js.map