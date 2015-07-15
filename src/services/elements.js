'use strict';
angular.module('angular-bpmn')
    .factory('bpmn.elements.note', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'swimlane',
                name: '',
                text: ''
            };

            $translate('elementPrefill.note').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.task', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'task',
                name: ''
            };

            $translate('elementPrefill.task').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.event', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'event',
                name: '',
                category: null,
                subType: null
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
                name: '',
                subType: null
            };

            $translate('elementPrefill.gateway').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.dataObject', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'dataObject',
                name: ''
            };

            $translate('elementPrefill.dataObject').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.storage', ['$translate', function($translate) {
        return function() {
            var object = {
                type: 'storage',
                name: '',
                subType: null
            };

            $translate('elementPrefill.storage').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }]);
