import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HelloWorld.vue';
import CounterViewComponent from '@/components/CounterView.vue';
import ProductViewComponent from '@/components/ProductView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeComponent,
  },
  { path: '/about', name: 'about' },
  { path: '/', name: 'counter', component: CounterViewComponent },
  { path: '/products', name: 'products', component: ProductViewComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
