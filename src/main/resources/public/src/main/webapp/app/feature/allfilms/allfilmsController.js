(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;
        vm.filmList = [];
        vm.reverse = false;
        vm.sortBy = 'name';

        var promise = filmLoader["getFilms"]();
        promise.then(function (data) {
            vm.filmList = data;
        });

        vm.navigate = function (movieNum) {
            filmLoader["navigate"](movieNum); };
        vm.doSortBy = function(value){
            if(value === vm.sortBy){
                vm.reverse = !vm.reverse;
            }
            vm.sortBy = value;
        }

    };

        angular.module("cinema").controller("aFilmsController", ['$state', 'filmLoader', aFilmsController]);
    }());