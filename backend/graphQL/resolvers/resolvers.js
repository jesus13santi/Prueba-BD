const resolvers = {
  Query: {
    async getPersonas(root, args, { models }) {
      return await models.persona.findAll({ where: { active: true } });
    },
    async getPersona(root, args, { models }) {
      return await models.persona.findByPk(args.id);
    },
    async getPerros(root, args, { models }) {
      return await models.perro.findAll({
        include: [
          {
            model: models.persona,
          },
        ],
        where: { active: true },
      });
    },
    async getPerro(root, args, { models }) {
      return await models.perro.findByPk(args.id);
    },
  },
  Mutation: {
    async createPerson(root, { nombre, apellido, active }, { models }) {
      return await models.persona.create({ nombre, apellido, active });
    },
    async updatePerson(root, { id, nombre, apellido, active }, { models }) {
      await models.persona.update(
        { id, nombre, apellido, active },
        {
          where: {
            id: id,
          },
        }
      );
      return await models.persona.findByPk(id);
    },
    async createPerro(root, { nombre, raza, active, PersonaId }, { models }) {
      return await models.perro.create({ nombre, raza, active, PersonaId });
    },
    async updatePerro(
      root,
      { id, nombre, raza, active, PersonaId },
      { models }
    ) {
      await models.perro.update(
        { id, nombre, raza, active, PersonaId },
        {
          where: {
            id: id,
          },
        }
      );
      return await models.perro.findByPk(id);
    },
  },
};

module.exports = resolvers;
