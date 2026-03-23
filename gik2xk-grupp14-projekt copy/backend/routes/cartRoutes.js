const express = require("express");
const router = express.Router();

const cartService = require("../services/cartService");


// lägg till produkt i cart
router.post("/addProduct", async (req, res) => {

  const { userId, productId, amount } = req.body;

  if (!userId || !productId || !amount) {
    return res.status(400).json({
      message: "userId, productId och amount krävs"
    });
  }

  const cart = await cartService.addProductToCart(
    userId,
    productId,
    amount
  );

  res.json(cart);
});



// hämta cart
router.get("/:userId", async (req, res) => {

  const userId = parseInt(req.params.userId);

  const cart = await cartService.getCart(userId);

  if (!cart) {
    return res.json({
      message: "Varukorgen är tom"
    });
  }

  res.json(cart);
});


module.exports = router;