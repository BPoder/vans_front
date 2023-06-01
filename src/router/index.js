import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/driver/UserView.vue";
import VansView from "@/views/admin/VansView.vue";
import ErrorView from "@/views/ErrorView.vue";
import MaintenanceView from "@/views/admin/MaintenanceView.vue";
import DriversView from "@/views/admin/DriversView.vue";
import MileageView from "@/views/admin/MileageView.vue";
import MessageView from "@/views/MessageView.vue";

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
    path: '/message',
    name: 'MessageRoute',
    component: MessageView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
