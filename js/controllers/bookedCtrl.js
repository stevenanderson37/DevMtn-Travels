angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
  // $scope.locationCity = mainSrv.travelInfo;
  for (var i = 0; i < mainSrv.travelInfo.length; i++) {
    if ($stateParams.id == mainSrv.travelInfo[i].id) {
      $scope.bookedCity = mainSrv.travelInfo[i];
    }
  }
})
