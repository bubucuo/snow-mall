import { defineConfig } from 'umi';
const theme = {
  'brand-primary': 'red',
  'color-text-base': 'green',
  'ghost-button-color': 'yellow',
};
export default defineConfig({
  antd: {
    dark: true,
    compact: true,
    // '@primary-color': 'red',
  },
  title: '这是个商城',
  theme: {
    '@primary-color': 'red',
    'brand-primary': 'red',
    'brand-primary-tap': 'red',
  },

  styles: [`body { background-color: red; }`, `https://a.com/b.css`],
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

  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-write-svg')({
      utf8: false,
    }),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', //需要转换的单位，默认为"px"
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 1334, //视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: 'vw', //字体使用的视口单位
      selectorBlackList: ['.ignore-', '.hairlines', 'am-', 'px-'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true, //是否直接更换属性值，而不添加备用属性
      exclude: [/\/Stores\/.*.less/, /global.css/, /node_modules/], //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', //横屏时使用的单位
      landscapeWidth: 1134, //横屏时使用的视口宽度
    }),
  ],

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
          ],
        },
      ],
    },
  ],
});
