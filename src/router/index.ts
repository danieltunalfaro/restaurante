import { createRouter, createWebHistory } from 'vue-router'

const routeView = {
    render: () => null
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: routeView
        },
        {
            path: '/menu',
            name: 'menu',
            component: routeView
        },
        {
            path: '/productos',
            name: 'productos',
            component: routeView
        }
    ]
})

export default router
