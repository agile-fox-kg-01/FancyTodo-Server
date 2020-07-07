const { Todo } = require('../models/index.js');

class TodoController {
    static async postTodoAddHandler(req, res) {
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
            if(err.name === 'SequelizeValidationError') {
                err = err.errors.map(error => error.message);

                res.status(400).json(err);
            } else {
                res.status(500).json({error: 'Internal server error'});
            }
        }
    }

    static async getTodoRootHandler(req, res) {
        const userId = req.userLogin.id;
        try {
            const allTodo = await Todo.findAll({
                where: {
                    UserId: userId
                }
            });
            
            res.status(200).json(allTodo);

        } catch(err) {
            res.status(500).json({error: 'Internal server error'});
        }
    }


    static async getTodoUpdateHandler(req, res) {
        const paramId = Number(req.params.id);

        try {
            const todo = await Todo.findByPk(paramId);
            res.status(200).json(todo);
        } catch(err) {
            res.status(404).json({error: 'Not found'});
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
                res.status(404).json({error: 'Not found'});
            }
        } catch(err) {
            if(err.name === 'SequelizeValidationError') {
                err = err.errors.map(error => error.message);

                res.status(400).json(err);
            } else {
                res.status(500).json({error: 'Internal server error'});
            }
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
                res.status(404).json({error: 'Not found'});
            }
        } catch(err) {
            res.status(500).json({error: 'Internal server error'});
        }
    }
}

module.exports = TodoController;