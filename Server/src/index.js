const server = require("./app.js");
const PORT = 3001;
const { conn } = require("./DB_connection.js");

server.listen(PORT, async () => {
  await conn.sync({ force: true });
});
