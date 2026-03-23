import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, addToCart, addRating } from "../api/api";

// Visar detaljer för en produkt
function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(5);
  const [amount, setAmount] = useState(1);

  // Hämtar produkt när sidan laddas eller id ändras
  useEffect(() => {
    loadProduct();
  }, [id]);

  async function loadProduct() {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error("Fel vid hämtning av produkt:", error);
    }
  }

  // Lägger till i varukorg
  async function handleAddToCart() {
    try {
      await addToCart(1, id, amount);
      alert("Produkten lades i varukorgen");
    } catch (error) {
      console.error("Fel vid lägg till i varukorg:", error);
    }
  }

  // Skickar rating
  async function handleRating() {
    try {
      await addRating(id, rating);
      await loadProduct(); // uppdaterar sidan
    } catch (error) {
      console.error("Fel vid rating:", error);
    }
  }

  if (!product) return <p>Laddar...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>{product.product.name}</h2>

      <p>{product.product.price} kr</p>

      <p>{product.product.description}</p>

      {/* Bild */}
      {product.product.imageUrl && (
        <img
          src={product.product.imageUrl}
          alt={product.product.name}
          style={{ width: "250px" }}
        />
      )}

      {/* Välj antal */}
      <div>
        <label>Antal: </label>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button onClick={handleAddToCart}>
        Lägg i varukorg
      </button>

      <h3>Rating</h3>

      {/* Snittbetyg */}
      <p>Snitt: {Number(product.averageRating || 0).toFixed(1)}</p>

      {/* Lista alla betyg */}
      {product.ratings && product.ratings.length > 0 ? (
        <ul>
          {product.ratings.map((r, index) => (
            <li key={index}>{r.value}</li>
          ))}
        </ul>
      ) : (
        <p>Inga betyg än.</p>
      )}

      {/* Sätt rating */}
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button onClick={handleRating}>
        Skicka rating
      </button>
    </div>
  );
}

export default ProductDetail;