import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import firebase from "firebase";
import { db, createDocObject } from "@/firebase";

Vue.use(Vuex);

const state = {
  // user のプロパティ・メソッド一覧
  // https://firebase.google.com/docs/reference/js/firebase.User
  user: null, // Authentication がもっているユーザー情報
  // user: {
  //   uid,
  //   displayName,
  //   photoURL,
  //   ...
  // }
  userProfile: null // Firestore がもっているユーザー情報
  // userProfile: {
  //   id, // user.uid と一緒
  //   name,
  //   photoURL,
  //   description,
  //   rank,
  //   ...
  // }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  }
};

const actions = {
  // ログイン状態が変化するときに呼び出す
  setUserAndProfile({ commit }, { user, userProfile }) {
    commit("setUser", user);
    commit("setUserProfile", userProfile);
  },
  // ユーザーの情報を更新するときに呼び出す
  updateUserProfile({ state, commit }, userProfileDiff) {
    // Diff = Difference
    const userProfile = {
      ...state.userProfile,
      ...userProfileDiff
    };
    if (state.user) {
      return db
        .collection("user_profiles")
        .doc(state.user.uid)
        .set(userProfile)
        .then(() => {
          commit("setUserProfile", userProfile);
        });
    }
  }
};

const getters = {
  user(state) {
    return {
      ...state.user,
      ...state.userProfile // たとえば state.user.photoURL を state.userProfile.photoURL で上書きできる
    };
  },
  isSignedIn(state) {
    return !!state.user;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store;

// user のログイン状態が変化したら、store を更新
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const profileRef = db.collection("user_profiles").doc(user.uid);
    profileRef.get().then(doc => {
      const userProfile = doc.exists
        ? createDocObject(doc)
        : {
            id: user.uid,
            name: user.displayName,
            photoURL: user.photoURL
          };
      store.dispatch("setUserAndProfile", {
        user,
        userProfile
      });
      if (!doc.exists) {
        // はじめてのログインなので、 userProfile を firestore に保存
        profileRef.set(userProfile);
      }
    });
  } else {
    store.dispatch("setUserAndProfile", { user: null, userProfile: null });
  }
});

/* eslint-disable no-new */
// const store = new Vuex.Store({
//   plugins: [createPersistedState()],
//   modules: {}
// });
