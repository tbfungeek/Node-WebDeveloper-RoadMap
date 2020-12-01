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
  config.keys = appInfo.name + '_1606405413380_2931';

  // add your middleware config here
  config.middleware = [
    'responseTime',
  ];

  config.orm = {
    dialect: 'sqlite',
    client: 'sqlite3',
    database: path.join(__dirname, '..', 'todos.sqlite3'),
    sequelize: true,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    responseTime: {
      headerKey: 'X-Response-Time',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
