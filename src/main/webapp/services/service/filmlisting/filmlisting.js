(function() {

    var filmLoader =  function( filmDal) {
        var msg = {};
        msg.filmNo = 0;
        msg.filmDat = undefined;

        msg.retrieveData = function(){return msg.filmDat};
        msg.setFilmNo = function(val){ msg.filmNo = val;}

        msg.addData = function() {

            filmDal.getFilmList("https://raw.githubusercontent.com/MorickClive/hangman/master/res/movies.json").then(
                function (results) {
                    msg.filmDat = results;
                }
            );
        }

        // episode 11: https://www.youtube.com/watch?v=rHmk0UhJSb4
        // episode 12: https://www.youtube.com/watch?v=CqaoKt1Gvyk

        return msg;
    };


    angular.module('cinema').service('filmLoader', ['filmDal', filmLoader]);
}());