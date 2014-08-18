'use strict';
angular.module('FfxivFront.controllers', [])

.controller('DashCtrl', function($resource, $scope, $ionicLoading) {
	var API = $resource('http://ffxiv-backend.herokuapp.com/character/:username', {
		username: '@username'
	});

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

		API
		.get({username:lookfor}).$promise
		.then( function(results) {
			$scope.loading = unload();
			console.log(results);
			$scope.results = results;
		});
	};
	// getInfos();

	$scope.getInfos = function () {
		getInfos();
	};

})

.controller('ProfileCtrl', function($resource, $scope,$stateParams, $ionicLoading) {
	var API = $resource('http://ffxiv-backend.herokuapp.com/character/:id', {
		id: '@id'
	});
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

		API
		.get({id:id}).$promise
		.then( function(results) {
			$scope.loading = unload();
			console.log(results);
			$scope.player = results;
		});
	};
	getInfos($stateParams.id);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
	console.log($scope);
});
