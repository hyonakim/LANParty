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

  let NewGame = function (obj) {
    this.image = obj.image;
    this.title = obj.title;
    this.rating = obj.rating;
    this.platform = obj.platform;
  };

  this.addGame = function (obj) {
    let newGame  = new NewGame(obj);
    return $http.post(url, newGame, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(
      url + '/' + obj.objectId, obj, PARSE.CONFIG
    );
  };

  this.delete = function (obj) {
    return $http.delete(
      url + '/' + obj.objectId, PARSE.CONFIG
    );
  };
};

GameService.$inject = ['$http', 'PARSE'];

export default GameService;