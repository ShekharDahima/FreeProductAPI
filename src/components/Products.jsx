import {
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Gaming Keyboard",
    price: "$75",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    rating: 4.6,
  },
];

export default function Products(){

    return(
        <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <button className="text-indigo-600 font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm text-gray-700">
                    {product.rating}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">
                    {product.price}
                  </span>

                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}