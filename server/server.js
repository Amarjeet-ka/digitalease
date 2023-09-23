const express = require('express');
const { config }  = require('dotenv');
require('dotenv').config();

const connectdatabase = require('./config/database.js')


const app = express();

connectdatabase;

const PORT = process.env.REACT_APP_PORT 
app.listen(PORT,()=> {
    console.log(`server is running on ${PORT}`)
})
