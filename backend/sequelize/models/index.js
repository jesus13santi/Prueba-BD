//Conexion con la base de datos
import Sequelize from "sequelize";

const sequelize = new Sequelize("pruebaConexion", "postgres", "28315290", {
  host: "localhost",
  dialect: "postgres",
});
const models = {
  persona: sequelize.import("./persona"),
};
models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
