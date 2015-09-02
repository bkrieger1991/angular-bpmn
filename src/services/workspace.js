'use strict';
angular.module('angular-bpmn')
    .service('$bpmnWorkspace', ['$bpmnUtils', function($utils) {
        this.selectedElementId = null;
        this.elements = [];
        this.swimlanes = [];
        this.zoomFactor = 1;
        this.virtualConnectorPositions = {from: {x: 0, y: 0}, to: {x: 0, y: 0}};
        this.connecting = false;
        this.movingEnabled = true;
        this.locked = false;
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
            return !_.isEmpty(_.findWhere(this.elements, {id: id, type: type}));
        };
        this.select = function(idOrElement) {
            var id = idOrElement;
            if(idOrElement.id !== undefined) {
                id = idOrElement.id;
            }
            this.selectedElementId = id;
        };
        this.removeSelection = function() {
            this.selectedElementId = null;
        };
        this.isSelected = function(idOrElement) {
            var id = idOrElement;
            if(idOrElement.id !== undefined) {
                id = idOrElement.id;
            }
            return id === this.selectedElementId;
        };
        this.getSelected = function() {
            return this.get(this.selectedElementId);
        };
        this.handleConnectorClick = function(element, connector) {
            if(this.connecting) {
                console.log('maybe incoming link?', element, connector);
                this.connecting = false;
            } else {
                console.log('start linking...', element, connector);
                this.connecting = true;
                this.virtualConnectorPositions.from = connector.position;
            }
        };
    }]);
