const jwt = require('jsonwebtoken')

function sign(){
    const token = jwt.sign(payload, process.env.SECRET_JWT)
    return token
}

function verify(){
    if(token){
        return jwt.verify(token, process.env.SECRET_JWT)
    }
}



module.exports = { sign, verify }