<template>
    <div class="grid place-items-end pt-16 pr-8">
        <button v-if="path === 'industries'" class="add-button w-2/12 p-3 bg-primary rounded-lg text-white-white text-center" @click="addIndustry">
            <slot></slot>
        </button>
        <router-link class="button-text w-2/12 p-3 bg-primary rounded-lg text-white-white text-center" v-else :to="path_name"><slot></slot></router-link>
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

        function addIndustry() {
            store.dispatch(
                NEW_INDUSTRY,
                {
                    id: null,
                    details_level: 'low',
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

