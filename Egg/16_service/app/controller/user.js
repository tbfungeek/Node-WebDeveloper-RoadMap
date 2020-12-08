'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async user() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await this.service.user.detail(id);
  }

  async detail() {
    const { ctx } = this;
    const id = ctx.query.id;
    ctx.body = await this.service.user.detail(id);
  }

  async updateUserInfo() {
    const { ctx } = this;

    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;
