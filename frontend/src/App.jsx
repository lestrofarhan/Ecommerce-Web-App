import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer"
import Search from "./components/Search";
import ScrollToTop from "./components/ScrollTop";

const Home = lazy(() => 
  import("./pages/Home"));
const About = lazy(() => 
  import("./pages/About"));
const Collection = lazy(() => 
  import("./pages/Collection"));
const Product = lazy(() => 
  import("./pages/Product"));
const Login = lazy(() => 
  import("./pages/Login"));
const Placeorder = lazy(() => 
  import("./pages/Placeorder"));
const Contact = lazy(() => 
  import("./pages/Contact"));
const Orders = lazy(() => 
  import("./pages/Orders")
);
const Cart = lazy(() => 
  import("./pages/Cart")
);


export default function App() {
  return (
    <>
      <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] overflow-x-hidden">
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <ScrollToTop />
        <Search />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:productID" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/place-order" element={<Placeorder />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}
