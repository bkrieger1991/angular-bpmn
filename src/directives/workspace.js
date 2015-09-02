'use strict';
angular.module('angular-bpmn')
.directive('bpmnWorkspace', ['$bpmnWorkspace', function($workspace) {
    return {
        restrict: 'E',
        templateUrl: 'views/workspace.html',
        link: function(scope, element, attr) {
            var dragMousePosition;
            var zoomAmount = 0.04;

            scope.dragging = false;
            scope.workspace = $workspace;
            scope.workspacePosition = {x: 0, y: 0};

            var zoomIn = function(e) {
                scope.workspace.zoomFactor += zoomAmount;
                // Move workspace to zoom in at the current mouse-position.
                scope.workspacePosition.x -= (e.offsetX * zoomAmount);
                scope.workspacePosition.y -= (e.offsetY * zoomAmount);
            };

            var zoomOut = function(e) {
                scope.workspace.zoomFactor -= zoomAmount;
                // Move workspace to zoom in at the current mouse-position.
                scope.workspacePosition.x += (e.offsetX * zoomAmount);
                scope.workspacePosition.y += (e.offsetY * zoomAmount);
            };
            scope.changeZoom = function(event, delta) {
                if(event.wheelDeltaY > 0) {
                    zoomIn(event);
                } else {
                    zoomOut(event);
                }
                event.preventDefault();
            };
            scope.beginDrag = function($event) {
                // Either we move on the grid...
                var shouldMove = $event.target.nodeName === 'rect' && $event.target.id === 'workspace-grid';
                // ...or directly on SVG-node.
                shouldMove = shouldMove || $event.target.nodeName === 'svg';
                if(shouldMove && scope.workspace.movingEnabled) {
                    scope.dragging = true;
                    dragMousePosition = {x: $event.offsetX, y: event.offsetY};
                }
            };
            scope.stopDrag = function() {
                scope.dragging = false;
            };
            scope.move = function($event) {
                if(scope.dragging) {
                    scope.workspacePosition.x += ($event.offsetX - dragMousePosition.x) / scope.workspace.zoomFactor;
                    scope.workspacePosition.y += ($event.offsetY - dragMousePosition.y) / scope.workspace.zoomFactor;
                    dragMousePosition = {x: $event.offsetX, y: event.offsetY};

                    if($event.stopPropagation) $event.stopPropagation();
                    if($event.preventDefault) $event.preventDefault();
                    $event.cancelBubble=true;
                    $event.returnValue=false;
                }
                if($workspace.connecting) {
                    $workspace.virtualConnectorPositions.to.x = $event.offsetX;
                    $workspace.virtualConnectorPositions.to.y = $event.offsetY;
                }
            };
        }
    };
}]);
