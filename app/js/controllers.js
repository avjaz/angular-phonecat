'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', 'Phone',
  function($scope, $routeParams, $http, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
      
    $scope.newImage = {
        name: '',
        size: 0
    };
      
    $scope.selectFile = function() {
        angular.element('#inputFile').click();
    };
      
    $scope.addImage = function() {
        if ($scope.newImage.name != '') {
            $scope.phone.images.push($scope.newImage.name);
        }
        /* TODO - should PUT image file to remote server */ 
    };
      
    $scope.deleteImage = function(index) {
        $scope.phone.images.splice(index, 1);
    };
      
    $scope.editPhone = function(phone) {
        console.log(phone);
        /* TODO - should POST this server side 
        $http.post('phones/' + phone.id + '.json', phone)
            .success(function(data){  })
            .error(function(data) {alert('Could not save phone: ' + data);} //FIXME - better error                                      handling!)
        */
        window.location.hash='/phones';
    };
  }]);
