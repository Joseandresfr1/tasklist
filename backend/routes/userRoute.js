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
  app.post(`/api/register`, async (req, res) => {
    let found = await User.find(req.body);
    if (Object.keys(found).length === 0){
        let user = await User.create(req.body);
        if (Object.keys(user).length === 0){
            return res.status(400).send({
                error: true,
                message:"Error en el registro",
                user
              })
        }
        else{
            return res.status(201).send({
                error: false,
                user
              })
        }       
    }
    else{
        return res.status(400).send({
            error: true,
            message:"Usuario ya registrado",
            found
        })
    } 
  })
}
