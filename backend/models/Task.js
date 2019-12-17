// /models/tasks.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    name: String,
    description: String,
    completed: Boolean,
    user: String
})

mongoose.model('tasks', taskSchema);