<template>
    <div class="input-box bg-white h-fit ml-8 shadow-xl rounded">
        <div class="form pl-6">
            <div class="input-title">
                <div class="text-sm font-semibold pt-3 ">Title</div>
                <div class="input-field pt-2 flex">
                    <input v-model="title" />
                    <Switch v-model="is_active" />
                </div>
            </div>
            <div class="input-details">
                <div class="text-sm font-semibold pt-3 ">Details Level</div>
                <select v-model="details" class="border rounded-md w-11/12 p-2 text-xs">
                    <option>Low</option>
                    <option>Mid</option>
                    <option>High</option>
                </select>
            </div>
            <div class="buttons grid space-y-2 pt-4 pb-4 justify-items-center">
                <button @click="deleteIndustry(item,index)" class="border rounded-full p-2 w-1/2">Delete</button>
                <button @click="saveIndustry()" class="text-white border rounded-full bg-button p-2 w-1/2">Save</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,toRef,reactive,ref } from 'vue'
import { useStore } from 'vuex'
import { STORE_INDUSTRY,NEW_INDUSTRY,DELETE_INDUSTRY } from '@/store/modules/actions.type'
import Switch from '@/components/Switch.vue'

export default defineComponent({
    components:{
        Switch
    },
    props: {
        item: Object,
        index: Number
    },

    setup(props) {

        const store = useStore()

        const data = toRef(props, 'item') 

        const user = localStorage.getItem('USER')

        let selectedLanguage = user ? JSON.parse(user).selected_language : 'EN'

        let title = ref('')
        if (data.value)
        {
            title.value = data.value.id ? data.value.friendlyTranslations[selectedLanguage+'.name'].value : ''
        }
        
        const is_active = ref(data.value ? (data.value.is_active ? true : false) : false)
        
        const details = ref(data.value ? data.value.details_level : '')

        function saveIndustry(){
            if (data.value) {
                data.value.id ? data.value.friendlyTranslations[selectedLanguage+'.name'].value = title.value : data.value.friendlyTranslations[selectedLanguage].name = title.value
                data.value.details_level = details
                data.value.is_active = is_active.value
            }
            store.dispatch(STORE_INDUSTRY, data.value)
        }

        function deleteIndustry(industry, index){
            store.dispatch({
                type: DELETE_INDUSTRY,
                industry,
                index
            })
        }

        return {
            saveIndustry,
            deleteIndustry,
            title,
            data,
            details,
            is_active,
            selectedLanguage
        }
    },
})
</script>

