// angular.module('myApp')
//     .controller('mainCtrl', function($scope, mainServ){
//       $scope.getSmurfs = function(){
//         mainServ.getData().then(function(response){
//             $scope.smurfs = response;
//           }
//         )
//       }
//     })




angular.module('myApp')
    .controller('mainCtrl', function($scope, mainServ){
      $scope.getData = function(searchText){
        $scope.rando = Math.floor(Math.random()*25)
        mainServ.getData(searchText).then(function(response){
            $scope.giphys = response;
            console.log($scope.giphys)

          }
        )
      }
    })
