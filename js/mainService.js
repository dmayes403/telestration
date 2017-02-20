angular.module('myApp')
    .service('mainServ', function($http){

      this.getData = function(searchText){
        // return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC&rating=g')
      return $http.get('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=dc6zaTOxFJmzC&rating=pg')
          .then(function(response){
            // console.log(response)
            var finalArr = response.data.data.map(function(item){
              return {
                Uploaded: item.import_datetime,
                Name: item.slug,
                Type: item.type,
                Rating: item.rating,
                Image: item.images.downsized_large.url
              }
            })
            console.log(finalArr)
            return finalArr
          })
        }


      allPostings = [];
      this.makePost = function(post){
        allPostings.push(post);
        console.log(allPostings);
        localStorage.setItem(1, JSON.stringify(allPostings))
      }

      this.getPosts = function(){
          return JSON.parse(localStorage.getItem(1));
      }
        //make a function that pushes the object current object into an array to be saved for later//
    })
