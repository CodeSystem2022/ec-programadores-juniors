import "./assets/styles/App.scss";
// Rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// Containers Page
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Account from "./containers/Account/Account";
import Login from "./containers/Auth/Login";
import Help from "./containers/Help/Help";
import Error404 from "./containers/errors/Error404";
import Register from "./containers/Auth/Register";
import About from "./containers/About/About";
import Products from "./containers/Products/Products";
import ProductView from "./containers/ProductView/ProductView";
import Activation from "./containers/Activation/Activation";
import { useEffect } from "react";
import { setUser } from "./redux/reducers/userSlice";
import ReduxProvider from "./ReduxProvider/ReduxProvider";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Comprobar si hay datos de usuario en localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Si existen datos de usuario, cargarlos en el estado de Redux
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Account */}
        <Route path="/account" element={<Account />} />

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
        <Route path="/product/:id" element={<ProductView />} />

        {/* Activacion */}
        <Route path="/activation/:uid/:token" element={<Activation />} />
      </Routes>
    </Router>
  );
}

export default function AppWithRedux() {
  return (
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
}
