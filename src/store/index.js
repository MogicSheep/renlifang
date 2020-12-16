/**
 * 存储设置
 */
import Vue from "vue";
import Vuex from "vuex";
import bModule from "./b.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bModule
  }
});
