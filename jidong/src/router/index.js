import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    //异步路由，进那个路由加载那个路由，让页面加载更快
    component: () => import(/* webpackChunkName: "home" */ '../views/home/HomeCopy')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/loginIng'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.getItem('isLogin')
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/RegisterIng'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.getItem('isLogin')
      if (isLogin) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  if (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
