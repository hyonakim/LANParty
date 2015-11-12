let GameService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/VideoGames';

  this.VideoGames = function () {
    return $http({
      url: url,
      method: 'GET',
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  this.SingleGame = function (gameId) {
    return $http({
      url: url + '/' + gameId,
      method: 'GET',
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };
};

GameService.$inject = ['$http', 'PARSE'];

export default GameService;