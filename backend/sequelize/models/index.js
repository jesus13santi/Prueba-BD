//Conexion con la base de datos
import Sequelize from "sequelize";

const sequelize = new Sequelize("pruebaConexion", "postgres", "28315290", {
  host: "localhost",
  dialect: "postgres",
});
const models = {
  persona: sequelize.import("./persona"),
  perro: sequelize.import("./perro"),
};

// models.perro.belongsTo(models.persona, {
//   name: "id",
//   field: "id",
// });

models.perro.belongsTo(models.persona, { foreingKey: "id" });
models.persona.hasOne(models.perro, { foreingKey: "id" });

models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;
