import angular from 'angular';
import 'angular-ui-router';

// Configs
import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import SingleGameController from './controllers/SingleGameController';
import XboxController from './controllers/XboxController';

// Services
import GameService from './services/GameService';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'Vn4D2WZCtGzG6Y5CUUMufNjBaXznIRIgsZapzcaA',
        'X-Parse-REST-API-Key'  : '7IxlYBLx7qPEIcQej5FERpjBrEGqjwh9bxU8O10M'
      }
    }
  })
  .config(config)
  .service('GameService', GameService)
  .controller('HomeController', HomeController)
  .controller('SingleGameController', SingleGameController)
  .controller('XboxController', XboxController)
;