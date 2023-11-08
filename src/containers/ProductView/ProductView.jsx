import FullWidthLayout from "../../layouts/FullWidthLayout";
import "./ProductView.scss";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/cartSlice";
import { toast } from "sonner";

const ProductView = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState([]);


  useEffect(() => {
    Axios.get(`${import.meta.env.VITE_APP_HOST}/product/product/${id}`).then(
      (response) => {
        // console.log(response.data.product)
        setProduct(response.data.product);
      }
    );
  }, [id]);

  const handleClick = () => {
    if (selectedSize) {
      const productWithSelectedSize = { ...product, sizes: selectedSize }; // Agrega el tamaño al producto
      dispatch(addProduct(productWithSelectedSize));
      toast.success("¡Producto agregado al carrito!");
    } else {
      toast.error("Selecciona un tamaño antes de agregar al carrito.");
    }
  };


  // console.log(selectedSize);

  return (
    <FullWidthLayout>
      <div className="product-container">
        <img className="product-img" src={product?.photo} alt="product" />
        <h3 className="product-title">{product?.name}</h3>
        <p className="product-price">$ {product?.price}</p>
        <p className="size-title">Seleccionar talle(US)</p>
        <div className="size">
          {product != null ? (
            product.sizes.map((size, index) => (
              <button
                onClick={() => {
                  setSelectedSize(size);
                }}
                className="size-button"
                key={index}
              >
                {size}
              </button>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
        <button onClick={() => handleClick(product)} className="add-button">
          Agregar al carrito
        </button>
        <form
          action={`${
            import.meta.env.VITE_APP_HOST
          }/payment/create-checkout-session`}
          method="POST"
        >
          <button className="add-button" type="submit">Comprar ahora</button>
        </form>

        <h5>Descripción</h5>
        <p>{product?.description}</p>
      </div>
    </FullWidthLayout>
  );
};

export default ProductView;
