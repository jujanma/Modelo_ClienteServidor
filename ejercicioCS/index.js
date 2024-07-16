const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// function main
const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;

  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(","))
    .join("\n");
  let cabecera = "ID, Name, Status, Species";
  let csvdata = `${cabecera}\n${characters}`;
  await fs.writeFile(path.join(__dirname, "data.csv"), csvdata);
  //   console.log(path.join(__dirname, "data.csv"));
  //   console.log(characters);
};

main();
