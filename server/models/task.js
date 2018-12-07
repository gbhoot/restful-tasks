var mongoose = require('../config/mongoose.js')
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
});
var Tasks = mongoose.model('Task', TaskSchema);

module.exports = Tasks;