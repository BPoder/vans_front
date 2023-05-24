import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import UserHomeView from "@/views/UserViews/UserHomeView.vue";
import UserMessageView from "@/views/UserViews/UserMessageView.vue";
import AdminVansView from "@/views/AdminViews/AdminVansView.vue";
import AdminDriversView from "@/views/AdminViews/AdminDriversView.vue";
import AdminMaintenanceView from "@/views/AdminViews/AdminMaintenanceView.vue";
import AdminMileageView from "@/views/AdminViews/AdminMileageView.vue";

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
    path: '/user/home',
    name: 'userRoute',
    component: UserHomeView
  },
  {
    path: '/user/message',
    name: 'userMessageRoute',
    component: UserMessageView
  },
  {
    path: '/admin/vans',
    name: 'adminVansRoute',
    component: AdminVansView
  },
  {
    path: '/admin/drivers',
    name: 'adminDriversRoute',
    component: AdminDriversView
  },
  {
    path: '/admin/maintenance',
    name: 'adminMaintenanceRoute',
    component: AdminMaintenanceView
  },
  {
    path: '/admin/mileage',
    name: 'adminMileageRoute',
    component: AdminMileageView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
