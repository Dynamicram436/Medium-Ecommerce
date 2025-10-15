import React, { useEffect, useState } from "react";
import axios from "axios";
import useCartStore from "../Zustand/store.jsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const addToCart = useCartStore((state) => state.addToCart);

  // Handler to add to cart and show alert
  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
    alert("Product added");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(res.data);
    };  
    fetchProducts();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Welcome {JSON.parse(localStorage.getItem("userData")).username} to the
        Products Page
      </h1> */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {products.map(({ id, title, price, slug, images, description }) => (
          <div
            key={id}
            className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={images[0]}
                alt={title}
                className="object-cover h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col flex-1 p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 truncate">
                {title}
              </h3>
              <p className="text-base text-indigo-600 font-bold">
                Price: ${price}
              </p>
              <p className="text-sm text-gray-400 truncate">Slug: {slug}</p>
              <button
                onClick={() =>
                  handleAddToCart({
                    id,
                    title,
                    price,
                    slug,
                    images,
                    description,
                  })
                }
                className="mt-4 w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 shadow"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
      <Button
        style={{ marginTop: "16px" }}
        onClick={() => {
          navigate("/");
        }}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  );
};

export default Products;
