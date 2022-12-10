require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const router = require('./routes/routes.js');
app.use('/Products', router);


mongoose.connect(process.env.DATABASE_URL, () =>{
  console.log('connected to mongo')
})
const db = mongoose.connection;
db.on('error', (err) => console.log(err))

app.listen(4000, () => console.log('Server Started'));