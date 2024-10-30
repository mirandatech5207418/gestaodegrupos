const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const hoteleiroModel = require("./hoteleiro.js");

const Hoteleiro = hoteleiroModel(sequelize, DataTypes);

module.exports = { sequelize, Hoteleiro };
