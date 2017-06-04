import Vue from 'vue'
import VueRouter from 'vue-router'

import example from '../components/Example'
import login from '../components/Login'
import register from '../components/Register'
import carousel from '../components/Carousel'
import index from '../components/Index'
import products from '../components/Products'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: "/", component: index },
        { path: "/login", component: login },
        { path: "/register", component: register },
        { path: "/carousel", component: carousel },
        { path: "/products", component: products }
    ]
})

export default router