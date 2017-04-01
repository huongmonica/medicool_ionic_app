// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('hometry', {
    url: '/hometry',
    templateUrl: 'templates/hometry.html',
    controller: 'HomeCtrl'
  })
  .state('app.search_results', {
      url: '/search_results',
      views: {
        'menuContent': {
          templateUrl: 'templates/search_results.html',
          controller: 'SearchResultsCtrl'
        }
      }
    })
  .state('app.medicine_detail', {
      url: '/medicine_detail',
      views: {
        'menuContent': {
          templateUrl: 'templates/medicine_detail.html',
          controller: 'MedicineDetailCtrl'
        }
      }
    })
  .state('app.medicine_list', {
      url: '/medicine_list',
      views: {
        'menuContent': {
          templateUrl: 'templates/medicine_list.html',
          controller: 'MedicineListCtrl'
        }
      }
    })
    .state('app.pharmacies_list', {
      url: '/pharmacies_list',
      views: {
        'menuContent': {
          templateUrl: 'templates/pharmacies_list.html',
          controller: 'PharmaciesListCtrl'
        }
      }
    })

  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});