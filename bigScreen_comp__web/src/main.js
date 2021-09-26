import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AslLib from "asl-big-screen"


createApp(App).use(store).use(router).use(AslLib).use(AslLib).mount('#app')
