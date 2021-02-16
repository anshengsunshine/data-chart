import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as Echarts from 'echarts';
import "@/assets/style/main.scss";

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
