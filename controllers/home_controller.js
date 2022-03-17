module.exports.home = function(request,response){
    return response.render("home",{
        title: "Sign In"
    });
}


module.exports.signup = function(request,response){
    return response.render("sign-up",{
        title: "Sign Up"
    });
}
