"use client"
import useCartStore from "../store/cartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <img
        src={product.image}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 text-gray-700 font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
