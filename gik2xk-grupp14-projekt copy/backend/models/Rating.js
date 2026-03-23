const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// Skapar Rating-modellen (betyg på produkter)
const Rating = sequelize.define("Rating", {

  // Kopplar betyget till en specifik produkt
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Själva betyget (1–5)
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = Rating;