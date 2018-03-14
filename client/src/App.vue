<template>
  <div id="app">
    <navbar></navbar>
    <hello v-if="$route.name=='Main' || !$store.state.loggedIn"></hello>
    <router-view v-if="$store.state.loggedIn">
    </router-view>
    <div v-else>
      Sign in through Google or Facebook to get started!
    </div>
    <br>
    <router-link v-if="$route.name!='Main'" to="/">Main</router-link>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hello from './components/Hello.vue'
/* eslint-disable */
export default {
  name: 'App',
  data: () => ({

  }),
  methods: {
  },
  components: {
    Navbar,
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
