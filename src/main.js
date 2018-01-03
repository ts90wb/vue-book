import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // render:h=>(App)
    ...App
})