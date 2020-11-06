const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const User = require('./user');
const bcrypt = require('bcryptjs');

require('./user');

router.get('/', (ctx) => {
	const salt = bcrypt.genSaltSync(10);
	User.create({
		nickname: 'tbfungeek',
		password: bcrypt.hashSync('Aa123456', salt)
	});
});

app.use(router.routes());
app.listen(2000, () => {
	console.log('listen in port 2000');
});
