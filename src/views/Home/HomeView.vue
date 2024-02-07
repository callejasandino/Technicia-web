<script setup lang="ts">
    import StarRating from './StarRatingComponent/StarRatingComponent.vue';
    import Analytics from './AnalyticsComponent/AnalyticsComponent.vue';
    import ForChecking from './AnalyticsComponent/Modals/ForChecking.vue';
</script>

<template>
    <main class="main">
        <div class="flex flex-wrap gap-4 max-md:flex-col max-sm:flex-col mb-4">
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

                <div class="analytics-container">
                    <div class="analytics-card">
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <div class="badge badge-success p-2 w-96">For Release</div>
                            </div>
                            <p>We are using cookies for no reason.</p>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <div class="badge badge-warning p-2 w-96">For Repair</div>
                            </div>
                            <p>We are using cookies for no reason.</p>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <div class="badge badge-error p-2 w-96">Waiting For Parts</div>
                            </div>
                            <p>We are using cookies for no reason.</p>
                        </div>
                    </div>
                    <div class="analytics-card">
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <div class="badge badge-ghost p-2 w-96">For Checking</div>
                            </div>
                            <p>We are using cookies for no reason.</p>
                            <ForChecking> </ForChecking>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <StarRating :ratingCount="4.24" :profileViews="'10Th'"> </StarRating>
                </div>
            </div>
        </div>

        <div>
            <Analytics></Analytics>
        </div>
    </main>
</template>

<style lang="scss" src="./HomeView.scss"></style>
