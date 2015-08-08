'use strict';
angular.module('angular-bpmn')
    .directive('bpmnElement', ['$templateCache', '$compile', function($templateCache, $compile) {
        return {
            restrict: 'E',
            replace: true,
            template: '<g></g>',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attr) {
                var tmpl = $templateCache.get('views/elements/' + scope.ngModel.type + '.html');
                element.html(tmpl);
                $compile(element.contents())(scope);


            }
        };
    }]);