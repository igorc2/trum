/**
 * @author Igor Coelho
 * @email igorc2@gmail.com
 * created on 09-07-2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.kanban', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('kanban', {
                url: '/kanban',
                templateUrl: 'app/pages/kanban/kanban.html',
                title: 'Kanban',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 210,
                },
            });
    }

})();