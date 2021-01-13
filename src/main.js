import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'
import Home from './views/Home.vue'
import Short from './views/Short.vue'
import Checker from './views/Check.vue'
import Register from './views/Register.vue'

const app = createApp(App)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Short',
        component: Short
    },
    {
        path: '/check',
        name: 'Check',
        component: Checker
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router).mount('#app')
