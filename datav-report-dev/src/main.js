import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'echarts'
import "@/assets/style/main.scss";
import VueEcharts from "vue-echarts";
import './plugins/element.js'
import './plugins/vcharts.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart',VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
