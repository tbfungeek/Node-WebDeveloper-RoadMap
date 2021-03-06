'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home.html', {
      user: {
        name: 'linxiaohai',
      },
      title: 'This is a real Egg',
    });
  }
}

module.exports = HomeController;
