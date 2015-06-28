'use strict';
angular.module('angular-bpmn')
    .factory('$bpmnElementFactory', ['bpmn.elements.swimlane', 'bpmn.elements.activity', 'bpmn.elements.event', 'bpmn.elements.gateway',
    function(swimlane, activity, event, gateway) {
        return {
            swimlane: function() {
                return new swimlane();
            },
            activity: function() {
                return new activity();
            },
            event: function() {
                return new event();
            },
            gateway: function() {
                return new gateway();
            }
        };
    }]);
