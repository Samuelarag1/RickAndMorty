const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const actualUser = await User.findOne({ where: { email: email } });
      if (actualUser) {
        if (actualUser.password === password) {
          res.status(200).json({ access: true });
        }
        return res.status(403).send("Contraseña incorrecta");
      }
      return res.status(404).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan Datos");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = login;
