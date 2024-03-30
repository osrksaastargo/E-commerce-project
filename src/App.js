import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Why from "./components/why/Why";
import Testimonial from "./components/testimonial/Testimonial";
import Product from "./components/products/Product";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from "./components/cart/Cart";
import Register from "./components/signup/Register";
import Login from "./components/signup/Login";
import PasswordReset from "./components/signup/PasswordReset";
import ForgotPassword from "./components/signup/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/why-us" element={<Why />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route
            path="/forgot-password/:id/:token"
            element={<ForgotPassword />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
