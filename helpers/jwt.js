const jwt = require('jsonwebtoken');

function jwtSign(payload) {
  const token = jwt.sign(payload, process.env.JWT)
  return token
}

function verifyToken(token) {
  const verifiedToken = jwt.verify(token, process.env.JWT);

  return verifiedToken
}



module.exports = { jwtSign, verifyToken }