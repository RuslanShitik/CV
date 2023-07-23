import axios from "axios";

export const tokenKey = 'cv_site_token_key'
export const setUserToken = (token) => {
    localStorage.setItem(tokenKey, token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    window.location = '/'
}
export const logOutUser = () => {
    localStorage.removeItem(tokenKey);
    window.location = '/'
}