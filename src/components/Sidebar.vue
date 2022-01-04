<template>
    <div class="sidebar bg-white max-w-30/2 min-h-screen">
        <div class="logo p-3">
            <img src="../assets/views/securious-logo.svg">
        </div>
        <div class="border-line pt-4"><hr></div>
        <Menu />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu
    },
    setup() {
        return true
    },
})
</script>
