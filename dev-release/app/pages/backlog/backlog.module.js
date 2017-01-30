/**
 * @author Igor Coelho
 * @email igorc2@gmail.com
 * created on 10-07-2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.backlog', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('backlog', {
                url: '/backlog',
                templateUrl: 'app/pages/backlog/backlog.html',
                title: 'Sprint Backlog',
                controller: 'BacklogPageCtrl',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 220,
                },
            });
    }

})();