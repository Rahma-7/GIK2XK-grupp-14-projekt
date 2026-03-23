const { Sequelize } = require("sequelize");

// Skapar koppling till SQLite-databasen
const sequelize = new Sequelize({
  dialect: "sqlite",            // Använder SQLite som databas
  storage: "./database.sqlite"  // Fil där databasen sparas
});

module.exports = sequelize;