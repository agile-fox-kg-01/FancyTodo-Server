const errorHandler = (err, req, res, next) => {

    switch(err.name) {
        case 'SequelizeValidationError':
            let list = []
            err.errors.forEach(error => {
                list.push(error.message)
            })
            res.status(400).json({
                error: list
            })
            break;
        case 'Not Authorized':
            res.status(401).json({
                error : 'You have Unauthorized token!'
            })

            break;
        case 'JsonWebTokenError':
            res.status(400).json({
                error : 'You dont have(2) token, please login!'
            })

            break;
        case 'Email not valid':
            res.status(400).json({
                error : 'You dont have(3) token, please login!'
            })

            break;
        case 'Todo not found':
            res.status(404).json({
                error : 'Todo Not Found'
            })

            break;
        default:
            res.status(500).json({
                error : "Internal Server Error"
            })
      }
}

module.exports = errorHandler