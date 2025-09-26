import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Navbar = lazy(() => import("./components/Navbar"));
const Register = lazy(() => import("./components/Register/register"));
const Login = lazy(() => import("./components/Login/login"));
const Products = lazy(() => import("./Products/products"));
const Cart = lazy(() => import("./components/Cart"));

const MainLayout = () => (
  <>
    <Helmet>
      <title>My React App</title>
      <meta
        name="description"
        content="A React application with products and cart"
      />
    </Helmet>
    <Navbar />
    <Outlet />
  </>
);

export default function App() {
  return (
    <HelmetProvider>
      <div>
        <Suspense
          fallback={
            <div className="text-center text-2xl font-bold flex justify-center items-center h-screen">
              <SyncLoader speedMultiplier={1} loading={true} color="#6366f1" />
            </div>
          }
        >
          <Router>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route element={<MainLayout />}>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}


