import path from "path";
import fs from "fs";
import Sequelize from "sequelize";

let db = null;
module.exports = app => {
  const configs = app.libs.config;
  if (!db) {
    const sequelize = new Sequelize(
      configs.database,
      configs.username,
      configs.password,
      configs.params
    );

    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    const dir = path.join(__dirname, "models");
    fs.readdirSync(dir).forEach(filename => {
      const modelDir = path.join(dir, filename);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models);
    });
  }

  return db;
};
