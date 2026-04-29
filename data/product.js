 const product = [ { id: 1, name: "Nike Air Shoes", price: 120, image: "https://picsum.photos/300?1" },
  { id: "2", name: "Apple Watch", price: 250, image: "https://picsum.photos/300?2" },
  { id: "3", name: "Gaming Headset", price: 80, image: "https://picsum.photos/300?3" },
  { id: "4", name: "Leather Bag", price: 90, image: "https://picsum.photos/300?4" },
  { id: "5", name: "Smartphone", price: 600, image: "https://picsum.photos/300?5" },
  { id: "6", name: "Laptop", price: 1200, image: "https://picsum.photos/300?6" },
  { id: "7", name: "Sunglasses", price: 40, image: "https://picsum.photos/300?7" },
  { id: "8", name: "Backpack", price: 70, image: "https://picsum.photos/300?8" },
  { id: "9", name: "Perfume", price: 55, image: "https://picsum.photos/300?9" },
  { id: "10", name: "Smart TV", price: 900, image: "https://picsum.photos/300?10" },
  { id: "11", name: "Shoes Classic", price: 110, image: "https://picsum.photos/300?11" },
  { id: "12", name: "Headphones", price: 75, image: "https://picsum.photos/300?12" },
  { id: "13", name: "Keyboard", price: 50, image: "https://picsum.photos/300?13" },
  { id: "14", name: "Mouse", price: 30, image: "https://picsum.photos/300?14" },
  { id: "15", name: "Camera", price: 500, image: "https://picsum.photos/300?15" },]

  export default product


//   "use client"
//   import Image from "next/image";
//   import useCartStore from "../store/cartStore";
//   import { Product } from "@/utills/interfaces/Product";
  
//   interface Props {
   
//     product: Product
//   }
  
//   export default function ProductCard({ product }: Props) {
//     const addToCart = useCartStore((state) => state.addToCart);
  
  
//     return (
//       <div className="bg-white shadow rounded-xl p-4">
//         {product?.image &&
//           <Image
//             width={100}
//             height={100}
//             alt="product-image"
//             src={product.image}
//             // className="w-full h-40 object-cover rounded"
//           />
//         }
//         <h2 className="mt-2 text-gray-700 font-semibold">{product.name}</h2>
//         <p className="text-gray-600">${product.price}</p>
  
//         <button
//           onClick={() => addToCart(product)}
//           className="mt-3 w-full bg-black text-white py-2 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     );
//   }