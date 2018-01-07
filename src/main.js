import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/main.css'
import VueLazyLoad from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueLazyLoad);
Vue.use(ElementUI);
Vue.use(VueScroller);

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    // render:h=>(App)
    ...App
})