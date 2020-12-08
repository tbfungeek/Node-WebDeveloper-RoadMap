'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/templete', controller.numjunks.index);
  router.post('/login', controller.user.login);
  router.get('/logout', controller.user.logout);
  router.get('/profile', controller.user.profile);
  router.get('/curlGet', controller.curl.curlGet);
};
