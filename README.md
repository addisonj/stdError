stdError
========

A small express middleware for standardizing on errors

# Purpose
At i.TV, we tend to do error handling from the server lots of different ways, here is how we standardize on it

# Usage
```
stdError = require("stdError")
app.use(stdError({name: "MyApp", showStack: false}))


app.get("/error", function(req, res) {
  res.sendErr(new Error("ahhhhh!"))
})
```

# Opts
- name: a string to print so you know where stuff comes from
- showStack: true/false, send the stack down to the client, defaults to true if NODE_ENV is development, false otherwise
