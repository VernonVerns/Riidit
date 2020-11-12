import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '@/components/Home.vue'

const routes = [
    { path: '/', component: Home }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router