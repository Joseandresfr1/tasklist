// /models/tasks.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('tasks', taskSchema);