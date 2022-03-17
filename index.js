//setting express file
const express = require('express');
//firing up express server
const app = express();
//defining port on which website will run
const port = 8001;
// importing express-ejs-layouts to help in using layout.ejs
const expressLayouts = require("express-ejs-layouts");

// importing our db
const db = require("./config/mongoose");
require("dotenv").config();

const passport = require("passport");
//requring the local strategy that we had coded in config. this will be used to authenticate
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require('connect-mongo');

//reading through post requests i.e we need to encode url as well which is necessary to read post requests
//keep it always just after constants declaration
app.use(express.urlencoded());








//this command tells the server to use layout.ejs as our main layout of the entire website
//telling app to use layouts.ejs just before routes. why before routes? because routes will load views and views must know which partial to use
app.use(expressLayouts);


//extract styles and scripts from subpages into layouts
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

//setting up view engine ejs using app.set
app.set("view engine", "ejs");
//setting views to views folder i.e browsers can access it views from views folder in social media app
app.set("views" , "views");

// telling in which folder server should look for static files
app.use(express.static("./assets"));





//telling app to use routers which is in routes/index.js to handle all post and get requests from the browser
//router should be at the end just before app.listen since all things that require to be initialized before routing things up should be present above the router call

app.use("/",require("./routes/index"));






app.listen(port,function(error){
    if(error){
        console.log("Error in app.listen");
        console.log(`Error message is : ${error}`);
    }

    console.log(`Server up and running on port ${port}`);
})
