const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Persona {
    id: Int!
    nombre: String!
    apellido: String!
    active: Boolean!
  }

  type Query {
    getPersonas: [Persona]
    getPersona(id: Int): Persona
  }

  type Mutation {
    createPerson(nombre: String!, apellido: String!, active: Boolean!): Persona!
    updatePerson(
      id: Int!
      nombre: String!
      apellido: String!
      active: Boolean
    ): Persona!
  }
`;

module.exports = typeDefs;
