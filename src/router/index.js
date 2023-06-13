import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import Login from "@/views/login";

Vue.use(VueRouter)

const routes = [
    //主路由
  {
    path: '/',
    component: Main,
    redirect: '/home',
    // 子路由
    children: [
      { // 首页
        path: 'home',
        name: 'home',
        component: Home
      },
      { // 用户管理
        path: 'user',
        name: 'user',
        component: User
      },
      { // 商品管理
        path: 'mall',
        name: 'mall',
        component: Mall
      },
      { // 页面1
        path: 'page1',
        name: 'page1',
        component: PageOne
      },
      { // 页面2
        path: 'page2',
        name: 'page2',
        component: PageTwo
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
