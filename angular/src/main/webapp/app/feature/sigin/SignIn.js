//let ARRAY_OF_USER_EMAILS = database.USER_EMAILS;

function showRegistration(){
    document.getElementById('register').style.display= "inline-block";
    document.getElementById('signIn').style.display= "none";
    event.preventDefault();      
    
}
function register(name, age, phone, email, password1, password2){
    // console.log(name, age, phone, email, password1, password2);
    if (password1 != password2){
        alert("Your Passwords do not match");
    }   
    else{
        makeNewUser(name, email, age, phone, password1);        
    } 
    return false;
}

function makeNewUser(name,email,age,phone,pass) {
    // LIST_OF_USERS.ADD(..........);
}
function signIn(email, password){
    // console.log(email ,password);
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
                alert("Your password is incorrect");
            }
        } else{
            alert("Your email is either incorrect or you do not have an account");
        }
    }
}





