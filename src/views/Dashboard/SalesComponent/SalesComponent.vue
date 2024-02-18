<template>
    <div class="analytics-container p-4">
        <Line :data="data" :options="options" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);

ChartJS.defaults.color = '#959ca9';

const data = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            borderWidth: 1,
            borderColor: '#ffffff',
            label: 'Sales',
            data: [100, 20, 12],
            backgroundColor: '#7480ff',
            pointRadius: 5
        }
    ]
});
const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                font: {
                    size: 14
                }
            }
        },
        y: {
            ticks: {
                font: {
                    size: 14
                }
            }
        }
    }
});
</script>

<style scoped src="./SalesComponent.scss"></style>
