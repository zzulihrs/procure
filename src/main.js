import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api/mock'

import 'normalize.css'
import '@/assets/css/base.css'
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
import Cookie from "js-cookie";

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookie.get('token')
  // token不存在，说明当前用户未登录，应该跳转至登录页
  if(!token && to.name != 'login') {
    next({name: 'login'})
  } else if(token && to.name == 'login') { // token存在，说明用户登录，此时跳转至首页
     next({ name: from.name})
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
