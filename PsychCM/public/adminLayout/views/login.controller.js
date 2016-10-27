/**
 * Created by surajnagaraj on 10/27/16.
 */
(function () {
    angular
        .module("PsychWebApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location)
    {
        $scope.$location = $location;
    }

})();