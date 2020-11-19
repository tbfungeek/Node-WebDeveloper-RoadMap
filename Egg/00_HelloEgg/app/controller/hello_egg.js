"use strict";

const Controller = require("egg").Controller;

class HelloEggController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "Hello Egg";
  }
}

module.exports = HelloEggController;
