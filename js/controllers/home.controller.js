let HomeController = function($scope, $http, PARSE, GameService) {
  
  GameService.VideoGames().then ( (res) => {
    $scope.games = res.data.results;
  });

};

HomeController.$inject = ['$scope', '$http', 'PARSE', 'GameService'];

export default HomeController;