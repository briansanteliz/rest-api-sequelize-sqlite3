import express from "express";
module.exports = app => {
  // settings
  app.set("Port", process.env.PORT || 3000);

  // middlewares
  app.use(express.json());
};
