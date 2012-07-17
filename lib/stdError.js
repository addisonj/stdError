
modules.exports = function(req, res, next) {
  res.sendErr = function(err, statusCode) {
    statusCode = statusCode || 500
    console.log("had an error:", err)
    console.error("had an error:", err)
    return res.json({error: true, msg: err.message}, statusCode)
  }

  next()
}
