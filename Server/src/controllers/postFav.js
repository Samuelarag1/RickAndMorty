const favorite = require("../DB_connection.js");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (id && name && origin && status && image && species && gender) {
      await favorite.findOrCreate(req.body);
      const allFavorite = await favorite.findAll();
      return res.status(200).json(allFavorite);
    }
    return res.status(401).send("Faltan datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postFav;
