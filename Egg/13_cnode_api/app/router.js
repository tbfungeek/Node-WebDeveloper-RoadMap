'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.resources('topics', '/api/v2/topics', 'topics');
};
