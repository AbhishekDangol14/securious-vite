<template>
    <Layout Title="Mein Dashboard">
        <div class="dashboard">
            <div class="chart bg-white m-8">
                <LineChart :chartData="chartData"></LineChart>
            </div>
        </div> 
    </Layout>
</template>

<script lang="ts">
import { defineComponent,computed,ref } from 'vue'
import Layout from '@/components/Main.vue'
import { LineChart } from 'vue-chart-3' 
import { LineController,Chart,registerables } from 'chart.js'

Chart.register(...registerables)
Chart.register(LineController)

export default defineComponent({    
    components: {
        Layout,
        LineChart
    },
    setup() {
        const data = ref([30, 40, 60, 70, 5]);
        
        const chartData = computed(() => ({
            labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(120, 202,0, 0.5)',
                tension: 0.1
                },
                {
                label: 'My First Dataset',
                data: [25, 64, 90, 121, 46, 75, 40],
                fill: false,
                borderColor: 'yellow',
                tension: 0.1
                }]
            }));

        return {
            chartData,
        }
    }
})
</script>
