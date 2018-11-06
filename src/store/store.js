import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      name:"Amit"
    },
    getters:{
      
      doneTodosCount: state => {
        return state.name
      }
    },

    mutations:{
      changeName(state){
        state.name = "Vijay"
      }
    },

    actions:{
      changeName:({commit}) => commit('changeName')
    }

})


export default store;