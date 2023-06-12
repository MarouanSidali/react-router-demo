import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import About from "./About";
import OrderSummary from "./OrderSummary";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import "./App.css";
import Users from "./Users";
import UsersDetails from "./UsersDetails";
import Profile from "./Profile";
const LazyAbout = React.lazy(() => import("./About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route path="featured-products" element={<FeaturedProducts />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UsersDetails />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
