/**
 * 路由设置
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
/*import HomePage from "@/components/HomePage";
import ArchivesPage from "@/components/ArchivesPage";
import FocusPage from "@/components/FocusPage";
import ManagePage from "@/components/ManagePage";
import LogPage from "@/components/LogPage";
import SettingPage from "@/components/SettingPage";*/

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
  //menuLists
});

export default router;
