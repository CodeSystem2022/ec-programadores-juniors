import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../../redux/reducers/cartSlice';
import './Cart.scss';
import { Link } from "react-router-dom";

const SearchBar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart); //traigo los products de cart si hay

  const handleClick = id => {
    dispatch(removeProduct(id));
  }

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
          <>
            {cartProducts.map((product, key) => (
              <div className='d-flex justify-content-around align-items-center' key={key}>
                <img className='product-image' src={product.photo} />
                <h5 className='product-title'>{product.name}</h5>
                <h5 className='product-price'>$ {product.price}</h5>
                <button onClick={() => handleClick(product.id)} className='remove-button'>-</button>
              </div>
            ))}
            <div>
              <Link className='' to='/checkout'>Comprar</Link>
            </div>
          </>
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
