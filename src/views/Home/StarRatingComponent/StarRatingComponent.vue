<template>
    <div class="flex justify-around flex-col max-sm:flex-col gap-5">
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
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

let prop = defineProps<{
    ratingCount?: number;
}>();

const rating = computed(() => {
    return prop.ratingCount;
});
</script>

<style scoped></style>
