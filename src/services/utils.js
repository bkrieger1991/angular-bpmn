'use strict';
angular.module('angular-bpmn').service('$bpmnUtils', function() {
    var defaults = this.defaults = {};
    var generatedIds = [];
    return {
        newid: function(length) {
            if(length === undefined) length = 8;
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            do {
                var id = "";

                for( var i=0; i < length; i++ ) {
                    id += possible.charAt(Math.floor(Math.random() * possible.length));
                }
            } while(_.contains(generatedIds, id));
            generatedIds.push(id);
            return id;
        }
    };
});