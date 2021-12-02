import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:'Vuex en ejemplos !',
    name:'Mercedes',
    apellido:'AC',
    friends:[],
    amigo: null
  },
  mutations: {
    addFriend(state){
      state.friends = [state.amigo,...state.friends]
    }
  },
  actions: {
    addFriendAction(context){
      context.commit('addFriend');
    }
  },
  modules: {
  },
  getters:{
    message(state){
      return state.msg;
    },
    complete(state){
      return `${state.name} ${state.apellido}`
    }
  }
})
