angular.module( 'ngBoilerplate.haGrid', [
  'ui.router'
])

.directive('haGrid', ['$compile', '$parse',function($compile, $parse){
	
	return {
		restrict: 'AE',
		replace: true,
//		templateUrl: 'haGrid/ha-grid.tpl.html',
//		transclude: true,
		scope: {},
		compile: function(element){
			var columns = [], i=0, row = null;
			
			var thead = element.find('thead');
			
			row = angular.element(element.find('tr'));
			
			angular.forEach(row.find('td'), function(item){
				var el = angular.element(item);
				var parsedAttribute = function(attr, defaultValue){
					return function (scope){
						return el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr) || defaultValue;
					};
				};
				
				var parsedTitle = parsedAttribute('title', '');
				
				columns.push({
					id: i++,
					title: parsedTitle
				});
			});
			
			return function (scope,element,attrs){
				scope.$columns = columns;
				
//				angular.forEach(columns, function(column){
//					var def;
//				});
				
				scope.parse = function(text){
					return angular.isDefined(text) ? text(scope) : '' ;
				};
				
				if(!element.hasClass('ha-grid')){
					scope.templates = {
							header: 'ha-grid/header.tpl.html'
					};
					
					var headerTemplate = thead.length > 0 ? thead : 
						angular.element(document.createElement('thead')).attr('ng-include', 'templates.header');
					
					element.find('thead').remove();
					
					element.addClass('ng-table')
						.prepend(headerTemplate);
					
					$compile(headerTemplate)(scope);
					
				}
			};
		}
		
	};
}])
.run(['$templateCache', function ($templateCache) {
//	$templateCache.put('ng-table/filters/select-multiple.html', '<select ng-options="data.id as data.title for data in column.data" multiple ng-multiple="true" ng-model="params.filter()[name]" ng-show="filter==\'select-multiple\'" class="filter filter-select-multiple form-control" name="{{column.filterName}}"> </select>');
//	$templateCache.put('ng-table/filters/select.html', '<select ng-options="data.id as data.title for data in column.data" ng-model="params.filter()[name]" ng-show="filter==\'select\'" class="filter filter-select form-control" name="{{column.filterName}}"> </select>');
//	$templateCache.put('ng-table/filters/text.html', '<input type="text" name="{{column.filterName}}" ng-model="params.filter()[name]" ng-if="filter==\'text\'" class="input-filter form-control"/>');
	$templateCache.put('ha-grid/header.tpl.html', '<tr> <th ng-repeat="column in $columns" class="header {{column.class}}"> <div ng-if="!template" ng-show="!template" ng-bind="parse(column.title)"></div></th></tr>');
//	$templateCache.put('ng-table/pager.html', '<div class="ng-cloak ng-table-pager"> <div ng-if="params.settings().counts.length" class="ng-table-counts btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default"> <span ng-bind="count"></span> </button> </div> <ul class="pagination ng-table-pagination"> <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div> ');
}]);
