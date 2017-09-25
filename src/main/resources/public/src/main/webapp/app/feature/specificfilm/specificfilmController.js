(function() {

    var sFController =  function(filmLoader, $state, $sce) {
        var vm = this;
        vm.filmDat = [];

        // load film data
        var promise = filmLoader['getFilms']();
        promise.then(function (data) {
            ////
            // When film data loaded, perform this.
            ////

            // load our specific data by movie value stored in service.
            vm.filmDat = data[filmLoader['filmNo']];
            //format array string to singular string.
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
            // consider security for videos
            vm.videoEmbed = $sce.trustAsResourceUrl(vm.filmDat["trailer"]);
        });

    };

    angular.module("cinema").controller("sFController", ['filmLoader', '$state', '$sce', sFController]);
}());