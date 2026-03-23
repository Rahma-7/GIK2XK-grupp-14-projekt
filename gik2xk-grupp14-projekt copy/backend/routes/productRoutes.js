const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Rating = require("../models/Rating");


// GET alla produkter
router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});


// GET en produkt + ratings + snittbetyg
router.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Produkten finns inte"
    });
  }

  const ratings = await Rating.findAll({
    where: { productId: product.id }
  });

  let sum = 0;

  ratings.forEach((r) => {
    sum += r.value;
  });

  const averageRating = ratings.length > 0 ? sum / ratings.length : 0;

  res.json({
    product: product,
    ratings: ratings,
    averageRating: averageRating
  });
});


// POST skapa produkt
router.post("/", async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  const product = await Product.create({
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl
  });

  res.json(product);
});


// PUT uppdatera produkt
router.put("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Produkten finns inte"
    });
  }

  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;

  await product.save();

  res.json(product);
});


// DELETE ta bort produkt
router.delete("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Produkten finns inte"
    });
  }

  await product.destroy();

  res.json({
    message: "Produkten borttagen"
  });
});


// POST lägg till rating
router.post("/:id/rating", async (req, res) => {
  const productId = req.params.id;
  const { value } = req.body;

  if (!value || value < 1 || value > 5) {
    return res.status(400).json({
      message: "Rating måste vara mellan 1 och 5"
    });
  }

  const rating = await Rating.create({
    productId: productId,
    value: value
  });

  res.json(rating);
});

module.exports = router;