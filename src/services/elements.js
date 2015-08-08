'use strict';
var baseElement = function() {
    this.type = '';
    this.name = '';
    this.position = {x: 100, y: 100};
};
angular.module('angular-bpmn')
    .factory('bpmn.elements.note', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'note';
            $translate('elementPrefill.note').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.task', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'task';

            $translate('elementPrefill.task').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.event', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'event';
            object.subType = null;
            object.category = null;
            $translate('elementPrefill.event').then(function(text) {
                object.name = text;
            });

            return object;
        };
    }])
    .factory('bpmn.elements.gateway', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'gateway';
            object.subType = 'gateway';
            $translate('elementPrefill.gateway').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.dataObject', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'dataObject';
            $translate('elementPrefill.dataObject').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }])
    .factory('bpmn.elements.storage', ['$translate', function($translate) {
        return function() {
            var object = new baseElement();
            object.type = 'storage';
            $translate('elementPrefill.storage').then(function (text) {
                object.name = text;
            });
            return object;
        };
    }]);
