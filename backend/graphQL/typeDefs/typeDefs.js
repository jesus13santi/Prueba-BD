const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Persona {
    id: Int!
    nombre: String!
    apellido: String!
    active: Boolean!
  }
  type Perro {
    id: Int!
    nombre: String!
    raza: String!
    active: Boolean!
    Persona: Persona
  }

  type Query {
    getPersonas: [Persona]
    getPersona(id: Int): Persona
    getPerros: [Perro]
    getPerro(id: Int): Perro
  }

  type Mutation {
    createPerson(nombre: String!, apellido: String!, active: Boolean!): Persona!
    updatePerson(
      id: Int!
      nombre: String!
      apellido: String!
      active: Boolean
    ): Persona!
    createPerro(
      nombre: String!
      raza: String!
      active: Boolean!
      PersonaId: Int
    ): Perro!
    updatePerro(
      id: Int!
      nombre: String!
      raza: String!
      active: Boolean
    ): Perro!
  }
`;

module.exports = typeDefs;
