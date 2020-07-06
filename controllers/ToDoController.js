const { ToDo } = require('../models/index.js')

class ToDoController {
    static createToDo(req, res) {
        const title = req.body.title
        const description = req.body.description
        const status = req.body.status
        const due_date = req.body.due_date

        let objToDo = {
            title,
            description,
            status,
            due_date
        }

        ToDo.create(objToDo)
            .then(data => {
                res.status(201).json(
                    {
                        title: data.title,
                        description: data.description,
                        status: data.status,
                        due_date: data.due_date
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
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }

    static readToDoById(req, res) {
        ToDo.findByPk(req.params.id)
            .then(data => {
                if (data === null) {
                    res.status(404).json({ Error: "Data not found" })
                }
                else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }
    static updateToDo(req, res) {
        const paramsId = req.params.id
        const title = req.body.title
        const description = req.body.description
        const status = req.body.status
        const due_date = req.body.due_date

        let objToDo = {
            title,
            description,
            status,
            due_date
        }

        ToDo.update(objToDo, {
            where: {
                id: paramsId
            },
            returning: true
        })
            .then(data => {
                if (data[0] === 0) {
                    res.status(404).json({ Error: "Data not found" })
                }
                else {
                    res.status(200).json(data[1])
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
        const paramsId = Number(req.params.id)

        ToDo.destroy({
            where: {
                id: paramsId
            }
        })
            .then(data => {
                if (result === 0) {
                    res.status(404).json({ Error: "Data not found" })
                } else {
                    res.status(200).json(obj)
                }
            })
            .catch(err => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }
}

module.exports = ToDoController