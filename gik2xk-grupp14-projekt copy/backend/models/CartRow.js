const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// Skapar CartRow-modellen (en rad i varukorgen)
const CartRow = sequelize.define("CartRow", {

  // Referens till vilken varukorg raden tillhör
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Referens till vilken produkt som ligger i varukorgen
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Antal av produkten i varukorgen
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = CartRow;