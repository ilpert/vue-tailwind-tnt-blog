import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store";

import DashboardLayout from "./layout/DashboardLayout.vue";
import HomeLayout from "./layout/HomeLayout.vue";
Vue.config.productionTip = false;

let app;

Vue.component("dashboard-layout", DashboardLayout);
Vue.component("home-layout", HomeLayout);

app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
