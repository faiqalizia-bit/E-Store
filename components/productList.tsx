import product from "../data/product"
import ProductCard from "./productCard";
export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}