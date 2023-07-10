const { createProxyMiddleware } = require('http-proxy-middleware');

const { HOST } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/post/list', {
      target: 'https://react-blog-eight-kappa.vercel.app',
      changeOrigin: true,
    })
  );
};
