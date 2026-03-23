import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

// Huvudkomponent med routing
function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav>
        <Link to="/">Produkter</Link>
        {" | "}
        <Link to="/cart">Varukorg</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;