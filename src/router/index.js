import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Pos from '@/components/pages/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Home
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    }
  ]
})
