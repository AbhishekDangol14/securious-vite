<template>
    <div class="main bg-secondary-blue grid grid-cols-6">
        <div class="col-span-1"><Sidebar /></div>
        <div class="col-span-5 flex flex-col">
             <div class=""><Headerbar>{{ Title }}</Headerbar></div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './Sidebar.vue'
import Headerbar from './Headerbar.vue'

export default defineComponent({
    components: {
        Sidebar,
        Headerbar
    },
    props:{
        Title: String
    },
    setup(props) {
        return { }
    },
})
</script>
