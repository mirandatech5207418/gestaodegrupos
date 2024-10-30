const  {
  getAllHoteleiros,
  createHoteleiro,
} = require("../repositories/hoteleiroRepository.js");

const getAllHoteleirosService = async () => {
  return await getAllHoteleiros();
};

const createHoteleiroService = async (hoteleiroData) => {
  return await createHoteleiro(hoteleiroData);
};

module.exports = {
  getAllHoteleiros: getAllHoteleirosService,
  createHoteleiro: createHoteleiroService,
};
