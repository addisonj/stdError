
module.exports = [
  {type: "BadParameter", message: "Invalid parameter in request", statusCode: 400},
  {type: "Unauthorized", message: "Missing or Invalid credentials", statusCode: 401},
  {type: "NotFound", message: "Resource not found", statusCode: 404},
  {type: "InvalidMethod", message: "Invalid method requested", statusCode: 405},
  {type: "Timeout", message: "Request Timeout", statusCode: 408},
  {type: "Error", message: "Unexpected Error Occured", statusCode: 500},
  {type: "ServerError", message: "Unexpected Error Occured", statusCode: 500},
  {type: "DatabaseError", message: "Unexpected Error Occured", statusCode: 500},
  {type: "RequestError", message: "Unexpected Error Occured", statusCode: 500},
]
