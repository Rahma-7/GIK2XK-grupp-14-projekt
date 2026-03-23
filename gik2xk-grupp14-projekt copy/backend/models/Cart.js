const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// Skapar Cart-modellen (varukorg)
const Cart = sequelize.define("Cart", {
  
  // Kopplar varukorgen till en specifik användare
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = Cart;