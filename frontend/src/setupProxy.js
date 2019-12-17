// /frontend/src/setupProxy.js

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    // PARA COORER LOCALMENTE

  // app.use(proxy('/api/*', { target: 'http://backend:5000' }))

    // PARA COORER CON DOCKER

     app.use(proxy('/api', { target: 'http://localhost:5000' }))
}