
//  **** Note *****
//  to start a server for  development Mode : - npm run dev
//  to start a server for production         :- npm run start
//  to connecting the data base we have have a DB_URL in config.env so change that 
// DB_URL = mongodb://127.0.0.1:27017/rohit_backend  here  rohit_backend is database name so do that carefully beacuse version mongodb that note supported 

// all the Api's are perfectly run and tested through postman 
// Error handling are done with each type of error 
// design of data base is given in that task so considered carefully
// pipe line are also done to fetch that data from different collection and also done with normal condition 

// Authentication are not done because not mention in task.



const  app =  require("./app");
const connectDataBase = require("./config/database");
const dotenv = require("dotenv");

//Configuration file 

dotenv.config({path:"backend/config/config.env"});

//connecting to database 

connectDataBase();

app.listen(process.env.PORT ,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})



