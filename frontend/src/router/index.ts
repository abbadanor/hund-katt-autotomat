import { createRouter, createWebHistory } from '@ionic/vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Question3 from '../views/Question3.vue'
import Graph from '../views/Graph.vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Tabs from '../views/Tabs.vue'
import Welcome from '../views/Welcome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome/1',
  },
  {
    path: '/welcome/',
    component: Welcome,
    children: [
      {
        path: '',
        redirect: '1',
      },
      {
        path: '1',
        component: Question1,
      },
      {
        path: '2',
        component: Question2,
      },
      {
        path: '3',
        component: Question3,
      },
    ],
  },
  {
    path: '/views/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/views/view1',
      },
      {
        path: 'graph',
        component: Graph,
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
