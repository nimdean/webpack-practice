import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    name: 'home',
    path: '/home',
    component: (resolve) => require(['./../views/home/home.vue'], resolve)
},, {
    name: 'assortment',
    path: '/assortment',
    component: (resolve) => require(['./../views/assortment/assortment.vue'], resolve)
}, {
    name: 'discover',
    path: '/discover',
    component: (resolve) => require(['./../views/discover/discover.vue'], resolve)
}, {
    name: 'cart',
    path: '/cart',
    component: (resolve) => require(['./../views/cart/cart.vue'], resolve)
}, {
    name: 'mine',
    path: '/mine',
    component: (resolve) => require(['./../views/mine/mine.vue'], resolve)
}]

const router = new VueRouter({
    linkActiveClass:'activeMenu',
    routes
});

export default router