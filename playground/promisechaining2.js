require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5fbc1a4bcc40090b57935c58').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})