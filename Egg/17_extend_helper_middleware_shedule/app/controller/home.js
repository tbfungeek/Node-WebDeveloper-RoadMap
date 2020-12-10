'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async home() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async newApplication() {
    const { ctx, app } = this;
    const packageInfo = app.package('scripts');
    const allPackage = app.allPackage;
    ctx.body = allPackage;
  }

  async newContext() {

    const { ctx } = this;
    const name = ctx.params('name');
    ctx.body = ctx.helper.base64Encode(name);
  }

  async newRequest() {
    const { ctx } = this;
    ctx.body = ctx.request.token;
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'abc123abc';
    const base64Parse = ctx.helper.base64Encode('newResponse');
    ctx.body = base64Parse;
  }
}

module.exports = HomeController;
