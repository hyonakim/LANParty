let EditController = function($scope, $stateParams, GameService, $state) {
  
  GameService.SingleGame($stateParams.gameId).then( (res) => {
    $scope.singleGame = res.data;
  });

  $scope.updateGame = function (obj) {
    GameService.update(obj).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'GameService', '$state'];
export default EditController;