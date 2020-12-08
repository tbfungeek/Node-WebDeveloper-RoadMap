"use strict";

const Controller = require("egg").Controller;

class NumjunksController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render("demo_home.html", {
      user: {
        name: "linxiaohai"
      },
      islogin: true,
      articals: [
        { title: "first one ", id: 1 },
        { title: "second one ", id: 2 },
        { title: "third one ", id: 3 }
      ],
      food: {
        ketchup: "5 tbsp",
        mustard: "1 tbsp",
        pickle: "0 tbsp"
      }
    });
  }
}

module.exports = NumjunksController;
