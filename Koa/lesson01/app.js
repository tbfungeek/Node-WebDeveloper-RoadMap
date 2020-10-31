const Koa = require('koa');

//1. 新建koa实例
const app = new Koa();

//2. 在应用实例上添加中间件
app.use((ctx, next) => {
	console.log('This is first middleware');
	next();
});

app.use((ctx, next) => {
	console.log('This is second middleware');
	next();
});

//3. 指明监听在某个端口
app.listen(3001);
