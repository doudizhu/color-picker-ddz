import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

// 导入组件库
import ColorPicker from '../packages/index'
// 注册组件库
Vue.use(ColorPicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
