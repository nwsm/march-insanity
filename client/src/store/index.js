import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loggedIn: false,
  signinProvider: null,
  name: null
}

const mutations = {
  setLogin (b) {
    this.loggedIn = b
  },

  setSigninProvider (p) {
    this.signinProvider = p
  },

  setName (n) {
    this.name = n
  }
}

export default new Vuex.Store({
  state,
  mutations
})
