const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");

const router = new Router("/v1");

const app = new Koa();

app.use(BodyParser());
router.get("/", async ctx => {
    ctx.
});

app.listen(3000, () => {
  console.log("app listen in port 3000");
});
