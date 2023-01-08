const express = require("express")


const { MongoClient }  = require( "mongodb" )
const uri = "mongodb://127.0.0.1:27017"
const Client = new MongoClient (uri);

const app = express() 
const database = Client.db("formdatabase3");
const student = database.collection("formdata3");



app.get("/home" , (req,resp) => { 
    resp.sendFile(__dirname + "/form.html")
  
      

})




app.get( "/create" , async(req,resp) => {
    const name= req.query.name;
    const phone = req.query.phone;
   // console.log(name);
    //console.log(phone);
    resp.send ("welcome to the create page ")
   const mydata = {
    studentname: name,
    studentphone: phone,
   }
   student.insertOne(mydata)

   var rawstudentdata = await student.findOne({studentname:"haribadh"});

   var fstdname= rawstudentdata.studentname;

   console.log(fstdname)
   

})



const port  = 46456;
app.listen(port , (resp) => {console.log("hrllo harinadh ....")})