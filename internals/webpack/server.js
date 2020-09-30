import path from 'path';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import baseConfig from './base';

const isDev = process.env.NODE_ENV === 'development';

export default merge(baseConfig, {
  entry: {
    server: [
      isDev && 'webpack/hot/poll?300',
      path.resolve(__dirname, '../entries/server.js'),
    ].filter(Boolean),
  },
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/log', 'webpack/hot/poll?300'],
    }),
  ],
  output: {
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
    filename: 'server.js',
    path: path.resolve(__dirname, '../../build/server'),
  },
  plugins: [
    new CleanPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  target: 'node',
});
