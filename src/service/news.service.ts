import axios from 'axios'
import { ref } from 'vue'

export default function newsService() {
    const news = ref({})

    const getNews = async() => {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/news')
        news.value = response.data
    }

    return {
        news,
        getNews
    }
}