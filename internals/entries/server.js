import http from 'http';
import app from 'server';

const server = http.createServer(app);

server.listen(3000);

if (module.hot) {
  const logLevel = require('webpack/hot/log');
  logLevel.setLogLevel('silent');
  module.hot.accept('server', () => {
    server.removeAllListeners('request');
    server.on('request', app);
  });
}
