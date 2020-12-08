/* eslint valid-jsdoc: "off" */

"use strict";

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1605751130760_5314";

  // add your middleware config here
  config.middleware = [];
  
  config.view = {
    mapping: {
      '.njk': 'nunjucks',
    },
    defaultViewEngine: "nunjucks",
    root: [
      path.join(appInfo.baseDir,'app/view'),
      path.join(appInfo.baseDir,'app/html'),
    ].join(',')
  };

  config.nunjucks = {
    cache: true
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir, "app/assets")
  };

  config.security = {
    csrf:{
      enable:false
    }
  };

  config.session = {
    key: "PRIVATE_SESS",
    httpOnly: true,
    maxAge: 1000 * 50,
    renew: true
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig
  };
};
