import React from "react";
import useCartStore from "../Zustand/store.jsx";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={item.images[1]}
                alt={item.title}
                className="object-cover h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col flex-1 p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-base text-indigo-600 font-bold">
                Price: ${item.price}
              </p>
              <p className="text-sm text-gray-400 truncate">
                Slug: {item.slug}
              </p>
              <p className="text-sm text-gray-400 ">
                Description: {item.description}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow"
            >
              Remove
            </button>
          </div>
        ))}
      </section>
      <div className="flex gap-5 items-center justify-between mt-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Total: ${cart.reduce((acc, item) => acc + item.price, 0)}
        </h2>
        <button
          onClick={() => clearCart()}
          className="mt-4 w-fit px-5 cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow"
        >
          Clear
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 w-fit px-5  cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow"
      >
        Continue Shopping
      </button>
      {/* <button className="mt-4 w-fit px-5 ml-5  cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow">
        Checkout
      </button> */}
    </div>
  );
};

export default Cart;
