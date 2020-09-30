import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

export default {
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: { compact: false },
          },
          'eslint-loader',
        ],
      },
    ],
  },
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, '../../src'),
    ],
  },
};
