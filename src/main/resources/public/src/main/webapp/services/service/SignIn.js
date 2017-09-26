
(function() {

    var signInService =  function(filmDal) {
        var vm = this;

        vm.makeNewUser = function(username,name,email,age,phone,pass) {
            console.log("started makeNewUser 1045");
            // var NewUser = "INSERT INTO user(Username, Password, AccessLevel) VALUES('"+username+"','"+pass+"','customer')";
            // var NewUser = "INSERT INTO user(Username, FullName, Email, Age, Phone, Password, AccessLevel) VALUES('"+username+"','"+name+"','"+email+"','"+age+"','"+phone+"','"+pass+"','customer')";
            var NewUser= {
                "Username": username,
                "FullName":name,
                "Email":email,
                "Age":age,
                "Phone":phone,
                "Password":pass,
                "AccessLevel":'customer'
            };

            filmDal.sendUserData('http://adamrate.github.io/groupThreeProject/CreateUser',
                ).then(function(result){
                console.log("POST RESULT: " + result.data);
                console.log(JSON.stringify(result.data));
                document.getElementById('regSuccess').style.display= "inline-block";
                document.getElementById('register').style.display= "none";
            });

            // clean user var
            NewUser=null;

            // THIS WORKS FOR THE LOCAL HOST
            // fetch('http://localhost:8081/CreateUser', {
            //     method: 'POST', mode: 'no-cors', body: JSON.stringify(NewUser)
            // }).then(function (response) {
            //     console.log(NewUser);
            //     console.log(JSON.stringify(NewUser));
            //     document.getElementById('regSuccess').style.display= "inline-block";
            //     document.getElementById('register').style.display= "none";
            // });
            // NewUser=null;
        }

        // Please resolve ARRAY_OF_USER_EMAILS and ARRAY_OF_USER_PASSWORDS, no clear context.
        // realSignIn(var) does not appear to be linked to any real functionality.
        vm.attemptToSignIn = function(email, pass) {
            for (var i=0; i<ARRAY_OF_USER_EMAILS.length ; i++){
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

        // Please resolve ARRAY_OF_USER_EMAILS, no clear context.
        // SEND_EMAIL_TO(var) does not appear to be linked to any real functionality.
        vm.remindDetails = function(email) {
            for (var i = 0; i < ARRAY_OF_USER_EMAILS.length; i++) {
                if (email === ARRAY_OF_USER_EMAILS[i]) {
                    SEND_EMAIL_TO(email);
                }
            }
        }

    };


    angular.module('cinema').service('signInService', ['filmDal', signInService]);
}());




