import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
    //主路由
  {
    path: '/',
    component: Main,
    redirect: 'home',
    // 子路由
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
