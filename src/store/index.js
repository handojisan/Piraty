import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
//import firebase from "firebase";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser: function(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser: function({ commit }, user) {
      commit("setUser", user);
    }
  }
});

export default store;

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("setUser", user);

// plugins: [createPersistedState()],
// modules: {}
// });
