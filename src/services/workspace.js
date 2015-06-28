'use strict';
angular.module('angular-bpmn')
    .service('$bpmnWorkspace', ['$bpmnUtils', function($utils) {
        this.elements = [];
        this.swimlanes = [];
        this.add = function(element) {
            var id = $utils.newid();
            element.id = id;
            element.remove = function() {
                this.remove(element.id);
            };

            // Group element into the active swimlane.
            // .....

            this.elements.push(element);
        };
        this.remove = function(id) {
            var index = _.findIndex(this.elements, function(e) {
                return e.id == id;
            });
            this.elements.splice(index, 1);
        };
        this.get = function(id) {
            return _.findWhere(this.elements, {id: id});
        };
        this.has = function(id) {
            return !_.isEmpty(this.get(id));
        };
        this.is = function(id, type) {
            return !_.isEmpty(this.elements, {id: id, type: type});
        };
    }]);
