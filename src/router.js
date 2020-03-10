import Vue from 'vue'
import Router from 'vue-router'
// import MyRouter from './plugins/myRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  //   if (from.meta.isKeepAlive) {
  //     console.log('isKeepAlive');
  //     from.meta.savedPosition = document.documentElement.scrollTop || document.body.scrollTop;
  //   }
  //   if (from.name === 'test2' && to.name === 'test1') {
  //     console.log('reset');
  //     from.meta.savedPosition = 0;
  //   }
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { x: 0, y: to.meta.savedPosition || 0 };
  // },
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { isKeepAlive: false },
      component: () => import(/* webpackChunkName: "about" */ './views/login'),
    },
    {
      path: '/imgLazyLoad',
      name: 'imgLazyLoad',
      meta: { isKeepAlive: false },
      component: () => import('./views/imgLazyLoad'),
    },
    {
      path: '/routerLazyLoad',
      name: 'routerLazyLoad',
      meta: { isKeepAlive: false },
      component: () => import('./views/routerLazyLoad'),
    },
    {
      path: '/2',
      name: 'test2',
      meta: { isKeepAlive: true },
      component: () => import('./views/swiper'),
    },
  ],
})
