'use strict';

angular.module('myApp.addItem', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-item', {
            templateUrl: 'add-item/add-item.html',
            controller: 'AddItemCtrl'
        });
    }])

    .controller('AddItemCtrl', ['$scope', 'Restangular', '$location', '$http', function ($scope, Restangular, $location, $http) {
        // Takes input from the form. Currently 'user' and 'status' are hard coded
        $scope.item = {user: 1, status: "Available"};

        // Save fields to the item object
        $scope.add = function () {
            var file = document.getElementById('file').files[0],
                reader = new FileReader();
            reader.onload = function(e){
                $scope.item.picture = 'data:image/png;base64,' + btoa(e.target.result);
                $scope.$apply();
            };
            reader.readAsBinaryString(file);
        };

        $scope.addItem = function() {
            Restangular.all('add-item/').customPOST($scope.item).then(function () {
                document.getElementById('file').value = null;
                $scope.$apply();
                $scope.item.picture = null;
                $location.path('my-items');
            }, function (error) {
                alert("There was an error saving your item: " + error.status);
            })
        };

      $scope.conditions = ['Poor', 'Fair', 'Good', 'Excellent', 'Like New', 'New']

    }]);

'use strict';

var myApp = angular.module('sampleApp', ['AngularFormsModule', 'SampleFormDefinition']);

myApp.controller('myController', ['$scope', 'AngularForms', 'SampleForm',
    function($scope, AngularForms, SampleForm) {

    var form = AngularForms({ scope: $scope, targetId: 'basicForm', form: SampleForm });
    form.inject();

    $scope.sources = [
            { id: 'google', label: 'Google' },
            { id: 'yahoo', label: 'Yahoo!' },
            { id: 'bing', label: 'Bing' },
            { id: 'facebook', label: 'Facebook' },
            { id: 'word', label: 'A friend told me' },
            { id: 'other', label: 'Other' }
            ];

    }]);