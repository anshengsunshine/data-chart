import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/reset.css";
import VChart from 'vue-echarts';

const app = createApp(App)
app.use(store).use(router).mount("#app");
app.component('v-chart', VChart)