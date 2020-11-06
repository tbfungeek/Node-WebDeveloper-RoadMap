module.exports = async (ctx, next) => {
  console.log(ctx.method, ctx.header.host + ctx.url);
  await next();
};
