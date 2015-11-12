
let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })

    .state('root.about', {
      url: '/About',
      // controller: 'AboutController',
      templateUrl: 'templates/about.tpl.html'
    })

    .state('root.contact', {
      url: '/Contact',
      // controller: 'ContactController',
      templateUrl: 'templates/contact.tpl.html'
    })

    .state('root.xboxone', {
      url: '/XboxOne',
      controller: 'XboxController',
      templateUrl: 'templates/xboxone.tpl.html'
    })

    .state('root.ps4', {
      url: '/PS4',
      // controller: 'PS4Controller',
      templateUrl: 'templates/ps4.tpl.html'
    })

    .state('root.pc', {
      url: '/PC',
      // controller: 'PCController',
      templateUrl: 'templates/pc.tpl.html'
    })
    
    .state('root.single', {
      url: '/single/:gameId',
      controller: 'SingleGameController',
      templateUrl: 'templates/single.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;