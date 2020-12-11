/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607620527547_2073';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'Aa123456',
      database: 'egg',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Aa123456',
    database: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};