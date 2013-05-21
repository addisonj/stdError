stdError
========

A small express middleware for standardizing on errors, it includes a few error types and more are easily added

# Purpose
At i.TV, we tend to do error handling from the server lots of different ways, here is how we standardize on it

# Usage
```JavaScript
var e = require("std-error")

return next(new e.NotFound())
...
app.use(function(err, req, res next) {
  res.json(err.statusCode, {error: true, message: err.message})
})

// or, which is the the same as above (works for express 2.0 and 3.0)
app.use(e.deafultHandler) //express 3.0
app.error(e.defaultHandler) // express 2.0

// Register custom errors

e.register({type: "MyError", message: "Something bad happened", statusCode: 9000})

// Register custom error with a custom errorCode

e.register({type: "MyErrorWithErrorCode", message: "Something bad happened", statusCode: 500, errorCode: 1000})

return next(new e.MyError())

// change default status codes
e.NotFound.prototype.statusCode = 405
```

## Included Errors
```JavaScript
  {type: "BadParameter", message: "Invalid parameter in request", statusCode: 400},
  {type: "Unauthorized", message: "Missing or Invalid credentials", statusCode: 401},
  {type: "NotFound", message: "Resource not found", statusCode: 404},
  {type: "InvalidMethod", message: "Invalid method requested", statusCode: 405},
  {type: "Timeout", message: "Request Timeout", statusCode: 408},
  {type: "Error", message: "Unexpected Error Occured", statusCode: 500},
  {type: "ServerError", message: "Unexpected Error Occured", statusCode: 500},
  {type: "DatabaseError", message: "Unexpected Error Occured", statusCode: 500},
  {type: "RequestError", message: "Unexpected Error Occured", statusCode: 500}
```
