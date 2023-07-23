import {tokenKey} from "@/helpers/auth";
export const userModule = {
    state: () => ({
        user: {
            login: '',
            role: '',
            token: '',
            isAuth: false,
        }
    }),
    getters: {
    },
    mutations: {
        setUserData(state, payload){
            state.user = payload
        },
    },
    actions: {
        getUserToken({commit}){
            const user = {
                // token: localStorage.getItem(tokenKey),
                isAuth: Boolean(localStorage.getItem(tokenKey))
            }
            commit('setUserData', user)
        },
    },
}