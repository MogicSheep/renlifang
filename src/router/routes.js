/**
 * 路由
 */

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    /*children: [
      
      {
        path: '/ArchivesPage',
        component: ArchivesPage,
        name: '档案中心'
      }
    ]*/
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue")
  },
  {
    path: '/HomePage',
    component: () => import("@/components/HomePage.vue"),
    name: '系统首页',
    hidden: true
  },
  {
    path: '/ArchivesPage',
    component: () => import("@/components/ArchivesPage.vue"),
    name: '档案中心',
    hidden: true
  },
  {
    path: '/PersonPage',
    component: () => import("@/components/PersonPage.vue"),
    name: '人员轨迹',
    hidden: true
  },
  {
    path: '/FocusPage',
    component: () => import("@/components/FocusPage.vue"),
    name: '重点关注',
    hidden: true
  },
  {
    path: '/ManagePage',
    component: () => import("@/components/ManagePage.vue"),
    name: '档案管理',
    hidden: true
  },
  {
    path: '/DrawPage',
    component: () => import("@/components/DrawPage.vue"),
    name: '人员画像',
    hidden: true
  },
  {
    path: '/SettingPage',
    component: () => import("@/components/SettingPage.vue"),
    name: '系统设置',
    hidden: true
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("../views/error/Error.vue")
  }
];

export default routes;
