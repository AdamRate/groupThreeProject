"use strict";
console.log("started email.js");

(function() {
    console.log("inside email.js");

    var contactController =  function($http) {
        var vm = this;
        console.log("inside contactController");

        vm.phoneInvalid = false;
        vm.emailInvaild = false;
        vm.thankYou = false;

        var empty = {name: "", phone: "", email: "", message: "", honeypot: ""};

        vm.offOverlay = function () {
            vm.thankYou = false;
            console.log("Overlay turned off");
        };

        function validEmail(email) { // see:
            var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            console.log("inside validEmail");
            return reEmail.test(email);

        }

        function validPhone(phone) { // see:
            var rePhone = /^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/i;
            console.log("inside validPhone");

            return rePhone.test(phone);
        }

        // function validateHuman(honeypot) {
        //     console.log("inside validateHuman");
        //
        //     if (honeypot) {  //if hidden form filled up
        //         console.log("Robot Detected!");
        //         return true;
        //     } else {
        //         console.log("Welcome Human!");
        //     }
        // }

        function reset() {
            console.log("inside reset");

            vm.name = "";
            vm.phone = "";
            vm.email = "";
            vm.message = "";
            vm.honeypot = "";
            vm.data= "";
            console.log("Form values successfully reset");
        }

        vm.handleFormSubmit = function (data) {
            console.log("Beginning handleFormSubmit");
            if (!validPhone(data.phone)) {
                vm.phoneInvalid = true;
                alert.show("Phone number invalid");

                console.log("Phone number invalid");
                return false;
            }
            if (!validEmail(data.email)) {   // if email is not valid show error
                vm.emailInvaild = true;
                alert.show("Email address invalid");
                console.log("Email address invalid");
                return false;
            } else {
                var googleScript = "https://script.google.com/macros/s/AKfycbypkbM95TFTuce0-LPD5EcKlMTsjchJ0UepQG8b5D03hIC35BeH/exec";
                var encoded = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
                }).join('&');
                console.log("Sending data via $http.post");
                $http({
                    method: 'POST',
                    url: googleScript,
                    data: encoded,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                        vm.thankYou = true;
                        reset();
                        console.log("Form submit completed");
                        document.getElementById("thankyou_message").style.display="block";
                        document.getElementById("gform").style.display="none";

                        return true;
                    },
                    function(response) { // optional
                        console.log("Form submit failed");
                        reset();
                        return false;
                    });
            }
        };
    };

    angular.module('cinema').controller('contactController', ['$http', contactController])})()