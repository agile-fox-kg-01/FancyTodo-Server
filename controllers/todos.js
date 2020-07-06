const { TodoList } = require('../models/index')

class TodosController {

  static create(req, res) {

    TodoList
      .create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        due_date: req.body.due_date
      })
      .then(newTodo => {
        res.status(201).json({
          id: newTodo.id,
          title: newTodo.title,
          description: newTodo.description,
          status: newTodo.status,
          due_date: newTodo.due_date,
          createdAt: newTodo.createdAt,
          updatedAt: newTodo.updatedAt
        })
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          err = err.errors.map(error => error.message)
          res.status(400).json(err)
        } else {
          res.status(500).json(err)
        }
      })
  }

  static showAllTodos(req, res) {
    TodoList
      .findAll({})
      .then(todos => {
        res.status(200).json(todos)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findTodo(req, res) {
    let id = Number(req.params.id)
    TodoList
      .findByPk(id)
      .then(todo => {
        if (todo === null) {
          res.status(404).json({ error: 'not found' })
        } else {
          res.status(200).json(todo)
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateTodo(req, res) {
    let todo = req.body
    let id = Number(req.params.id)
    TodoList
      .update({
        title: todo.title,
        description: todo.description,
        status: todo.status,
        due_date: todo.due_date
      }, {
        where: {
          id: id
        }
      })
      .then(todo => {
        if (todo == 0) {
          res.status(404).json({ error: 'not found' })
        } else {
          return TodoList.findByPk(id)
        }
      })
      .then(todoUpdate => {
        res.status(200).json(todoUpdate)
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          err = err.errors.map(error => error.message)
          res.status(400).json(err)
        } else {
          res.status(500).json(err)
        }
      })
  }
  static destroyTodo(req, res) {
    let id = Number(req.params.id)
    TodoList
      .findByPk(id)
      .then(todoDelete => {
        if (todoDelete !== null) {
          return todoDelete
        } else {
          res.status(404).json({ error: 'not found' })
        }
      })
      .then(todoDelete => {
        TodoList.destroy({
          where: {
            id: id
          }
        })
        res.status(200).json(todoDelete)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }


}

module.exports = TodosController