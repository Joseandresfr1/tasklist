// /routes/taskRoute.js
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.post(`/api/login`, async (req, res) => {
    let user = await User.find(req.body);
    if (Object.keys(user).length === 0){
        return res.status(404).send({
            error: true,
            message:"Usuario no registrado",
            user
          })
    }
    else{
        return res.status(202).send({
            error: false,
            user
          })
    }
  })
}
