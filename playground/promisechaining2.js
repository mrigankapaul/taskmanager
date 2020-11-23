require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fbc1a4bcc40090b57935c58').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fbc2355319f410e4c34646c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})