'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Home',
      state: 'core',
      type: 'dropdown',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Subjects',
      state: 'subjects',
      type: 'dropdown',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Analytics',
      state: 'analytics',
      type: '',
      roles: ['user']
    });

    Menus.addMenuItem('topbar', {
      title: 'Rewards',
      state: 'rewards',
      type: '',
      roles: ['user']
    });

  }
]);
