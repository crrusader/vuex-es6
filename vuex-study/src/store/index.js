import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义一个容器

let store = new Vuex.Store({
    state:{
        count: 100,
        test: 333,
        District: false,
        Province: false,
        City: false,
    },
    mutations:{
        addIncrement(state, payload){
            state.count += payload.msg
        },
        deIncrement(state,payload){
            state.count -= payload.msg
        },
        changeDistrict(state,payload){
            state.District = payload.District
        },
        changeProvince(state,payload){
            state.Province = payload.Province
        },
        changeCity(state,payload){
            state.City = payload.City
        }
    },
    actions: {
        incrementAsync(context,payload) {
            setTimeout(() => {
                context.commit('deIncrement',payload)
            }, 1000)
        },
        decrementAsync(context,payload) {
            setTimeout(() => {
                context.commit('addIncrement',payload)
            }, 1000)
        }
    }
})

export default store