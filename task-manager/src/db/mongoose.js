const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

//// ===============================================> Task
const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type:Boolean,
        default: false
    }
})






// const newTask = new Task(
//     {
//     description: 'New task with no status',

// }).save().then((result) =>{
//     console.log(result)
// }).catch((error) => {
//     console.log('Error! ', error)
// })



// const me = new User({
//     name: '  Mohamed   '  ,
//     email: 'Mohamed@FARID.cloud',
//     password: 'jhjkdsjhfklds ',
//     age: 22
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ', error)
// })