(function() {

    var sFController =  function(filmLoader, $state, $sce) {
        var vm = this;

        vm.filmDat = filmLoader['filmDat'][0];

        // redirect to somewhere more meaningful
        if(vm.filmDat === undefined){
            console.error("No information for client to read - redirecting to film listings");
            $state.go('allfilms');
        }
        else {
            vm.castList = (function () {
                    var str = "";
                    for (var x = 0; x < vm.filmDat['castList'].length; x++) {
                        if (x === vm.filmDat['castList'].length - 1) {
                            str += vm.filmDat['castList'][x] + ".";
                        }
                        else {
                            str += vm.filmDat['castList'][x] + ", ";
                        }
                    }
                    return str;
                })();

            vm.videoEmbed = $sce.trustAsResourceUrl(vm.filmDat['trailer']);
        }

    };

    angular.module('cinema').controller('sFController', ['filmLoader', '$state', '$sce', sFController]);
}());