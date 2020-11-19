'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.cookie.index);
  router.post('/remember', controller.cookie.remember);
  router.get('/forget', controller.cookie.forget);
  router.get('/session', controller.session.setSession);
};
