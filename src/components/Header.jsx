import {
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>

          {/* <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div> */}

          <div className="flex items-center gap-5">
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-600">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
            <ShoppingCart className="cursor-pointer hover:text-indigo-600" />
            <Link to="/signIn" className="mt-4 md:mt-0 bg-gray-300 text-indigo-600 px-3 py-1 rounded-full font-semibold hover:bg-gray-100 transition">
              SignIn
            </Link>
            
            <Link to="signUp" className="mt-4 md:mt-0 bg-gray-300 text-indigo-600 px-3 py-1 rounded-full font-semibold hover:bg-gray-100 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    )
}