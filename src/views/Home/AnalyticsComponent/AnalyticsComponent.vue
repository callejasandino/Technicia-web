<template>
    <Doughnut :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { computed } from 'vue';

ChartJS.register(ArcElement, Tooltip, Legend);

let prop = defineProps<{
    forRepair?: number;
    forChecking?: number;
    forRelease?: number;
    waitingForParts?: number;
}>();

const forRepair = computed(() => {
    return prop.forRepair;
});

const forChecking = computed(() => {
    return prop.forChecking;
});

const forRelease = computed(() => {
    return prop.forRelease;
});

const waitingForParts = computed(() => {
    return prop.waitingForParts;
});

const data = {
    labels: ['For Repair', 'For Checking', 'For Release', 'Waiting for Parts'],
    datasets: [
        {
            backgroundColor: ['#3f96e3', '#50d1fb', '#83bc55', '#f8a847'],
            data: [forRepair, forChecking, forRelease, waitingForParts]
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        arc: {
            borderWidth: 3,
            borderColor: '#15191e'
        }
    }
};
</script>

<style scoped src="./AnalyticsComponent.scss"></style>
