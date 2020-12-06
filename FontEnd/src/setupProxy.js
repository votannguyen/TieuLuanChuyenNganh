const { createProxyMiddleware  } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api/userGoogle',
        createProxyMiddleware ({ 
            target: "http://localhost:5050", 
            changeOrigin: true,
         })
    );
};