const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupandStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () =>
    console.log(
      `Server is running on this is good  hi kya haal chal lalu port ${PORT}`
    )
  );
};
setupandStartServer();
