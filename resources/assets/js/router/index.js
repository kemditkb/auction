import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/Login'
import register from '../components/Register'
import product_detail from '../components/ProductDetail'
import index from '../components/Index'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: "/", component: index },
        { path: "/login", component: login },
        { path: "/register", component: register },
        { path: "/product_detail", component: product_detail }
    ]
})

export default router
