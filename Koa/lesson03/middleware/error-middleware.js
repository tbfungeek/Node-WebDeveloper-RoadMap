
const {HttpException} = require('../http-exception');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err instanceof HttpException) {
            ctx.body = {
                errorCode:err.code,
                message:err.message,
                requestUrl:`${ctx.method} : ${ctx.url}`,
            }
            ctx.status = err.status;
        }
    }
};
