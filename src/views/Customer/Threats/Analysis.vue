<template>
    <div class="neutralized-threats-indicator grid grid-cols-3">
        <div class="rounded-mid bg-primary">
            <div class="flex">
                <div class="circle bg-white h-12 w-12 rounded-lg my-4 ml-6">
                    <img src="@/assets/alarm-blue.svg" class="m-3">
                </div>
                <div class="flex flex-col ml-4 my-5 space-y-1">
                    <div class="text-white text-base ">
                        0 von 12 Bedrohungen wurden neutralisiert
                    </div>
                    <div>
                        <div class="w-full bg-gray-200 rounded-lg h-1.5 dark:bg-ternary">
                            <div class="bg-ternary h-1.5 rounded-lg dark:bg-ternary" style="width: 45%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="threat-card grid grid-cols-4 space-x-12 mt-8">
       <AnalysisCard /> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AnalysisCard from '@/components/Threats/AnalysisCard.vue'

export default defineComponent({
    components: {
        AnalysisCard
    }
})
</script>
