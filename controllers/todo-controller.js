const { ToDo } = require('../models/index.js')

class ToDoController {
    static createToDo(req, res) {
        let title = req.body.title;
        let description = req.body.description;
        let status = req.body.status;
        let due_date = req.body.due_date;

        let objToDo = {
            title,
            description,
            status,
            due_date
        }

        ToDo.create(objToDo)
            .then(result => {
                res.status(201).json(
                    {
                        title: result.title,
                        description: result.description,
                        status: result.status,
                        due_date: result.due_date
                    }
                )
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    err = err.errors.map(error => { return error.message })
                    res.status(400).json(err)
                } else {
                    res.status(500).json({ Error: "Internal server error" })
                }
            })
    }

    static readToDo(req, res) {
        ToDo.findAll()
            .then(result => {
                res.status(200).json(result)
            }
            )
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }

    static readToDoById(req, res) {
        let todoId = req.params.id

        ToDo.findByPk(todoId)
            .then(result => {
                if (result === null) {
                    res.status(404).json({ Error: "Error not found" })
                } else {
                    res.status(200).json(result)
                }
            }
            )
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }

    static updateToDo(req, res) {
        let todoId = req.params.id
        let title = req.body.title;
        let description = req.body.description;
        let status = req.body.status;
        let due_date = req.body.due_date;


        ToDo.update({
            title,
            description,
            status,
            due_date
        },
            {
                where: {
                    id: todoId
                },
                returning: true
            })
            .then(result => {
                if (result[0] === 0) {
                    res.status(404).json({ Error: "Error not found" })
                } else {
                    res.status(200).json(result[1])
                }
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    err = err.errors.map(error => { return error.message })
                    res.status(400).json(err)
                } else {
                    res.status(500).json({ Error: "Internal server error" })
                }
            })
    }

    static deleteToDo(req, res) {
        let todoId = Number(req.params.id)
        let obj;

        ToDo.findByPk(todoId)
            .then(result => {
                obj = result

                return ToDo.destroy({
                    where: {
                        id: todoId
                    }
                })
            })
            .then(result => {
                if (result === 0) {
                    res.status(404).json({ Error: "Error not found" })
                } else {
                    res.status(200).json(obj)
                }
            })
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }
}

module.exports = ToDoController;