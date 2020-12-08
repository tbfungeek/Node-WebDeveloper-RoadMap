"use strict";

const Controller = require("egg").Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    const result = await ctx.curl("http://127.0.0.1:7001/profile", {
      dataType: "html"
    });
    ctx.body = result;
  }

  async curlPost() {
    const { ctx } = this;
    const res = await ctx.curl("http://localhost:7001/login", {
      method: "post",
      contentType: "json",
      data: ctx.request.body,
      dataType: "json"
    });
    console.log(res);
    ctx.body = res.data;
  }
  }
}

module.exports = CurlController;
