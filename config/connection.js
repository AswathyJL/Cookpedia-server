const mongoose = require("mongoose");

const connectionString = process.env.DBCONNECIONSTRING

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB Atlas Successfully connected with Cookpedia Server");
}).catch(err=>{
    console.log("MongoDb Atlas Connection failed!!");
    console.log(err);
})