const { createProxyMiddleware } = require('http-proxy-middleware');
const { PRODUCT_MODE } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/', '/post/list', 'user/add'], {
      // target: 'https://react-blog-heesunae.vercel.app',
      // target: BACK_URL,
      target: PRODUCT_MODE === 'develop' ? 'http://localhost:4444' : 'https://react-blog-heesunae.vercel.app',
      changeOrigin: true,
    })
  );
};
