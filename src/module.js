'use strict';

/**
 * @namespace angular-bpmn
 */

angular.module('angular-bpmn', ['ngSanitize', 'pascalprecht.translate', 'monospaced.mousewheel'])
.config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('de-de');
    $translateProvider.useSanitizeValueStrategy('sanitize');
}]);