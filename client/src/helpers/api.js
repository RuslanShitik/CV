import axios from "axios";
import { tokenKey } from "@/helpers/auth";

// Создаем новый экземпляр Axios с предустановленным заголовком 'Authorization'
const api = axios.create({
    baseURL: "", // Замените на базовый URL вашего API
    headers: {
        common: {
            Authorization: `Bearer ${localStorage.getItem(tokenKey) || ""}`,
        },
    },
});

export default api;