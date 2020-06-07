import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
//import firebase from "firebase";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {}
});

export default store;
