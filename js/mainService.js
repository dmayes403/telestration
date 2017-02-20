angular.module('myApp')
    .service('mainServ', function($http){

      // this.getData = function(){
      //   // return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC&rating=g')
      // return $http.get('http://api.giphy.com/v1/gifs/search?q=legos&api_key=dc6zaTOxFJmzC&rating=g')
      //     .then(function(response){
      //       console.log(response)
      //       return response.data.data;
      //     })
      //   }





      this.getData = function(searchText){
        // return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC&rating=g')
      return $http.get('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=dc6zaTOxFJmzC&rating=pg')
          .then(function(response){
            console.log(response)
            return response.data.data;
          })
        }


        //filter it down to the exact object that I need//

        //make a function that pushes the object current object into an array to be saved for later//
    })
