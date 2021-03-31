function PortalController($scope, GetData, SolutionsModel, $http, $location) {
    const $ctrl = this

    function getData2(file) {
        return $http({
            method: 'GET',
            url: "https://" + $location.host() + "/" + file
        })
    }

    $ctrl.$onInit = () => {
        getData2('p')
            .then((res) => {
                console.log(res);
                if (res["data"]["playerstats"]["success"] == false) { // Private profile
                    if (res["data"]["playerstats"]["error"] == "Requested app has no stats")
                        $ctrl.pstatus = "The game \"Portal 2\" has not been purchased on steam account \"mrtress23\". Contact your local hunt admin if you wish to change the target steam profile, or if this information is innacurate.";
                    else if (res["data"]["playerstats"]["error"] == "Profile is not public")
                        $ctrl.pstatus = "Steam account \"mrtress23\" is private. To fix, go to your steam profile -> edit profile -> privacy settings -> change every option to public (especially game details). Contact your local hunt admin if you wish to change the target steam profile, or if this information is innacurate.";
                    else {
                        $ctrl.pstatus = "Unknown error. Contact your local hunt admin";
                        console.log(res);
                    }
                } else {
                    if (res["data"]["playerstats"]["achievements"][34]["achieved"] == 0) {
                        $ctrl.pstatus = "Achievement \"You Saved Science\" not yet completed. Contact your local hunt admin if this is incorrect."
                    } else {
                        SolutionsModel.pl()
                            .then((res) => {
                                $ctrl.pstatus = res;
                            })
                    }
                }
            })
    }
}



angular
    .module('components.portal')
    .controller('PortalController', ['$scope', 'GetData', 'SolutionsModel', '$http', '$location', PortalController])