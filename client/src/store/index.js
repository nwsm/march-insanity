import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loggedIn: false,
  signinProvider: null,
  name: null,
  user: null,
  bracket: null,
  currentRound: 6
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
  },

  setUser (u) {
    this.user = u
  },

  setBracket (b) {
    this.bracket = b
  }
}

export default new Vuex.Store({
  state,
  mutations
})
