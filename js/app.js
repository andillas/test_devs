/**
 * Created by eugenio on 10/02/2017.
 */
var angularTodo = angular.module('lostsysApp', []);

function mainController($scope, $http) {
    $scope.names = [ ];

    $http.get('model/model.php')
            .success(function(data) {
                    $scope.names = eval(data);
                    console.log(data)
                })
            .error(function(data) {
                    console.log('Error: ' + data);
            });

    $scope.addNom = function() {
        $http.post('model/model.php', { op: 'append', nom: $scope.nom, telefon: $scope.telefon } )
                .success(function(data) {
                        $scope.names = eval(data);
                        console.log(data)
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        $scope.nom="";
        $scope.telefon="";
        }

    $scope.delNom = function( nom ) {
        if ( confirm("Are you sure you want to delete "+nom+"'s user?") ) {
            $http.post('model/model.php', { op: 'delete', nom: nom } )
                .success(function(data) {
                        $scope.names = eval(data);
                        console.log(data)
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
            }
        }

    }
