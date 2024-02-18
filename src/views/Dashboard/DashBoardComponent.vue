<template>
    <div class="flex flex-wrap gap-4 max-md:flex-col max-sm:flex-col w-full">
        <div class="BI-main-container">
            <div class="flex justify-end mb-4">
                <button class="btn btn-active">Edit Profile</button>
            </div>
            <hr class="mb-4 border-gray-700" />

            <div class="flex justify-center mb-4">
                <img class="BI-avatar" src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="Bordered avatar" />
            </div>

            <div class="mb-4">
                <div class="BI-container max-sm:flex-col:justify-center">
                    <div class="flex-auto max-w-32">
                        <label for="name" class="BI-label text-gray">Business Name: </label>
                    </div>
                    <div class="flex-auto max-w-80">
                        <label for="name" class="BI-label text-gray">Test Business Lipa</label>
                    </div>
                </div>
                <div class="BI-container">
                    <div class="flex-auto max-w-32">
                        <label for="name" class="BI-label text-gray">Contact:</label>
                    </div>
                    <div class="flex-auto max-w-80">
                        <label for="name" class="BI-label text-gray">09121231234</label>
                    </div>
                </div>
                <div class="BI-container">
                    <div class="flex-auto max-w-32">
                        <label for="name" class="BI-label text-gray">Email:</label>
                    </div>

                    <div class="flex-auto max-w-80">
                        <label for="name" class="BI-label text-gray">miguelcalleja1738@gmail.com</label>
                    </div>
                </div>
                <div class="BI-container">
                    <div class="flex-auto max-w-32">
                        <label for="name" class="BI-label text-gray">Address:</label>
                    </div>
                    <div class="flex-auto max-w-80">
                        <label for="name" class="BI-label text-gray">Blk 1 Lot 7, St John Bozco Street, Adelina Homes Lipa City, Batangas</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="analytics-main">
            <div class="mb-5">
                <h1 class="analytics-header">Analytics</h1>
            </div>

            <hr class="mb-4 border-gray-700" />

            <Analytics></Analytics>

            <div class="flex justify-center">
                <StarRating :ratingCount="4.24" :profileViews="'10Th'"> </StarRating>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import StarRating from './StarRatingComponent/StarRatingComponent.vue';
import Analytics from './AnalyticsComponent/AnalyticsComponent.vue';
</script>

<style lang="scss" src="./DashboardComponent.scss"></style>
