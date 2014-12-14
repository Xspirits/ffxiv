'use strict';

angular.module('config', [])

.constant('ENV', {
  'name': 'development',
  'apiEndpoint': 'http://localhost:8081/'
  // 'apiEndpoint': 'http://ffxiv-backend.herokuapp.com/'
});