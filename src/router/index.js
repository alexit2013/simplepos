import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Pos from '@/components/pages/Pos'
import Shop from '@/components/pages/Shop'
import Commodity from '@/components/pages/Commodity'
import Vip from '@/components/pages/Vip'

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
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: Commodity
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    }
  ]
})
