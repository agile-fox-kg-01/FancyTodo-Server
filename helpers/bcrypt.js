const bcrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password,salt)
    return hash
}

// console.log(hashPassword('ichlasul amal'))

function comparePassword(inputanPassword,databasePassword){
    return bcrypt.compareSync(inputanPassword,databasePassword)
}

// console.log(comparePassword('ichlasul amal', '$2a$05$udz8eCyoShSUi6Sqyy62xuOPQGqeM5Nm5s23UoMtALT7XbNeNOmA.'))

module.exports = {
    hashPassword,
    comparePassword
}