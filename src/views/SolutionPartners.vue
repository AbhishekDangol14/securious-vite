<template>
    <Layout Title="Company Assets & Solution Partners">
        <div class="solutionPartner-content">
            <AddButton path="solutionPartners/edit">Add new partners</AddButton>
            <div class="grid grid-cols-3 ml-4 mr-20">
                <SolutionPartnerCardVue />
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SolutionPartnerCardVue from '@/components/SolutionPartners/SolutionPartnerCard.vue'
import AddButton from '@/components/AddButton.vue'
import Layout from '@/components/Main.vue'

export default defineComponent({
    components: {
        SolutionPartnerCardVue,
        AddButton,
        Layout
    },
    setup() {
        return { }
    },
})
</script>
