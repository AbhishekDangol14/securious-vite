<template>
    <div class="grid place-items-end pt-16 pr-8">
        <button class="add-button w-2/12 p-3 bg-primary rounded-lg text-white-white text-center" @click="addIndustry">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref, toRef } from 'vue'
import { useStore } from 'vuex'
import { NEW_INDUSTRY } from '@/store/modules/actions.type'

export default defineComponent({
    setup(props) {
        const store = useStore()

        function addIndustry() {
            store.dispatch(
                NEW_INDUSTRY,
                {
                    id: null,
                    is_active: 0,
                    details_level: 'low',
                    friendlyTranslations: {
                        EN: {
                            title: ''
                        },
                        DE: {
                            title: ''
                        }
                    }
                }
            )
        }

        return {
            addIndustry,
        }
    },
})
</script>

