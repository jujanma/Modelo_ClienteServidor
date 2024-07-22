//* aqui se trabajara todo el CRUD, controlar todos los datos

const dataPersonas = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => dataPersonas,
  getUser: (id) => {
    let identificador = Number(id);
    let user = dataPersonas.filter((person) => person.id === identificador)[0];
    return user;
  },

  createUser: (dataUser) => {
    let newUser = {
      id: dataPersonas.length + 1,
      ...dataUser,
    };
    dataPersonas.push(newUser);
    return newUser;
  },
  updateUser: (id, userUpdate) => {
    let identificador = Number(id);
    let userUpdated = dataPersonas.filter(
      (person) => person.id === identificador
    )[0];
    userUpdated = { ...userUpdated, ...userUpdate };
    return userUpdated;
  },
};
