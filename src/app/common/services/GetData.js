/*--------------------- GetData Service ---------------------*/
function GetData($http) {
    this.getData = getData;
    
    function getData(file) {
        console.log("here")
        return $http({
            method: 'GET',
            url: '../songs.json'
        })
    }
}
angular.module('root').service('GetData', GetData)