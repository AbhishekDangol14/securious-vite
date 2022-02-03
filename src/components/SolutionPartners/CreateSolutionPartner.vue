<template>
    <Layout Title="Create SOLUTION PARTNER">
        <AddButton>Save</AddButton>
        <div class="company-content shadow-lg m-4">
            <div class="card-header bg-transparent text-button text-base p-4 font-semibold">
                Company
            </div>
            <div class="card-content bg-white">
                <div>
                    <div v-bind="getRootProps()">
                        <input v-bind="getInputProps()">
                        <img src="@/assets/components/gdata.png">
                    </div>
                    <button @click="open">open</button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDropzone } from 'vue3-dropzone'
import Layout from '@/components/Main.vue'
import AddButton from '@/components/AddButton.vue'

export default defineComponent({
    components: {
        Layout,
        AddButton
    },
    setup() {
        function onDrop(acceptFiles, rejectReasons) {
            console.log(acceptFiles)
            console.log(rejectReasons)
        }

        const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })

        return {
            getRootProps,
            getInputProps,
            ...rest
         }
    },
})
</script>
