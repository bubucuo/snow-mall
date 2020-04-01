import { defineConfig } from 'umi';

export default defineConfig({
  // layout: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', exact: true, component: '@/pages/home' },
        { path: '/home', component: '@/pages/home' },
        { path: '/login', component: '@/pages/login' },
        { path: '/search', component: '@/pages/search' },
        { path: '/product/:id', component: '@/pages/product/[id]' },

        {
          path: '/',
          component: '@/layouts/SecurityLayout',
          routes: [
            { path: '/user', component: '@/pages/user' },
            { path: '/olist', component: '@/pages/olist' },
            { path: '/cart', component: '@/pages/cart' },
          ],
        },
      ],
    },
  ],
});
