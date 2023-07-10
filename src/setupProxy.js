const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/post/list', {
      target: 'http://localhost:4444',
      changeOrigin: true,
    })
  );
};
