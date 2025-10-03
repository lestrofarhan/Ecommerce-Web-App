import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Placeorder from "./pages/Placeorder";

export default function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/Product:productID" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<Placeorder />} />
        
      </Routes>
      
    </>
  );
}
