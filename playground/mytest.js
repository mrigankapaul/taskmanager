const jwt = require("jsonwebtoken");
console. log(jwt.sign({ _id: userOneId }, process.env.JWT_SECRET))