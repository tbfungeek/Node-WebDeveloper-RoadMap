'use strict';

// init database here
module.exports = async app => {
  // sync database defines
  await app.model.sync();
};