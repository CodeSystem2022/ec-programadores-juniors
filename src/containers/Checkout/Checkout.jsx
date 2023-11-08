import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/reducers/cartSlice";
import FullWidthLayout from "../../layouts/FullWidthLayout";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    // Calcula el precio total cuando cambia el carrito
    const totalPrice = cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );

    setTotalPrice(totalPrice);
    console.log(totalPrice);
  }, [cartProducts]);

  const handleClick = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <FullWidthLayout>
      {cartProducts && cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product, key) => (
            <div
              className="d-flex justify-content-around align-items-center"
              key={key}
            >
              <img
                className="product-image"
                src={product.photo}
                alt={product.name}
              />
              <h5 className="product-title">{product.name}</h5>
              <h5 className="product-price">$ {product.price}</h5>
              <button
                onClick={() => handleClick(product.id)}
                className="remove-button"
              >
                -
              </button>
            </div>
          ))}
          <div>
            <p>Total: $ {Number(totalPrice)}</p>
          </div>
        </>
      ) : (
        <div className="cart-container">
          <p>Loading</p>
        </div>
      )}
    </FullWidthLayout>
  );
};

export default Checkout;
