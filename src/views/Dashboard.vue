<template>
    <div class="dashboard bg-blue-50 grid grid-cols-6" >
        <div class="col-span-1"><Sidebar /></div>
    </div>
    {{ user }}
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
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
        return {
            logout,
            user: computed(() => store.state.auth.state.user)
        }
    }
})
</script>
