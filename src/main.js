/**
 * 入口
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Vue2Storage } from "vue2-storage";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/scss/index.scss";
import "./assets/css/index.css";
import echarts from "echarts";
import BaiduMap from 'vue-baidu-map';
import dataV from '@jiaminghi/data-view';

Vue.prototype.$echarts = echarts;

//import * as types from "./store/types";

//配置localStorage
Vue.use(Vue2Storage, {
  prefix: "app_",
  driver: "local",
  ttl: 60 * 60 * 24 * 1000 // 过期时间24小时
});
Vue.use(BaiduMap, {
  ak: 'TpraBomr9SQYlpUF6peUQLptZvG18pEd'
});
Vue.use(dataV);

Vue.use(ElementUI);

Vue.config.productionTip = false;

//导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") {
//     next();
//   } else {
//     if (
//       !Vue.$storage.get(types.USER_INFO) ||
//       !Vue.$storage.get(types.TOKEN) ||
//       !Vue.$storage.get(types.ROLE)
//     ) {
//       next({ path: "/login" });
//     } else {
//       if (!store.getters[types.USER_INFO]) {
//         store.commit(types.USER_INFO, Vue.$storage.get(types.USER_INFO));
//       }
//       if (!store.getters[types.TOKEN]) {
//         store.commit(types.TOKEN, Vue.$storage.get(types.TOKEN));
//       }
//       if (!store.getters[types.ROLE]) {
//         store.commit(types.ROLE, Vue.$storage.get(types.ROLE));
//       }
//       next();
//     }
//   }
// });

window.$vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
