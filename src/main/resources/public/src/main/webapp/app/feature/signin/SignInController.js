(function() {

    var SinginController =  function(signInService) {
        // vm is equal to the alias on the html page
        var vm = this;

        vm.showRegistration = function () {
            console.log("The 'show registration' button has been activated.");
            document.getElementById('register').style.display = "inline-block";
            document.getElementById('signIn').style.display = "none";
            event.preventDefault();
        };

        vm.register = function (username,name, age, phone, email, password1, password2){

            // console.log("INITAL"+ username + name + age );
            if (password1 !== password2){
                alert("Passwords do not match");
                console.log("PASSWORDS DO NOT MATCH");
            }
            else{
                signInService.makeNewUser(username,name, email, age, phone, password1);
            }

            return false;
        };

        vm.signIn = function (email, password){
            console.log("The 'sign in' button has been activated.");
            signInService.attemptToSignIn(email, password);

            return false;
        };

        vm.showForgot = function () {
            console.log("The 'show Forgot' button has been activated.");
            document.getElementById('forgot').style.display = "inline-block";
            document.getElementById('signIn').style.display = "none";
            event.preventDefault();
        };

        // this appears to need remind details
        vm.forgotDetails = function (email){
            console.log("forgot details is running")
            // console.log("The 'forgotten details' button has been activated.");
            // document.getElementById('forgot').style.display= "inline-block";
            // document.getElementById('signIn').style.display= "none";
            // event.preventDefault();

            // find the respective element that stores the email variable.
            // IF myEMAIL EXISTS AND IS VALID
            // THEN:
            signInService.remindDetails(email);
            // myEMAIL does not exist

            return false;
        }

    };

    angular.module('cinema').controller('SinginController', ['signInService', SinginController]);
}());