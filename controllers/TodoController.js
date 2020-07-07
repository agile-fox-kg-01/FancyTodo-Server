const { Todo } = require('../models/index.js');

class TodoController {
    static async postTodoAddHandler(req, res, next) {
        const objTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
            UserId: req.userLogin.id
        };
        
        try {
            const newTodo = await Todo.create(objTodo);
            
            res.status(201).json({newTodo});

        } catch(err) {
            next(err);
        }
    }

    static async getTodoRootHandler(req, res, next) {
        const userId = req.userLogin.id;
        try {
            const allTodo = await Todo.findAll({
                where: {
                    UserId: userId
                }
            });
            
            res.status(200).json(allTodo);

        } catch(err) {
            next(err);
        }
    }


    static async getTodoUpdateHandler(req, res, next) {
        const paramId = Number(req.params.id);

        try {
            const todo = await Todo.findByPk(paramId);
            console.log(todo);
            
            res.status(200).json(todo);
        } catch(err) {
            next(err);
        }
    }

    static async putTodoUpdateHandler(req, res) {
        const paramId = Number(req.params.id);
        const objTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate
        };

        try {
            const todo = await Todo.update(objTodo, {
                returning: true,
                where: {
                    id: paramId
                }
            });
            if(todo[0] === 1) {
                const result = todo[1];
                const updatedData = result[0];
                res.status(200).json(updatedData);
            } else {
                next({
                    name: '404 Not Found',
                    errors: [{message: 'Not Found'}]
                });
            }
        } catch(err) {
            next(err);
        }
    }

    static async deleteTodoDeleteHandler(req, res) {
        const paramId = Number(req.params.id);
        try {
            const todoData = await Todo.findByPk(paramId);

            const todo = await Todo.destroy({
                where: {
                    id: paramId
                }
            });
            
            if(todo === 1) {
                res.status(200).json(todoData);
            } else {
                next({
                    name: '404 Not Found',
                    errors: [{message: 'Not Found'}]
                });
            }
        } catch(err) {
            next(err);
        }
    }
}

module.exports = TodoController;