
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.kanban')
        .directive('kanbanBoard', kanbanBoard);

    /** @ngInject */
    function kanbanBoard() {
        return {
            restrict: 'E',
            controller: 'KanbanBoardCtrl',
            templateUrl: 'app/pages/kanban/kanbanBoard/sprint.html'
        };
    }
})();