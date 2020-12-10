'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'hi, egg';
  }

  async add() {

    const {
      ctx
    } = this;
    const res = await ctx.service.home.add(ctx.request.body);
    ctx.body = res;
  }

  async del() {
    const {
      ctx
    } = this;
    const id = ctx.query.id;
    const res = await ctx.service.home.del(id);
    ctx.body = res;
  }

  async update() {
    const {
      ctx
    } = this;
    const res = await ctx.service.home.update(ctx.request.body);
    ctx.body = res;
  }

  async detail() {

    const {
      ctx
    } = this;
    const res = await ctx.service.home.detail();
    ctx.body = res;
  }

  async findById() {
    const {
      ctx
    } = this;
    const id = ctx.query.id;
    const res = await ctx.service.home.findById(id);
    ctx.body = res;
  }
}

module.exports = HomeController;