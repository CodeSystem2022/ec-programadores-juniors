import { useState, useEffect } from "react";
import Axios from "axios";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import CardProduct from "../../components/CardProduct/CardProduct";
import Options from "../../components/Options/Options";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [calzadoMujer, setCalzadoMujer] = useState(null);
   const [calzadoHombre, setCalzadoHombre] = useState(null);
   const [calzadoChild, setCalzadoChild] = useState(null);


  Axios.get(
    `${import.meta.env.VITE_APP_HOST}/category/categories`
  ).then(res => {
    console.log(res.data.categories[0].sub_categories[0].name)
    setCalzadoHombre(res.data.categories[0].sub_categories[0].name);
    setCalzadoMujer(res.data.categories[0].sub_categories[1].name);
    setCalzadoChild(res.data.categories[0].sub_categories[2].name);
  });




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_APP_HOST}/product/get-products`
        );
        setProducts(response.data.products);
        console.log(response.data.products)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <FullWidthLayout>
      <Options />
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
    </FullWidthLayout>
  );
};

export default Products;
