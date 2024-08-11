import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ImageGallery from '@/components/ImageGallery.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/gallery',
    name: 'ImageGallery',
    component: ImageGallery
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
