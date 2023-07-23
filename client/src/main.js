import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import {authDirective} from "@/directives/VAuth";
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App)

app.directive('auth', authDirective);

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
