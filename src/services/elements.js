'use strict';
var globalOrder = 1;
var baseElement = function() {
    var originalOrder = globalOrder;
    var position = {
        x: 100,
        y: 100,
        locked: false,
        order: globalOrder,
        bringToFront: function() {
            position.order = globalOrder+1;
        },
        bringToBack: function() {
            position.order = 0;
        },
        restoreLayer: function() {
            position.order = originalOrder;
        }
    };
    globalOrder++;
    this.position = position;
    this.type = '';
    this.name = '';
    this.connectors = [];
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
