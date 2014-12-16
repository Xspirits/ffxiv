'use strict';
angular.module('FfxivFront')
.controller('DashCtrl', function( $rootScope, $scope, $ionicLoading, $state, API) {
	var utils = {};
	$scope.search = {};
	$scope.search.query = '';

	utils.load   = $rootScope.loader.show;
	utils.unload = $rootScope.loader.hide;


	utils.getQuery = function () {
		return $scope.search.query;
	};

	utils.getInfos = function () {
		$scope.loading = utils.load();
		var lookfor = utils.getQuery();
		console.info('Searching: ' + lookfor);

		API.get(lookfor).then(function (results) {
			$scope.loading = utils.unload();
			console.log(results);
			$scope.results = results;
		});
	};
	utils.loadProfile = function (id) {
		console.log(id);
		$state.go('profile',{ id: id });
	}
	$scope.getInfos    = utils.getInfos;
	$scope.loadProfile = utils.loadProfile;

})

.controller('ProfileCtrl', function($rootScope,  $scope,$stateParams, API) {
	var utils = {};
	utils.load   = $rootScope.loader.show;
	utils.unload = $rootScope.loader.hide;

	var getInfos = function (id) {
		var lookfor = id;
		$scope.loading = utils.load();

		console.info('profiler: ' + lookfor);

		API.get(lookfor).then(function (results) {
			$scope.loading = utils.unload();
			console.log(results);
			$scope.results = results;
		});
	};
	$scope.next = function() {
	  $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
	};
	$scope.previous = function() {
	  $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
	};
	console.log($stateParams.id);
	getInfos($stateParams.id);
})

.controller('FriendsCtrl', function($scope) {
  $scope.friends = {};
})

.controller('FriendDetailCtrl', function($scope) {
  $scope.friend = {};
})

.controller('AccountCtrl', function($scope) {
	console.log($scope);
});
