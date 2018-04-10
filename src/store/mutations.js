import * as Types from './mutation-types'
const mutations = {
    [Types.ADD_COLLECT](state, obj) {
        let flag = state.collect.some(item => item.id == obj.id);
        if (!flag) {
            state.collect.push(obj);
            state.flagCollect[obj.id] = true;
        }
        localStorage.setItem('collects', JSON.stringify(state.collect));
        localStorage.setItem('flagCollect', JSON.stringify(state.flagCollect));
    },
    [Types.REMOVE_COLLECT](state, id) {
        state.collect = state.collect.filter(item => item.id != id);
        localStorage.setItem('collects', JSON.stringify(state.collect));
        state.flagCollect[id] = false;
        localStorage.setItem('flagCollect', JSON.stringify(state.flagCollect));


    }
}
export default mutations