import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Groups from '../pages/Groups'
import Brackets from '../pages/Brackets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/Brackets',
      name: 'Brackets',
      component: Brackets
    }
  ]
})
