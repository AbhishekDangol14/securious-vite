<template>
    <Layout Title="Threat Library">
        <AddButton path="threat/create">Add new threat</AddButton>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/components/Main.vue'
import AddButton from '@/components/AddButton.vue'

export default defineComponent({
    components: {
        Layout,
        AddButton
    },
    setup() {
        return {

        }
    },
})
</script>


