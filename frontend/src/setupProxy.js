// /frontend/src/setupProxy.js

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    //app.use(proxy('/api/*', { target: 'http://backend:5000' }))
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
}