import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        name:'home',
        path:'/home',
        component:(resolve) => require(['./../views/home/home.vue'], resolve)
    }
]

const router = new VueRouter({
    // linkActiveClass:'activeMenu',
    routes
});

export default router