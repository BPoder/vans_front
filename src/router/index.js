import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import VansView from "@/views/VansView.vue";
import UserMessageView from "@/views/UserMessageView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/user',
    name: 'userRoute',
    component: UserView
  },
  {
    path: '/usermessage',
    name: 'userMessageRoute',
    component: UserMessageView
  },
  {
    path: '/vans',
    name: 'vansRoute',
    component: VansView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
