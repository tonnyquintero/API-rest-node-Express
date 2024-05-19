const { stack } = require("../routes/products")


function logErrors (err, req, res, next) {
  console.log('Log errors');
  console.error(err)
  next(err)
}

function errorHander (err, req, res, next) {
  console.log('error handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = { logErrors, errorHander }
