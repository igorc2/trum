(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tables')
        .controller('BacklogPageCtrl', BacklogPageCtrl);

    /** @ngInject */
    function BacklogPageCtrl($scope, $filter, editableOptions, editableThemes) {

        $scope.backlogTableData =[
             {
                id: 1,
                task: "A class should have one and only one reason to change",
                description: "A class should have one and only one reason to change, meaning that a class should have only one job.",
                estimate: "5",
                status: "TO DO",
                dev: "John",
                tester: "Maria",
                time: "02:00",
                error: "",
                comments: ""
            },
            {
                id: 2,
                task: "First, we create our shapes classes",
                description: "Next, we move on by creating the AreaCalculator class and then write up our logic to sum up the areas of all provided shapes.",
                estimate: "13",
                status: "DONE",
                dev: "Michael",
                tester: "Oscar",
                time: "06:00",
                error: "4844",
                comments: "in an array of shapes, and display the output at the bottom of the page"
            },
        ]

    }

})();
