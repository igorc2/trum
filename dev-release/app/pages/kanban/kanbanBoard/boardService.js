/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('BlurAdmin.pages.kanban').service('BoardService', ['$uibModal', 'BoardManipulator', function ($uibModal, BoardManipulator) {

    function Board(name, numberOfColumns) {
        return {
            name: name,
            numberOfColumns: numberOfColumns,
            columns: [],
            backlogs: []
        };
    }

    function KanbanBoard(name, numberOfColumns) {
        return {
            name: name,
            numberOfColumns: numberOfColumns,
            columns: [],
            backlogs: [],
            cards: []
        };
    }

    return {
        removeCard: function (board, column, card) {
            if (confirm('Are You sure to Delete?')) {
                BoardManipulator.removeCardFromColumn(board, column, card);
            }
        },

        addNewCard: function (board, column) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/partials/newCard.html',
                controller: 'NewCardController',
                backdrop: 'static',
                resolve: {
                    column: function () {
                        return column;
                    }
                }
            });
            modalInstance.result.then(function (cardDetails) {
                if (cardDetails) {
                    BoardManipulator.addCardToColumn(board, cardDetails.column, cardDetails.title, cardDetails.details);
                }
            });
        },
        kanbanBoard: function (board) {
            var kanbanBoard = new KanbanBoard(board.name, board.numberOfColumns);
            angular.forEach(board.columns, function (column) {
                BoardManipulator.addColumn(kanbanBoard, column.name);
                angular.forEach(column.cards, function (card) {
                    BoardManipulator.addCardToColumn(kanbanBoard, column, card.title, card.details);
                });
            });
            return kanbanBoard;
        },



        sprintBoard: function (board) {
            var sprintBoard = new Board(board.name, board.numberOfColumns);
            angular.forEach(board.columns, function (column) {
                BoardManipulator.addColumn(sprintBoard, column.name);
            });
            angular.forEach(board.backlogs, function (backlog) {
                BoardManipulator.addBacklog(sprintBoard, backlog.title);
                angular.forEach(backlog.phases, function (phase) {
                    BoardManipulator.addPhaseToBacklog(sprintBoard, backlog.title, phase);
                    angular.forEach(phase.cards, function (card) {
                        BoardManipulator.addCardToBacklog(sprintBoard, backlog.title, phase.name, card);
                    });
                });

            });

            return sprintBoard;
        }
    };
}]);