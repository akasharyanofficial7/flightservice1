const { CityRepository } = require("./repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    const city = await this.cityRepository.createCity(data);
    return city;
    try {
    } catch (error) {
      console.log("somthing went wrong at the servise layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    const response = await this.cityRepository.deleteCity(cityId);
    return response;
    try {
    } catch (error) {
      console.log("somthing went wrong at the servise layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    const city = await this.cityRepository.updateCity(cityId, data);
    return city;
    try {
    } catch (error) {
      console.log("somthing went wrong at the servise layer");
      throw { error };
    }
  }
  async getCity(cityId) {
    const city = await this.cityRepositor.getCity(cityId);
    return city;
    try {
    } catch (error) {
      console.log("somthing went wrong at the servise layer");
      throw { error };
    }
  }
}
