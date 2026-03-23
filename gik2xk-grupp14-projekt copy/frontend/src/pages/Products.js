import { useEffect, useState } from "react"; 
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";

// Visar lista av produkter
function Products() {

  const [products, setProducts] = useState([]);

  // Hämtar produkter vid start
  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  return (
    <div>
      <h1>Produkter</h1>

      {/* Loopar igenom produkter */}
      {products.map(p => (
        <ProductCard key={p.id} product={p}/>
      ))}

    </div>
  );
}

export default Products;