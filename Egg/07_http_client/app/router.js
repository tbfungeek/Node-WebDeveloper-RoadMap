"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", "httpclient.home");
  router.get("/get", "httpclient.get");
  router.get("/post", "httpclient.post");
  router.get("/put", "httpclient.put");
  router.get("/del", "httpclient.del");
  router.get("/form", "httpclient.form");
  router.get("/multipart", "httpclient.multipart");
  router.get("/files", "httpclient.files");
  router.get("/stream", "httpclient.stream");
  router.post("/stream", "httpclient.postStream");
  router.get("/error", "httpclient.error");
};
