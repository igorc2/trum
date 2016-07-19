/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */
(function () {

'use strict';

angular.module('BlurAdmin.pages.kanban')
    .controller('KanbanBoardCtrl', KanbanBoardCtrl);

    function KanbanBoardCtrl($scope, BoardService, BoardDataFactory) {

       
        $scope.sprintBoard = BoardService.sprintBoard(BoardDataFactory.sprint);

        $scope.sprintSortOptions = {

            //restrict move across backlogs. move only within backlog.
            accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
                return sourceItemHandleScope.itemScope.sortableScope.$parent.$parent.backlog.$$hashKey === destSortableScope.$parent.$parent.backlog.$$hashKey;
            },
            itemMoved: function (event) {
            },
            orderChanged: function (event) {
            },
            containment: '#board'
        };
    }
})();
