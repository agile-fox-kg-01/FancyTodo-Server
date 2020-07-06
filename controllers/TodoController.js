const { Todo } = require('../models/index.js');

class TodoController {
    static postTodoAddHandler(req, res) {
        const objTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        };

        Todo.create(objTodo)
            .then((todo) => {
                res.status(201).json({
                    title: todo.title,
                    description: todo.description,
                    status: todo.status,
                    due_date: todo.due_date 
                });
            })
            .catch((err) => {
                if(err.name === 'SequelizeValidationError') {
                    err = err.errors.map(error => error.message);

                    res.status(400).json(err);
                } else {
                    res.status(500).json({error: 'Internal server error'});
                }
            })
    }

    static getTodoRootHandler(req, res) {
        Todo.findAll()
            .then((todos) => {
                res.status(200).json(todos);
            })
            .catch((err) => {
                res.status(500).json({error: 'Internal server error'});
            })
    }


    static getTodoUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        Todo.findByPk(paramId)
            .then((todo) => {
                res.status(200).json({
                    title: todo.title,
                    description: todo.description,
                    status: todo.status,
                    due_date: todo.due_date
                });
            })
            .catch((err) => {
                res.status(404).json({error: 'Not found'});
            })
    }

    static putTodoUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        const objTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        };

        Todo.update(objTodo, {
            where: {
                id: paramId
            },
            returning: true
        })
            .then((todo) => {
                let result = todo[1];
                if(todo[0] === 1) {
                    res.status(200).json({
                        title: result[0].title,
                        description: result[0].description,
                        status: result[0].status,
                        due_date: result[0].due_date
                    });
                } else {
                    res.status(404).json({error: 'Not found'});
                }
                
            })
            .catch((err) => {
                if(err.name === 'SequelizeValidationError') {
                    err = err.errors.map(error => error.message);

                    res.status(400).json(err);
                } else {
                    res.status(500).json({error: 'Internal server error'});
                }
            })
    }

    static deleteTodoDeleteHandler(req, res) {
        const paramId = Number(req.params.id);
        let deleted;
        Todo.findByPk(paramId)
            .then((todo) => {
                deleted = todo;

                return Todo.destroy({
                    where: {
                        id: paramId
                    }
                })
            })
            .then((result) => {
                if(result === 0) {
                    res.status(404).json({error: 'Not found'});
                } else {
                    res.status(200).json({
                        title: deleted.title,
                        description: deleted.description,
                        status: deleted.status,
                        due_date: deleted.due_date
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({error: 'Internal server error'});
            })
    }
}

module.exports = TodoController;