"use strict";
(function () {

    angular.module('cinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"

        }).state("allfilms", {
            url:"/allfilms",
            templateUrl:"app/feature/allfilms/allfilms.html"

        }).state("signin", {
            url:"/singin",
            templateUrl:"app/feature/sigin/sigin.html"

        }).state("contact", {
            url:"/contact",
            templateUrl:"app/feature/contact/contact1.html"

        }).state("faq", {
            url:"/faq",
            templateUrl:"app/feature/FAQ/faq.html"

        }).state("futureFilms", {
            url:"/futureFilma",
            templateUrl:"app/feature/futurefilms/FutureFilms.html"

        }).state("pricing", {
            url:"/pricing",
            templateUrl:"app/feature/price/pricing.html"

        })
    });
}());