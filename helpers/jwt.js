const jwt = require('jsonwebtoken');

const signToken = (payload) => {
    const token = jwt.sign(payload, 'jwt-private-key');

    return token;
}

const verifyToken = (token) => {
    const payload = jwt.verify(token, 'jwt-private-key');

    return payload;
}

module.exports = { signToken, verifyToken };