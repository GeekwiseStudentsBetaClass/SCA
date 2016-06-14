angular.module('app')
    .controller('homeCtrl', function homeCtrl($scope){
        /*$scope.list = true;
        $scope.hideContent = function() {
          $scope.list = false;
        };
        $scope.showContent = function(){
          $scope.list = true;
        };
        $scope.thisString = [];
        $scope.insertText = function(input){
          $scope.thisString.push(input);
          $scope.inputText = '';
        };
        $scope.deleteText = function(input){
          $scope.thisString.splice('index',1);
        };*/
        $scope.upVoteNumber = 0;
        $scope.downVoteNumber = 0;
        $scope.addToLiked = function(input) {
          $scope.upVoteNumber += 1;
        };
        $scope.addToDisliked = function() {
          $scope.downVoteNumber += 1;
        };
        $scope.comment = [];
        $scope.btn_add = function() {
          if($scope.txtComment !==''){
            $scope.comment.push($scope.txtComment);
            $scope.txtComment = "";
          }
        };

        $scope.remItem = function($index){
          $scope.comment.splice($index, 1);
        };

});
