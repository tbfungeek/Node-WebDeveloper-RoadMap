'use strict';

const Controller = require('egg').Controller;
//const info = require('../utils/info');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggs ';
  }

  async info() {
    const { ctx } = this;
    ctx.body = ctx.info;
  }
}

module.exports = HomeController;
