const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

const sequelize = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("API fungerar");
});

sequelize.sync().then(() => {

  console.log("Databasen är redo");

  app.listen(3000, () => {
    console.log("Server kör på port 3000");
  });

});