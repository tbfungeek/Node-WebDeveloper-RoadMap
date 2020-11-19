'use strict';

const Controller = require('egg').Controller;

//通过 EGG_SERVER_ENV='prod' npm run dev 来切换环境
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      env: ctx.app.config.env,
      config: ctx.app.config.keys,
    };
  }
}

module.exports = HomeController;
