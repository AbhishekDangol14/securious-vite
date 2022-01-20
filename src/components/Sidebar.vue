<template>
    <div class="sidebar bg-white min-h-screen shadow-xl">
        <div class="logo p-3">
            <img src="../assets/views/securious-logo.svg">
        </div>
        <div class="border-line pt-4"><hr></div>
        <Menu v-for="item in menuItems" :item="item" v-bind:key="item.label" />
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
      const menuItems = [
        {
          'label': 'Dashboard',
          'icon': '123',
          'link': '/dashboard',
        },
        {
          'label': 'Industries',
          'icon': '345',
          'link': '/industries',
        },
        {
          'label': 'Assets & Partners',
          'icon': '346',
          'link': '/solutionPartners' 
        }
      ]
        return {
          menuItems
        }
    },
})
</script>

