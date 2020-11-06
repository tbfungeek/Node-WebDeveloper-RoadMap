const Koa = require("koa");
const app = new Koa();
const AyncLoggerMiddleWare = require("./middleware/async-logger");

app.use(AyncLoggerMiddleWare);

app.use(async (ctx, next) => {
  ctx.response.body = "middleWare Demo";
});

app.listen(2000);
console.log("service is runing at 2000 port");
