import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from "react-bootstrap/Offcanvas";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import "./SearchBar.scss";

const SearchBar = ({ show, handleClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  const searchResultsStyle = {
    maxHeight: searchResults.length > 0 ? "none" : "auto",
  };

  const isSearching = searchResults.length > 0;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_APP_HOST}/product/get-products`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const clearResults = () => {
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <Offcanvas
      className={`search-sidebar ${isSearching ? "searching" : ""}`}
      show={show}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Body>
        <div className="search-input-container">
          <input
            className="input-searchbar"
            type="text"
            placeholder="¿Qué estás buscando?"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="close-searchbar-button" onClick={clearResults}>
            <FontAwesomeIcon className="nav-icon" icon={faTimes} />
          </button>
        </div>

        <div className="search-results" style={searchResultsStyle}>
          {" "}
          {searchResults.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="search-result-item"
            >
              {product.photo && (
                <img
                  src={product.photo}
                  alt={product.name}
                  className="product-image"
                />
              )}
              <p className="searchbar-product-title">{product.name}</p>
              <p>$ {parseFloat(product.price).toLocaleString("es-AR")}</p>
            </a>
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchBar;
