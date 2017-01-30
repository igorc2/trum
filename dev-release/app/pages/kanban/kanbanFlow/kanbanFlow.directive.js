/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.kanban')
        .directive('kanbanFlow', kanbanFlow);

    /** @ngInject */
    function kanbanFlow() {
        return {
            restrict: 'E',
            controller: 'KanbanFlowCtrl',
            templateUrl: 'app/pages/kanban/kanbanFlow/kanban-flow.html'
        };
    }
})();