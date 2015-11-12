let XboxController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/VideoGames';

  $http.get(url, PARSE.CONFIG).then( (resp) => {
    console.log(resp);
    $scope.games = resp.data.results.platform; 
    
  });

};

XboxController.$inject = ['$scope', '$http', 'PARSE'];

export default XboxController;