import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/driver/UserView.vue";
import VansView from "@/views/admin/VansView.vue";
import UserMessageView from "@/views/driver/UserMessageView.vue";
import ErrorView from "@/views/ErrorView.vue";
import MaintenanceView from "@/views/admin/MaintenanceView.vue";
import DriversView from "@/views/admin/DriversView.vue";
import MileageView from "@/views/admin/MileageView.vue";
import AdminMessageView from "@/views/admin/AdminMessageView.vue";

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
  {
    path: '/maintenance',
    name: 'maintenanceRoute',
    component: MaintenanceView
  },
  {
    path: '/drivers',
    name: 'driverRoute',
    component: DriversView
  },
  {
    path: '/mileage',
    name: 'mileageRoute',
    component: MileageView
  },
  {
    path: '/adminmessage',
    name: 'adminMessageRoute',
    component: AdminMessageView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
