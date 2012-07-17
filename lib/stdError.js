
function formatDocument(opts, err) {
  var showStack = opts.showStack || process.env.NODE_ENV == 'development' || false
  var errHash = {
    error: true
    , msg: err.message
  }
  if (opts.name) {
    errHash.name = opts.name
  }
  if (showStack) {
    errHash.stack = err.stack
  }
  return errHash
}

module.exports = function(opts) {
  return function(req, res, next) {
    res.sendErr = function(err, statusCode) {
      statusCode = statusCode || 500
      console.log("had an error:", err)
      console.error("had an error:", err)
      return res.json(formatDocument(opts, err), statusCode)
    }

    next()
  }
}
