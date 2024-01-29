<script setup lang="ts">
import StarRating from './StarRatingComponent/StarRatingComponent.vue';
import Sales from './SalesComponent/SalesComponent.vue';
import Analytics from './AnalyticsComponent/AnalyticsComponent.vue';
import PageVisits from './ProfileVisitsComponent/ProfileVisitsComponent.vue';
</script>

<template>
    <main class="main">
        <div class="flex gap-4 max-md:flex-wrap max-lg:flex-col max-xl:flex-wrap max-sm:flex-col mb-4">
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
                    <h1 class="analytics-header">Unit Status</h1>
                </div>

                <hr class="mb-4 border-gray-700" />

                <div class="w-full rounded-md">
                    <div class="w-full">
                        <Analytics :forRepair="200" :forChecking="155" :forRelease="143" :waitingForParts="156"></Analytics>
                    </div>
                </div>
            </div>
            <div class="reviews-visit-container">
                <div class="reviews">
                    <div class="mb-5">
                        <h1 class="analytics-header">Reviews and Visit</h1>
                    </div>
                    <hr class="mb-4 border-gray-700" />
                    <div class="flex justify-center">
                        <StarRating :ratingCount="4.24"> </StarRating>
                    </div>
                </div>

                <div class="visits">
                    <div class="mb-5">
                        <h1 class="analytics-header">Page Visit</h1>
                    </div>
                    <hr class="mb-4 border-gray-700" />
                    <div class="flex justify-center">
                        <PageVisits :profileViews="'10Th'"> </PageVisits>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Sales></Sales>
        </div>
    </main>
</template>

<style lang="scss" src="./HomeView.scss"></style>
