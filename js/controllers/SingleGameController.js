
let SingleGameController = function($scope, $stateParams, GameService, $state) {
  
  GameService.SingleGame($stateParams.gameId).then( (res) => {
    $scope.singleGame = res.data;
  });

  $scope.deleteMe = function (obj) {
    GameService.delete(obj).then( (res) => {
      alert('Are you sure?');
      $state.go('root.home');
    });
  };
};

SingleGameController.$inject = ['$scope', '$stateParams', 'GameService', '$state'];

export default SingleGameController;