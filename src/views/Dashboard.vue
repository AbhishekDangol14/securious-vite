<template>
    <div class="dashboard bg-blue-50" >
        <sidebar /> 
        <h1>Dashboard</h1>
        {{ user }}
        <button @click="logout">Log Out</button>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../router'
import Sidebar from '../components/Sidebar.vue'
import { useStore } from 'vuex'
export default defineComponent({    
    components: {
        Sidebar
    },
    setup() {
        const store = useStore()

        function logout() {
            localStorage.removeItem('ID_TOKEN_KEY')
            router.push('/login')
        }
        const user = store.state.a.state.user
        return {
            logout,
            user
        }
    }
})
</script>
