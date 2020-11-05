const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

require('./user')

router.get('/', (ctx) => {
});

app.use(router.routes());
app.listen(2000, () => {
	console.log('listen in port 2000');
});
