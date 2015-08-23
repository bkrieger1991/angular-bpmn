'use strict';
angular.module('angular-bpmn')
    .directive('bpmnConnectorCircle', ['$bpmnWorkspace', function($workspace) {
        return {
            restrict: 'E',
            replace: true,
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

                scope.linkTo = function($event) {
                    console.log('Linking: ', $event);
                };
                scope.newConnection = function($event) {
                    console.log('initializing new connection: ', $event);
                    $workspace.virtualitor({x: $event.x, y: $event.y});
                };
                console.log('Connector ready!');
            }
        };
    }]);