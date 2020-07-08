const { TodoList } = require('../models/index')
const { due_dateFormat } = require('../helpers/due_date.js')

class TodosController {

  static async create(req, res) {

    try {
      const newTodo = await TodoList.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date,
        UserId: userLogin.id
      })
      res.status(201).json(newTodo)
    } catch (err) {
      next(err)
    }
  }

  static async showAllTodos(req, res, next) {

    try {
      const todoList = await TodoList.findAll({
        where: {
          UserId: userLogin.id
        }
      })
      if (todoList.length == 0) {
        throw {
          name: 'Not Found',
          message: `empty list`
        }
      } else {

        res.status(200).json(todoList)
      }
    } catch (err) {
      next(err)
    }
  }

  static async findTodo(req, res, next) {

    try {
      res.status(200).json(todoList)
    } catch (err) {
      next(err)
    }
  }

  static async updateTodo(req, res, next) {
    let todo = req.body
    let id = Number(req.params.id)

    try {
      await TodoList.update({
        title: todo.title,
        description: todo.description,
        status: todo.status,
        due_date: todo.due_date
      }, {
        where: {
          id: id
        }
      })
      const todoEdit = await TodoList.findByPk(id)
      res.status(200).json(todoEdit)

    } catch (err) {
      next(err)
    }
  }


  static async destroyTodo(req, res) {
    let id = Number(req.params.id)

    try {
      const todoDelete = await TodoList.destroy({
        where: {
          id: id
        }
      })
      res.status(200).json(todoDelete)
    } catch (err) {
      next(err)
    }
  }

}

module.exports = { TodosController }