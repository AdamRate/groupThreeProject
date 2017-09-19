(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;
        vm.filmList = [];

        var promise = filmLoader['getFilms']();
        promise.then(function (data) {
            vm.filmList = data;
        });

        vm.navigate = function (movieNum) {
            // only navigate if we can access the database
                if (vm.filmList.length > 0) {
                    filmLoader['setFilmNo'](movieNum);
                    // here is where I commit our navigation
                    $state.go('specificFilm');
                }
                else {
                    window.alert("Warning - our database hasn't loaded yet; please wait.");
                }
        };
    }

        angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', aFilmsController]);
    }());