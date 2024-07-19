//* aqui se trabajara todo el CRUD, controlar todos los datos

const dataPersonas = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => {
    return dataPersonas;
  },
  createUser: (dataUser) => {
    let newUser = {
      id: dataPersonas.length + 1,
      ...dataUser,
    };
    dataPersonas.push(newUser);
    return newUser;
  },
};
