const express = require("express");
const Service = require("./src/service");
const app = express();
const PORT = 3000;

app.use(express.json);

app.get("/", (req, res) => {
  try {
    res.json({
      message: "Lista de Usuarios",
      body: Service.getUsers(),
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/", (req, res) => {
  try {
    let { body: newUser } = req;
    let user = Service.createUser(newUser);
    res.status(201).json({
      message: "El usuario ha sido creado",
      body: user,
    });
  } catch (error) {
    console.error("error en post", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
