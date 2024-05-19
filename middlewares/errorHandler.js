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

function boomErrorHander (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }

}

module.exports = { logErrors, errorHander, boomErrorHander }
