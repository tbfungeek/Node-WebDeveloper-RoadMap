"use strict";

const Controller = require("egg").Controller;

class CookieController extends Controller {
  async index() {
    const { ctx } = this;
    //cookie 中有值
    if (ctx.cookies.get("remember")) {
      ctx.body =
        '<p>Remembered :). Click to <a href="/forget">forget</a>!.</p>';
      return;
    }
    ctx.body = `<form method="post" action="/remember"><p>Check to <label>
    <input type="checkbox" name="remember"/> remember me</label>
    <input type="submit" value="Submit"/>.</p></form>`;
  }

  async remember() {
    const { ctx } = this;
    if (ctx.request.body.remember) {
      ctx.cookies.set("remember", 1, { maxAge: 60000 });
    }
    ctx.redirect("/");
  }

  async forget() {
    const { ctx } = this;

    if (ctx.cookies.get("remember")) {
      ctx.cookies.set("remember", null);
    }
    ctx.redirect("/");
  }
}

module.exports = CookieController;
