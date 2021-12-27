<template>
    <h1>Dashboard</h1>
    <button @click="logout">Log Out</button>
</template>

<script lang="ts">
import router from '../router'
export default {
    methods: {
        logout() {
            localStorage.removeItem('ID_TOKEN_KEY')
            router.push('/')
        }
    },
}
</script>
