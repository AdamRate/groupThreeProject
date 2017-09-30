
(function() {

    var signInService = function (filmDal, $http) {
        var vm = this;

        vm.makeNewUser = function (username, name, email, age, phone, pass) {
            var NewUser = {
                "Username": username,
                "FullName": name,
                "Email": email,
                "Age": age,
                "Phone": phone,
                "Password": pass,
                "AccessLevel": 'customer'
            };

            fetch('http://localhost:8081/CreateUser', {
                method: 'POST', mode: 'cors', body: JSON.stringify(NewUser)
            }).then(function successCallBack(response) {
                console.log(response.data);
                //console.log(OldUser);
                //console.log(JSON.stringify(OldUser));
                document.getElementById('regSuccess').style.display = "inline-block";
                document.getElementById('register').style.display = "none";
            }, function errorCallback(response) {
                alert("Failed to Register");
                console.log(response);
            });
            NewUser = null;
        };

        vm.attemptToSignIn = function (username, pass) {

            $http.get('http://localhost:8081/SignIn?Username=' + username + '&Password=' + pass).then(function successCallback(result) {

                if (result.data[0]) {

                    console.log("GET RESULT: " + result.data);
                    console.log(JSON.stringify(result.data));
                    document.getElementById('successSign').style.display = "inline-block";
                    document.getElementById('showMeDetails').style.display = "inline-block";
                    document.getElementById('signIn').style.display = "none";
                    console.log(result.data.FullName);
                    console.log(result.data[0].FullName);

                    document.getElementById('showMeFullName').innerHTML += result.data[0].FullName;
                    document.getElementById('showMeUsername').innerHTML += result.data[0].Username;
                    document.getElementById('showMeEmail').innerHTML += result.data[0].Email;
                    document.getElementById('showMePassword').innerHTML += result.data[0].Password;
                    document.getElementById('showMePhone').innerHTML += result.data[0].Phone;
                    document.getElementById('showMeAge').innerHTML += result.data[0].Age;
                    document.getElementById('showMeUserID').innerHTML += result.data[0].UserID;
                    document.getElementById('showMeAccessLevel').innerHTML += result.data[0].AccessLevel;
                } else {
                    alert("Failed to Sign in");
                    console.log(result.data + "didnt work");
                }

            });


        };


        vm.remindDetails = function (email) {
            $http.get('http://localhost:8081/ForgotPassword?Email=' + email).then(function successCallback(result) {
                if (result.data[0]) {

                    console.log("GET RESULT: " + result.data);
                    console.log(JSON.stringify(result.data));
                    document.getElementById('successEmail').style.display = "inline-block";
                    document.getElementById('showMeDetails').style.display = "inline-block";
                    document.getElementById('forgot').style.display = "none";
                    console.log(result.data.FullName);
                    console.log(result.data[0].FullName);

                    document.getElementById('showMeFullName').innerHTML += result.data[0].FullName;
                    document.getElementById('showMeUsername').innerHTML += result.data[0].Username;
                    document.getElementById('showMeEmail').innerHTML += result.data[0].Email;
                    document.getElementById('showMePassword').innerHTML += result.data[0].Password;
                    document.getElementById('showMePhone').innerHTML += result.data[0].Phone;
                    document.getElementById('showMeAge').innerHTML += result.data[0].Age;
                    document.getElementById('showMeUserID').innerHTML += result.data[0].UserID;
                    document.getElementById('showMeAccessLevel').innerHTML += result.data[0].AccessLevel;
                } else {
                    alert("Failed to Sign in");
                }

            })

        };
    };

    angular.module("cinema").service("signInService", ["filmDal", "$http", signInService]);
}());