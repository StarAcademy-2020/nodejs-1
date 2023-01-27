const mongoose=require('mongoose');
const url="mongodb://localhost:27017/ashokit";
mongoose.connect(url);
mongoose.Connection.on('connected', function(){
    console.log('Mongo connected to url'+url);
})
//assigning schama here
const studentsSchema= new mongoose.Schema({
    studentId:
    {
        typeof:String,
        require:[true,'studentId is manadatory']
    },
    studentName:
    {
        typeof:String,
        require:[true,'studentName is  manadatory']
    },
    studentEmail:
    {
        typeof:String,
        require:[true,'studentEmail is manadatory']
    },
    studentMobile:
    {
        typeof:String,
        require:[true,'studentMobile is manadatory']
    }


})
exports.Students=mongoose.Model('students',studentsSchema)
