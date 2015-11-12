let AddController = function($scope, GameService) {

  $scope.addGame = (obj) =>{
    console.log(obj);
    GameService.addGame(obj).then( (res) => {
      $scope.newGame = {};
    });
  };

};
AddController.$inject = ['$scope', 'GameService'];
export default AddController;