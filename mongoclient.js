const { MongoClient }  = require( "mongodb" )
const uri = "mongodb://127.0.0.1:27017"
const Client = new MongoClient (uri);


const database = Client.db("haridatabase4");
const student = database.collection("student4");



const mydata = {
                    name: "sarath",
                    remarks:"ok",
                    phone:7330912456,
                    marks: 96,
                }
             
//student.insertOne(mydata)


async  function HL(){
    //await function inside async function only ....await make the client wait untill get the data from the db
    //waiting concept is like as the ajax as we learned do all the thigns untiil get the data 
var rawstudentdata = await student.findOne({name:"sarath"});
         
    var fstdname= rawstudentdata.name;
    var fstdmarks = rawstudentdata.marks;
    var fstdphone= rawstudentdata.phone;
   

    
  console.log(rawstudentdata);
  console.log("welcome to " + fstdname);
  console.log("your marks are " + fstdmarks);
  console.log("your number is  " + fstdphone);
  console.log("done......")


// this await the client untill get the data and close the connection with database
await Client.close();
}

HL()

//export default {HL,create};
