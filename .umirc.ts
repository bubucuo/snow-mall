import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  routes: [
    { path: '/', exact: true, component: '@/pages/home' },
    { path: '/home', component: '@/pages/home/' },
    { path: '/login', component: '@/pages/login/' },
    {
      path: '/user',
      component: '@/pages/user/',
      wrappers: ['../layouts/SecurityLayout'],
    },
  ],
});
