'use strict';

module.exports = (options, app) => {
  return async function(ctx, next) {
    await next();
    ctx.body = options.text;
  };
};
