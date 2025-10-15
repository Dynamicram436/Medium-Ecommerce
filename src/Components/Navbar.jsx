import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import useCartStore from "../Zustand/store.jsx";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          <Link to="/">Dynamic Cart</Link>
        </h1>
        <div className="relative flex items-center">
          <span className="bg-white text-indigo-600 rounded-full p-3 shadow-md flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200 cursor-pointer">
            <Link to="/cart">
              <ShoppingCart fontSize="medium" />
            </Link>
          </span>
          {/* Example badge for cart count */}
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg border-2 border-white">
            {cart.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
