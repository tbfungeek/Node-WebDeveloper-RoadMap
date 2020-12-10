'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home', controller.home.home);
  router.get('/apps', controller.home.newApplication);
  router.get('/contexts', controller.home.newContext);
  router.post('/contexts', controller.home.newContext);
  router.get('/newRequest', controller.home.newRequest);
  router.get('/newResponse', controller.home.newResponse);
  router.post('/login', controller.user.login);
  router.get('/logout', controller.user.logout);
  router.get('/user', controller.user.index);
};
