import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import UserHomeView from "@/views/UserHomeView.vue";

const routes = [
  {
    path: '/',
    name: 'welcomeRoute',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/home',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/user/home',
    name: 'userRoute',
    component: UserHomeView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
