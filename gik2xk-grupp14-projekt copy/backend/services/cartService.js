const Cart = require("../models/Cart");
const CartRow = require("../models/CartRow");
const Product = require("../models/Product");


// lägg till produkt i varukorg
async function addProductToCart(userId, productId, amount) {

  // hitta eller skapa cart
  let cart = await Cart.findOne({
    where: { userId: userId }
  });

  if (!cart) {
    cart = await Cart.create({
      userId: userId
    });
  }

  // kontrollera om produkten redan finns
  let row = await CartRow.findOne({
    where: {
      cartId: cart.id,
      productId: productId
    }
  });

  if (row) {
    row.amount = row.amount + amount;
    await row.save();
  } else {
    await CartRow.create({
      cartId: cart.id,
      productId: productId,
      amount: amount
    });
  }

  return cart;
}



// hämta varukorg
async function getCart(userId) {

  const cart = await Cart.findOne({
    where: { userId: userId }
  });

  if (!cart) return null;

  const rows = await CartRow.findAll({
    where: { cartId: cart.id }
  });

  let items = [];
  let totalPrice = 0;

  for (let row of rows) {

    const product = await Product.findByPk(row.productId);

    if (product) {

      const itemTotal = product.price * row.amount;

      items.push({
        name: product.name,
        price: product.price,
        amount: row.amount,
        total: itemTotal
      });

      totalPrice += itemTotal;
    }
  }

  return {
    userId: userId,
    items: items,
    totalPrice: totalPrice
  };
}


module.exports = {
  addProductToCart,
  getCart
};