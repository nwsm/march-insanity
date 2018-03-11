import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Groups from '../pages/Groups'
import Group from '../pages/Group'
import Invite from '../pages/Invite'
import BracketCollections from '../pages/BracketCollections'
import BracketCollection from '../pages/BracketCollection'

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
      path: '/Groups/:id',
      name: 'Group',
      component: Group
    },
    {
      path: '/Invite',
      name: 'Invite',
      component: Invite

    },
    {
      path: '/BracketCollections',
      name: 'BracketCollections',
      component: BracketCollections
    },
    {
      path: '/BracketCollection/:id',
      name: 'BracketCollection',
      component: BracketCollection
    }
  ]
})
