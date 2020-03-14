import Vue from "vue";
import App from "@/App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";

// components
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
import PokeRowCol from "@/components/PokeRowCol.vue";
import Sidebar from "@/components/Sidebar.vue";

Vue.component("Content", Content);
Vue.component("Footer", Footer);
Vue.component("PokeRowCol", PokeRowCol);
Vue.component("Sidebar", Sidebar);

Vue.use(Antd);

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  return `${value}`.charAt(0).toUpperCase() + `${value}`.slice(1);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
