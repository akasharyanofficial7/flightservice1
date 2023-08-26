const express = require("express");
require("dotenv").config();

const { PORT } = require("./config/serverConfig");
const setupandStartServer = async () => {
  const app = express();
  app.listen(PORT, () =>
    console.log(
      `Server is running on this is good  hi kya haal chal lalu port ${PORT}`
    )
  );
};
setupandStartServer();
