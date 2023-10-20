import "./assets/styles/App.scss";
// Rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

// Containers Page
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Login from "./containers/Auth/Login";
import Help from "./containers/Help/Help";
import Error404 from "./containers/errors/Error404";
import Register from "./containers/Auth/Register";
import About from "./containers/About/About";
import Products from "./containers/Products/Products";
import ProductView from "./containers/ProductView/ProductView";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error 404 */}
          <Route path="*" element={<Error404 />} />

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contacto */}
          <Route path="/contact" element={<Contact />} />

          {/* Help */}
          <Route path="/help" element={<Help />} />

          {/* Vista cards de productos */}
          <Route path="/products" element={<Products />} />

          {/* Vista de un producto */}
          <Route path="/product" element={<ProductView />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
