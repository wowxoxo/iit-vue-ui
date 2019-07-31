import Vue from "vue";
// import "./components/_globals";
import App from "./App.vue";
import IitIconBase from "./components/IitIconBase.vue";
import IitIconLogo from "./components/icons/IitIconLogo.vue";
import IitIconSad from "./components/icons/IitIconSad.vue";

Vue.component("iit-icon-base", IitIconBase);
Vue.component("iit-icon-sad", IitIconSad);
Vue.component("iit-icon-logo", IitIconLogo);
Vue.config.productionTip = false;

Vue.filter("currency", value => {
  return value.toLocaleString() + "&nbsp;₽";
});

new Vue({
  render: h => h(App)
}).$mount("#app");
