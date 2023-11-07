import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import SimpleProduct from "../SimpleProductComp/SimpleProduct";
import "./ProductsCarousel.scss";
import Axios from "axios";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_APP_HOST}/product/get-products`
        );
        setProducts(response.data.products);
      } catch (error) {
        // Manejar errores de la solicitud
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Carousel>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div className="simprod-box"></div>
          <Carousel.Caption>
            <SimpleProduct
              name={product.name}
              price={product.price}
              img={product.img}
            />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
