/**
 * Created by surajnagaraj on 10/27/16.
 */
(function() {
    'use strict';
    angular
        .module("PsychWebApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope) {
        var service = {
            login: login,
            logout: logout,
            setCurrentUser: setCurrentUser
        };

        return service;

        function login(user) {
            return user;
        }

        function logout() {
            $rootScope.currentUser = null;
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }
    }
})();