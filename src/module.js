'use strict';

/**
 * @namespace angular-bpmn
 */

angular.module('angular-bpmn', ['ngSanitize', 'pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('de-de');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}]);