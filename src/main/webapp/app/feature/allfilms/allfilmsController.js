(function() {

    var aFilmsController =  function($state, filmLoader) {
        var vm = this;

        vm.navigate = function(state){
            // console.log("works, sort of"); //indeed it does

            // this code will direct data to our service, this data will populate the specific film page.
            filmLoader['addData']("name");

            // here is where I commit our navigation
            $state.go('specificFilm');
        }
    };

    angular.module('cinema').controller('aFilmsController', ['$state', 'filmLoader', aFilmsController]);
}());