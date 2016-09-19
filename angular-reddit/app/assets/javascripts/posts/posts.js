angular.module('flapperNews')
.factory('posts', [function(){
  var object = {
    posts: []
  };
  return object;
}]);
