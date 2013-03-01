stdError
========

A small express middleware for standardizing on errors, it includes a few error types and more are easily added

# Purpose
At i.TV, we tend to do error handling from the server lots of different ways, here is how we standardize on it

# Usage
```JavaScript
var e = require("stdError")

return next(new e.NotFound())
...
app.use(function(err, req, res next) {
  res.json(err.statusCode, {error: true, message: err.message})
})

// or, which is the the same as above (works for express 2.0 and 3.0)
app.use(e.deafultHandler)

// Register custom errors

e.register({type: "MyError", message: "Something bad happened", statusCode: 9000})

return next(new e.MyError())

// change default status codes
e.NotFound.prototype.statusCode = 405
```
