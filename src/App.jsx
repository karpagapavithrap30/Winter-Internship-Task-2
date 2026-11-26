
import { useState } from "react";

import Navbar from "./components/Navbar";
import CategoryNav from "./components/CategoryNav";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";

function App() {

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      id: 3,
      name: "Laptop",
      price: 45999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
      id: 4,
      name: "Camera",
      price: 29999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
      id: 5,
      name: "Sneakers",
      price: 1999,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
      id: 6,
      name: "Backpack",
      price: 999,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    }
  ];

  // Search products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add products to cart
  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
      />

      <CategoryNav />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-6">

          <h1 className="text-2xl font-bold mb-2">
            Today's Deals
          </h1>

          <p className="text-gray-500 mb-6">
            Discover amazing products at great prices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))

            ) : (

              <p>No products found!</p>

            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
