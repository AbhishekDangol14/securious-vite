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
    path: "/register/:slug?",
    name: "Register",
    component: Register,
    props: true
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('@/views/Verify.vue')
  },
  {
    path: '/email2fa',
    name: 'email2fa',
    component: () => import('@/views/2FA/Email2FA.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/threats",
    name: "threats",
    component: () => import("@/views/Threats/Threat/Threats.vue"),
  },
  {
    path: "/threat/create",
    name: "createThreats",
    component: () => import("@/views/Threats/Threat/ThreatCreate/ThreatsCreate.vue"),
  },
  {
    path: "/threat/update/:id",
    name: "threatUpdate",
    component: () => import("@/views/Threats/Threat/ThreatUpdate/ThreatUpdate.vue"),
    props: true,
  },
  {
    path: "/threat/question/edit/:id",
    name: "editThreatQuestion",
    component: () => import("@/views/Threats/Analysis/QuestionEdit/Index.vue"),
  },
  {
    path: "/threat/question/create",
    name: "createThreatQuestion",
    component: () => import("@/views/Threats/Analysis/QuestionCreate/QuestionCreate.vue"),
  },
  {
    path: "/threat/recommendation/edit/:id",
    name: "editThreatRecommendation",
    props: true,
    component: () => import("@/views/Threats/Recommendation/RecommendationUpdate/Edit.vue"),
  },
  {
    path: "/threat/recommendation/create",
    name: "createThreatRecommendation",
    component: () => import("@/views/Threats/Recommendation/RecommendationCreate/Create.vue"),
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
    path: '/kunden',
    name: 'kunden',
    component: () => import('@/views/Consultant/Kunden.vue')
  },
  {
    path: '/email2fa',
    name: 'email2fa',
    component: () => import('@/views/2FA/Email2FA.vue')
  },
  {
    path: '/google2fa',
    name: 'google2fa',
    component: () => import('@/views/2FA/Google2FA.vue')
  },
  {
    path: '/data-leak',
    name: 'data-leak',
    component: () => import('@/views/Customer/DataLeaks/DataLeaks.vue')
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import('@/views/Intro.vue')
  },
  {
    path: '/kunden',
    name: 'kunden',
    component: () => import('@/views/Consultant/Kunden.vue')
  },
  {
    path: '/email2fa',
    name: 'email2fa',
    component: () => import('@/views/2FA/Email2FA.vue')
  },
  {
    path: '/google2fa',
    name: 'google2fa',
    component: () => import('@/views/2FA/Google2FA.vue')
  },
  {
    path: '/data-leak',
    name: 'data-leak',
    component: () => import('@/views/Customer/DataLeaks/DataLeaks.vue')
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import('@/views/Intro.vue')
  },
  {
    path: '/company-assets',
    name: 'company-assets',
    component: () => import('@/views/test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
