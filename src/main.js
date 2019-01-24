import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
// svg使用方法 <svg-icon icon-class="svg文件名"></svg-icon>
import './icons'
// loading进度条 路由守卫
import './utils/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
