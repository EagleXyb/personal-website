import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    }
  },
  actions: {
    sendMessage({ commit }, message) {
      commit('setMessage', message);
    }
  }
});
