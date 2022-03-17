const mongoose = require("mongoose");


require("dotenv").config();
const uri = process.env.MONGODB_CONNECTION_STRING;



mongoose.connect(uri ,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to MongoDb"))
db.once("open",()=>{
    console.log("Database connected successfully");
});


module.exports = db;