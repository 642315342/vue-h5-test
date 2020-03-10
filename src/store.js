import Vue from 'vue';
import Vuex from 'vuex';
import { post } from './lib/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSuccess: '',
  },
  mutations: {
    updateLoginData(state, payload) {
      state.isSuccess = payload;
    },
  },
  actions: {
    login({ commit }, payload) {
      return post('http://10.207.248.45:30125/user/doLogin', payload).then((res) => {
        commit('updateLoginData', res.message);
      });
    },
  },
});
