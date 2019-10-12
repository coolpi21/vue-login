import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate' // 调用表单验证机制
import './dict/dictionary' // 调用自定义vee-validate字典

Vue.use(VeeValidate)
const validator = new Validator()
validator.localize('zh')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
