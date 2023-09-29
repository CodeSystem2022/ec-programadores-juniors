import "./App.scss";
// Rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

// Containers Page
import Home from "./containers/Home/Home";
import Error404 from './containers/errors/Error404'

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Routes>

          {/* Error 404 */}
       <Route path="*" element={<Error404 />} />

          {/* Home */}
        <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
