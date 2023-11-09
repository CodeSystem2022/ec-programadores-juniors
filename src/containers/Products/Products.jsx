import { useState, useEffect } from "react";
import Axios from "axios";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import CardProduct from "../../components/CardProduct/CardProduct";
import Options from "../../components/Options/Options";
import { useParams } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  const { gender } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await Axios.get(
          `${import.meta.env.VITE_APP_HOST}/category/gender/${gender}`
        );
        // console.log(response.data.products);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <FullWidthLayout>
      {/* <Options /> */}
      {products != null ? (
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <CardProduct
                key={index}
                id={product?.id}
                name={product?.name}
                price={product?.price}
                img={product?.photo}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </FullWidthLayout>
  );
};

export default Products;
