import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import test from "../views/test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/threats",
    name: "threats",
    component: () => import("@/views/Threats/Threats.vue"),
  },
  {
    path: "/threat/create",
    name: "createThreats",
    component: () => import("@/views/Threats/ThreatsCreate.vue"),
  },
  {
    path: "/threat/question/edit",
    name: "editThreatQuestion",
    component: () => import("@/views/Threats/Analysis/QuestionEdit/index.vue"),
  },
  {
    path: "/industries",
    name: "industries",
    component: () => import("@/views/Industries.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/News/News.vue"),
  },
  {
    path: "/news/create",
    name: "newsCreate",
    component: () => import("@/views/News/NewsCreate.vue"),
  },
  {
    path: "/news/update/:id",
    name: "newsUpdate",
    component: () => import("@/views/News/NewsUpdate.vue"),
    props: true,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/UserList.vue"),
  },
  {
    path: "/recommendations",
    name: "recommendations",
    component: test,
  },
  {
    path: "/certificates",
    name: "certificates",
    component: test,
  },
  {
    path: "/data-leak",
    name: "data-leak",
    component: test,
  },
  {
    path: "/company-assets",
    name: "company-assets",
    component: test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
