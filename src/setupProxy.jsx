const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://portfolio-project-1.onrender.com',
      changeOrigin: true,
    })
  );
};
