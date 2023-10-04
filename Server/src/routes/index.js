const router = require("express").Router();
const characters = require("../controllers/getCharById.js");
const { login } = require("../controllers/login.js");
const { addFav, deleteFav } = require("../controllers/handleFavorites.js");

router.get("/character/:id", characters.getCharById);
router.get("/login", login);

router.post("/favs", addFav);
router.delete("/favs/:id", deleteFav);

module.exports = router;
