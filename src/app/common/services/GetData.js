/*--------------------- GetData Service ---------------------*/
function GetData($http, $location) {
    this.getData = getData;
    
    function getData2(file) {
        return $http({
            method: 'GET',
            url: "https://" + $location.host() + "/" + file
        })
    }

    function getData(file) {
        return $http({
            method: 'GET',
            url: "../json/" + file
        })
    }
}
angular.module('root').service('GetData', GetData)