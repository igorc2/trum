/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('kanbanFlow', kanbanFlow);

    /** @ngInject */
    function kanbanFlow() {
        return {
            restrict: 'E',
            controller: 'kanbanFlowCtrl',
            templateUrl: 'app/pages/dashboard/trafficChart/kanban-flow.html'
        };
    }
})();