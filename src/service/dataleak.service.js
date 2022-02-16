import axios from 'axios'
import { ref } from 'vue'

export default function dataleakService() {
    const emails = ref([])
    let isBreached = ref(false)

    const getEmails = async() => {
        const response = await axios.get('http://127.0.0.1:8000/api/customer/data_leak')
        emails.value = response.data.data
        emails.value.forEach((email) => {
            if(email.breaches.length > 0)
                isBreached.value = true
        })
    }

    const addEmail = async(email) => {
        const response = await axios.post('http://127.0.0.1:8000/api/customer/data_leak',{ email: email })
    }

    const deleteEmail = async(id) => {
        await axios.delete('http://127.0.0.1:8000/api/customer/data_leak/'+id)
    }

    return {
        emails,
        isBreached,
        getEmails,
        addEmail,
        deleteEmail
    }
}