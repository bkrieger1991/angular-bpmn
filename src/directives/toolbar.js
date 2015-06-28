'use strict';
angular.module('angular-bpmn')
    .directive('bpmnToolbar', ['$bpmnWorkspace', '$bpmnElementFactory', function($workspace, $factory) {
        return {
            restrict: 'E',
            templateUrl: 'views/toolbar.html',
            link: function(scope, element, attr) {
                scope.workspace = $workspace;

                scope.addSwimlane = function() {
                    scope.workspace.add($factory.swimlane());
                };
                scope.addActivity = function() {
                    scope.workspace.add($factory.activity());
                };
                scope.addGateway = function() {
                    scope.workspace.add($factory.gateway());
                };
                scope.addEvent = function() {
                    scope.workspace.add($factory.event());
                };
            }
        };
    }]);
