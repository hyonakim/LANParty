
let SingleGameController = function($scope, $stateParams, GameService) {
  
  GameService.SingleGame($stateParams.gameId).then( (res) => {
    $scope.singleGame = res.data;
  });
};

SingleGameController.$inject = ['$scope', '$stateParams', 'GameService'];

export default SingleGameController;