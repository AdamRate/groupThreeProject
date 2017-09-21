"use strict";
(function () {

    angular.module('cinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "src/main/webapp/app/feature/home/home.html"

        }).state("allfilms", {
            url:"/allfilms",
            templateUrl:"src/main/webapp/app/feature/allfilms/allfilms.html"

        }).state("specificFilm", {
            url:"/specificFilm",
            templateUrl:"src/main/webapp/app/feature/specificfilm/specificfilm.html"

        }).state("signin", {
            url:"/signin",
            templateUrl:"src/main/webapp/app/feature/signin/signin.html"

        }).state("contact", {
            url:"/contact",
            templateUrl:"src/main/webapp/app/feature/contact/contact1.html"

        }).state("faq", {
            url:"/faq",
            templateUrl:"src/main/webapp/app/feature/FAQ/faq.html"

        }).state("futureFilms", {
            url:"/futureFilms",
            templateUrl:"src/main/webapp/app/feature/futurefilms/FutureFilms.html"

        }).state("pricing", {
            url:"/price",
            templateUrl:"src/main/webapp/app/feature/price/pricing.html"

        }).state("promo", {
            url:"/promo",
            templateUrl:"src/main/webapp/app/feature/promo/promo.html"

        }).state("team", {
            url:"/team",
            templateUrl:"src/main/webapp/app/feature/team/team.html"
			
        })
    });
}());