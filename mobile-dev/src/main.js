import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataComponent from "./components";
import "./assets/style/reset.css";
import ECharts from 'vue-echarts'

const app = createApp(App)
app.use(store).use(router).use(dataComponent).mount("#app");
// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)

app.config.globalProperties.$echarts = ECharts // 自定义添加
app.config.globalProperties.$bmap = window.BMapGL
app.config.globalProperties.$bmap2 = window.BMap
app.config.globalProperties.$initMap = window.initMap
app.config.globalProperties.$mapvgl = window.mapvgl
app.config.globalProperties.$mapv = window.mapv
app.config.globalProperties.$purpleStyle = window.purpleStyle
app.config.globalProperties.$darkStyle = window.darkStyle