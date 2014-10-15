angular.module('testViews',['ui.router'])
.config(function($stateProvider){
	$stateProvider
//	.state('parent', {
//		resolve:{
//			resA:  function(){
//				return {'value': 'A'};
//			}
//		},
//		data: {pageTitle: 'Parent'},
//		url: '/parent',
//		controller: function($scope, resA){
//			$scope.resA = resA.value;
//		},
//		template: "{{resA}}<div ui-view></div>"
//	})
//	.state('parent.child', {
//		url: '/child',
//		views: {
//			'@parent': {
//				resolve:{
//					resB: function(resA){
//						return {'value': resA.value + 'B'};
//					}
//				},
//				
//				controller: function($scope, resA, resB){
//					$scope.resA2 = resA.value;
//					$scope.resB = resB.value;
//				},
//				template: '{{resA}}{{resB}}TEST'
//			}
//		}
//		
//	});
//	.state('list', {
//		data: {pageTitle: 'List'},
//		url: '/list',
//		resolve:{
//			items:  function(){
//				return [{id:1},{id:2},{id:3}];
//			}
//		},
//		
//		controller: function($scope, items){
//			$scope.items = items;
//		},
//		templateUrl: "testViews/testViews-list.tpl.html"
//	})
//	.state('list.grid', {
//		url: '/grid',
//		views: {
//			'display@list': {
//				resolve:{
//					resB: function(items){
//						return items.length;
//					}
//				},
//				
//				controller: function($scope, items, resB){
//					$scope.items = items;
//					$scope.resB = resB;
//				},
//				template: '<div ng-repeat="item in items">{{item.id}}</div>Total:{{resB}}'
//			}
//		}
//		
//	})
//	.state('list.tile', {
//		url: '/tile',
//		views: {
//			'display@list': {
//				resolve:{
//					resB: function(items){
//						return items.length;
//					}
//				},
//				
//				controller: function($scope, items, resB){
//					$scope.items = items;
//					$scope.resB = resB;
//				},
//				template: '<div ng-repeat="item in items">{{item.id}}Tile</div>Total:{{resB}}'
//			}
//		}
//		
//	});
	.state('list', {
		data: {pageTitle: 'List'},
		url: '/list',
		resolve:{
			items:  function(){
				return [{id:1},{id:2},{id:3}];
			}
		},
		
		controller: function($scope, items){
			$scope.items = items;
			$scope.addItem = function(item){
				$scope.items.push(item);
			};
		},
		templateUrl: "testViews/list.tpl.html"
	})
	.state('list.display',{
		url: 'display',
		data: {pageTitle: 'List Display'},
		views:{
			'': {
				templateUrl: 'testViews/testViews-list.tpl.html'
			},
			'filter@list.display': {
				template: '<div class="btn btn-success" ng-click="addItem({id:count})">Click</div>',
				controller: function($scope,items){
					$scope.count = items.length;
					$scope.addItem({id:'HERE'});
				}
					
			}
		}
		
	})
	.state('list.display.grid', {
		url: '/grid',
		views: {
			'display@list.display': {
				resolve:{
					resB: function(items){
						return items.length;
					}
				},
				
				controller: function($scope, items, resB){
					$scope.items = items;
					$scope.resB = resB;
				},
				template: '<div ng-repeat="item in items">{{item.id}}</div>Total:{{resB}}'
			}
		}
		
	})
	.state('list.display.tile', {
		url: '/tile',
		views: {
			'display@list.display': {
				resolve:{
					resB: function(items){
						return items.length;
					}
				},
				
				controller: function($scope, items, resB){
					$scope.items = items;
					$scope.resB = resB;
				},
				template: '<div ng-repeat="item in items">{{item.id}}Tile</div>Total:{{resB}}'
			}
		}
		
	});

});