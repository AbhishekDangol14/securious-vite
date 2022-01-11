<template>
    <div class="grid place-items-end pt-16 pr-8">
        <button class="add-button w-2/12 p-3 bg-button rounded-full text-white text-center" @click="addIndustry">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { useStore } from 'vuex'
import { NEW_INDUSTRY } from '@/store/modules/actions.type'

export default defineComponent({
    setup() {
        const store = useStore()

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
            addIndustry
        }
    },
})
</script>
