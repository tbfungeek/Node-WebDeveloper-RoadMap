'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index() {

    const { ctx } = this;
    const session = ctx.session.user;
    ctx.body = session;
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;

    ctx.session.user = body;

    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async logout() {
    const { ctx } = this;
    ctx.session.user = null;
    ctx.body = {
      status: 200,
    };
  }
}

module.exports = UserController;
