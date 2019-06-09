(function(){
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.name="";
    $scope.message="";
    $scope.CheckNumber=function () {
        var name = $scope.name.split(',');
        // console.log($scope.name)
        // console.log($scope.name.length)
        // console.log(name)
        // console.log(name.length);
        if ($scope.name.length == 0) {
            $scope.message="please enter some data"
        } else if ($scope.name.length > 0 && name.length > 0 && name.length <= 3) {
            $scope.message="Enjoy!"
        } else {
            $scope.message="Too much!"
        }




    }




}



})();