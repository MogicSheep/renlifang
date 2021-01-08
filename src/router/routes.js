/**
 * 路由
 */

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components//FocusPage"),
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
    path: "/LoginOut",
    name: "LoginOut",
    component: () => import("../views/login/Login.vue")
  },
  {
    path: '/Home',
    component: () => import("../views/Home.vue"),
    name: '后台管理',
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
    name: '数据可视化平台',
    hidden: true
  },
  {
    path: '/ManagePage',
    component: () => import("@/components/ManagePage.vue"),
    name: '后台人员管理',
    hidden: true
  },
  {
    path: '/DrawPage',
    component: () => import("@/components/DrawPage.vue"),
    name: '人员画像',
    hidden: true
  },
  {
    path: '/information',
    component: () => import("../views/information/InfoShow.vue"),
    name: '系统设置',
    hidden: true
  },
  {
    path: '/demo',
    component: () => import("@/components/demo.vue"),
    name: '图谱',
    hidden: true
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("../views/error/Error.vue")
  }
];

export default routes;
