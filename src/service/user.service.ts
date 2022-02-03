import axios from 'axios'
import { ref } from 'vue'

export default function userService() {
    const users = ref({})

    const getUsers = async() => {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/users')
        users.value = response.data
    }

    return {
        users,
        getUsers
    }
}