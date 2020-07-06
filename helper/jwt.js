const jwt = require('jsonwebtoken');

function signToken(payLoad) {
    const token = jwt.sign(payLoad, `jwt-secret`);
    return token;
}

module.exports = signToken;