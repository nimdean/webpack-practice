import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './router/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/iconFont/iconfont.js'
Vue.use(MintUI)

router.beforeEach((to, from, next) => { // 导航守卫（跳转前）
    next();
})

new Vue({
    el:"#app",
    store,
    router,
    render:h => h(App)
})