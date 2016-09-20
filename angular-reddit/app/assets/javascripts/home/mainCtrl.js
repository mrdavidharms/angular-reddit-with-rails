angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.addPost = function(){
      if (!$scope.title || $scope.title === '') {return;}
      posts.create({
        title: $scope.title,
        link: $scope.link,
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.addVote = function(post) {
      post.upvotes += 1;
    };
    $scope.downVote = function(post) {
      post.upvotes -= 1;
    };
    $scope.posts = posts.posts;
  }]);
