var jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
// console.log(jwtSecret)
function verifyToken(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['Authorization'];
  if (token) {
    jwt.verify(token, jwtSecret, function (decoded, err) {
      if (err) {
         return res.status(403).send({
          success: false,
          message: 'Failed to authenticate.'
        });
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}
module.exports.verifyToken = verifyToken;