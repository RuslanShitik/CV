import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import {tokenKey} from "@/helpers/auth";
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const authDirective = {
    mounted(el, binding) {
        const isLoggedIn = Boolean(localStorage.getItem(tokenKey));
        if (isLoggedIn && !binding.value) {
            el.style.display = 'none';
        } else if (!isLoggedIn && binding.value) {
            el.style.display = 'none';
        }
    },
};

const app = createApp(App)

app.directive('auth', authDirective);

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
