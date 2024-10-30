const express = require("express");
const dotenv = require("dotenv");
const hoteleiroRoutes = require("./routes/hoteleiroRoutes.js");
const { sequelize } = require("./models/index.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/hoteleiros", hoteleiroRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    sequelize.sync().then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  module.exports = app;