//  index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Task');
require('./models/User');

const app = express();

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/tasklist`);
mongoose.connect('mongodb://joseandresfr1:PMrtQ9ucTwKcHBr@tasklist-shard-00-00-u1wdc.mongodb.net:27017,tasklist-shard-00-01-u1wdc.mongodb.net:27017,tasklist-shard-00-02-u1wdc.mongodb.net:27017/test?ssl=true&replicaSet=tasklist-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(express.json());

//IMPORT ROUTES
require('./routes/taskRoute')(app);
require('./routes/userRoute')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
