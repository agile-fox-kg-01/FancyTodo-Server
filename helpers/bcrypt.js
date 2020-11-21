const bcrypt = require('bcryptjs')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(5)
    console.log(salt)
    const hash = bcrypt.hashSync(password, salt)
    console.log(hash)
    return hash
}

function comparePassword(inputPassword, databasePassword) {
    return bcrypt.compareSync(inputPassword, databasePassword)
}

module.exports = {
    hashPassword,
    comparePassword
}