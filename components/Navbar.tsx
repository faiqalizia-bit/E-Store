"use client";
import Link from "next/link";
import useCartStore from "../store/cartStore";


 function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow">
      <Link href="/" className="font-bold text-xl bg-gray-200 p-2">
        ShopNow
      </Link>

      <div className="flex gap-6">
        <Link href="/home"><p className="text-white">Home</p></Link>
        <Link href="/cart">
          <p className="text-white">Cart ({cart.length})</p>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar