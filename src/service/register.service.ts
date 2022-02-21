import axios from 'axios'
import { ref } from 'vue'

export default function registerService(){
    const role = ref('')
    
    async function getRole(slug = null){
        await axios.post('http://127.0.0.1:8000/api/register/show_registration_form',slug).then((response) => {
            role.value = response.data.data
        }).catch()
    }

    return {
        role,
        getRole
    }

}