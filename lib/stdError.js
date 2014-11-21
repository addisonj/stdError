var errors = require("./errors")
var util = require("util")

module.exports = {
  register: function(obj) {
    var ErrorType = function(msg, constr) {
      Error.captureStackTrace(this, constr || this)
      this.message = msg || obj.message || "Error"
    }
    util.inherits(ErrorType, Error)
    ErrorType.prototype.statusCode = obj.statusCode || 500
    ErrorType.prototype.name = obj.type
    ErrorType.prototype.errorCode = obj.errorCode
    this[obj.type] = ErrorType
  },

  defaultHandler: function (err, req, res, next) {
    var body = {error: true, message: err.message}

    // An error can specify it's own error code if needed for custom error code sets.
    // An errorCode is not the same as the statusCode.
    if (err.errorCode) {
      body.errorCode = err.errorCode
    }

    // test if we are express 4
    if (res.status && typeof res.status === "function") {
      res.status(err.statusCode || 500).json(body)
    } else {
      res.json(body, err.statusCode || 500)
    }
  },

  errors: errors,
  registerDefault: function() {
    for (var i = 0; i < errors.length; i++) {
      this.register(errors[i])
    }
  }
}
module.exports.registerDefault()
