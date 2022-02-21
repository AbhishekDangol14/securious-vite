<template>
    <div class="sidebar bg-white shadow-secondary h-screen" v-if="menu">
        <div class="logo p-3">
            <img src="../assets/views/securious-logo.svg">
        </div>
        <div class="border-line pt-4"><hr></div>
        <Menu v-for="item in menu" :item="item" v-bind:key="item" />
        <div v-if="role == 'Admin'"> 
            <hr>       
            <div class="pt-4 pl-4 flex-cols space-y-4">
                <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/user.svg"/><router-link :to="{ name: 'users' }">Users</router-link></div>
                <div class="flex space-x-2 text-sm pb-3"><img src="../assets/components/setting.svg"/><router-link :to="{ name: 'settings' }">Setting</router-link></div>
                <button class="flex space-x-2 text-sm pb-3" @click="logout"><img src="../assets/components/logout.svg"/><div>Logout</div></button>
            </div>
        </div>
        <div v-show="token">
            <hr>
            <div class="cursor-pointer flex space-x-2 pt-4 pl-4" @click="stopImpersonating">
                <i class="fa fa-stop-circle" aria-hidden="true"></i>
                <div class="text-sm font-normal">Stop Impersonating</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import router from '@/router'
import { LOGOUT } from '@/store/modules/actions.type'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu
    },
    setup() {
        const store = useStore()
        let user = localStorage.getItem("USER")
        let menu = ref([])
        let role = ref()

        const token = localStorage.getItem('IMPERSONATOR_TOKEN')

        if (user){
        menu.value = JSON.parse(user).menus
        role.value = JSON.parse(user).role[0].role
        }

        function logout() {
          store.dispatch(LOGOUT)
        }

        function stopImpersonating() {
            const user = localStorage.getItem('IMPERSONATOR_USER')
            token ? localStorage.setItem('ID_TOKEN_KEY',token) : null
            user ? localStorage.setItem('USER',user) : null
            localStorage.removeItem('IMPERSONATOR_TOKEN')
            localStorage.removeItem('IMPERSONATOR_USER')
            router.push({ name: 'users' })
        }
        
        return {
            menu,
            role,
            logout,
            stopImpersonating,
            token
        }
    }
})
</script>

