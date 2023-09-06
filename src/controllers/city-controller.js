const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return req.status(201).json({
      data: city,
      success: true,
      message: "successfully created a message",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return req.status(500).json({
      data: {},
      success: false,
      message: " not able to create a city",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return req.status(200).json({
      data: response,
      success: true,
      message: "successfully data is created ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return req.status(500).json({
      data: {},
      success: false,
      message: " not able to  delete the  city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return req.status(200).json({
      data: response,
      success: true,
      message: " successfullyfetch th city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return req.status(500).json({
      data: {},
      success: false,
      message: " not able to get the  city",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return req.status(200).json({
      data: response,
      success: true,
      message: " successfully update the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return req.status(500).json({
      data: {},
      success: false,
      message: " not able to update the  city",
      err: error,
    });
  }
};
