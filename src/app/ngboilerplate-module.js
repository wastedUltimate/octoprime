angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'testViews',
  'ngBoilerplate.home',
//  'ngBoilerplate.about',
//  'ngBoilerplate.tasking',
//  'haGrid',
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
  }])

  .run( function run () {
  })
;