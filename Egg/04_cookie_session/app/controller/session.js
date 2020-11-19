"use strict";

const Controller = require("egg").Controller;

class SessionController extends Controller {
  async setSession() {
    const { ctx } = this;
    ctx.session.value = (ctx.session.value || 0) + 1;
    ctx.body = `${ctx.session.value}`;
  }
}

module.exports = SessionController;
