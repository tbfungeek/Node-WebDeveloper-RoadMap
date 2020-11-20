'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.get('/', app.controller.index.index);
  app.router.get('/download', app.controller.index.download);
  app.router.get('/download-image', app.controller.index.downloadImage);
};
