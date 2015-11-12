let EditController = function($scope, $stateParams, GameService) {
  
  GameService.singleGame($stateParams.gameId).then( (res) => {
    $scope.singleGame = res.data;
  });

  $scope.updateGame = function (obj) {
    GameService.update(obj).then( (res) => {
      console.log(res);
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'GameService'];
export default EditController;