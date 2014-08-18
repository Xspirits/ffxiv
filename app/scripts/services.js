'use strict';
angular.module('FfxivFront.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('API', function($resource,ENV) {
  return {
      get: function(lookfor) {
        var API = $resource(ENV.apiEndpoint+ 'character/:username', {
          username: '@username'
        });

        return API.get({username:lookfor}).$promise;
      }
    };
});
