import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import ServerPlugin from 'server-webpack-plugin';
import webpack, { MultiCompiler } from 'webpack';
/* eslint-disable-next-line import/order */
import WebpackDevServer from 'webpack-dev-server';
process.env.NODE_ENV = 'development';

// Init client compiler.
/* eslint-disable-next-line import/order */
const clientConfig = require('../webpack/client').default;
const clientCompiler = webpack(clientConfig);
const clientDevServer = new WebpackDevServer(clientCompiler, {
  historyApiFallback: true,
  hot: true,
  noInfo: true,
  overlay: true,
  port: 3001,
  stats: 'none',
  writeToDisk: true,
});

// Init server compiler.
const serverConfig = require('../webpack/server').default;
const serverCompiler = webpack(serverConfig);
new ServerPlugin({
  disableWatch: true,
  logLevel: 'silent',
}).apply(serverCompiler);

// Init multi compiler.
const multiCompiler = new MultiCompiler([clientCompiler, serverCompiler]);
new FriendlyErrorsPlugin({
  compilationSuccessInfo: {
    messages: ['Your application is running here http://localhost:3000'],
    notes: ['Press CTRL-C to stop'],
  },
}).apply(multiCompiler);

// Start everything.
clientDevServer.listen(3001);
serverCompiler.watch({}, () => {});
