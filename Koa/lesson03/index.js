const Koa = require('koa');
const app = new Koa();
const errorMiddleWare = require('./middleware/error-middleware');
const {NotFoundException} = require('./http-exception');

app.use(errorMiddleWare);
app.use(async (ctx, next) => {
	const error = new NotFoundException();
	error.requestUrl = `${ctx.method} : ${ctx.url}`;
	throw error;
});


app.listen(20001, () => {
	console.log('service listen on 20001 ports');
});
