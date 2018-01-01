import Vue from 'vue'
import Router from 'vue-router'
import Home from 'container/Home'
import List from 'container/List'
import Collect from 'container/Collect'
import Add from 'container/Add'


Vue.use(Router)

export default new Router({

    routes: [{
            path: '/home',
            component: Home
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/collect',
            component: Collect
        },
        {
            path: '/add',
            component: Add
        },
        { //404路由
            path: '*',
            redirect: '/home'
        }

    ],
    linkActiveClass: 'active'
})