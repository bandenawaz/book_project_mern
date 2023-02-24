
//import { MongoClient } from 'mongodb';

const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const connectDB = require('./config/db');


const app = express();
// const url = 'mongodb://localhost:27017';
// const dbName = 'booksDB';

connectDB();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

// MongoClient.connect(url, function(err, client) {

//     console.log("Connected Successfully to MongoDB");

//     const db = client.db(dbName);
// });

app.listen(port, () => console.log(`Server is running on ${port}`));
