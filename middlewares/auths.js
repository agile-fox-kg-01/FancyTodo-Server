
const { verifyToken } = require('../helpers/jwt.js')
const { User, TodoList } = require('../models/index.js')



async function authentication(req, res, next) {
  const token = req.headers.token
  if (!token) {
    res.status(401).json({
      status: 401,
      message: `Please log in first to continue!`
    })
  } else {
    let payload = verifyToken(token)
    if (payload.email === undefined) {
      payload = payload
    } else {
      payload = payload.email
    }

    // console.log(payload);
    try {
      const user = await User.findOne({
        where: {
          email: payload
        }
      })
      if (!user) {
        res.status(401).json({
          status: 401,
          message: `Please log in first to continue!`
        })
      } else {
        userLogin = user
        next()
      }
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error'
      })
    }
  }
}


async function authorization(req, res, next) {

  let todoId = Number(req.params.id)

  try {
    const todo = await TodoList.findByPk(todoId)
    if (!todo) {
      res.status(404).json({
        status: 404,
        message: `not found`
      })
    } else {
      if (todo.UserId !== userLogin.id) {

        res.status(401).json({
          status: 401,
          error: `Not authorized`
        })
      } else {
        todoList = todo
        next()
      }
    }

  } catch (err) {
    res.status(500).json({
      error: `Internal server error`
    })
  }
}

module.exports = { authentication, authorization }