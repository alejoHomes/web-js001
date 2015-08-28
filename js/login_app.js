/**
 * Created by alejandro on 8/26/15.
 */


var users = ["alejandro","jose","christopher"];
var pwrds = ["123","456","789"];

function checkForm(form) {
    var valid = false;
    if ( validateAlphaNum(form.userid.value) && checkUser(form.userid.value, form.pswrd.value) ){
            alert("Login was successful");
            window.location = 'web/profile.html';
        }
        else{
            alert("Error password or username");
        }
}

function checkUser(user,pwrd){
    for (var i = 0; i < users.length; i++) {
        if (( user == users[i]) && ( pwrd == pwrds[i])) {
            return  true;
        }
    }
    return false;
}

function validateAlphaNum(user){
    var filter = /^[\w\n][\w\n]+$/;
    if(filter.test(user))
        return true;
    else
        return false;
}

function helloWorld(){
    return "Hello World";
}


