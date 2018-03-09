<template>
  <b-navbar id="nav" toggleable="md" type="dark" variant="primary">
    <div v-if="$store.state.loggedIn" id="loginInfo">
      Logged in as {{$store.state.name}} through {{$store.state.signinProvider}} <b-button size="sm" variant="outline sm" @click="logout">Logout</b-button>
    </div>
    <div v-if="!$store.state.loggedIn">
      <g-signin-button
        :params="googleSignInParams"
        @success="googleSignInSuccess"
        @error="googleSignInError">
        Sign in with Google
      </g-signin-button>
      <fb-signin-button
        :params="fbSignInParams"
        @success="facebookSignInSuccess"
        @error="facebookSignInError">
        Sign in with Facebook
      </fb-signin-button>
    </div>
  </b-navbar>
</template>

<script>
import api from '../services/Api'
/* eslint-disable */
export default {
  data: () => ({
    googleSignInParams: {
      client_id: '704186925497-7u9boed7u6cp7os7mrlg797uu86cm1m9.apps.googleusercontent.com'
    },
    fbSignInParams: {
      scope: 'email,user_likes',
      return_scope: true
    }
  }),
  mounted: function () {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1994367434163980',
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
      })
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  },
  methods: {
    googleSignInSuccess (googleUser) {
      var vm = this;  //inside the api function .then below, 'this' will refer to the api,
                      //so we make a variable referencing the correct 'this' to use to access the store.
      const profile = googleUser.getBasicProfile()
      this.$store.state.loggedIn = true
      this.$store.state.signinProvider = 'Google'
      this.$store.state.name = profile.ig

      api.getUser('gg-'+profile.Eea).then(function(r){
        if(r.data.length==0){
          api.insertUser('gg-'+profile.Eea,profile.U3,profile.ig).then(function() {
            api.getUser('gg-'+profile.Eea).then(function(res){
              vm.$store.state.user = res.data[0]
            })
          })

        }else{
          vm.$store.state.user = r.data[0]
        }
      })
    },
    googleSignInError (error) {
      // `error` contains any error occurred.
      console.log(error)
    },
    facebookSignInSuccess (response) {
      FB.api('/me?fields=name,email', facebookUser => {
        this.$store.state.loggedIn = true
        this.$store.state.signinProvider = 'Facebook'
        this.$store.state.name = facebookUser.name

        console.log(facebookUser);
      })
      this.loggedIn = true
    },
    facebookSignInError (error) {
      console.log(error)
    },
    logout () {
      this.$store.state.loggedIn = false
      this.$store.state.signinProvider = null
      this.$store.state.name = null
    }
  }
}
</script>

<style>
#loginInfo {
  color: #fff;
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  cursor: pointer;
}

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
}

#nav {
  height:50px
}
</style>
