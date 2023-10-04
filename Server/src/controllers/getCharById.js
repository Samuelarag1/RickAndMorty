const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const { data } = await axios.get(URL + charId);
    const { id, name, status, species, origin, image, gender } = data;
    const character = { id, name, status, species, origin, image, gender };

    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };
