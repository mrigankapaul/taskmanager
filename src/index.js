const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     // if(req.method === 'GET') {
//     //     res.send('GET Requests are disabled')
//     // } else {
//     //     next()
//     // }

//     res.status(503).send('Site is currently down. Check back soon!')

// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require('./models/user')
const main = async () => {
  // const task = await Task.findById("5fbd36d7bfabbe1f9453c5e8");
  // await task.populate('owner').execPopulate()
  // console.log(task.owner);

  // const user = await User.findById("5fbd35cba10b6f1f70aac48d")
  // await user.populate('tasks').execPopulate()
  // console.log(user.tasks)


};

main();
