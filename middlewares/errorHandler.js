
module.exports = function (err, req, res, next) {

  console.log(err);
  let statusCode = 500
  let message = 'internal server error'

  switch (err.name) {
    case 'SequelizeValidationError':
      message = []
      err.errors.forEach(error => {
        message.push(error.message)
      })
      statusCode = 400
      break;
    case 'Validation Error':
      statusCode = 400
      message = err.message
      break;
    case 'SequelizeUniqueConstraintError':
      break;
    case 'Not Found':
      statusCode = 404
      message = err.message
      break;
  }

  res.status(statusCode).json({
    status: statusCode,
    message: message
  })
}