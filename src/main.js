import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import '@/assets/css/base.css'
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
