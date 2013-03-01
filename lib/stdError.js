
var errors = require("./errors")
var util = require("util")
var expressVersion = null
try {
  expressVersion = require("express").version.split(".")[0]
} catch(e) {}

expressVersion = expressVersion || '3'


module.exports = {
  register: function(obj) {
    var ErrorType = function(msg, constr) {
      Error.captureStackTrace(this, constr || this)
      this.message = msg || obj.message || "Error"
    }
    util.inherits(ErrorType, Error)
    ErrorType.prototype.statusCode = obj.statusCode || 500
    ErrorType.prototype.name = obj.type
    this[obj.type] = ErrorType
  },

  defaultHandler: function (err, req, res, next) {
    if (expressVersion === '3') {
      res.json(err.statusCode || 500, {error: true, message: err.message})
    } else {
      res.json({error: true, message: err.message}, err.statusCode || 500)
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
