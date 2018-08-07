import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义一个容器

let store = new Vuex.Store({
    state:{
        count: 100,
    },
    mutations:{
        addIncrement(state, payload){
            state.count += payload.num
        },
        deIncrement(state,payload){
            state.count -= payload.num
        }
    }
})

export default store