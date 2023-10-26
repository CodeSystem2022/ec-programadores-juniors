import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ show, handleClose, cartProducts }) => {
  return (
    <Offcanvas
      className="cart-side-bar"
      show={show}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header
        closeButton
        style={{
          display: "flex",
          width: "100%",
          padding: "5% 5% 0 5%",
        }}
      >
        <Offcanvas.Title>MI COMPRA</Offcanvas.Title>
      </Offcanvas.Header>
      <hr
        style={{
          width: "100%",
        }}
      />
      <Offcanvas.Body>
        {cartProducts && cartProducts.length > 0 ? (
          <ul>
            {cartProducts.map((product, index) => (
              <li key={index}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <div className="cart-container">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Tu carrito está vacío</p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchBar;
