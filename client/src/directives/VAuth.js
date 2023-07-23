import {tokenKey} from "@/helpers/auth";
import {ref} from "vue";

const isLoggedIn = ref(Boolean(localStorage.getItem(tokenKey)));
export const authDirective = {
    mounted(el, binding) {

        if ((!isLoggedIn.value && binding.value) || (isLoggedIn.value && !binding.value)) {
            el.style.display = 'none';
        } else {
            el.style.display = '';
        }
    },
};