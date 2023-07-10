const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/post/list'], {
      target: 'https://react-blog-eight-kappa.vercel.app',
      changeOrigin: true,
    })
  );
};
