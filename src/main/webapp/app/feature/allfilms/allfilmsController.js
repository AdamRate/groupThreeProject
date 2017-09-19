(function() {

    var aFilmsController =  function($state, filmLoader, $scope) {
        var vm = this;

        vm.filmList = [];
        vm.filmList = filmLoader['filmDat'];
        $scope.filmList = filmLoader['filmDat'];

        // if our service doesn't have a film list - populate it.
        if(filmLoader['filmDat'] === undefined){
            filmLoader['addData']();
        }

        vm.navigate = function(movieNum){
            // console.log("works, sort of"); //indeed it does
            // only navigate if we can access the database
            if(filmLoader['filmDat'] !== undefined) {
                filmLoader['setFilmNo'](movieNum);
                // here is where I commit our navigation
                $state.go('specificFilm');
            }
            else{ window.alert("Warning - our database hasn't loaded yet; please wait.")}
        }
    };

    angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', '$scope', aFilmsController]);
}());