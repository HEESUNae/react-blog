const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  require('dotenv').config();
  const { MODE } = process.env;

  app.use(
    createProxyMiddleware('/post/list', {
      target: MODE === 'production' ? 'https://react-blog-eight-kappa.vercel.app' : 'http://localhost:4444',
      changeOrigin: true,
    })
  );
};
