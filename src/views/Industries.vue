<template>
    <Layout Title="Industries">
        <div class="industry-content">
            <AddButton path="industries">Add new industry</AddButton>
            <div class="grid grid-cols-4 ml-4">
                <Industry v-for="(item,index) in industries" :item="item" :index="index" v-bind:key="item.details_level"/>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import Layout from '../components/Main.vue'
import AddButton from '../components/AddButton.vue'
import Industry from '../components/Industry.vue'
import { GET_INDUSTRIES } from '@/store/modules/actions.type'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
    components: {
        AddButton,
        Industry,
        Layout
    },
    setup() {
        const store = useStore();

        onMounted(() => {
            store.dispatch({
                type: GET_INDUSTRIES
            })
        })

        return {    
            industries: computed(() => store.state.industry.state.industries) 
        }
    },
})
</script>
