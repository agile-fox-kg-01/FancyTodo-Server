const jwt = require('jsonwebtoken');

function jwtSign(payload) {
  const token = jwt.sign(payload, 'secret-key')

  return token
}

module.exports = jwtSign