import angular from 'angular';
import 'angular-ui-router';

// Configs
import config from './config';

// Controllers
import HomeController from './controllers/home.controller';

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
  .controller('HomeController', HomeController)
;