/**
 * Created by surajnagaraj on 10/27/16.
 */
(function () {
    angular
        .module("PsychWebApp")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService)
    {
        var vm = this;
        vm.login = login;

        function login(user) {
            if(user) {

                var user = UserService.login(user);
                if(user) {
                    console.log(user);
                    UserService.setCurrentUser(user);
                    $location.url("/location");
                }
                  /*  .success(function(response) {
                        UserService.setCurrentUser = response;
                        $location.url("/location")
                    })*/
            }


        }



    }

})();