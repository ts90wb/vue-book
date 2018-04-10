import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
Vue.use(Vuex);
const state = {
    collect: JSON.parse(localStorage.getItem('collects')) || [],
    flagCollect: JSON.parse(localStorage.getItem('flagCollect')) || {}
};
export default new Vuex.Store({
    state,
    getters,
    mutations
})