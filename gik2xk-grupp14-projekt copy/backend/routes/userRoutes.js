const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Erik" }
];

// Hämta alla användare
router.get("/", (req, res) => {
  res.json(users);
});

// Hämta en användare
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Användaren hittades inte" });
  }

  res.json(user);
});

// Skapa användare
router.post("/", (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Uppdatera användare
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Användaren hittades inte" });
  }

  user.name = name;

  res.json(user);
});

// Ta bort användare
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({ message: "Användare borttagen" });
});

module.exports = router;