'use strict';
angular.module('angular-bpmn')
    .directive('bpmnElement', ['$bpmnWorkspace', '$templateCache', '$compile', function($workspace, $templateCache, $compile) {
        return {
            restrict: 'E',
            replace: true,
            template: '<g class="element" ' +
                         'ng-class="{\'element-moving\': movingEnabled, \'element-selected\': workspace.isSelected(ngModel)}" ' +
                         'ng-attr-transform="translate({{ngModel.position.x}}, {{ngModel.position.y}})">' +
                      '</g>',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attr) {
                scope.movingEnabled = false;
                scope.workspace = $workspace;

                // Load template depending on element-type.
                var tmpl = $templateCache.get('views/elements/' + scope.ngModel.type + '.html');
                element.html(tmpl);

                // Compile the template.
                $compile(element.contents())(scope);

                var isConnector = function(element) {
                    return element.nodeName === 'circle' && _.contains(element.classList, 'connector-circle')
                };

                // Bind move-events.
                var mousePositionOnElement;
                // Used to identify a move-action and temporarily prevent selecting the element.
                var movedDistance = {x: 0, y: 0};
                element.bind('mousedown', function(e) {
                    // Disable element-moving when mouse hovers a "circle.element-connector".
                    if(isConnector(e.target)) {
                        return;
                    }
                    // Check workspace- or element-lock
                    if(scope.workspace.locked || scope.ngModel.position.locked) {
                        return;
                    }

                    mousePositionOnElement = {x: e.offsetX, y: e.offsetY};
                    scope.movingEnabled = true;
                    scope.ngModel.position.bringToFront();
                });
                element.bind('mouseup', function(e) {
                    scope.movingEnabled = false;
                    scope.ngModel.position.restoreLayer();
                });
                element.bind('mousemove', function(e) {
                    if(scope.movingEnabled) {
                        scope.ngModel.position.x += (e.offsetX - mousePositionOnElement.x) / scope.workspace.zoomFactor;
                        scope.ngModel.position.y += (e.offsetY - mousePositionOnElement.y) / scope.workspace.zoomFactor;
                        movedDistance.x += (mousePositionOnElement.x - e.offsetX);
                        movedDistance.y += (mousePositionOnElement.y - e.offsetY);
                        mousePositionOnElement = {x: e.offsetX, y: e.offsetY};
                        scope.$apply();

                        if(e.stopPropagation) e.stopPropagation();
                        if(e.preventDefault) e.preventDefault();
                        e.cancelBubble=true;
                        e.returnValue=false;
                    }
                });
                element.bind('click', function(e) {
                    if(isConnector(e.target)) {
                        return;
                    }
                    if(Math.abs(movedDistance.x) < 5 && Math.abs(movedDistance.y) < 5) {
                        scope.workspace.select(scope.ngModel);
                        scope.$apply();
                    }
                    movedDistance = {x: 0, y: 0};
                });
            }
        };
    }]);