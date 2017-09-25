"use strict";

(function () {

    angular.module("cinema").service("filmDal", ["dal", filmDal]);

    function filmDal (dal) {

        this.getFilmList = function (url) {
            return dal.http.GET(url);
        };
    }
}());
