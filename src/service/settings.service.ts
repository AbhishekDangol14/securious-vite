import axios from 'axios'
import { ref } from 'vue'

export default function settingsService() {
    const data = ref({})

    const getCode = async() => {
        const response = await axios.post('http://127.0.0.1:8000/api/admin/register/google2fa')
        data.value = response.data
    }

    return {
        data,
        getCode

    }
}