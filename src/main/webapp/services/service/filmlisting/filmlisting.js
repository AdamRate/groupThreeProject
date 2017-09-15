(function() {

    var filmLoader =  function( filmDal) {
        var msg = {};
        msg.filmNo = 0;
        msg.filmDat = undefined;

        //console.log("my msg length: " + msg.list.length);
        msg.setFilmNo = function(val){ msg.filmNo = val;}

        msg.addData = function() {
            console.log("writing film data to service.");

            //this is where we bind the JSON
            // read entire list from web - isolate the entry we want and then assign to "filmDat"
            // the webpage should be happy with that
            filmDal.getFilmList("https://raw.githubusercontent.com/MorickClive/hangman/master/res/movies.json").then(
                function(results){
                    msg.filmDat = results;
                    console.log(results);
                }
            );

            // just a reference to help for later http://www.bbfc.co.uk/what-classification/u
            //@note delete us after JSON system entirely complete.

        }

        msg.retrieveData = function(){return  msg.filmDat};

        return msg;
    };


    angular.module('cinema').service('filmLoader', ['filmDal', filmLoader]);
}());
    angular.module("cinema").service("filmLoader", ['$http', filmLoader]);