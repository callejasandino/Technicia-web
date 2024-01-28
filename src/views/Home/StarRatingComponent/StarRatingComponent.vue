<template>
    <div class="flex justify-around flex-row max-sm:flex-col gap-5">
        <div class="stat">
            <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div class="stat-title mb-3">Total Rating</div>
            <div class="mb-1">
                <vue3-star-ratings v-model="rating" :starSize="32" starColor="#ff9800" inactiveColor="#333333" :numberOfStars="5" :disableClick="true" />
            </div>
            <div class="stat-value text-primary mb-3">{{ rating }} / 5</div>
        </div>

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
    ratingCount?: number;
    profileViews?: string;
}>();

const rating = computed(() => {
    return prop.ratingCount;
});
const profileViews = computed(() => {
    return prop.profileViews;
});
</script>

<style scoped></style>
