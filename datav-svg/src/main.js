import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataComponent from "imooc-datav-libs-dev";
// import Echarts from "vue-echarts"


createApp(App)
    .use(store)
    .use(router)
    .use(dataComponent)
    // .component("vue-echarts",Echarts)
    .mount("#app");
