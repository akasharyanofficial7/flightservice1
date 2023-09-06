const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const CityRepository = require("./repository/city-repository");

const setupandStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // const repo = new CityRepository();
    // await repo.createCity("New Delhi");
    // repo.deleteCity(7);
  });
};

setupandStartServer();
