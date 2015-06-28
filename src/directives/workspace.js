'use strict';
angular.module('angular-bpmn')
.directive('bpmnWorkspace', ['$bpmnWorkspace', function($workspace) {
    return {
        restrict: 'E',
        templateUrl: 'views/workspace.html',
        link: function(scope, element, attr) {
            scope.workspace = $workspace;
        }
    };
}]);
