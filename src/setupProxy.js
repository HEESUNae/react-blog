const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/post/list', 'user/add'], {
      // target: 'https://react-blog-eight-kappa.vercel.app',
      target: 'http://localhost:4444',
      changeOrigin: true,
    })
  );
};
