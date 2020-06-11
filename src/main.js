import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import { request } from "../src/network/request";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
/* axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
   const { data } = res.data;
   console.log(data);
}); */
request(
  {
    url: "/home/multidata"
  },
  res => {
    console.log(res);
  },
  fail => {
    console.log(fail);
  }
);
