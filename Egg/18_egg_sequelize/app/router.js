'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/del', controller.home.del);
  router.post('/update', controller.home.update);
  router.get('/detail', controller.home.detail);
  router.get('/findById', controller.home.findById);
};
