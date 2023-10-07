const router = require("express").Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/postUser", postUser);

router.post("/favs", postFav);

router.delete("/favs/:id", deleteFav);

module.exports = router;
