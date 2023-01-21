var express = require('express');
const { employee } = require('./employee');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("home");
});
router.get('/page1',function(req,res){
  res.end('Md Nasir hussain');
});
router.get('/page2',function(req,res){
  res.end('page two');
});
router.get('/page3',function(req,res){
  res.end('page 3');
});
router.get('/employee',function(req,res){
  let employee=[{
    "empId":"1",
     "empName":"Nasir",
     "empEmail":"nasir@gmail.com",
     "empMobile":"9540456487",
     "empDesignation":"Software Engineer",
     "empCompanyName":"Ashok IT",
     "empCompanyLocation":"Hydrebad",
     "empCompanyDob":"23-09-2022"
 },
 {
     "empId":"2",
      "empName":"Raju",
      "empEmail":"raju@gmail.com",
      "empMobile":"9540456487",
      "empDesignation":"Software Engineer",
      "empCompanyName":"Ashok IT",
      "empCompanyLocation":"Hydrebad",
      "empCompanyDob":"23-09-2022"
  },
  {
    "empId":"3",
     "empName":"Ram Kumar",
     "empEmail":"ramkumar@gmail.com",
     "empMobile":"9540456487",
     "empDesignation":"Software Engineer",
     "empCompanyName":"Ashok IT",
     "empCompanyLocation":"Hydrebad",
     "empCompanyDob":"23-09-2022"
 },
 {
  "empId":"4",
   "empName":"Abbas",
   "empEmail":"abbas@gmail.com",
   "empMobile":"9540456487",
   "empDesignation":"Software Engineer",
   "empCompanyName":"Ashok IT",
   "empCompanyLocation":"Hydrebad",
   "empCompanyDob":"23-09-2022"
},
{
  "empId":"5",
   "empName":"Arhama",
   "empEmail":"arham@gmail.com",
   "empMobile":"9540456487",
   "empDesignation":"Software Engineer",
   "empCompanyName":"Ashok IT",
   "empCompanyLocation":"Hydrebad",
   "empCompanyDob":"23-09-2022"
},
{
  "empId":"6",
   "empName":"Himayat",
   "empEmail":"himayat@gmail.com",
   "empMobile":"9540456487",
   "empDesignation":"Software Engineer",
   "empCompanyName":"Ashok IT",
   "empCompanyLocation":"Hydrebad",
   "empCompanyDob":"23-09-2022"
}];
  res.render('employee',{employee:employee});
});
router.get('/home',function(req,res){
  let x=100;
  let y='Apple';
  let name='Nasir';
  let fname="AshokIt";
  let location="Hydrabad";
  let hobbies=["Singing","Dancing","CookingFood"];
  let user={id:1,name:"Nasir",age:28};
  // let details=[{id:1,name:"Nasir",email:"nasir@gmail.com"}];
  res.render('home',{k1:x,fruits:y,name:name,fname:fname,location:location,hobbies:hobbies,user:user});
 
})

module.exports = router;
