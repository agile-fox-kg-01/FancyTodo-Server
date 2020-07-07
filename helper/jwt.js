const jwt = require('jsonwebtoken');

function signToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.jwt_key);
    return token;
}

function verifyToken (token) {
    const payload = jwt.verify(token, process.env.jwt_key);
    return payload
}

module.exports = {
    signToken,
    verifyToken
};