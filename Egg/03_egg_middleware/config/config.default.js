/* eslint valid-jsdoc: "off" */

"use strict";

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
  config.keys = appInfo.name + "_1605757818751_2790";

  // add your middleware config here
  // 这里注意写法：下划线改成大写
  config.middleware = ["helloMiddleWare"];

  // 这里注意写法：option
  config.helloMiddleWare = {
    text: "Hello World"
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
