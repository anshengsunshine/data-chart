import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
// import * as echarts from 'echarts/lib/echarts'
import "@/assets/style/main.scss";
import VueEcharts from "v-charts-v2";
import './plugins/element.js'
import './plugins/vcharts.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-chart',VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
