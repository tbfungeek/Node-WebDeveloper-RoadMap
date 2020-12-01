'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  router.get('/', controller.home.index);
  router.resources('/api/todo', controller.todo);
};
