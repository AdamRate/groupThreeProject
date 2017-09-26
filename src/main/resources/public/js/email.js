"use strict";

(function() {

    var contactController =  function($http) {
        var vm = this;

        vm.phoneInvalid = false;
        vm.emailInvaild = false;
        vm.thankYou = false;

        var empty = {name: "", phone: "", email: "", message: "", honeypot: ""};

        vm.offOverlay = function () {
            vm.thankYou = false;
        };

        function validEmail(email) { // see:
            var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return reEmail.test(email);

        }

        function validPhone(phone) { // see:
            var rePhone = /^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/i;

            return rePhone.test(phone);
        }

        function reset() {
            vm.name = "";
            vm.phone = "";
            vm.email = "";
            vm.message = "";
            vm.honeypot = "";
            vm.data= "";
        }

        vm.handleFormSubmit = function (data) {
            if (!validPhone(data.phone)) {
                vm.phoneInvalid = true;
                return false;
            }
            if (!validEmail(data.email)) {   // if email is not valid show error
                vm.emailInvaild = true;
                return false;
            } else {
                var googleScript = "https://script.google.com/macros/s/AKfycbypkbM95TFTuce0-LPD5EcKlMTsjchJ0UepQG8b5D03hIC35BeH/exec";
                var encoded = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
                }).join('&');
                $http({
                    method: 'POST',
                    url: googleScript,
                    data: encoded,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                        vm.thankYou = true;
                        reset();
                        document.getElementById("thankyou_message").style.display="block";
                        document.getElementById("gform").style.display="none";

                        return true;
                    },
                    function(response) { // optional
                        reset();
                        return false;
                    });
            }
        };
    };

    angular.module('cinema').controller('contactController', ['$http', contactController])})()