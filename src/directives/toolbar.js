'use strict';
angular.module('angular-bpmn')
    .directive('bpmnToolbar', ['$bpmnWorkspace', '$bpmnElementFactory', function($workspace, $factory) {
        return {
            restrict: 'E',
            templateUrl: 'views/toolbar.html',
            link: function(scope, element, attr) {
                scope.workspace = $workspace;

                scope.main = {
                    task: {add: function() {
                        scope.workspace.add($factory.task());
                    }}
                };
                scope.gateways = {
                    xor: {add: function() {
                        scope.workspace.add($factory.gateway('xor'));
                    }}
                };
                scope.events = {
                    start: {
                        message: {add: function() {
                            scope.workspace.add($factory.event('start', 'message'));
                        }}
                    }
                };
                scope.misc = {
                    note: {add: function() {
                        scope.workspace.add($factory.note());
                    }}
                };
                scope.data = {
                    object: {add: function() {
                        scope.workspace.add($factory.dataObject());
                    }},
                    storage: {add: function() {
                        scope.workspace.add($factory.storage());
                    }}
                };
            }
        };
    }]);
