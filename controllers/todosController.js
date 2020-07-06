const { Todo } = require('../models/index')

class TodosController {
    static post(req, res) {

        // console.log(req.body)

        if(req.body.title == "") req.body.title = null;
        if(req.body.description == "") req.body.description = null;
        if(req.body.status == "") req.body.status = null;
        if(req.body.due_date == "") req.body.due_date = null;

        const newTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date)
        };

        // console.log(newTodo)

        Todo.create(newTodo)
            .then(todo => {
                res.status(201).json(todo)
            })
            .catch(err => {
                if (err.name == 'SequelizeValidationError') {
                    err = err.errors.map(error => error.message)

                    res.status(400).json(err);
                } else {
                    // console.log(err.message)
                    res.status(500).json(err);
                }
            })
    }

    static listAll(req, res) {
        Todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    static edit(req, res) {

        if(req.body.title == "") req.body.title = null;
        if(req.body.description == "") req.body.description = null;
        if(req.body.status == "") req.body.status = null;
        if(req.body.due_date == "") req.body.due_date = null;

        const updateTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date)
        };

        Todo.update(updateTodo, { where: { id: req.params.id }, returning: true })
            .then(todo => {
                // console.log(todo)

                res.status(200).json(todo[1][0])

                // return Todo.findByPk(req.params.id)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

    // .then(todo=> {
    //     res.status(200).json(todo)
    // })

    static delete(req, res) {
        Todo.destroy({ where: { id: req.params.id } })
            .then(deleted => {
                // console.log(deleted)

                res.status(200).json(`Todo with ID: ${req.params.id}, has deleted`)
            })
            .catch(err => {
                // console.log(err.message);

                res.status(500).json(err);
            })
    }
}

module.exports = TodosController