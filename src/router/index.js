import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import UserHomeView from "@/views/user/UserHomeView.vue";
import UserMessageView from "@/views/user/UserMessageView.vue";
import AdminVansView from "@/views/admin/AdminVansView.vue";
import AdminDriversView from "@/views/admin/AdminDriversView.vue";
import AdminMaintenanceView from "@/views/admin/AdminMaintenanceView.vue";
import AdminMileageView from "@/views/admin/AdminMileageView.vue";
import ErrorView from "@/views/ErrorView.vue";

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
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
