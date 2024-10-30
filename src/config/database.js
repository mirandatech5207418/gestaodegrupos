const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

console.log('DB_HOST:', DB_HOST);
console.log('DB_USER:', DB_USER);
console.log('DB_PASSWORD:', DB_PASSWORD);
console.log('DB_PORT:', DB_PORT);
console.log('DB_NAME:', DB_NAME);

// Configuração simplificada do SSL
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true, // **Atenção:** Defina como `true` com certificado CA em produção
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Autenticação bem-sucedida.");
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
  });

module.exports = { sequelize };
