'use strict';
angular.module('angular-bpmn')
    .factory('$bpmnElementFactory', [
        'bpmn.elements.note', 'bpmn.elements.task',
        'bpmn.elements.event', 'bpmn.elements.gateway',
        'bpmn.elements.dataObject', 'bpmn.elements.storage',
    function(
        note, task,
        event, gateway,
        dataObject, storage
    ) {
        return {
            task: function() {
                return new task();
            },
            event: function(category, type) {
                var e = new event();
                e.category = category;
                e.subType = type;
                return e;
            },
            gateway: function(type) {
                var gw = new gateway();
                gw.subType = type;
                return gw;
            },
            note: function() {
                return new note();
            },
            dataObject: function() {
                return new dataObject();
            },
            storage: function() {
                return new storage();
            }
        };
    }]);
