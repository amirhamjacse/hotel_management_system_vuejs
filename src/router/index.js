import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Rooms from '../components/Rooms.vue';
import Tenants from '../components/Tenants.vue';
import Orders from '../components/Orders.vue';
import Reports from '../components/Reports.vue';
import Settings from '../components/Settings.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/rooms', component: Rooms },
  { path: '/tenants', component: Tenants },
  { path: '/orders', component: Orders },
  { path: '/reports', component: Reports },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
