import Vue from "vue";
import App from "@/App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

// components
import Sidebar from "@/components/Sidebar.vue";

Vue.component("Sidebar", Sidebar);
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");