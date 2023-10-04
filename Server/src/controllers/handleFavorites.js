let myFavorites = [];

const addFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((fav) => {
    return fav.id !== Number(id);
  });

  return res.status(200).json(myFavorites);
};

module.exports = { addFav, deleteFav };
