import React from "react";
import {
  ShoppingCart,
  Search,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
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

export default function EcommerceHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>

          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          <div className="flex items-center gap-5">
            <Heart className="cursor-pointer hover:text-red-500" />
            <ShoppingCart className="cursor-pointer hover:text-indigo-600" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Discover the Best Products Online
            </h2>
            <p className="mt-6 text-lg text-indigo-100">
              Shop top-quality electronics, fashion, accessories, and more with
              amazing deals and fast delivery.
            </p>

            <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
              alt="shopping"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
          <Truck className="mx-auto text-indigo-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
          <p className="mt-2 text-gray-600">
            Quick and reliable shipping to your doorstep.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
          <ShieldCheck className="mx-auto text-indigo-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">Secure Payments</h3>
          <p className="mt-2 text-gray-600">
            Safe and encrypted payment methods for all orders.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
          <Headphones className="mx-auto text-indigo-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">24/7 Support</h3>
          <p className="mt-2 text-gray-600">
            Friendly customer support whenever you need help.
          </p>
        </div>
      </section>

      {/* Products */}
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

      {/* Newsletter */}
      <section className="bg-indigo-600 text-white py-16 mt-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Subscribe for Exclusive Offers
          </h2>

          <p className="mt-4 text-indigo-100">
            Get updates on latest products and special discounts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-gray-800 outline-none"
            />

            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-600">
            <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}