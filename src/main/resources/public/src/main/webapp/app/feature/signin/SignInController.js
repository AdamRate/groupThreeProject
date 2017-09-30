(function() {

    var SinginController =  function(signInService) {
        // vm is equal to the alias on the html page
        var vm = this;

        vm.showRegistration = function () {
            document.getElementById('register').style.display = "inline-block";
            document.getElementById('signIn').style.display = "none";
            event.preventDefault();
        };

        vm.register = function (username,name, age, phone, email, password1, password2){

            if (password1 !== password2){
                alert("Passwords do not match");
            }
            else{
                signInService.makeNewUser(username,name, email, age, phone, password1);
            }

            return false;
        };

        vm.signIn = function (email, password){
            signInService.attemptToSignIn(email, password);

            return false;
        };

        vm.showForgot = function () {
            document.getElementById('forgot').style.display = "inline-block";
            document.getElementById('signIn').style.display = "none";
            event.preventDefault();
        };

        // this appears to need remind details
        vm.forgotDetails = function (email){
            signInService.remindDetails(email);
            return false;
        }

    };

    angular.module('cinema').controller('SinginController', ['signInService', SinginController]);
}());