const { createProxyMiddleware } = require('http-proxy-middleware');

const { HOST } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/post/list', {
      target: HOST,
      changeOrigin: true,
    })
  );
};
