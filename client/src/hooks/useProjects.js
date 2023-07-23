import {onMounted, ref} from "vue";
import axios from "axios";
import {ElNotification} from "element-plus";

export function useProjects() {
    const projects = ref([])
    const loading = ref(true)
    const errors = ref(null)

    const fetching = () => {
        axios.get('http://localhost:3000/api/project',{
            params: {
                page: 1,
                limit: 5
            }
        }) //todo: постраничный вывод и добавить лилмиты на бэке по страницам и количеству
            .then((response) => {
                projects.value = response.data
            })
            .catch((e) => {
                errors.value = e
                ElNotification({
                    title: 'Fetch data error',
                    message: JSON.stringify(e),
                    type: 'error',
                    duration: 0,
                });
            })
            .finally(() => {
                loading.value = false
            })
    }

    onMounted(fetching)

    return {
        projects, loading, errors
    }
}