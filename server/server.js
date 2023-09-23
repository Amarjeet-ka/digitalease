const express = require('express');
const { config }  = require('dotenv');
require('dotenv').config();
const ejs = require('ejs');
const cors = require("cors");

const userRoutes = require("./routes/UserRoutes.js");
const connectdatabase = require('./config/database.js')


const app = express();

connectdatabase;

app.set('view engine','ejs');

app.get('/', function(req, res){
    res.render('index');
})
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://64d5bb5ec55b45262328911d--eloquent-kataifi-cb0447.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//call database connection--




app.use("/api", userRoutes);










const PORT = process.env.REACT_APP_PORT 
app.listen(PORT,()=> {
    console.log(`server is running on ${PORT}`)
})
