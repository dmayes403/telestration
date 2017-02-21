angular.module('myApp')
    .service('mainServ', function($http){

      this.getData = function(searchText){
        // return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC&rating=g')
      return $http.get('http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=dc6zaTOxFJmzC&rating=pg')
          .then(function(response){
            var finalArr = response.data.data.map(function(item){
              return {
                ID: item.id,
                Uploaded: item.import_datetime,
                Name: item.slug,
                Type: item.type,
                Rating: item.rating,
                Image: item.images.downsized_large.url,
                Comments: ['This is the first comment.', 'How about a second comment!'],
                ReviewTotal: 0,
                ReviewClicks: 0,
              }
            })
            console.log(finalArr)
            return finalArr
          })
        }


      allPostings = [];
      this.makePost = function(post){
        allPostings.unshift(post);
        localStorage.setItem(1, JSON.stringify(allPostings))
      }

      this.getPosts = function(){
          return JSON.parse(localStorage.getItem(1));
      }

      this.addComment = function(commentText, id){
          var addingComment =  JSON.parse(localStorage.getItem(1));
          for(var key in addingComment){
            if(addingComment[key].ID === id){
              addingComment[key].Comments.unshift(commentText);

            }
          }
          // console.log(localStorage.getItem(1))
          localStorage.setItem(1, JSON.stringify(addingComment));
          // console.log(localStorage.getItem(1))
      }

      this.addReview = function(review, id){
        console.log(review, id);
        var addingReview =  JSON.parse(localStorage.getItem(1));
        for(var key in addingReview){
          if(addingReview[key].ID === id){
            console.log(addingReview[key].ReviewTotal);
            addingReview[key].ReviewTotal+=review;
            console.log(addingReview[key].ReviewTotal);
            addingReview[key].ReviewClicks++;
          }
        }
        // console.log(localStorage.getItem(1))
        localStorage.setItem(1, JSON.stringify(addingReview));
        // console.log(localStorage.getItem(1))
      }
    })
