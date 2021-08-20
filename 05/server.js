const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
console.log('listen on port 3000');
app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://api.github.com',
        changeOrigin: true
    }),
);
app.use('/', express.static('dist'));
app.get('*', function (request, response) {
    response.sendFile(path.resolve(dirname, 'dist/index.html'));
});
app.listen(3000);