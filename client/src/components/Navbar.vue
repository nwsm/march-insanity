<template>
  <b-navbar id="nav" toggleable="md" type="dark" variant="primary">
    <div v-if="this.$store.state.loggedIn" id="loginInfo">
      Logged in as {{this.$store.state.name}} through {{this.$store.state.signinProvider}} <b-button size="sm" variant="outline sm" @click="logout">Logout</b-button>
    </div>
    <div v-if="!this.$store.state.loggedIn">
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
      var vm = this
      const authres = googleUser.getAuthResponse(true)
      api.loginGoogle(authres.id_token).then(function (r) {
        if (r.data[0] == undefined){
          vm.$store.state.user = r.data
          vm.$store.state.user.userID = r.data.userid
          vm.$store.state.name = r.data.name
          vm.$store.state.loggedIn = true
          vm.$store.state.signinProvider = 'Google'
        }
        else {
          vm.$store.state.user = r.data[0]
          vm.$store.state.user.userID = r.data[0].userID
          vm.$store.state.name = r.data[0].name
          vm.$store.state.loggedIn = true
          vm.$store.state.signinProvider = 'Google'
        }
        
      })
    },
    googleSignInError (error) {
      // `error` contains any error occurred.
      console.log(error)
    },
    facebookSignInSuccess (response) {
      var vm = this
      FB.api('/me?fields=name,email', facebookUser => {
        console.log(facebookUser)
        vm.$store.state.user = facebookUser
        vm.$store.state.user.userID = 'fb-' + facebookUser.id
        vm.$store.state.loggedIn = true
        vm.$store.state.signinProvider = 'Facebook'
        vm.$store.state.name = facebookUser.name
        api.loginFacebook(facebookUser)
      })
      
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
