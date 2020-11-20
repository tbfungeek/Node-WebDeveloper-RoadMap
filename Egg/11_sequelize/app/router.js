'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.resources('users', '/users', app.controller.user);
  app.resources('posts', '/posts', app.controller.post);
};
