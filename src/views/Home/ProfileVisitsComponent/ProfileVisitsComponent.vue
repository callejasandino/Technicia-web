<template>
    <div class="flex justify-around flex-col max-sm:flex-col gap-5">
        <div class="stat">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div class="stat-title">Profile Views</div>
            <div class="stat-value text-secondary">{{ profileViews }}</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

let prop = defineProps<{
    profileViews?: string;
}>();

const profileViews = computed(() => {
    return prop.profileViews;
});
</script>

<style scoped></style>
