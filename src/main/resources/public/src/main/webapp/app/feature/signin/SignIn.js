function showRegistration(){
    document.getElementById('register').style.display= "inline-block";
    document.getElementById('signIn').style.display= "none";
    event.preventDefault();      
    
}

function makeNewUser(username,name,email,age,phone,pass) {
    // LIST_OF_USERS.ADD(..........);

    // var NewUser = "INSERT INTO user(Username, Password, AccessLevel) VALUES('"+username+"','"+pass+"','customer')";
    var NewUser = "INSERT INTO user(Username, FullName, Email, Age, Phone, Password, AccessLevel) VALUES('"+username+"','"+name+"','"+email+"','"+age+"','"+phone+"','"+pass+"','customer')";


    console.log(NewUser);
    document.getElementById('regSuccess').style.display= "inline-block";
    document.getElementById('register').style.display= "none";
}

function register(username,name, age, phone, email, password1, password2){
    if (password1 !== password2){
        alert("Passwords do not match");
    }   
    else{
        makeNewUser(username,name, email, age, phone, password1);
    } 
    return false;
}

function signIn(email, password){
    attemptToSignIn(email, password);
    
    return false;
}
function forgotDetails(){
    document.getElementById('forgot').style.display= "inline-block";
    document.getElementById('signIn').style.display= "none";
    event.preventDefault();      


    return false;
}
function remindDetails(email){

    for (let i=0; i<ARRAY_OF_USER_EMAILS.length ; i++){
        if (email===ARRAY_OF_USER_EMAILS[i]){
            SEND_EMAIL_TO(email);
        }
    }
}

function attemptToSignIn(email,pass) {
    for (let i=0; i<ARRAY_OF_USER_EMAILS.length ; i++){
        if (email===ARRAY_OF_USER_EMAILS[i]){
            if (pass===ARRAY_OF_USER_PASSWORDS[i]){
                realSignIn(email,pass);
            } else {
                //alert("Your password is incorrect");
            }
        } else{
           // alert("Your email is either incorrect or you do not have an account");
        }
    }
}






