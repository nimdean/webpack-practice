import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './router/index.js'

new Vue({
    el:"#app",
    store,
    router,
    render:h => h(App)
})