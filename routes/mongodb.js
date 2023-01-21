const {MongoClient} =require("mongodb");
const url = 'mongodb://localhost:27017';
const mydatabase='ashokit';
const client = new MongoClient(url);

 async function getDbConnection()
{
    let result=await client.connect();
    //mydb name
    let db=result.db(mydatabase);
    //my table name/collection name
    let conllection=db.collection('students');
    //displaying the data
    let response=await conllection.find().toArray();
    console.log(response);
}
getDbConnection();