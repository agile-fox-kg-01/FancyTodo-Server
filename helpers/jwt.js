const jwt = require('jsonwebtoken')

function signToken(payload) {
    const token = jwt.sign(payload, 'jwt-secret')
    return token
}

module.exports = {
    signToken
}