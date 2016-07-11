(function () {
    'use strict';

    angular.module('BlurAdmin.pages.kanban')
        .controller('KanbanFlowCtrl', KanbanFlowCtrl);

    /** @ngInject */
    function KanbanFlowCtrl($scope, baConfig) {

        $scope.transparent = baConfig.theme.blur;

        $scope.dragControlListeners = {
            accept: function (sourceItemHandleScope, destSortableScope) {return boolean},//override to determine drag is allowed or not. default is true.
            itemMoved: function (event) { },
            orderChanged: function(event)  {},
            containment: '#board', //optional param.
            clone: true, //optional param for clone feature.
            allowDuplicates: false //optional param allows duplicates to be dropped.
        };

        $scope.dragControlListeners1 = {
            containment: '#board', //optional param.
            allowDuplicates: true //optional param allows duplicates to be dropped.
        };

        //$scope.items = ["<p>gor</p>", 1, {Name:"Oi", Param:"Susu"}];
        var colors = {
            green: '#4A4',
            red: '#A44'
        };

        $scope.items = [
            { title: 'Fazer os "Post Its"', number:'1.1', description: '', dev:'Igor', tester: 'Aline', priority:'0', points:'5', time:'', color: colors.green, date:"10/07/2016"},
            { title: 'Fazer a tabela',number: '1.2', description:'', dev:'Igor', tester: 'Aline', priority:'10', points:'8', time:'', color: colors.red, date:"10/07/2016"},
        ];
    }
})();