'use strict';
angular.module('angular-bpmn').config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('de-de', {
        toolbar: {
            note: 'Notiz',
            task: 'Task (Aufgabe)',
            gateways: {
                xor: 'Exklusiv-Gateway'
            },
            events: {
                start: {
                    messageReceived: 'Eingehende Nachricht'
                }
            },
            data: {
                object: 'Datenobjekt',
                storage: 'Datenspeicher'
            }
        },
        elementPrefill: {
            note: 'Neue Notiz',
            task: 'Neue Aufgabe',
            gateway: 'Neue Entscheidung',
            event: 'Neues Ereignis',
            storage: 'Neuer Datenspeicher',
            dataObject: 'Neues Datenobjekt'
        }
    });
}]);