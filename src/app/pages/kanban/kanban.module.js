/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.kanban', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('kanban', {
                url: '/dashboard',
                templateUrl: 'app/pages/kanban/kanban.html',
                title: 'Kanban',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 210,
                },
            });
    }

})();