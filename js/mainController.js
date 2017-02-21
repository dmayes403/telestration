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
            mainServ.makePost($scope.giphys[$scope.rando])
            $scope.allPostings = mainServ.getPosts();
          }
        )
      }

      $scope.addComment = function(commentText, id){
        mainServ.addComment(commentText, id);
        $scope.allPostings = mainServ.getPosts();
      }

      $scope.addReview = function(review, id){
        mainServ.addReview(review, id);
        $scope.allPostings = mainServ.getPosts();
      }
    })
