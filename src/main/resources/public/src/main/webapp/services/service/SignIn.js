
(function() {

    var signInService = function (filmDal, $http) {
        var vm = this;

        vm.makeNewUser = function (username, name, email, age, phone, pass) {
            console.log("started makeNewUser 1550");
            // var NewUser = "INSERT INTO user(Username, Password, AccessLevel) VALUES('"+username+"','"+pass+"','customer')";
            // var NewUser = "INSERT INTO user(Username, FullName, Email, Age, Phone, Password, AccessLevel) VALUES('"+username+"','"+name+"','"+email+"','"+age+"','"+phone+"','"+pass+"','customer')";
            var NewUser = {
                "Username": username,
                "FullName": name,
                "Email": email,
                "Age": age,
                "Phone": phone,
                "Password": pass,
                "AccessLevel": 'customer'
            };
            console.log(NewUser);
            // console.log(document.getElementById('regUsername').value);
            console.log("about to start sendUserDAta");
            // filmDal.sendUserData('http://localhost:8081/CreateUser',NewUser
            // ).then(function(result)
            // {
            //     console.log("POST RESULT: " + result.data);
            //     console.log(JSON.stringify(result.data));
            //     document.getElementById('regSuccess').style.display= "inline-block";
            //     document.getElementById('register').style.display= "none";
            // });

            // NewUser=null;

            // THIS WORKS FOR THE LOCAL HOST
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

        // Please resolve ARRAY_OF_USER_EMAILS and ARRAY_OF_USER_PASSWORDS, no clear context.
        // realSignIn(var) does not appear to be linked to any real functionality.
        vm.attemptToSignIn = function (username, pass) {
            // var OldUser= {
            //     "Username": username,
            //     "Password": pass
            // };
            // getFunction();
            // $http.get({
            //     // method: 'GET',
            //     url: 'http://localhost:8081/SignIn?Username='+username+'&Password='+pass,
            //     // body: JSON.stringify(OldUser)
            // }).then(function successCallback(result) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //     console.log("GET RESULT: " + result.data);
            //     console.log(JSON.stringify(result.data));
            //     document.getElementById('successSign').style.display= "inline-block";
            //     document.getElementById('signIn').style.display= "none";
            // }, function errorCallback(response) {
            //     alert("Failed to Sign in");
            //     console.log(response);
            // });

            // filmDal.signMeIn('http://localhost:8081/SignIn',OldUser
            // ).then(function(result)
            // {
            //     console.log("GET RESULT: " + result.data);
            //     console.log(JSON.stringify(result.data));
            //     document.getElementById('successSign').style.display= "inline-block";
            //     document.getElementById('signIn').style.display= "none";
            // });

            $http.get('http://localhost:8081/SignIn?Username=' + username + '&Password=' + pass).then(function successCallback(result) {
                // this callback will be called asynchronously
                // when the response is available
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

            // fetch('http://localhost:8081/SignIn?Username='+username+'&Password='+pass, {
            //     method: 'GET', mode: 'cors'
            //     // body: JSON.stringify(OldUser)
            // }).then(function successCallBack(response) {
            //     console.log(response.data);
            //     //console.log(OldUser);
            //     //console.log(JSON.stringify(OldUser));
            //     document.getElementById('successSign').style.display= "inline-block";
            //     document.getElementById('signIn').style.display= "none";
            // } , function errorCallback(response) {
            //     alert("Failed to Sign in");
            //     console.log(response);
            //     });
            // OldUser=null;

        };

        // Please resolve ARRAY_OF_USER_EMAILS, no clear context.
        // SEND_EMAIL_TO(var) does not appear to be linked to any real functionality.
        vm.remindDetails = function (email) {
            $http.get('http://localhost:8081/ForgotPassword?Email=' + email).then(function successCallback(result) {
                // this callback will be called asynchronously
                // when the response is available
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
                    console.log(result.data + "didnt work");
                }

            })

        };
    };

    angular.module("cinema").service("signInService", ["filmDal", "$http", signInService]);
}());