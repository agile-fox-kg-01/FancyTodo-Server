const { Todo } = require('../models/index')

class TodoController{
    // Membuat Todo
    static async postTodo(req,res){
        let newTodo = {
            title: req.body.title || '',
            description: req.body.description || '',
            status: req.body.status || '',
            due_date: req.body.due_date || '',
            UserId: req.userLogin.id
        }
        try {
            const todo = await Todo.create(newTodo)
            console.log(todo)
            res.status(201).json(todo)
        } catch (err){
            console.log(err)
            res.status(500).json(err)
        }
    }

    // Note : Kendala Respon 400 Belum di tangani

    // Memanggil Semua Data Todo
    static async getTodo(req,res){
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

    // Note : Respon 200 dan 500 Sudah di tangani

    // Memanggil Detail Todo Berdasarkan ID
    static async getTodoById(req,res){
        const idInput = req.params.id
        try{
            const todo = await Todo.findByPk(idInput)

            res.status(200).json(todo)
        } catch(err){
            res.status(404).json(err.message)
        }
    }
    // Note : Respon 200 dan 404 Sudah di tangani

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
            if (!todo) {
                res.status(400).json(err.message)
            } else {
                res.status(200).json(todo[1][0])
            }
            

        } catch(err) {
            res.status(500).json(err.message)
        }
    }
    // Note : 400, 404 belum di handle

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