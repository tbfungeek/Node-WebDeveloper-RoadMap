"use strict";

const Controller = require("egg").Controller;
const FormStream = require("formstream");
const fs = require("fs");

class HomeController extends Controller {
  async home() {
    const { ctx } = this;
    const result = await ctx.curl("https://registry.npmjs.com/egg/latest", {
      dataType: "json",
      timeout: 3000
    });
    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data
    };
  }

  async get() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/get?foo=bar");
    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  async post() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/post", {
      method: "POST",
      data: {
        hello: "tbfungeek",
        date: Date()
      },
      contentType: "json",
      dataType: "json"
    });
    ctx.body = result.data;
  }

  async put() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/put", {
      method: "PUT",
      contentType: "json",
      dataType: "json",
      data: {
        date: Date()
      }
    });
    ctx.body = {
      status: result.status,
      data: result.data
    };
  }

  async del() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/delete", {
      method: "DELETE",
      dataType: "json"
    });
    ctx.body = result.data;
  }

  async form() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/post", {
      method: "POST",
      dataType: "json",
      data: {
        username: "tbfungeek",
        timestamp: Date.now()
      }
    });

    ctx.body = result.data.form;
  }

  async multipart() {
    const { ctx } = this;
    const formStream = new FormStream();
    formStream.field("value", "value");
    formStream.field("file", __filename);

    const result = await ctx.curl("https://httpbin.org/post", {
      method: "POST",
      headers: formStream.headers(),
      stream: formStream,
      dataType: "json"
    });
    ctx.body = result;
  }

  async files() {
    const { ctx } = this;
    const result = await ctx.curl("https://httpbin.org/post", {
      method: "POST",
      dataType: "json",
      files: {
        file1: __filename,
        file2: Buffer.from("mock file content")
      },
      data: {
        foo: "bar"
      }
    });
    ctx.body = result.data.files;
  }

  async stream() {
    const ctx = this.ctx;

    // 上传当前文件本身用于测试
    const fileStream = fs.createReadStream(__filename);
    const url = `${ctx.protocol}://${ctx.host}/stream`;
    const result = await ctx.curl(url, {
    // 必须指定 method，支持 POST，PUT
      method: 'POST',
      // 以 stream 模式提交
      stream: fileStream,
    });

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  async postStream() {
    const ctx = this.ctx;

    let size = 0;
    ctx.req.on('data', data => {
      size += data.length;
    });
    ctx.req.resume();
    await end(ctx.req);

    ctx.body = {
      streamSize: size,
    };
  }

  async error() {
    const ctx = this.ctx;

    try {
      await ctx.curl('http://not_exists_domain.com');
    } catch (err) {
      console.log(err);
    }
    try {
      await ctx.curl('http://127.0.0.1:1999/foo');
    } catch (err) {
      console.log(err);
    }
    try {
      await ctx.curl('https://registry.npmjs.com/npm', {
        timeout: 500,
      });
    } catch (err) {
      console.log(err);
    }
    ctx.body = 'ok';
  }
}

function end(req) {
  return new Promise((resolve, reject) => {
    req.on('end', resolve);
    req.on('error', reject);
  });
}

module.exports = HomeController;
