<template>
    <div class="input-box bg-white h-fit ml-8 shadow-xl rounded">
        <div class="form pl-6">
            <div class="input-title">
                <div class="text-sm font-semibold pt-3 ">Title</div>
                <div class="input-field pt-2">
                    <input v-model="title" class="border rounded-md p-3 text-xs" type="text" placeholder="Please Enter Title">
                    {{ title }}
                    <div class="relative inline-block w-8 ml-2 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-4 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                        <label for="toggle" class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
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
                <button @click="saveIndustry(passValue)" class="text-white border rounded-full bg-button p-2 w-1/2">Save</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,mergeProps,onMounted,toRef,reactive,ref } from 'vue'
import { useStore } from 'vuex'
import { STORE_INDUSTRY,NEW_INDUSTRY,DELETE_INDUSTRY } from '@/store/modules/actions.type'

export default defineComponent({
    props: {
        item: Object,
        index: Number
    },

    setup(props) {

        const store = useStore()

        const prop_item = toRef(props, 'item') 

        const user = localStorage.getItem('USER')

        let selectedLanguage = ""

        let passValue = prop_item.value


        let details = ref('')
        
        if (user)
            selectedLanguage = JSON.parse(user).selected_language

        let title = ref()

            if (prop_item.value)
            {
                if (prop_item.value.id){
                    title.value = prop_item.value.friendlyTranslations[selectedLanguage+'.name'].value
                }
            }
        

        function saveIndustry(data){
            data.id ? data.friendlyTranslations[selectedLanguage+'.name'].value = title.value : data.friendlyTranslations[selectedLanguage].name = title.value
            data.details_level = details.value

            store.dispatch({ 
                type: STORE_INDUSTRY,
                data
            })
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
            passValue,
            details
        }
    },
})
</script>


<style scoped>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>
