const { config } = require('dotenv');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
//db.grantRolesToUser("username", [{role: "read", db: "admin"}])

const connectdatabase =() =>{
mongoose.connect(process.env.REACT_APP_MONGO_URI,{
    useNewUrlparser:true,
  
     useUnifiedTopology: true,

})

.then((data)=>{
    console.log(`mongodb connected with server: ${data.connection.host}`);

})
.catch((err)=>{
    console.log(err)
})

}

module.exports= connectdatabase();