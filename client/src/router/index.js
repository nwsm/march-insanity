import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Group from '@/components/Group'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    }
  ]
})
