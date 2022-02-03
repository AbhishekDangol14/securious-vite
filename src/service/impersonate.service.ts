import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

export default function impersonateService() {
    async function getUser(id) {
        await axios.post('http://127.0.0.1:8000/api/admin/impersonate',{id: id}).then((response) => {
            const token = localStorage.getItem('ID_TOKEN_KEY')
            const user = localStorage.getItem('USER')

            token ? localStorage.setItem('IMPERSONATOR_TOKEN',token) : null
            user ? localStorage.setItem('IMPERSONATOR_USER',user) : null
            localStorage.setItem('ID_TOKEN_KEY',response.data.data.resource.token.plainTextToken)
            localStorage.setItem('USER',JSON.stringify(response.data.data.resource))
            router.push({ name:'Dashboard' })
        })
    }

    return {
        getUser
    }
}