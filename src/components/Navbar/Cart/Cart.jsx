import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../redux/reducers/cartSlice";
import "./Cart.scss";
import { Link } from "react-router-dom";

const SearchBar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart); //traigo los products de cart si hay

  const handleClick = (id) => {
    dispatch(removeProduct(id));
  };

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
        <Offcanvas.Title className="cart-title">MI COMPRA</Offcanvas.Title>
      </Offcanvas.Header>
      <hr
        style={{
          width: "100%",
        }}
      />
      <Offcanvas.Body>
        {cartProducts && cartProducts.length > 0 ? (
          <>
            {cartProducts.map((product, key) => (
              <div className="cart-item-box" key={key}>
                <img className="product-image" src={product.photo} />
                <h5 className="cart-product-title">{product.name}</h5>
                <h5 className="cart-product-price">
                  $ {parseFloat(product.price).toLocaleString("es-AR")}
                </h5>
                <button
                  onClick={() => handleClick(product.id)}
                  className="remove-button"
                >
                  -
                </button>
              </div>
            ))}
            <div className="d-flex justify-content-end mt-4 w-100">
              <Link className="buy-button" to="/checkout">
                Comprar
              </Link>
            </div>
          </>
        ) : (
          <div className="cart-container">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <p>Tu carrito está vacío</p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchBar;
