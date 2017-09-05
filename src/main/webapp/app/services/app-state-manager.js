"use strict";
(function () {

    angular.module('cinema').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/feature/home/home.html"

        }).state("about", {
            url: "/about",
            templateUrl: "app/feature/about/about.html"

        }).state("allfilms", {
            url:"/allfilms",
            templateUrl:"app/feature/allfilms/allfilms.html"

        }).state("blog", {
             url:"/blog",
             templateUrl:"app/feature/blog/blog-post.html"

        }).state("blog1", {
        url:"/blog1",
        templateUrl:"app/feature/blog1/blog-home-1.html"

        }).state("blog2", {
            url:"/blog2",
             templateUrl:"app/feature/blog2/blog-home-2.html"

        }).state("contact", {
             url:"/contact",
                templateUrl:"app/feature/contact/contact.html"

        }).state("error", {
             url:"/error",
                 templateUrl:"app/feature/error/404.html"

        }).state("faq", {
            url:"/faq",
            templateUrl:"app/feature/FAQ/faq.html"

        }).state("fullW", {
             url:"/fullW",
            templateUrl:"app/feature/full-width/full-width.html"

        }).state("futureFilms", {
            url:"/futureFilma",
            templateUrl:"app/feature/futurefilms/FutureFilms.html"

        }).state("portfolio", {
            url:"/portfolio",
            templateUrl:"app/feature/portfolio/portfolio-item.html"

        }).state("portfolio1", {
            url:"/portfolio1",
            templateUrl:"app/feature/portfolio1/portfolio-1-col.html"

        }).state("portfolio2", {
            url:"/portfolio2",
            templateUrl:"app/feature/portfolio2/portfolio-2-col.html"

        }).state("portfolio3", {
            url:"/portfolio3",
            templateUrl:"app/feature/portfolio3/portfolio-3-col.html"

        }).state("portfolio4", {
            url:"/portfolio4",
            templateUrl:"app/feature/portfolio4/portfolio-4-col.html"

        }).state("pricing", {
            url:"/pricing",
            templateUrl:"app/feature/pricing/pricing.html"

        }).state("services", {
            url:"/services",
            templateUrl:"app/feature/services/services.html"

        }).state("sidebar", {
            url:"/sidebar",
            templateUrl:"app/feature/sidebar/sidebar.html"

        }).state("siginin", {
            url:"/signin",
            templateUrl:"app/feature/signin/signin.html"

        }).state("signin1", {
            url:"/signin1",
            templateUrl:"app/feature/signin1/signIN (2).html"

        })
    });
}());