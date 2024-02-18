<template>
    <main class="main">
        <div class="flex">
            <div class="w-auto">
                <div class="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        <!-- Page content here -->
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden max-sm:fixed z-10"><MenuIcon></MenuIcon></label>
                    </div>
                    <div class="drawer-side z-20">
                        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                            <li class="text-primary mb-2 text-lg max-sm:mt-4">Overview</li>
                            <hr class="border-gray-700 mb-4" />
                            <div class="mb-4">
                                <li class="nav-links">
                                    <RouterLink to="/dashboard" class="flex">
                                        <DashboardIcon class="icon"></DashboardIcon>
                                        Dashboard
                                    </RouterLink>                                    
                                </li>
                                <li class="nav-links">
                                    <RouterLink to="/messages" class="flex">
                                        <MessageIcon class="icon"></MessageIcon>
                                        Messages
                                    </RouterLink> 
                                </li>
                                <li class="nav-links">
                                    <RouterLink to="/reviews" class="flex">
                                        <ReviewsIcon class="icon"></ReviewsIcon>
                                        Reviews
                                    </RouterLink> 
                                </li>
                                <li class="nav-links">
                                    <RouterLink to="/posts" class="flex">
                                        <PostIcon class="icon"></PostIcon>
                                        Posts
                                    </RouterLink> 
                                </li>
                                <li class="nav-links">
                                    <RouterLink to="/calendar" class="flex">
                                        <CalendarIcon class="icon"></CalendarIcon>
                                        Calendar
                                    </RouterLink> 
                                </li>
                            </div>

                            <li class="text-primary mb-2 text-lg">Products</li>
                            <hr class="border-gray-700 mb-4" />
                            <div class="mb-4">
                                <li class="nav-links">
                                    <RouterLink to="/inventory" class="flex">
                                        <InventoryIcon class="icon"></InventoryIcon>
                                        Inventory
                                    </RouterLink> 
                                  
                                </li>
                                <li class="nav-links">
                                    <RouterLink to="/orders" class="flex">
                                        <OrderIcon class="icon"></OrderIcon>
                                        Order
                                    </RouterLink> 
                                </li>
                            </div>

                            <li class="text-primary mb-2 text-lg">Others</li>
                            <hr class="border-gray-700 mb-4" />
                            <div class="mb-4">
                                <li class="nav-links">
                                    <RouterLink to="/settings" class="flex">
                                        <SettingsIcon class="icon"></SettingsIcon>
                                        Settings
                                    </RouterLink> 
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex-1 p-4">
                <router-view v-slot="{ Component, route }">
                    <Transition name="page-opacity" mode="out-in">
                        <div :key="route.name">  
                            <component :is="Component"></component>
                        </div>
                    </Transition>
                </router-view>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import DashboardIcon from '@/components/icons/DashboardIcon.vue';
import InventoryIcon from '@/components/icons/InventoryIcon.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';
import OrderIcon from '@/components/icons/OrderIcon.vue';
import PhotoIcon from '@/components/icons/PhotoIcon.vue';
import PostIcon from '@/components/icons/PostIcon.vue';
import ReviewsIcon from '@/components/icons/ReviewsIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
</script>

<style lang="scss" src="./HomeView.scss">
</style>
