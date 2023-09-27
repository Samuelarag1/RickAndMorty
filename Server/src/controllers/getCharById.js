const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const personaje = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(personaje));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" }).end("Error(error)");
    });
};

module.exports = { getCharById };
