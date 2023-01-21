//create  mongo database connection
let mongoClient=require('mongodb').MongoClient;
//database url and my database name
let dbUrl='mongodb://localhost:27017/ashokit';
// databse connection
mongoClient.connect(dbUrl,(error,databaseAck)=>{
if(error) throw error
console.log("Database connected successfully");
//close database connection
databaseAck.close();
})

