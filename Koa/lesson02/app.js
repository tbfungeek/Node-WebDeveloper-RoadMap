const Koa = require("koa");
const ModuleLauncher = require("./core/init");

const app = new Koa();

ModuleLauncher.init(app);

app.listen(2000);
