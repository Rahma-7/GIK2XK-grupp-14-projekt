import { useEffect, useState } from "react";
import { getCart } from "../api/api";

// Visar användarens varukorg
function Cart() {
  const [cart, setCart] = useState(null);

  // Hämtar varukorgen vid start
  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    try {
      const data = await getCart(1); // hämtar cart för user 1
      setCart(data);
    } catch (error) {
      console.error("Fel vid hämtning av varukorg:", error);
    }
  }

  if (!cart) return <p>Laddar...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Varukorg</h1>

      {/* Om tom varukorg */}
      {cart.items.length === 0 ? (
        <p>Varukorgen är tom</p>
      ) : (
        // Loopar igenom produkter
        cart.items.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Pris: {item.price} kr</p>
            <p>Antal: {item.amount}</p>
            <p>Summa: {item.price * item.amount} kr</p>
          </div>
        ))
      )}

      {/* Totalpris */}
      <h2>Total: {cart.totalPrice} kr</h2>
    </div>
  );
}

export default Cart;