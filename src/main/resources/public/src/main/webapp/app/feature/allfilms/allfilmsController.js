(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;
        vm.filmList = [];

        var promise = filmLoader['getFilms']();
        promise.then(function (data) {
            vm.filmList = data;
        });

        vm.navigate = function (movieNum) { filmLoader['navigate'](movieNum) };
    }

          angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', aFilmsController]);
    }());