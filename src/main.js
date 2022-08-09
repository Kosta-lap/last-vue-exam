import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"

let vue = createApp(App).use(store).use(router);

vue.mount('#app')
