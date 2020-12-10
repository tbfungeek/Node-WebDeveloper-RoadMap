'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const user = ctx.session.user;
    if (!user && !options.excludes.includes(url.split('?')[0])) {
      ctx.body = {
        status: 1001,
        errMsg: '用户未登录',
      };
    } else {
      await next();
    }
  };
};
