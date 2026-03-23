// Bas-URL till backend
const API_URL = "http://localhost:3000";

// Hämtar alla produkter
export async function getProducts() {
  const res = await fetch(API_URL + "/products");
  return res.json();
}

// Hämtar en specifik produkt
export async function getProduct(id) {
  const res = await fetch(API_URL + "/products/" + id);
  return res.json();
}

// Lägger till produkt i varukorg
export async function addToCart(userId, productId, amount) {
  const res = await fetch(API_URL + "/cart/addProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId,
      productId,
      amount
    })
  });

  return res.json();
}

// Hämtar varukorg för en användare
export async function getCart(userId) {
  const res = await fetch(API_URL + "/cart/" + userId);
  return res.json();
}

// Lägger till rating på produkt
export async function addRating(productId, value) {
  const res = await fetch(API_URL + "/products/" + productId + "/rating", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ value })
  });

  return res.json();
}