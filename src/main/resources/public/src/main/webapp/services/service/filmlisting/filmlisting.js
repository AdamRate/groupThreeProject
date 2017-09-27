(function() {

    var filmLoader =  function( filmDal, $q, $state) {
        var memory = {};
        memory.deferred = $q.defer();
        memory.filmNo = 0;

        filmDal.getFilmList("https://raw.githubusercontent.com/MaryOpenshaw/AngualrJS/master/movies.json").then(
            function (results) {
                /* // Helps show details about data we are pulling in.
                console.log("Result from deferred:");
                console.log(results);
                */
                memory.deferred.resolve(results);
            }
        );

        memory.getFilms = function ()
        {
            return memory.deferred.promise;
        }

        memory.retrieveData = function(){return deferred.promise()};
        memory.setFilmNo = function(val){ memory.filmNo = val;}

        memory.navigate = function(val){
                memory.filmNo = val;
                $state.go('specificFilm');
        };

        return memory;
    };


    angular.module("cinema").service("filmLoader", ["filmDal","$q", "$state", filmLoader]);
}());
