const { DataTypes } = require("sequelize");
const sequelize = require("./index");

// Skapar Product-modellen (produkt i webbshoppen)
const Product = sequelize.define("Product", {

  // Produktens namn
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Beskrivning av produkten
  description: {
    type: DataTypes.TEXT
  },

  // Pris på produkten
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Bild-URL till produkten
  imageUrl: {
    type: DataTypes.STRING
  }

});

module.exports = Product;