'use strict';
angular.module('angular-bpmn')
    .directive('bpmnConnectorCircle', ['$bpmnWorkspace', function($workspace) {
        return {
            restrict: 'A',
            template: '<circle r="10" ng-attr-cx="{{circlePosition.x}}" ng-attr-cy="{{circlePosition.y}}" class="connector-circle"></circle>',
            scope: {
                circlePosition: '=',
                from: '='
            },
            link: function (scope, element, attr) {
                var connectorData = {
                    preferredSide: attr.preferredside,
                    position: scope.circlePosition
                };
                scope.from.connectors.push(connectorData);

                element.bind('mousedown', function() {
                    console.log('start linking...');
                });

                element.bind('mouseup', function() {
                    console.log('maybe incoming link?');
                });
            }
        };
    }]);