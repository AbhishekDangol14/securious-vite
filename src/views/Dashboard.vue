<template>
    <Layout>
        <div class="dashboard bg-secondary-blue grid grid-cols-6"></div> 
    </Layout>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import Layout from '@/components/Main.vue'
export default defineComponent({    
    components: {
        Layout
    },
    setup() {
        return {

        }
    }
})
</script>
