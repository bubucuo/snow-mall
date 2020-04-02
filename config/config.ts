// console.log(
//   '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!1',
// );

const theme = {
  'brand-primary': 'red',
  'color-text-base': '#333',
};

// export default {
//   cssLoader: {
//     test: /\.css$/,
//     use: ['style-loader', 'css-loader'],
//   },
//   plugins: ['import', { libraryName: 'antd-mobile', style: true }],
//   // theme: {
//   //   'brand-primary': 'red',
//   //   'color-text-base': '#333',
//   // },
//   // cssLoaderOptions: ,
//   lessLoader: {
//     test: /\.less$/,
//     use: [
//       'style-loader',
//       'css-loader',
//       { loader: 'less-loader', options: { modifyVars: theme } },
//     ],
//     include: /node_modules/,
//   },
//   chainWebpack(memo, { env, webpack, createCSSRule }) {
//     // 设置 alias
//     console.log(memo, webpack);
//   },
// };

export default {
  lessLoader: {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      { loader: 'less-loader', options: { modifyVars: theme } },
    ],
    include: /node_modules/,
  },
};
