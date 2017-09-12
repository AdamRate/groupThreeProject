(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;

        vm.navigate = function(state){

            filmLoader['addData']("name");

            $state.go('specificFilm');
        }
    };

    angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', aFilmsController]);
}());