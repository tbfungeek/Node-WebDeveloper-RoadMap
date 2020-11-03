const Router = require("koa-router");
const router = new Router();

router.get("/classic", (ctx, next) => {
    console.log("classic")
});

module.exports = router;
