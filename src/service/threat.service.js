import axios from 'axios'
import { ref } from 'vue'

export default function threatService() {
    const threat = ref([])
    const threatDetail = ref({})

    async function getThreats() {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/threat')
        threat.value = response.data.items
    }

    async function editThreat(id) {
       const response = await axios.get('http://127.0.0.1:8000/api/admin/threat/'+id+'/edit')
       threatDetail.value = response.data.data
    }
    return {
        threat,
        threatDetail,
        getThreats,
        editThreat
    }
}