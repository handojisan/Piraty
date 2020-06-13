import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuejsDialog from "vuejs-dialog";
import VuejsDialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import VueParticles from "vue-particles";
//import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";
Vue.config.productionTip = false;

Vue.use(mavonEditor);
//Vue.use(Vuetify);
Vue.use(VuejsDialog);
Vue.use(VuejsDialogMixin);
+require("./assets/sass/main.scss");
Vue.use(VueParticles);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
