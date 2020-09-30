import path from 'path';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './base';

const isDev = process.env.NODE_ENV === 'development';

const cssLoaders = ({ modules = false, sass = false } = {}) => [
  ...(isDev ? ['style-loader'] : [MiniCssExtractPlugin.loader]),
  { loader: 'css-loader', options: { modules } },
  ...(sass ? ['sass-loader'] : []),
  'postcss-loader',
];

export default merge(baseConfig, {
  entry: { client: path.resolve(__dirname, '../entries/client.js') },
  module: {
    rules: [
      {
        exclude: /\.module.css/,
        test: /\.css/,
        use: cssLoaders(),
      },
      {
        exclude: /\.module.scss/,
        test: /\.scss/,
        use: cssLoaders({ sass: true }),
      },
      {
        test: /\.module.css/,
        use: cssLoaders({ modules: true }),
      },
      {
        test: /\.module.scss/,
        use: cssLoaders({ modules: true, sass: true }),
      },
    ],
  },
  output: {
    chunkFilename: 'scripts/[id].[hash:8].js',
    hotUpdateChunkFilename: 'scripts/hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'scripts/hot/[hash].hot-update.json',
    filename: 'scripts/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../build/client'),
  },
  plugins: [
    new CleanPlugin(),
    new HtmlPlugin({
      hash: true,
      template: path.resolve(__dirname, '../../public/index.html'),
    }),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[hash:8].css',
      }),
    isDev && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
