
const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-jsonBook.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-jsonBook.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Sherief'
data.age = 50
const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)