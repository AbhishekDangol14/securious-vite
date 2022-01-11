<template>
    <div class="industries bg-blue-50 grid grid-cols-6">
        <div class="col-span-1"><Sidebar /></div>
        <div class="col-span-5 flex flex-col">
            <div class=""><Headerbar>Industries</Headerbar></div>
            <div class="industry-content">
                <AddButton>Add new industry</AddButton>
                <div class="grid grid-cols-4 ml-4">
                    <Industry v-for="(item,index) in industries" :item="item" :index="index" v-bind:key="item.details_level"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, reactive } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Headerbar from '../components/Headerbar.vue'
import AddButton from '../components/AddButton.vue'
import Industry from '../components/Industry.vue'
import { GET_INDUSTRIES } from '@/store/modules/actions.type'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
    components: {
        Sidebar,
        Headerbar,
        AddButton,
        Industry,
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
