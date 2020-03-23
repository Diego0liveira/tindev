const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

try {

    mongoose.Promise = global.Promise;

    mongoose.connect(
        'mongodb+srv://root:root@clusterapplicationsstudy-1o2rx.mongodb.net/tindev_db?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    
} catch (error) {
    console.log(error)
}

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.once('error', () => console.log('database connection error'));


server.use(express.json())
server.use(routes)

server.listen(3333, () => { console.log('Server is running...') })