var Task = require('../models/task.js');

module.exports = {
    getAll: function(req, res) {
        Task.find({}, function(error, tasks) {
            if (error) {
                console.log("There was an issue: ", error);
            } else {
                let response = {
                    message: "Success",
                    tasks: tasks
                };
                res.json(response);
            }
        });
    },

    create: function(req, res) {
        console.log(req.body);
        let inc_task = req.body;
        let task = new Task({title: inc_task.title, description: inc_task.description,
            completed: inc_task.completed});
        task.save(function(error, task) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                res.redirect('/');
            }
        });
    },

    destroy: function(req, res) {
        let tid = req.params.id;
        Task.remove({_id: tid}, function(error, task) {
            if (error) {
                console.log("There was an issue: ", error);
            } else {
                res.redirect('/');
            }
        });
    },

    update: function(req, res) {
        let tid = req.params.id;
        let taskD = req.body;
        taskD.updated_at = Date.now();
        console.log(taskD);
        Task.updateOne({_id: tid}, {$set: taskD}, function(error, task) {
            if (error) {
                console.log("There was an issue: ", error);
            } else {
                res.redirect('/');
            }
        });
    },

    getOne: function(req, res) {
        let tid = req.params.id;
        Task.findOne({_id: tid}, function(error, task) {
            if (error) {
                console.log("There was an issue: ", error);
            } else {
                let response = {
                    message: "Success",
                    task: task
                }
                res.json(response);
            }
        });
    }
};