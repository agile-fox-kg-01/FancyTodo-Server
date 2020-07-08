const errorHandler = (err, req, res , next) => {
    // console.log(err.name)
    // console.log(err.errors)
    // res.status(500).json(err)
    if(err.name === 'SequelizeValidationError') {
        let errors  = []
        err.errors.forEach(error => {
            errors.push(error.message)
        })
        console.log(errors)
        res.status(400).json({
            errors
        })
    } else {
        res.status(500).json({
            errors: ['Internal server error']
        })
    }
}

module.exports = errorHandler