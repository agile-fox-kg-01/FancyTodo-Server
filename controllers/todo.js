const { Todo } = require('../models/index')

class TodoController{
    // Membuat Todo
    static async postTodo(req,res){
        let newTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }

        try {
            const todo = await Todo.create(newTodo)
            res.status(201).json(todo)
        } catch (err){
            res.status(500).json(err)
        }
    }

    // Memanggil Semua Data Todo
    static async getTodo(req,res){
        try {
            const allTodo = await Todo.findAll()
            res.status(200).json(allTodo)
        } catch(err){
            res.status(500).json(err)
        }
    }

    // Memanggil Detail Todo Berdasarkan ID
    static async getTodoById(req,res){
        let idInput = req.params.id
        try{
            const todo = await Todo.findOne({
                where : { 
                    id : idInput
                }
            })
            res.status(200).json(todo)
        } catch(err){
            res.status(500).json(err)
        }
    }

    // Mengubah Data Todo By ID
    static async putTodoById(req,res){
        let idInput = req.params.id
        let newTodo = {
            title : req.body.title,
            description : req.body.description,
            status : req.body.status,
            due_date : req.body.due_date
        }
        try {
            const todo = await Todo.update(newTodo, {
                where : {
                    id:idInput
                },
                returning : true
            })
            res.status(200).json(todo[1][0])

        } catch(err) {
            res.status(500).json(err)
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