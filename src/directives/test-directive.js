'use strict';
angular.module('angular-bpmn')
.directive('ngBpmn', function($ngBpmn) {

    var defaults = $ngBpmn.defaults;

    return {
        restrict: 'EAC',
        // require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {

            // viewValue -> $parsers -> modelValue
            // controller.$parsers.unshift(function(viewValue) {
            //   console.warn('$parser("%s"): viewValue=%o (%s)', element.attr('ng-model'), viewValue, typeof viewValue);
            //   return viewValue;
            // });

            // modelValue -> $formatters -> viewValue
            // controller.$formatters.push(function(modelValue) {
            //   console.warn('$formatter("%s"): modelValue=%o (%s)', element.attr('ng-model'), modelValue, typeof modelValue);
            //   return modelValue;
            // });

        }
    };
});
