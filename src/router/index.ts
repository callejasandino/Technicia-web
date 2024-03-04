import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    routes: [
        {
            path: '/',
            component: HomeView,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard/DashboardComponent.vue')
                },
                {
                    path: '/messages',
                    name: 'messages',
                    component: () => import('@/views/Dashboard/DashboardComponent.vue')
                },
                {
                    path: '/reviews',
                    name: 'reviews',
                    component: () => import('@/views/Reviews/ReviewsComponent.vue')
                },
                {
                    path: '/posts',
                    name: 'posts',
                    component: () => import('@/views/Dashboard/DashboardComponent.vue')
                },
                {
                    path: '/calendar',
                    name: 'calendar',
                    component: () => import('@/views/Calendar/CalendarComponent.vue')
                },
                {
                    path: '/inventory',
                    name: 'inventory',
                    component: () => import('@/views/Inventory/InventoryComponent.vue')
                },
                {
                    path: '/orders',
                    name: 'orders',
                    component: () => import('@/views/Inventory/InventoryComponent.vue')
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/Inventory/InventoryComponent.vue')
                }
            ]
        }
    ]
});

export default router;
