import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { CartProvider } from "./components/ContextReducer";
import { MyCart } from "./pages/MyCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/my-cart" element={<MyCart />}></Route>
          </Routes>
        </div>
      </Router>
      </CartProvider>
  );
}

export default App;
