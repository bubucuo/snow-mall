import { defineConfig } from 'umi';
const theme = {
  'brand-primary': 'red',
  'color-text-base': 'green',
  'ghost-button-color': 'yellow',
};
export default defineConfig({
  // layout: {},

  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        style: true,
      },
    ],
  ],
  // theme: {
  //   'brand-primary': 'red',
  //   'color-text-base': '#333',
  // },
  // cssLoaderOptions: ,
  lessLoader: {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      { loader: 'less-loader', options: { modifyVars: theme } },
    ],
    include: /node_modules/,
  },

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
            // { path: '/login', component: '@/pages/login' },

            { path: '/user', component: '@/pages/user' },
            { path: '/olist', component: '@/pages/olist' },
            { path: '/cart', component: '@/pages/cart' },
            { path: '/confirmBill', component: '@/pages/confirmBill' },
            { path: '/pay', component: '@/pages/pay' },
          ],
        },
      ],
    },
  ],
});
