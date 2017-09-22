(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;
        vm.filmList = [];
        vm.reverse = false;
        var promise = filmLoader['getFilms']();
        promise.then(function (data) {
            vm.filmList = data;
        });

       /* vm.navigate = function (movieNum) { filmLoader['navigate'](movieNum) };


        vm.doSortBy= function(atribute) {
        vm.doSortBy = atribute;
        vm.reverse= !vm.reverse;


        }*/





    }

        angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', aFilmsController]);
    }());