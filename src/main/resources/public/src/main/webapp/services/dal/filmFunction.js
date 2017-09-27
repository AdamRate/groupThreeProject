"use strict";

(function () {

    angular.module("cinema").service("filmDal", ["dal", filmDal]);

    function filmDal (dal) {

        this.getFilmList = function (url) {
            return dal.http.GET(url);
        };

        this.sendUserData = function (url, item) {
            return dal.http.POOP(url, item);
        };

        this.signMeIn = function (url, item) {
            return dal.http.GET(url, item);
        }
    }
}());
