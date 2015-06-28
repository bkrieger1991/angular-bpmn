'use strict';
angular.module('angular-bpmn')
    .factory('bpmn.elements.swimlane', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'swimlane',
                name: ''
            };

            $translate('elementPrefill.swimlane').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.activity', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'activity',
                name: ''
            };

            $translate('elementPrefill.activity').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.event', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'event',
                name: ''
            };

            $translate('elementPrefill.event').then(function(text) {
                object.name = text;
            });

            return object;
        };
    }])
    .factory('bpmn.elements.gateway', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'gateway',
                name: ''
            };

            $translate('elementPrefill.gateway').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }]);
