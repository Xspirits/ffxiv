'use strict';
angular.module('FfxivFront')
.controller('DashCtrl', function($scope, $ionicLoading, API) {

	$scope.search = {};
	$scope.search.query = '';

	var load = function () {
		$ionicLoading.show({
			content: 'Loading Data',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 500
		});
	};
	var unload = function () {
		$ionicLoading.hide();
	};

	var getQuery = function () {
		return $scope.search.query;
	};

	var getInfos = function () {
		$scope.loading = load();
		var lookfor = getQuery();
		console.info('Searching: ' + lookfor);

		API.get(lookfor).then(function (results) {
			$scope.loading = unload();
			console.log(results);
			$scope.results = results;
		});
	};

	$scope.getInfos = getInfos;

})

.controller('ProfileCtrl', function($scope,$stateParams, $ionicLoading, API) {
	var load = function () {
		$ionicLoading.show({
			content: 'Loading Data',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 500
		});
	};
	var unload = function () {
		$ionicLoading.hide();
	};

	var getInfos = function (id) {
		$scope.loading = load();
		var lookfor = parseInt(id,10);
		console.info('profiler: ' + lookfor);
		API
		.get(lookfor)
		.then(function (results) {
			$scope.loading = unload();
			console.log(results);
			$scope.results = results;
		});
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
