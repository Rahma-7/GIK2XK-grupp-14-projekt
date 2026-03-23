const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// Skapar User-modellen (användare i webbshoppen)
const User = sequelize.define("User", {

  // Användarens namn
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = User;