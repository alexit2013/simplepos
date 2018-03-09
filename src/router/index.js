import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Pos from '@/components/pages/Pos'
import Shop from '@/components/pages/Shop'
import Commodity from '@/components/pages/Commodity'
import Vip from '@/components/pages/Vip'

import Login from '@/components/pages/Login';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/home',
      name: 'home',
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

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('进入导航守卫')
  const nextRoute = ['/home'];
  let isLogin = JSON.parse(window.localStorage.getItem('userInfo'));
  console.log(isLogin);
  if(nextRoute.indexOf(to.name) >= 0){
    if(isLogin == '' || isLogin == null){
      // this.$Message.info('请先登陆!');
      router.push({name: 'login'})
    } else {
      console.log('登陆')
    }
  }
  next()
});

export default router;
