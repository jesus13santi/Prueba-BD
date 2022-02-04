const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

//Models:
const models = require("./sequelize/models/index");
models.sequelize.authenticate().then(() => {
  //Conexion a la BD
  console.log("Estas conectado a la BD");
});
models.sequelize.sync(); //Sincronizacion de los modelos con la BD
//--------------------

//GraphQL
//typesDefs
import typeDefs from "./graphQL/typeDefs/typeDefs";

//Resolvers
import resolvers from "./graphQL/resolvers/resolvers";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 5000 }, () => {
  console.log(
    "Corriendor Servidor Apollo en http://localhost:5000" + server.graphqlPath
  );
});
