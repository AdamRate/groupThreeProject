(function() {

    var filmLoader =  function($http) {
        var msg = {};
        msg.list = ["this is the message"];
        msg.filmDat = {};
        //console.log("my msg length: " + msg.list.length);
        msg.add = function(val){ msg.list.push(val);}

        msg.addData = function(name){
            console.log("writing "+name+":data to service.");

            //this is where we bind the JSON
                // read entire list from web - isolate the entry we want and then assign to "filmDat"
                // the webpage should be happy with that
            msg.filmDat = [{
                "name" : "Okja",
                "director" : "Bong Joon Ho",
                "releasedate" : "19th May, 2017",
                "age" : "U",
                "runtime" : "1 hr, 58mins",
                "desc" : "Meet Mija, a young girl who risks everything to prevent a powerful, multi-national company from kidnapping her best friend - a fascinating animal named Okja.",
                "trailer" : "https://www.youtube.com/embed/AjCebKn4iic",
                "img" : "img/movies/okja-poster.jpg",
                "castList" : ["Susan","Mary","Johnathan","Chris","Sanders", "Billabob"]
            }]
            // just a reference to help for later http://www.bbfc.co.uk/what-classification/u
            //@note delete us after JSON system entirely complete.

        }

        msg.retrieveData = function(){return  msg.filmDat};

        return msg;
    };


    angular.module('cinema').service('filmLoader', ['$http', filmLoader]);
}());