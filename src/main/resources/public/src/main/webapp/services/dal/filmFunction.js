"use strict";

(function () {

    angular.module("cinema").service("filmDal", ["dal", filmDal]);

    function filmDal (dal) {

        this.getFilmList = function (url) {
            return dal.http.GET(url);
        };

        /*this.saveBook = function (bookToSave) {
            return dal.http.POST("", bookToSave);
        };

        this.updateBook = function (bookToUpdate) {
            return dal.http.PUT("", bookToUpdate);
        };

        this.deleteBook = function (bookToDelete) {
            return dal.http.DELETE("", bookToDelete);
        };*/

    }
}());
