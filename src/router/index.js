import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("../views/home/Home.vue")
const category = () => import("../views/category/Category.vue")
const profile = () => import("../views/profile/Profile.vue")
const cart = () => import("../views/cart/Cart.vue")
Vue.use(VueRouter)

const routes = [
    {
        path:'/Home',
        component:home
       },
       {
         path:'/Category',
         component:category
       },
       {
         path:'/Profile',
         component:profile
       },
       {
         path:'/Cart',
         component:cart
       }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router