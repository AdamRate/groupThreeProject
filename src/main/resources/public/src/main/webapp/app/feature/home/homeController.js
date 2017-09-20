(function() {

    var HomeController =  function(filmLoader, $state) {
        var vm = this;
        // holds a global set
        vm.filmList = [];

        var promise = filmLoader['getFilms']();
        promise.then(function (data) {
            // populate 3x3 grid
            vm.filmList = data.slice(0,9);
        });

        //DIY: this is dup data
        vm.navigate = function (movieNum) { filmLoader['navigate'](movieNum); };
    };

    angular.module('cinema').controller('HomeController', ['filmLoader', '$state', HomeController]);
}());