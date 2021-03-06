
angular.module('flapperNews', ['ui.router'])
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }])

  .factory('posts', [function(){
    var object = {
      posts: []
    };
    return object;
  }])



  .controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
      $scope.addPost = function(){
        if (!$scope.title || $scope.title === '') {return;}
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
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
    }])

    .controller('PostsCtrl', [
      '$scope',
      '$stateParams',
      'posts',
      function($scope, $stateParams, posts){

        $scope.post = posts.posts[$stateParams.id];

        $scope.addComment = function(){
          if ($scope.body === '') {return;}
          $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
          });
          $scope.body = '';
        };
        $scope.addVote = function(comment) {
          comment.upvotes += 1;
        };
        $scope.downVote = function(comment) {
          comment.upvotes -= 1;
        };

      }]);
