//create  mongo database connection
let mongoClient=require("mongodb").MongoClient;
//database url
let dbUrl="mongodb://localhost:27017/ashokit"
// databse connection
mongoClient.connect(dbUrl,(error,databaseAcknowledgements)=>{
if(error) throw error
console.log("Database connected successfully");
//close database connection
databaseAcknowledgements.close();
})

//create collection
// mongoClient.connect(dbUrl,(error,databaseAcknowledgements)=>{
//     if(error) throw error
//     dbObject.creatCollection("students")
//     let dbObject=databaseAcknowledgements.db("ashokitDB",(error,databaseResponseDB)=>{
//        if(error) throw error
//        console.log("Collection created successfully");
//            //close database connection
//        databaseAcknowledgements.close();
//     })
//     })