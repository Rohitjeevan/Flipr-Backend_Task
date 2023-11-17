const mongoose = require("mongoose")



   const connectDataBase  =()=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
         console.log(`Mongodb connected with server :${data.connection.host}`);
        });
     
   }

module.exports = connectDataBase