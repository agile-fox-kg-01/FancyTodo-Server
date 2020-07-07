const { Task } = require('../models/index')

class TodoController {
    static index(req, res) {
        Task.findAll({where: {UserId: req.userLogin.id}}).then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(500).json({
                err: err.message
            })
        })
    }
    static create(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date,
            UserId: req.userLogin.id
        }
        Task.create(task).then(data => {
            res.status(201).json(task)
        }).catch(err => {
            if (err.name === "SequelizeValidationError") {
                res.status(400).json({
                    err: "validation errors"
                })
            } else {
                res.status(500).json({
                    err: err.message
                })
            }
        })
    }
    static read(req, res) {
        Task.findByPk(req.params.id).then(data => {
            if(data == null) {
                res.status(404).json({
                    err : 'error not found' 
                })
            } else {
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(500).json({
                err: err.message
            })
        })
    }
    static update(req,res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date
        }
        Task.update(task, {where: {id: req.params.id}}).then(data => {
            if(data == 0) {
                res.status(404).json({
                    err : 'error not found'
                })
            } else {
                res.status(200).json({
                    title: task.title,
                    description: task.description,
                    due_date: task.due_date
                })
            }
        }).catch(err => {
            if (err.name === "SequelizeValidationError") {
                res.status(400).json({
                    err: "validation errors"
                })
            } else {
                res.status(500).json({
                    err: err.message
                })
            }
        })
    }
    static delete(req, res) {
        let task
        Task.findByPk(req.params.id).then(data => {
            task = data
            return Task.destroy({where: {id: req.params.id}})
        })
        .then(data => {
            if(data == 0) {
                res.status(404).json({
                    err : 'error not found'
                })
            } else {
                res.status(200).json(task)
            }
        }).catch(err => {
            res.status(500).json({
                err: err.message
            })
        })
    }
}

module.exports = TodoController