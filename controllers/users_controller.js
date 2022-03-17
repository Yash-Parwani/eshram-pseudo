const User = require("../models/users")


module.exports.create = async (request,response) => {
    try{
        console.log("request.body", request.body); 
        
        const newUser = new User({
            username: request.body.username,
            adharNumber: request.body.adharNumber,
            password: request.body.password
        });
        await User.create(newUser);

        console.log("User added");

        return response.redirect("/");
    }
    catch(error){
          console.log("Error");
          console.log("Error message is : ", error);
    }
}