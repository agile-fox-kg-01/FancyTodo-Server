const { TodoList } = require('../models/index')


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
      const dataTodos = await TodoList.findAll({
        where: {
          UserId: userLogin.id
        }
      }, {
        order: [['id', 'DESC'],]
      })
      console.log(dataTodos);
      res.status(201).json({ newTodo, dataTodos })
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
      }, {
        order: [['id', 'DESC'],]
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
      const dataTodos = await TodoList.findAll({
        where: {
          UserId: todoEdit.UserId
        }
      }, {
        order: [['id', 'DESC'],]
      })
      res.status(200).json({
        todoEdit, dataTodos
      })

    } catch (err) {
      next(err)
    }
  }


  static async destroyTodo(req, res, next) {
    let id = Number(req.params.id)

    try {
      const todoDelete = await TodoList.destroy({
        where: {
          id: id
        }
      })
      const dataTodos = await TodoList.findAll({
        where: {
          UserId: userLogin.id
        }
      }, {
        order: [['id', 'DESC'],]
      })
      res.status(200).json({
        todoDelete, dataTodos
      })
    } catch (err) {
      next(err)
    }
  }

  static async editStatus(req, res, next) {
    try {
      const todo = await TodoList.update({
        status: req.body.status
      }, {
        where: {
          id: todoList.id
        }
      })
      const dataTodos = await TodoList.findAll({
        where: {
          UserId: userLogin.id
        }
      }, {
        order: [['id', 'DESC'],]
      })
      res.status(201).json({ dataTodos })
    } catch (error) {
      next(error)
    }
  }

}

module.exports = { TodosController }