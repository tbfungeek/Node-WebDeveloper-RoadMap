"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  encode(str = "") {
    return new Buffer(str).toString("base64");
  }
  decode(str = "") {
    return new Buffer(str, "base64").toString();
  }

  async login() {
    const { ctx } = this;

    const rule = {
      name: { type: "string" },
      age: { type: "number" }
    };

    ctx.validate(rule);

    console.log(JSON.stringify(ctx.request.body));

    ctx.cookies.set("user", JSON.stringify(ctx.request.body), {
      maxAge: 1000 * 60 * 10,
      httpOnly: false
    });

    const user = ctx.cookies.get("user");

    ctx.session.user = user;

    await ctx.render("demo_profile.html", {
      user: user ? JSON.parse(user) : null
    });
  }

  async logout() {
    const { ctx } = this;
    ctx.cookies.set("user", null);
  }

  async profile() {
    const { ctx } = this;

    //使用加密方式存储中文cookie内容
    ctx.cookies.set("zh", "测试", {
      encrypt: true
    });
    const zh = ctx.cookies.get("zh", {
      encrypt: true
    });

    //使用base64方式存储cookie中文
    ctx.cookies.set("base64", this.encode("中文base64"));
    const base64 = this.decode(ctx.cookies.get("base64"));

    console.log(zh);
    console.log(base64);

    const user = ctx.cookies.get("user")
      ? ctx.cookies.get("user")
      : ctx.session.user;

    await ctx.render("demo_profile.html", {
      user: user ? JSON.parse(user) : null
    });
  }
}

module.exports = UserController;
