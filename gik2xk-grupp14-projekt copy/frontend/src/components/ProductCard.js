import { Link } from "react-router-dom";

// Visar produkt
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3> {/* namn */}
      <p>{product.price} kr</p> {/* pris */}

      {/* länk till detaljsida */}
      <Link to={"/products/" + product.id}>
        Se produkt
      </Link>
    </div>
  );
}

export default ProductCard;