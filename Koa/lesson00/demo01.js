
//KOA 包括四大内容：http上下文、请求、响应，以及基于async/await的中间件容器。

const Koa = require("koa");
const app = new Koa();
app.use(async (ctx, next) => {
  ctx.response.body = "Hello World";
});

app.listen(2000);
console.log("service running on port 2000");
