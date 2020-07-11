const { Todo } = require('../models/index')

class TodosController {
    static create(req, res, next) {

        // console.log(req.body)
        // console.log(req.userLogin)

        const newTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date),
            UserId: req.userLogin.id
        };

        // console.log(newTodo)

        Todo.create(newTodo)
            .then(todo => { //last checkpoint
                res.status(201).json({
                    title: todo.title,
                    description: todo.description,
                    status: todo.status,
                    'due date': todo.due_date,
                    UserId: todo.UserId
                })
            })
            .catch(err => {

                // console.log(err)

                next(err);
            })
    }

    static listAll(req, res, next) {

        // console.log(req.userLogin)

        Todo.findAll({
            where: {
                UserId: req.userLogin.id
            }
        })
            .then(todos => {

                todos = todos.map(todo => todo.dataValues)
                    .map(todo => {

                        let tmpObj = {};

                        tmpObj.id = todo.id;
                        tmpObj.title = todo.title;
                        tmpObj.description = todo.description;
                        tmpObj.status = todo.status;
                        tmpObj.due_date = todo.due_date;
                        tmpObj.UserId = todo.UserId;

                        // console.log(todo)

                        return tmpObj
                    })

                // console.log(todos)

                res.status(200).json(todos);
            })
            .catch(err => {
                next(err);
            })
    }

    static edit(req, res, next) {

        // console.log(req.body)

        const updateTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: new Date(req.body.due_date),
            UserId: req.userLogin.id
        };

        Todo.update(updateTodo, { where: { id: req.params.id }, returning: true })
            .then(todo => {

                // console.log(todo)

                let tmpObj = {};

                tmpObj.id = todo[1][0].id;
                tmpObj.title = todo[1][0].title;
                tmpObj.description = todo[1][0].description;
                tmpObj.status = todo[1][0].status;
                tmpObj.due_date = todo[1][0].due_date;
                tmpObj.UserId = todo[1][0].UserId;

                res.status(200).json(tmpObj)

                // return Todo.findByPk(req.params.id)
            })
            .catch(err => {

                    next(err);
      
            })
    }

    static delete(req, res, next) {
        Todo.destroy({ where: { id: req.params.id } })
            .then(deleted => {
                // console.log(deleted)

                res.status(200).json(`Todo with ID: ${req.params.id}, has deleted`)
            })
            .catch(err => {
                // console.log(err.message);
                next(err);
            })
    }
}

module.exports = TodosController