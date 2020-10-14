/*--------------------- GetData Service ---------------------*/
function GetData($http) {
    this.getData = getData;
    
    function getData(file) {
        return $http({
            method: 'GET',
            url: '../json/' + file
        })
    }
}
angular.module('root').service('GetData', GetData)