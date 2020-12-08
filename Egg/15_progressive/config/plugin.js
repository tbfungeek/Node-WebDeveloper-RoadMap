'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  info: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-info'),
  }
};
