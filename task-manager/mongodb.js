// Comment to test git 20220221-2
// crud operations Create, Read, Update, Delete

// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')
const Db = require('mongodb/lib/db')




const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID('621168552f99b8cab18c7fdd')}, (error, user) => {
    //     if (error) {
    //         return console.log("Error")
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 50}).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({age: 50}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     name: 'Sherief',
    //     age: 50
    // }, (error,result) => {
    //     if (error) {
    //         console.log('Unable to insert User')
    //     }

    // comment 

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Mohamed",
    //         age: 22
    //     },
    //     {
    //         name: "Nour",
    //         age: 17
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable ot insert documents')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Finish NodeJS Course",
    //         completed: false
    //     }, 
    //     {
    //         description: "Clean office",
    //         completed: false
    //     },
    //     {
    //         description: "Start training plan",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert document')
    //     }
    //     console.log(result.ops)
    // })




})
