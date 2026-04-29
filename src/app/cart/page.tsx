"use client";

import { item } from "@/utills/interfaces/Product";
import useCartStore from "../../../store/cartStore";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCartStore();

  const total = cart.reduce(
    (sum: number, item: item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="bg-cyan-700  h-ful">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item:item) => (
            <div
              key={item.id}
              className="flex justify-between bg-white p-4 shadow rounded"
            >
              <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>

              <div className="flex gap-2 items-center">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 className="text-xl font-bold">Total: ${total}</h2>

          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}