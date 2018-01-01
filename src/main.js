import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // render:h=>(App)
    ...App
})