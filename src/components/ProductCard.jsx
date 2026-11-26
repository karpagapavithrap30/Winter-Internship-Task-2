
function ProductCard({ product, onAddToCart }) {

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain"
      />

      <h3 className="font-bold mt-3">
        {product.name}
      </h3>

      <p className="text-yellow-500 mt-2">
        ⭐ {product.rating}
      </p>

      <p className="text-xl font-bold mt-2">
        ₹{product.price}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="bg-yellow-400 hover:bg-yellow-500 w-full p-2 rounded-full mt-4"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
