'use strict';
angular.module('angular-bpmn').config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('de-de', {
        toolbar: {
            swimlane: 'Swimlane',
            activity: 'Aktivit&auml;t',
            gateway: 'Entscheidung',
            event: 'Ereignis'
        },
        elementPrefill: {
            swimlane: 'Neue Simlane',
            activity: 'Neue Aktivit&auml;t',
            gateway: 'Neue Entscheidung',
            event: 'Neues Ereignis'
        }
    });
}]);