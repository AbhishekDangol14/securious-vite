<template>
    <div class="grid place-items-end pt-16 pr-8">
        <button v-if="path === 'industries'" class="add-button w-2/12 p-3 bg-button rounded-full text-white text-center" @click="addIndustry">
            <slot></slot>
        </button>
        <router-link class="w-2/12 p-3 bg-button rounded-full text-white text-center" v-else :to="path_name"><slot></slot></router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref, toRef } from 'vue'
import { useStore } from 'vuex'
import { NEW_INDUSTRY } from '@/store/modules/actions.type'

export default defineComponent({
    props: {
        path: String
    },
    setup(props) {
        const store = useStore()

        let path_name = "/"+props.path

        let industry = {
            id: null,
            details_level: null,
            is_active: 0,
            friendlyTranslations: {
                EN: {
                    name: ""
                },
                DE: {
                    name: ""
                }
            }
        }

        function addIndustry() {
            store.dispatch(
                NEW_INDUSTRY,
                {
                    id: null,
                    details_level: null,
                    is_active: 0,
                    friendlyTranslations: {
                        EN: {
                            name: ""
                        },
                        DE: {
                            name: ""
                        }
                    }
                }
            )
        }

        return {
            addIndustry,
            path_name
        }
    },
})
</script>
