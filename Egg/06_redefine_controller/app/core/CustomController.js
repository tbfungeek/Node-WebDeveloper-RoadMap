"use strict";

const Controller = require("egg").Controller;

class CustomController extends Controller {
  success(result) {
    const { ctx } = this;
    ctx.body = {
      success: true,
      result
    };
  }

  fail(message) {
    const { ctx } = this;
    ctx.body = {
      success: false,
      result: message
    };
  }
}

module.exports = CustomController;
