import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CoreProducts from '@/views/CoreProducts.vue';
import TypicalApplications from '@/views/TypicalApplications.vue';
import News from '@/views/News.vue';
import AboutUs from '@/views/AboutUs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/core-products',
    name: 'CoreProducts',
    component: CoreProducts
  },
  {
    path: '/typical-applications',
    name: 'TypicalApplications',
    component: TypicalApplications
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
