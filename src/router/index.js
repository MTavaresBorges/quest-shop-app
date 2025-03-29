import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue';
import SignInView from '@/views/SignInView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignInView
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        next('/signin');
    } else {
        next();
    }
});

export default router