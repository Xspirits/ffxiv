'use strict';

/**
 * A simple example service that returns some data.
 */
angular.module('FfxivFront')
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
