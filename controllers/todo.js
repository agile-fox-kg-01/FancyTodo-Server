const { Todo } = require('../models/index')

class TodoController{
    // Membuat Todo
    static async postTodo(req,res, next){
        let newTodo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.userLogin.id,
            place: req.body.place
        }
        try {
            const todo = await Todo.create(newTodo)
            console.log(todo)
            res.status(201).json(todo)

        } catch (err){
            next(err)
        }
    }

    // Memanggil Semua Data Todo
    static async getTodo(req,res,next){
        try {
            
            const allTodo = await Todo.findAll({
                where : {
                    UserId : req.userLogin.id
                }
            })
            res.status(200).json(allTodo)
        } catch(err){
            res.status(500).json(err)
        }
    }

    // Memanggil Detail Todo Berdasarkan ID
    static async getTodoById(req,res){
        const idInput = req.params.id
        console.log('todo by id')
        try {
            const todo = await Todo.findByPk(idInput)
            console.log(todo,'=======>')
            res.status(200).json(todo)
        } catch(err) {
            console.log(err)
            res.status(404).json(err)
        }
    }

    // Mengubah Data Todo By ID
    static async putTodoById(req,res){
        let idInput = req.params.id
        let newTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date,
            place: req.body.place
        }
        try {
            const todo = await Todo.update(newTodo, {
                where : {
                    id:idInput
                },
                returning : true
            })
            if (!todo) {
                res.status(400).json(err.message)
            } else {
                res.status(200).json(todo[1][0])
            }
            

        } catch(err) {
            res.status(500).json(err.message)
        }
    }

    // Menghapus Todo
    static async deleteTodoById(req,res){
        let idInput = req.params.id
        try {
            const todo = await Todo.destroy({where : {
                id:idInput
            }})
            res.status(200).json(todo)
        } catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = TodoController